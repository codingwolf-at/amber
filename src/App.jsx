import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import { ChatWindow, Header, TextBox } from "./components";
import { ChatContext } from "./contexts";
import "./styles.css";

export default function App() {
  const { chat } = useContext(ChatContext);
  console.log(chat)
  return (
    <Container maxWidth="md">
      <Header name="Amber" />
      <ChatWindow />
      <TextBox />
    </Container>
  );
}
