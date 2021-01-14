export default function PrivacyDisclaimer({ dismiss }) {
  return (
    <div
      className="bg-blue-50 border-l-8 border-blue-400 px-8 py-2 mb-8 flex items-center gap-6 shadow-lg mx-6"
      style={{ maxWidth: '768px' }}
    >
      <div>
        <b className="text-blue-800">Disclaimer</b>

        <p className="text-blue-700">
          This tool is{' '}
          <a
            href="https://github.com/recodable/nomorewhatsapp"
            target="_blank"
            className="font-bold"
          >
            open-source
          </a>{' '}
          and free and will stay that way. We don't and will never store any
          data from you with our explorer app or on No More WhatsApp in general.
        </p>
      </div>

      <button
        type="button"
        className="py-2 px-4 bg-blue-100 font-bold text-blue-700 hover:bg-blue-200 hover:text-blue-800 rounded-lg w-32"
        onClick={dismiss}
      >
        Got it!
      </button>
    </div>
  );
}
