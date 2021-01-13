import { createContext, useContext, useEffect, useReducer } from 'react';
import groupBy from 'lodash.groupby';
import { useNotifier } from 'react-headless-notifier';
import { DangerNotification } from './Notification';

const ExplorerContext = createContext({});

export const UPLOAD = 'upload';
export const LOAD_CHAT = 'loadChat';

const reducer = (state, { type, payload }) => {
  if (type === UPLOAD) {
    const files = payload;
    const newFiles = groupBy(files, (file) => {
      const dirPath = file.path.replace(file.name, '');
      const dirName = dirPath
        .split('/')
        .filter((v) => !!v)
        .pop();
      // Handle if people upload just the `_chat.txt` file instead of a folder
      return dirName ? dirName.replace('WhatsApp Chat - ', '') : 'Untitled';
    });

    const newChats = Object.entries(newFiles)
      .map(([key, files]) => {
        const chatFile = files.find(({ name }) => name === '_chat.txt');

        if (files.length === 1 && files[0].type === 'application/zip') {
          throw new Error(
            "Sorry, we don't support .zip files yet, please decompress your data",
          );
        }

        if (!chatFile) {
          throw new Error(
            `Couldn't find a file "_chat.txt", are you sure this is the right folder?`,
          );
        }

        const attachmentFiles = files.filter(
          ({ name }) => name !== '_chat.txt',
        );

        const chat = {
          name: key,
          messages: null,
          file: chatFile,
          attachments: attachmentFiles,
          participants: [],
        };

        return chat;
      })
      .filter((v) => v);

    return [...state, ...newChats];
  }

  if (type === LOAD_CHAT) {
    const { chat: loadedChat, data } = payload;

    // We store data of previous message to be able to handle multiline messages
    let prevMessage;
    loadedChat.messages = data
      .split('\n')
      .map((line, index) => {
        if (index === 0 || !line) return null;

        const [, createdAt, authorName, content] = line.match(
          /(\[.+\]) ([^\:]+)\:(.+)/,
        ) || [null, prevMessage.createdAt, prevMessage.authorName, line];

        if (!loadedChat.participants.includes(authorName)) {
          loadedChat.participants.push(authorName);
        }

        prevMessage = { createdAt, authorName, content };

        return { createdAt, authorName, content };
      })
      .filter((v) => v);

    const index = state.findIndex((chat) => chat.name === loadedChat.name);

    state[index] = loadedChat;

    return state;
  }
};

function ExplorerContextProvider({ children }) {
  const { notify } = useNotifier();
  const [chats, dispatchChat] = useReducer((state, ...args) => {
    try {
      return reducer(state, ...args);
    } catch (e) {
      notify(
        <DangerNotification title="Something went wrong" message={e.message} />,
      );
      return state;
    }
  }, []);

  useEffect(() => {
    chats.forEach((chat) => {
      if (chat.messages) return null;

      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        const { result } = event.target;
        dispatchChat({ type: LOAD_CHAT, payload: { chat, data: result } });
      });
      reader.readAsText(chat.file);
    });
  }, [chats]);

  return (
    <ExplorerContext.Provider value={{ chats, dispatchChat }}>
      {children}
    </ExplorerContext.Provider>
  );
}

function useExplorer() {
  return useContext(ExplorerContext);
}

function withExplorerContext(Component) {
  return (props) => {
    return (
      <ExplorerContextProvider>
        <Component {...props} />
      </ExplorerContextProvider>
    );
  };
}

export default ExplorerContext;
export { ExplorerContextProvider, useExplorer, withExplorerContext };
