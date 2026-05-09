import ReactDOM from 'react-dom/client'
import './index.css'

function ChatInput()
{
  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
      />
      <button>Send</button>
    </>
  )
}

function ChatMessage({message, sender})
{
  //const message = props.message;
  //const sender = props.sender;
  //const {message, sender} = props;
    return (
    <div>
      {sender === "bot" && (
        <img src="./src/assets/botphoto.png" width="50"/>
        )}
      {message}
      {sender === "user" && (
        <img src="./src/assets/userphoto.png" width="50"/>
        )}
    </div>
  ) 
}

function App() {
  return (
      <>
      <ChatInput />
      <ChatMessage 
        message="hello chatbot" 
        sender="user" 
      />
      <ChatMessage 
        message="Hello, How can I help you?" 
        sender="bot" 
      />
      <ChatMessage 
        message="What is today's date?" 
        sender="user" 
      />
      <ChatMessage 
        message="Today is 9th of May 2026" 
        sender="bot" 
      />
    </>
  );
}

const container = document.querySelector("#root");
ReactDOM.createRoot(container).render(<App />);
export {ChatInput, ChatMessage};