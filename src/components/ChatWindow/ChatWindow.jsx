import { Container, VStack, Text, Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { ChatContext } from "../../contexts"
import "./ChatWindow.css";

export const ChatWindow = () => {
  const { chat } = useContext(ChatContext);
  return (
    <Flex direction='column' flexGrow={1}>
      {
        chat.map(({id, text, author}) => (
          <Container py={2} mt={2} px={5} bg={author === 'bot' ? "green.200" : "gray.200"}>
             <Text fontSize='xl'>{text}</Text>
          </Container>
        ))
      }
    </Flex>
  )
}