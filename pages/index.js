import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="prose md:prose-xl px-4 mx-auto py-20">
        <h1 className="text-center">🙅 No More WhatsApp</h1>

        <div className="flex flex-col md:flex-row gap-8 mx-auto justify-center items-baseline my-16">
          <Link href="/explorer">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Go to Explorer App
            </button>
          </Link>

          <Link href="/how-to-export-your-data-from-whatsapp">
            <a className="hover:text-blue-500">
              Learn how to export your data from WhatsApp
            </a>
          </Link>
        </div>

        <p>
          On the <b>8th of Febuary 2021</b>, Facebook reserve the right to close
          your WhatsApp account if you fail to accept their{' '}
          <a
            href="https://www.whatsapp.com/legal/updates/privacy-policy/"
            target="_blank"
          >
            new privacy policy update
          </a>
          .
        </p>

        <div>
          <h2>Don't forget to export your data!</h2>

          <p>
            If you plan on leaving WhatsApp because of the new terms and privacy
            policy, don't forget that it's possible to export your data out of
            WhatsApp.
          </p>

          <Link href="/how-to-export-your-data-from-whatsapp">
            <a className="hover:text-blue-500">
              Learn how to export your data now.
            </a>
          </Link>

          <div>
            <h3>Read your data</h3>

            <p>
              After export, you can pretty easily read your data by opening{' '}
              <code>_chat.txt</code> file.
            </p>

            <p>
              If you need something more visual, we created a special app to
              easily go through your exported WhatsApp data.
            </p>

            <div className="bg-blue-50 border-l-8 border-blue-400 px-8 py-2 mb-8">
              <b>Disclaimer</b>

              <p>
                This tool is{' '}
                <a href="https://github.com/" target="_blank">
                  open-source
                </a>{' '}
                and free and will stay that way. We don't and will never store
                any data from you with our explorer app or on No More WhatsApp
                in general.
              </p>
            </div>

            <Link href="/explorer">
              <a>No More WhatsApp Explorer</a>
            </Link>
          </div>
        </div>

        <div>
          <h2>
            Signal, the perfect alternative to WhatsApp that respect your
            privacy
          </h2>

          <p>
            Open source and created with privacy in mind. It's the one of the
            most secure messaging app you can find as it stores no personal data
            and is endorced by giant in the privacy space like Edward Snowden.
          </p>

          <p>
            It's important to note that we have no affiliation with Signal
            whatsoever, we just really love their constant effort to improve
            privacy online.
          </p>

          <a href="https://signal.org" target="_blank">
            Download Signal
          </a>
        </div>
      </div>

      <div className="text-center text-gray-600 pb-10">
        <p>
          No More WhatsApp is non-commercial,{' '}
          <a href="https://github.com/recodable/nomorewhatsapp" target="_blank">
            open-source
          </a>{' '}
          project and aim to inform.
        </p>

        <p>
          Inspired by{' '}
          <a href="https://nomoregoogle.com/" target="_blank">
            No More Google
          </a>{' '}
          by{' '}
          <a href="https://twitter.com/levelsio" target="_blank">
            Pieter Levels
          </a>
        </p>
      </div>
    </Layout>
  );
}
