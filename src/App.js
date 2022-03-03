import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import { Header } from "./components";
import { ChatContext } from "./contexts";
import "./styles.css";

export default function App() {
  const { chat } = useContext(ChatContext);
  console.log(chat)
  return (
    <Container maxWidth="md">
      <Header name="Amber" />
      <h1>Hello CodeSandbox</h1>
    </Container>
  );
}
