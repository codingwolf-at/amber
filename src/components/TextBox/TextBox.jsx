import { Button, Container, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

export const TextBox = () => {
  return (
    <Container size="md">
      <InputGroup>
        <Input borderRightRadius={0} variant="filled" placeholder="Enter message" size="lg" />
          <Button borderLeftRadius={0} border="none" bg="gray.100" variant="outline" size='lg' >
            Send
          </Button>
      </InputGroup>
    </Container>
  )
}