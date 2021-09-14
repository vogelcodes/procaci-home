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
import Prismic from '@prismicio/client'
import CarolProcaciPic from '../public/carol.jpg'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Client } from '../utils/prismicHelpers'
import {QueryOptions} from '@prismicio/client/types/ResolvedApi'
import { Testimonial } from '../components/Testimonial'

const menuItems = ["Sobre Mim",
  "Serviços",
  "Produtos",
  "Fale comigo"]
const Index = ({topMenu,testimonials}) => {
  console.log(testimonials)
  return (

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
          {topMenu.data.menu_options.map((item,i) => <Text key={i.toString()}>{item.menu_label}</Text>)}
        </Flex>
      </Flex>
    </Header>

    <Main>
    {menuItems.map((item,i) => <Box key={i.toString()} d="flex" alignItems="center" justifyContent="center" bgColor="bg" minH="20rem"><Text fontSize="4xl" color="bege">{item}</Text></Box>)}
    <Testimonial testimonials={testimonials}/>

    </Main>

    <Footer>
      <Text>@carolina.procaci</Text>
    </Footer>
  </Container>
)
  }

export default Index

export async function getStaticProps() {
  
  
  const client = Client()

  const topMenu = await client.getSingle("top-menu", {})
  const {results} = await client.query(Prismic.Predicates.at('document.type', 'testimonial'))

  // const posts = await client.query(
  //   Prismic.Predicates.at("document.type", "post"), {
  //     orderings: "[my.post.date desc]",
  //     ...(ref ? { ref } : null)
  //   },
  // )

  return {
    props: {
      topMenu,
      testimonials: results
      // posts: posts ? posts.results : [],
    },
    revalidate: 10
  }
}
