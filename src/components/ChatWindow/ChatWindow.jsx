import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // importamos el icono
import './ChatWindow.css';

const ChatWindow = ({ chatId }) => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Hola, ¿cómo podemos ayudarte?", sender: "admin" },
    { id: 2, content: "Tengo una emergencia en mi zona.", sender: "user" },
    { id: 1, content: "Porfavor regalanos tu ubicacion", sender: "admin" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const message = { id: Date.now(), content: newMessage, sender: "user" };
    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocalización no soportada por tu navegador");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationMessage = {
          id: Date.now(),
          content: `Mi ubicación: https://www.google.com/maps?q=${latitude},${longitude}`,
          sender: "user",
        };
        setMessages([...messages, locationMessage]);
      },
      () => alert("No se pudo obtener la ubicación")
    );
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
        <button onClick={handleLocation} className="location-btn">
          <IoLocationOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
