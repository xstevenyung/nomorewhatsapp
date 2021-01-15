import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import Linkify from 'react-linkify';
import { format } from 'date-fns';

const ChatContext = createContext({ attachments: [] });

export function Message({ authorName, content, createdAt }) {
  const { attachments, me } = useContext(ChatContext);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const [file, setFile] = useState(null);
  const [hasAttachment, setHasAttachment] = useState(false);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.addEventListener('load', (event) => {
        const { result } = event.target;

        if (result.match(/^data:video/)) {
          return setVideo(result);
        }

        if (result.match(/^data:image/)) {
          return setImage(result);
        }
      });
      reader.readAsDataURL(file);

      return () => reader.abort();
    }
  }, [file]);

  const text = useMemo(() => {
    const regex = /\<attached: (.+)\>/;
    const [, fileName] = regex.exec(content) || [];
    setHasAttachment(!!fileName);
    const file = attachments.find((file) => file.name === fileName);

    setFile(file);

    return content.replace(/\<attached: (.+)\>/, '');
  }, []);

  const fromMe = me === authorName;

  return (
    <div
      className={`${
        fromMe ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'
      } p-3 rounded-lg`}
    >
      <div
        className={`flex items-center ${
          fromMe ? 'justify-start flex-row-reverse' : 'flex-row '
        }`}
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 uppercase">
          {authorName.charAt(0)}
        </div>

        <div
          className={`relative mx-3 text-sm py-2 px-4 shadow rounded-xl ${
            fromMe ? 'bg-indigo-100' : 'bg-white'
          }`}
        >
          <div className="font-bold">{authorName}</div>

          {hasAttachment && !file && <div>Media not found</div>}

          {!!text && <Linkify>{text}</Linkify>}

          {!!image && (
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="bg-cover w-80 h-80"
            />
          )}

          {!!video && (
            <video controls className="bg-cover w-80 h-80">
              <source src={video} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          )}

          <div className="text-xs fon-light text-gray-500 text-right">
            <time dateTime={createdAt}>
              {format(new Date(createdAt), 'PP p')}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectMeForm({ participants, onSelect: handleSelect }) {
  const [me, setMe] = useState(participants[0]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSelect(me);
      }}
    >
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Who are you in the chat?
      </label>

      <div className="flex gap-6">
        <select
          id="location"
          name="location"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={(e) => setMe(e.target.value)}
        >
          {participants.map((participant) => (
            <option key={participant} value={participant}>
              {participant}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Ok
        </button>
      </div>
    </form>
  );
}

export default function ChatContent({
  name,
  attachments,
  messages,
  participants,
}) {
  const [me, setMe] = useState(null);

  // We reset me on different conversation if the name is unfound
  useEffect(() => {
    if (!participants.includes(me)) {
      setMe(null);
    }
  }, [name]);

  if (!messages) return <p>Loading...</p>;

  if (!me) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <SelectMeForm participants={participants} onSelect={setMe} />
      </div>
    );
  }

  return (
    <ChatContext.Provider value={{ attachments, me }}>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={messages.length}
        itemContent={(index) => <Message {...messages[index]} />}
      />
    </ChatContext.Provider>
  );
}
