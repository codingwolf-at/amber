import { Flex, Heading, Avatar, AvatarBadge } from "@chakra-ui/react"
import avatarImg from "../../assets/avatarImg.png";

export const Header = ({ name }) => {
  return (
    <Flex align="center" px={7} py={4} bg="teal.500" color="white">
      <Avatar name='Amber' bg="ghostwhite" size='md'  src={avatarImg}>
        <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1em' />
      </Avatar>
      <Heading as="h1" ml={3} size="lg">
        Amber
      </Heading>
    </Flex>
  )
}