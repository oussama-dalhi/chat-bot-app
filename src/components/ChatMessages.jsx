import {useRef, useEffect} from 'react';
import ChatMessage from './ChatMessage';
import './ChatMessages.css';
function ChatMessages({ chatMessages }) {
  // ref to chatMessages container
  const chatMessagesRef = useRef(null);
  // useEffect hook with a dependency array
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if(containerElem)
    {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div 
    className='chat-messages-container'
    ref={chatMessagesRef}>
    { 
   chatMessages.length === 0 ? 
    <p className='welcome-message'>
      Welcome to the Chatbot! Send a message using the textbox below
    </p>
    : 
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
    </div>
  )
}
export default ChatMessages;