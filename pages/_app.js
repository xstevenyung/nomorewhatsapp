import '../styles/globals.css';
import { NotifierContextProvider } from 'react-headless-notifier';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>No More Whatsapp</title>
      </Head>

      <NotifierContextProvider>
        <Component {...pageProps} />
      </NotifierContextProvider>
    </>
  );
}

export default MyApp;
