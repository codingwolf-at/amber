import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = useState([{
    id: uuidv4(),
    text: "hello",
    author: "bot"
  }])
  return (
    <ChatContext.Provider value={{ chat, setChat }} >
      { children }
    </ChatContext.Provider>
  )
}