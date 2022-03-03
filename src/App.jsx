import { Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ChatWindow, Header, TextBox } from "./components";
import { ChatContext } from "./contexts";
import "./styles.css";

export default function App() {
  const { chat } = useContext(ChatContext);
  console.log(chat)
  return (
    <Flex p={5} flexDirection="column" mx="auto" minHeight="100vh" maxWidth="md">
      <Header name="Amber" />
      <ChatWindow />
      <TextBox />
    </Flex>
  );
}
