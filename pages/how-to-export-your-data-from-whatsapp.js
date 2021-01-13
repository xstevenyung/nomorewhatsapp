import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Link from 'next/link';

export default function ExportTuto() {
  return (
    <Layout>
      <div className="px-4 mx-auto py-20">
        <div className="mb-8">
          <Breadcrumb
            items={[{ name: 'How to export your data from Whatsapp' }]}
          />
        </div>

        <div className="prose md:prose-xl mx-auto">
          <h1>How to export your data from Whatsapp</h1>

          <p>
            With WhatsApp trying to merge your data with Facebook, now is the
            right time to pull the plug and{' '}
            <Link href="/how-to-delete-your-whatsapp-account">
              <a className="hover:text-green-400">
                delete your WhatsApp account
              </a>
            </Link>
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
                This is about personal preferences but we strongly recommand{' '}
                <b>not</b> using email or platform you don't trust.
              </p>

              <p>
                WhatsApp data when exported are no longer protected by
                encryption, so anybody with access to this file will be able to
                see all your chats.
              </p>
            </div>

            {/* <p>On iPhone, we recommand to use </p> */}
            <h3>Recommanded method on iPhone</h3>

            {/* <p>On Android, we recommand to use </p> */}
            <h3>Recommanded method on Android</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
