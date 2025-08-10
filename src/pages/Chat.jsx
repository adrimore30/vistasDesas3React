// src/pages/Chat.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import "./Chat.css";

const Chat = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chatParam = queryParams.get("chat") || "soporte";

  const [activeChat, setActiveChat] = useState(chatParam);

  useEffect(() => {
    setActiveChat(chatParam);
  }, [chatParam]);

  return (
    <div className="chat-page">
      <Sidebar activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatWindow chatId={activeChat} />
    </div>
  );
};

export default Chat;
