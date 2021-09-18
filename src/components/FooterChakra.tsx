import { Box, Stack, StackDivider, Image, Text, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'

export const FooterChakra = ({logo}) => (
  <Box as="footer" bgColor="bgDark" role="contentinfo" w="100%" mx="auto"  py="12" px={{ base: '4', md: '8' }}>
    <Stack color="bege100" spacing="10" divider={<StackDivider />}>
      <Stack direction={{ base: 'column', lg: 'row' }} align="center" spacing={{ base: '10', lg: '14' }}>
        <Flex maxW="22rem" flexDirection="column" alignItems="center">
          <Image w="5rem" borderRadius="full" src="./carol.jpg" />
          <Text textAlign="center">Carolina Procaci</Text>
        </Flex>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '10', md: '16' }}>
          <LinkGrid spacing={{ base: '8', md: '16', lg: '16' }} flex="1" />
          <SubscribeForm width={{ base: 'full', md: 'sm' }} />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
)
