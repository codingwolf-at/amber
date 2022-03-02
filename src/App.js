import { Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { ChatContext } from "./contexts";
import "./styles.css";

export default function App() {
  const { chat } = useContext(ChatContext);
  console.log(chat)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
    </div>
  );
}
