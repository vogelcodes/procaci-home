import {
  Link as ChakraLink,
  Text,
  Flex,
  Box,
  Image,
  Img,
  Code,
  List,
  ListIcon,
  ListItem,
  HStack
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import CarolProcaciPic from '../public/carol.jpg'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const menuItems = ["Sobre Mim",
  "Serviços",
  "Produtos",
  "Depoimentos",
  "Fale comigo"]
const Index = () => (
  <Container height="">
    <Header
      justifyContent="center"
      // px={[0,16,32,48,64]}
      >
      <Flex width="100%"
            maxW="60rem"
            flexDirection={["column", "column", "row"]}
            justify={["center","column", "space-between"]}
            align={["center"]}
      >
      <Box w="6rem" h="5rem">
      <Image  w="5rem" borderRadius="full" src='/carol.jpg'></Image>
      </Box>

        <Flex width="100%" justifyContent="space-evenly">
          {menuItems.map((item,i) => <Text key={i.toString()}>{item}</Text>)}
        </Flex>
      </Flex>
    </Header>

    <Main>
    {menuItems.map((item,i) => <Box key={i.toString()} d="flex" alignItems="center" justifyContent="center" bgColor="bg" minH="20rem"><Text fontSize="4xl" color="bege">{item}</Text></Box>)}
    </Main>

    <Footer>
      <Text>@carolina.procaci</Text>
    </Footer>
  </Container>
)

export default Index
