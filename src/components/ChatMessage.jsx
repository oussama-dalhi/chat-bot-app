import './ChatMessage.css';
function ChatMessage({message, sender})
{
    return (
    <div className={sender === 'user' ?
      'chat-message-user':
      'chat-message-bot'}>
      {sender === "bot" && (
        <img src="./src/assets/botphoto.png" alt="friendly chatbot avatar in a chat interface" className='chat-message-profile'/>
        )}
        <div className='chat-message-text'>
          {message}
        </div>
      {sender === "user" && (
        <img src="./src/assets/user.jpg" alt="user avatar in a chat interface" className='chat-message-profile'/>
        )}
    </div>
  ) 
}
export default ChatMessage;