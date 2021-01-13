import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Link from 'next/link';

export default function ExportTuto() {
  return (
    <Layout>
      <div className="px-4 mx-auto py-20">
        <div className="mb-8">
          <Breadcrumb
            items={[{ name: 'How to export your data from WhatsApp' }]}
          />
        </div>

        <div className="prose md:prose-xl mx-auto">
          <h1>How to export your data from WhatsApp</h1>

          <p>
            With WhatsApp trying to merge your data with Facebook, now is the
            right time to pull the plug and{' '}
            <a
              href="https://faq.whatsapp.com/android/account-and-profile/how-to-delete-your-account/?lang=en"
              className="hover:text-blue-500"
            >
              delete your WhatsApp account
            </a>
            .
          </p>

          <p>
            But if you are like billion of users, you might have tons of
            memories and conversations you wish keep before deleting everything.
          </p>

          <div>
            <h2>How to export your data from WhatsApp</h2>

            <p>
              WhatsApp doesn't allow to easily export all your chats at once but
              it's possible to export them one by one fairly easily.
            </p>

            <p>
              First, open the chat you want to save and click on the chat name
              at the very top:
            </p>

            <div className="bg-gray-200 rounded-lg">
              <img
                src="/chat.png"
                className="mx-auto"
                style={{ maxWidth: '320px' }}
              />
            </div>

            <p>
              You will be in your chat settings, at the very bottom of this
              menu, you will see a "Export Chat" button:
            </p>

            <div className="bg-gray-200 rounded-lg">
              <img
                src="/export-chat.png"
                className="mx-auto"
                style={{ maxWidth: '320px' }}
              />
            </div>

            <p>
              If you wish to save your photos and videos as well, select{' '}
              <b>"Attach Media"</b>
            </p>

            <p>
              After processing your data, you will have to choose where to save
              your data.
            </p>

            <div className="bg-yellow-50 border-l-8 border-yellow-400 px-8 py-4">
              <p>
                This is about personal preferences but we strongly recommend to{' '}
                <b>not</b> use email or platform you don't trust.
              </p>

              <p>
                WhatsApp data when exported are no longer protected by
                encryption, so anybody with access to this file will be able to
                see all your chats.
              </p>
            </div>

            <p>TODO</p>
          </div>

          <div>
            <h2>Read your data</h2>

            <div>
              <h3>Directly from the files</h3>

              <p>
                You can read your data directly by opening the file{' '}
                <code>_chat.txt</code> and should look like something like this:
              </p>

              <pre>
                <code>
                  [05/04/2019 08:06:23] Me: Hello!
                  <br />
                  [05/04/2019 08:20:40] Friend: Hello, how are you?
                  <br />
                  [05/04/2019 08:21:43] &lt;attached: photo.png&gt;
                </code>
              </pre>
            </div>

            <div>
              <h3>Using our explorer</h3>

              <p>
                If you need something more readable, we created a special app to
                ease going throught your WhatsApp history.
              </p>

              <Link href="/explorer">
                <a>No More WhatsApp Explorer</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
