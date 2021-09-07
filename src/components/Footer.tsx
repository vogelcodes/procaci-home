import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="2rem" bgColor="bgDark" width="100%" justifyContent="center" alignContent="center" {...props} />
)
