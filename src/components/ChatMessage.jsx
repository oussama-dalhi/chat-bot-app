import './ChatMessage.css';
import userImg from '../assets/user.png';
import botImg from '../assets/bot.png';
function ChatMessage({message, sender})
{
    return (
    <div className={sender === 'user' ?
      'chat-message-user':
      'chat-message-bot'}>
      {sender === "bot" && (
        <img src={botImg} alt="friendly chatbot avatar in a chat interface" className='chat-message-profile'/>
        )}
        <div className='chat-message-text'>
          {message}
        </div>
      {sender === "user" && (
        <img src={userImg} alt="user avatar in a chat interface" className='chat-message-profile'/>
        )}
    </div>
  ) 
}
export default ChatMessage;