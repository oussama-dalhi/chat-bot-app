import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState('');
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

function ChatMessage({message, sender})
{
    return (
    <div>
      {sender === "bot" && (
        <img src="./src/assets/botphoto.png" width="50"/>
        )}
      {message}
      {sender === "user" && (
        <img src="./src/assets/user.jpg" width="50"/>
        )}
    </div>
  ) 
}

function ChatMessages({ chatMessages }) {
  return (
    <>
    {
    chatMessages.map((chat) => {
    return (
    <ChatMessage
    key={chat.id}
    message={chat.message}
    sender={chat.sender}
    />
    )
    })
    }
    </>
  )
}

function App() {
    const [chatMessages, setChatMessages] = React.useState([
      {
      id: "1",
      message: "hello chatbot",
      sender: "user"
      },
      {
      id: "2",
      message: "Hello, How can I help you?",
      sender: "bot"
      },
      {
      id: "3", 
      message: "What is today's date?",
      sender: "user"
      },
      {
      id: "4",
      message: "Today is 9th of May 2026",
      sender: "bot"
      }
  ]);
  // (Array Destructure) const [chatMessages, setChatMessages] = array;
  return (
    <div>
      <ChatInput 
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      />
      <ChatMessages 
      chatMessages={chatMessages}
      />
    </div>
  );
}
export {ChatInput, ChatMessage};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
