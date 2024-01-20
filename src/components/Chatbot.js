// Chatbot.js
import React, { useState, useEffect } from 'react';
import '../styles/Chatbot.css'; // Import your CSS file
import Bot from '../images/bot.png';
import User from '../images/user.png';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulate a chatbot response after a delay when a new user message is added
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === 'user') {
      setTimeout(() => {
        setMessages([...messages, { text: 'I am a simple chatbot!', sender: 'chatbot' }]);
      }, 500);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <img
              src={msg.sender === 'user' ? User : Bot}
              alt={msg.sender}
              className="avatar"
            />
            <div className="text">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
