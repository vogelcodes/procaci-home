import { Box, Stack, StackDivider, Image, Text, Flex } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import { SubscribeForm } from './SubscribeForm'

export const FooterChakra = ({logo}) => (
  <Box as="footer" bgColor="bgDark" role="contentinfo" w="100%"   py={{base: "1rem", lg:"2rem"}} px={{ base: '4', lg: '8' }}>
    <Stack align="center" color="bege100" spacing={{base:"2rem", lg:"1rem"}} divider={<StackDivider />}>
      <Stack alignItems={{base: "center", lg:"start"}} direction={{ base: 'column', lg: 'row' }} align="center" spacing={{ base: '2rem', lg: '' }}>
        <Flex maxW="22rem" flexDirection="column" alignItems="center">
          <Image w="5rem" borderRadius="full" src="./carol.jpg" />
          <Text textAlign="center">Carolina Procaci</Text>
        </Flex>
        <Stack alignItems={{base: "center", lg: "flex-start"}} direction={{ base: 'column', lg: 'row' }} spacing={{ base: '2rem', lg: '1rem' }}>
          <LinkGrid />
          <SubscribeForm  />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
)
