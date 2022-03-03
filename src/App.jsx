import { Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ChatWindow, Header, TextBox } from "./components";
import { ChatContext } from "./contexts";
import "./styles.css";

export default function App() {
  const { chat } = useContext(ChatContext);
  return (
    <Flex p={5} flexDirection="column" mx="auto" maxHeight="100vh" maxWidth="md">
      <Header name="Amber" />
      <ChatWindow />
      <TextBox />
    </Flex>
  );
}
