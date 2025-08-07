// src/components/ChatWindow.jsx
import React, { useState } from "react";
import './ChatWindow.css';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hola, ¿cómo podemos ayudarte?", sender: "admin" },
    { id: 2, content: "Tengo una emergencia en mi zona.", sender: "user" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      content: newMessage,
      sender: "user",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="chat-window">
      <div className="chat-header">{chatId.toUpperCase()}</div>

      <div className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === "admin" ? "received" : "sent"}`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatWindow;
