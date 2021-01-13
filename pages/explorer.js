import Navbar from '../components/Navbar';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';
import {
  withExplorerContext,
  useExplorer,
  UPLOAD,
} from '../components/ExplorerContext';
import { useDropzone } from 'react-dropzone';
import { useEffect, useState, useMemo } from 'react';

function Explorer() {
  const { chats, dispatchChat } = useExplorer();
  const { getRootProps, isDragActive } = useDropzone({
    onDrop: (files) => dispatchChat({ type: UPLOAD, payload: files }),
  });
  const [selectedChatIndex, setSelectedChatIndex] = useState(0);
  const selectedChat = useMemo(() => chats[selectedChatIndex], [
    chats,
    selectedChatIndex,
  ]);

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

      <div className="flex flex-col h-full w-full bg-white px-4 pt-24 relative">
        {!!selectedChat && <Chat {...selectedChat} />}
      </div>
    </div>
  );
}

export default withExplorerContext(Explorer);
