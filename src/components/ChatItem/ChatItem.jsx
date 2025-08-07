import React from "react";
import "./ChatItem.css";

const ChatItem = ({ name, description, image, onClick, active }) => {
  return (
    <div
      className={`chat-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={image} alt={name} className="chat-avatar" />
      <div className="chat-info">
        <h4 className="chat-name">{name}</h4>
        <p className="chat-description">{description}</p>
      </div>
    </div>
  );
};

export default ChatItem;
