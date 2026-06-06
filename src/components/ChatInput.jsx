import {useState} from 'react';
import './ChatInput.css';
import Chatbot from '../backend/chatbot';
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  function sendMessage (){
     if (!inputText.trim()) return;
    const newChatMessages = [
          ...chatMessages,
          {
            id: crypto.randomUUID(),
            message: inputText,
            sender: 'user'
          }
        ];
    setChatMessages(newChatMessages);
    let response;
    try {
      response = Chatbot.getResponse(inputText);
    } catch(e) {
      console.error(e);
     response = 'Sorry, I did not quite understand that. Let me know how I can help with something else!';
    }
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