import {useState} from 'react';
import './ChatInput.css';
import '../backend/chatbot';
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  function sendMessage (){
    const newChatMessages = [
          ...chatMessages,
          {
            id: crypto.randomUUID(),
            message: inputText,
            sender: 'user'
          }
        ];
    setChatMessages(newChatMessages);
    const response = window.Chatbot.getResponse(inputText);
    // use updated copy to rerender
      setChatMessages([
      ...newChatMessages,
      {
        id: crypto.randomUUID(),
        message: response,
        sender: 'bot'
      }
      ]);
    // clears input field
    setInputText('');
  }
  return (
    <div className="input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        className="chat-input"
      />
      <button 
      onClick={sendMessage}
      className="send-btn"
      >Send
      </button>
    </div>
  )
}
export default ChatInput;