import Navbar from '../components/Navbar';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';
import { withApp, useApp, UPLOAD } from '../components/AppContext';
import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';

function Application() {
  const { chats, dispatchChat } = useApp();
  const { getRootProps, isDragActive } = useDropzone({
    onDrop: (files) => dispatchChat({ type: UPLOAD, payload: files }),
  });
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const selectedChat = chats[selectedChatIndex];

  // Load first uploaded chat by default
  useEffect(() => {
    if (!selectedChatIndex && chats.length > 0) {
      setSelectedChatIndex(0);
    }
  }, [chats, selectedChatIndex]);

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

        <ChatList chats={chats} />
      </div>

      <div className="flex flex-col h-full w-full bg-white px-4 pt-6 relative">
        {!!selectedChat && <Chat {...selectedChat} />}
      </div>
    </div>
  );
}

export default withApp(Application);
