function ChatItem({ name, active }) {
  return (
    <div
      className={`flex flex-row items-center p-4 border-l-2 ${
        active
          ? 'border-red-500 bg-gradient-to-r from-red-100 to-transparent'
          : 'border-transparent'
      }`}
    >
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0 uppercase">
        {name.charAt(0)}
      </div>

      <div className="flex flex-col flex-grow ml-3">
        <div className="flex items-center">
          <div className="text-sm font-medium">{name}</div>
        </div>
      </div>
    </div>
  );
}

export default function ChatList({
  chats,
  selectedChatIndex,
  onChange: handleChange,
}) {
  return (
    <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <div className="text-xl font-semibold">Messages</div>
        </div>
      </div>
      <div className="h-full relative pt-2">
        <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
          {!chats.length && <p className="text-center">No chats...</p>}

          {chats.map(({ name }, index) => (
            <button
              key={name}
              className="focus:outline-none"
              type="button"
              onClick={() => handleChange(index)}
            >
              <ChatItem
                key={name}
                name={name}
                active={index === selectedChatIndex}
              />
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 right-0 mr-2">
          <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
