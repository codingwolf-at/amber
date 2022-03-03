import { v4 as uuidv4 } from 'uuid';
import { Button, Container, Input, InputGroup } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { ChatContext } from "../../contexts";

export const TextBox = () => {
  const [inputValue, setInputValue] = useState("");
  const { chat, setChat } = useContext(ChatContext);
  
  const inputHandler = (e) => {
    setInputValue(e.target.value)
  };
  
  const buttonHandler = () => {
    setChat(value => value.concat({
      id: uuidv4(),
      text: inputValue,
      author: "user"
    }));
    setChat(value => value.concat({
      id: uuidv4(),
      text: inputValue,
      author: "bot"
    }));
    setInputValue("");
  }

  return (
    <InputGroup> 
      <Input onChange={(e) => inputHandler(e)} value={inputValue} borderRightRadius={0} variant="filled" placeholder="Enter message" size="lg" />
        <Button onClick={buttonHandler} borderLeftRadius={0} border="none" bg="gray.100" variant="outline" size='lg' >
          Send
        </Button>
    </InputGroup>
  )
}