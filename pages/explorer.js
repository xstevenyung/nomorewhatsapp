import Navbar from '../components/Navbar';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';
import {
  withExplorerContext,
  useExplorer,
  UPLOAD,
} from '../components/ExplorerContext';
import { useDropzone } from 'react-dropzone';
import { useState, useMemo, useEffect } from 'react';
import { withModalContext } from '../components/ModalContext';
import { useNotifier, positions } from 'react-headless-notifier';
import PrivacyDisclaimerNotification from '../components/PrivacyDisclaimerNotification';
import Link from 'next/link';
import UploadButton from '../components/UploadButton';

function Explorer() {
  const { chats, dispatchChat } = useExplorer();
  const { getRootProps, isDragActive, getInputProps } = useDropzone({
    onDrop: (files) => dispatchChat({ type: UPLOAD, payload: files }),
  });
  const { notify, dismissAll } = useNotifier();
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const selectedChat = useMemo(() => chats[selectedChatIndex], [
    chats,
    selectedChatIndex,
  ]);

  useEffect(() => {
    notify(<PrivacyDisclaimerNotification />, {
      position: positions.BOTTOM,
      duration: 60000,
    });
    return dismissAll;
  }, []);

  return (
    <div
      {...getRootProps()}
      className="flex flex-row h-screen antialiased text-gray-800 relative"
    >
      {isDragActive && (
        <div className="absolute inset-0  bg-white opacity-80 z-10 p-4">
          <div className="border-4 border-dashed w-full h-full flex justify-center items-center rounded-2xl">
            <p className="text-2xl">Drop your directory here</p>
          </div>
        </div>
      )}

      <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
        <Navbar />

        <ChatList
          chats={chats}
          selectedChatIndex={selectedChatIndex}
          onChange={setSelectedChatIndex}
        />
      </div>

      {!chats.length && (
        <div className="flex flex-col h-full w-full bg-white px-4 pt-24 relative items-center justify-center">
          <div className="max-w-lg">
            <p className="text-2xl font-semibold mb-2">
              There is nothing here <i>yet</i>
            </p>

            <div>
              <div className="mb-4 flex gap-1 flex-col lg:flex-row">
                <span>
                  Drag and drop your WhatsApp chat directory or{' '}
                  <code>_chat.txt</code> file to visualize it.
                </span>
              </div>
            </div>

            <p>
              If you don't know how to export your WhatsApp data, you can check
              out{' '}
              <Link href="/how-to-export-your-data-from-whatsapp">
                <a className="font-semibold">
                  "How to export your data from WhatsApp"
                </a>
              </Link>
            </p>
          </div>
        </div>
      )}

      {!!chats.length && (
        <div className="flex flex-col h-full w-full bg-white px-4 pt-24 relative">
          {!!selectedChat && <Chat {...selectedChat} />}
        </div>
      )}
    </div>
  );
}

export default withModalContext(withExplorerContext(Explorer));
