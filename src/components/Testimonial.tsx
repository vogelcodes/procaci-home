import { Box, BoxProps, Circle, Flex, HStack, Link, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { type } from 'os'
import * as React from 'react'
import { Quotee } from './Quotee'
import { QuoteIcon } from './QuoteIcon'

interface Test  {
  id: string,
  tags: string[]
  data: {
    nome: string,
    instagram_user: string,
    url_perfil: {
      url: string
    },
    foto: {
      url: string
    }
    depoimento: [{
      text: string
      type: string
    }]
  }

}

export const Testimonial = (props: {testimonials:Test[], id: string}) => {
  const { testimonials, id } = props;
  // console.log(testimonials)
  return(
    <Box as="section" id={id} bg={useColorModeValue('gray.50', 'gray.800')}>
    <VStack maxW="48rem" mx="auto" px={{ base: '6', md: '8' }} py="2rem">
      {testimonials.filter(test=>test.tags.find(tag=>tag=="long-test")).map((test)=>(

      <Flex key={test.id} direction="column" pb="2rem" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{ base: '3xl', md: '6xl' }}
          />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;{test.data.depoimento.find(item=> item.type='paragraph')?.text ?? ""}&rdquo;
        </Text>
        <Link href={test.data.url_perfil.url}>
        <Quotee
          name={test.data.nome}
          jobTitle={test.data.instagram_user}
          imageSrc={test.data.foto.url}
          mt="1rem"
          />
          </Link>
      </Flex>
      ))}
      <Stack direction={{base: 'column', md: 'row' }} maxW="48rem" mx="auto"  pb="">
      {testimonials.filter(test=>test.tags.find(tag=>tag=="short-test")).map((test)=>(
        
        
      <Flex key={test.id} px={{ base: '0', md: '2rem' }} pb="2rem" direction="column" w="100%" align="center" textAlign="center">
        <QuoteIcon
          color={useColorModeValue('gray.300', 'gray.600')}
          fontSize={{ base: '3xl', md: '6xl' }}
          />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;{test.data.depoimento.find(item=> item.type='paragraph')?.text ?? ""}&rdquo;
        </Text>
        <Link href={test.data.url_perfil.url}>
        <Quotee
          name={test.data.nome}
          jobTitle={test.data.instagram_user}
          imageSrc={test.data.foto.url}
          mt="1rem"
          />
          </Link>
      </Flex>
      
          ))}
    </Stack>
    </VStack>
      {/* <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="blue.500" />
        <Circle w="2" h="2" bg="currentColor" />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack> */}
  </Box>
)
}
