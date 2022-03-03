import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  return (
    <ChatContext.Provider value={{ chat, setChat }} >
      { children }
    </ChatContext.Provider>
  )
}