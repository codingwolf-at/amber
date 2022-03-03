import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const chatData = JSON.parse(localStorage.getItem('chat'));
    if (chatData.length > 0) {
      setChat(chatData)
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('chat', JSON.stringify(chat));
  }, [chat])

  return (
    <ChatContext.Provider value={{ chat, setChat }} >
      { children }
    </ChatContext.Provider>
  )
}