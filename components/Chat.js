import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';

export default function Chat(props) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 mx-4 mt-6 z-10 bg-white">
        <ChatHeader name={props.name} />
      </div>

      <ChatContent {...props} />
    </>
  );
}
