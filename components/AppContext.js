import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import groupBy from 'lodash.groupby';

const AppContext = createContext({});

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
      return dirName.replace('WhatsApp Chat - ', '');
    });

    const newChats = Object.entries(newFiles).map(([key, files]) => {
      const chatFile = files.find(({ name }) => name === '_chat.txt');

      const attachmentFiles = files.filter(({ name }) => name !== '_chat.txt');

      const chat = {
        name: key,
        messages: null,
        file: chatFile,
        attachments: attachmentFiles,
      };

      return chat;
    });

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
          /(\[.+\]) ([\w ]+)\: (.+)/,
        ) || [null, prevMessage.createdAt, prevMessage.authorName, line];

        prevMessage = { createdAt, authorName, content };

        return { createdAt, authorName, content };
      })
      .filter((v) => v);

    const index = state.findIndex((chat) => chat.name === loadedChat.name);

    state[index] = loadedChat;

    return state;
  }
};

function AppContextProvider({ children }) {
  const [chats, dispatchChat] = useReducer(reducer, []);

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
    <AppContext.Provider value={{ chats, dispatchChat }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  return useContext(AppContext);
}

function withApp(Component) {
  return (props) => {
    return (
      <AppContextProvider>
        <Component {...props} />
      </AppContextProvider>
    );
  };
}

export default AppContext;
export { AppContextProvider, useApp, withApp };
