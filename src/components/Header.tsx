import { Flex, FlexProps } from '@chakra-ui/react'

export const Header = (props: FlexProps) => (
  <Flex 
    width="100%"
    minHeight="5rem"
    maxWidth=""
    mt=""
    py="0.5rem"
    bg="bgDark"
    color="bege100"
    {...props}
  />
)
