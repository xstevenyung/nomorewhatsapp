import { Virtuoso } from 'react-virtuoso';

export function Message({ content }) {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          A
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default function ChatContent({ messages }) {
  if (!messages) return <p>Loading...</p>;

  return (
    <Virtuoso
      style={{ height: '100%' }}
      totalCount={messages.length}
      initialTopMostItemIndex={messages.length - 1}
      itemContent={(index) => <Message {...messages[index]} />}
    />
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
