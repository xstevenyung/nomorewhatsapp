import ChatHeader from './ChatHeader';
import ChatContent from './ChatContent';

export default function Chat(props) {
  return (
    <>
      <ChatHeader name={props.name} />

      <ChatContent {...props} />
    </>
  );
}
