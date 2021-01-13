import '../styles/globals.css';
import { NotifierContextProvider } from 'react-headless-notifier';

function MyApp({ Component, pageProps }) {
  return (
    <NotifierContextProvider>
      <Component {...pageProps} />
    </NotifierContextProvider>
  );
}

export default MyApp;
