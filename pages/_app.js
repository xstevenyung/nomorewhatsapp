import '../styles/globals.css';
import { GDriveContextProvider } from '../components/GDriveContext';

function MyApp({ Component, pageProps }) {
  return (
    <GDriveContextProvider>
      <Component {...pageProps} />
    </GDriveContextProvider>
  );
}

export default MyApp;
