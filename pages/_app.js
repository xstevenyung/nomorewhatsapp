import '../styles/globals.css';
import { NotifierContextProvider } from 'react-headless-notifier';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>No More WhatsApp</title>
        <meta name="title" content="No More WhatsApp" />
        <meta
          name="description"
          content="How to export your data, delete your account from WhatsApp and find better alternative."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="No More WhatsApp" />
        <meta
          property="og:description"
          content="How to export your data, delete your account from WhatsApp and find better alternative."
        />
        <meta property="og:image" content="/no-more-whatsapp.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="No More WhatsApp" />
        <meta
          property="twitter:description"
          content="How to export your data, delete your account from WhatsApp and find better alternative."
        />
        <meta property="twitter:image" content="/no-more-whatsapp.png" />
      </Head>

      <NotifierContextProvider>
        <Component {...pageProps} />
      </NotifierContextProvider>
    </>
  );
}

export default MyApp;
