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
              Explorer
            </button>
          </Link>

          <Link href="/how-to-export-your-data-from-whatsapp">
            <a className="hover:text-blue-500">
              How to export your data from WhatsApp
            </a>
          </Link>
        </div>

        <p>
          Facebook is once again trying to step in and violate our privacy
          online in an attempt to monetize WhatsApp.
        </p>

        <p>
          <b>On the 8th of febuary 2021</b>, Facebook is going to change it's
          terms and privacy policy to collect your data and track your activity
          on WhatsApp and sell those data to who ever will be willing to pay.
        </p>

        <div>
          <h3>What Facebook will be able to access</h3>

          <ul>
            <li>Who you talk with</li>
            <li>How long have you been talking</li>
            <li>Your contacts (if shared with WhatsApp)</li>
            <li>Your phone number</li>
            <li>Your profile</li>
            <li>Your activity in general on WhatsApp</li>
            <li>
              Link your WhatsApp activity across all Facebook products for more
              accurate marketing
            </li>
          </ul>
        </div>

        <div>
          <h3>What it won't be able to access</h3>

          <ul>
            <li>Your messages</li>
          </ul>
        </div>

        <div>
          <h2>Don't let your data be hostage!</h2>

          <p>
            On the 8th of Febuary 2021, Facebook reserve the right to close your
            WhatsApp account if you fail to accept their new terms and privacy
            policy.
          </p>

          <p>
            That means you have until the 8th of Febuary 2021, to export your
            data out of Facebook hands.
          </p>

          <p>
            We also created a web application to help you read your data after
            export. It's a simple tool that doesn't store any information and
            will be forever free to use so you can always access your data
            without sacrificing your privacy.
          </p>

          <Link href="/how-to-export-your-data-from-whatsapp">
            <a className="hover:text-blue-500">
              Learn how to export your data now.
            </a>
          </Link>
        </div>

        <div>
          <h2>Signal, the perfect alternative to WhatsApp for privacy</h2>

          <p>
            Open source and created with privacy in mind. It's the most secure
            messaging app you can find and endorced by giant in the privacy
            space like Edward Snowden.
          </p>

          <p>
            It's important to note that we have no affiliation with Signal
            whatsoever, we just really love their constant effort to improve
            privacy online.
          </p>

          <a
            href="https://signal.org/download/"
            target="_blank"
            className="hover:text-blue-500"
          >
            Download signal
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
