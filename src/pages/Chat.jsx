// src/pages/Chat.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import "./Chat.css"; // Crea este archivo para ajustes globales del layout del chat

const Chat = () => {
  const [activeChat, setActiveChat] = useState("soporte");

  return (
    <div className="chat-page">
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatWindow chatId={activeChat} />
    </div>
  );
};

export default Chat;
