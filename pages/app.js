import Navbar from '../components/Navbar';
import ConversationList from '../components/ConversationList';
import ConversationHeader from '../components/ConversationHeader';
import ConversationContent from '../components/ConversationContent';
import { AppContextProvider } from '../components/AppContext';
import { useEffect } from 'react';
import { useGDrive } from '../components/GDriveContext';

export default function Application() {
  const { togglePicker } = useGDrive();

  useEffect(() => {
    togglePicker();
  }, []);

  return (
    <AppContextProvider>
      <div className="flex flex-row h-screen antialiased text-gray-800">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
          <Navbar />

          <ConversationList />
        </div>

        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
          <ConversationHeader />

          <ConversationContent />
        </div>
      </div>
    </AppContextProvider>
  );
}
