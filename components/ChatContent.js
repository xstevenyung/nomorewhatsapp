import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { Virtuoso } from 'react-virtuoso';

const ChatContext = createContext({ attachments: [] });

export function Message({ authorName, content }) {
  const { attachments, me } = useContext(ChatContext);

  const [images, addImage] = useReducer((state, image) => {
    return [...state, image];
  }, []);

  const [videos, addVideo] = useReducer((state, video) => {
    return [...state, video];
  }, []);

  const text = useMemo(() => {
    const regex = /\<attached: (.+)\>/;
    const [, fileName] = regex.exec(content) || [];
    const file = attachments.find((file) => file.name === fileName);

    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', (event) => {
        const { result } = event.target;

        if (result.match(/^data:video/)) {
          return addVideo(result);
        }

        if (result.match(/^data:image/)) {
          return addImage(result);
        }
      });
      reader.readAsDataURL(file);
    }

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

          {!!text && <div>{text}</div>}

          {images.map((image) => (
            <img src={image} />
          ))}

          {videos.map((video) => (
            <video controls>
              <source src={video} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          ))}
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
      <select onChange={(e) => setMe(e.target.value)}>
        {participants.map((participant) => (
          <option key={participant} value={participant}>
            {participant}
          </option>
        ))}
      </select>

      <button type="submit">Ok</button>
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

  if (!me)
    return (
      <div className="h-full w-full flex flex-col justify-center items-center">
        <p>Who are you in the conversation?</p>

        <SelectMeForm participants={participants} onSelect={setMe} />
      </div>
    );

  return (
    <ChatContext.Provider value={{ attachments, me }}>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={messages.length}
        initialTopMostItemIndex={messages.length - 1}
        itemContent={(index) => <Message {...messages[index]} />}
      />
    </ChatContext.Provider>
  );
}

// export default function ConversationContent({ messages }) {
//   return (
//     <div className="h-full overflow-hidden py-4">
//       <div className="h-full overflow-y-auto">
//         <div className="grid grid-cols-12 gap-y-2">
//           {!messages && <p>Loading...</p>}

//           {!!messages && (
//             <>
//               {messages.map((data, index) => (
//                 <Message key={index} {...data} />
//               ))}
//             </>
//           )}
//           {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
//             <div className="flex flex-row items-center">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
//                 <div>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
//                   ipsa commodi illum saepe numquam maxime asperiores voluptate
//                   sit, minima perspiciatis.
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-6 col-end-13 p-3 rounded-lg">
//             <div className="flex items-center justify-start flex-row-reverse">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
//                 <div>I'm ok what about you?</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-6 col-end-13 p-3 rounded-lg">
//             <div className="flex items-center justify-start flex-row-reverse">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
//                 <div>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing. ?
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-1 col-end-8 p-3 rounded-lg">
//             <div className="flex flex-row items-center">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
//                 <div>Lorem ipsum dolor sit amet !</div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-6 col-end-13 p-3 rounded-lg">
//             <div className="flex items-center justify-start flex-row-reverse">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
//                 <div>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing. ?
//                 </div>
//                 <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
//                   Seen
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-1 col-end-8 p-3 rounded-lg">
//             <div className="flex flex-row items-center">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
//                 <div>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Perspiciatis, in.
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-start-1 col-end-8 p-3 rounded-lg">
//             <div className="flex flex-row items-center">
//               <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                 A
//               </div>
//               <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
//                 <div className="flex flex-row items-center">
//                   <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
//                     <svg
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                       ></path>
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                       ></path>
//                     </svg>
//                   </button>
//                   <div className="flex flex-row items-center space-x-px ml-4">
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
//                     <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
