import { Flex, FlexProps } from '@chakra-ui/react'

export const Header = (props: FlexProps) => (
  <Flex 
    width="100%"
    minHeight="5rem"
    maxWidth=""
    mt=""
    // pt="1rem"
    bg="green.200"
    {...props}
  />
)
