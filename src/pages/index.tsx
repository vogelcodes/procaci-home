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
import { FooterChakra as Footer } from '../components/FooterChakra'
import { Header } from '../components/Header'
import { Client } from '../utils/prismicHelpers'
import {QueryOptions} from '@prismicio/client/types/ResolvedApi'
import { Testimonial } from '../components/Testimonial'
import {Document} from '@prismicio/client/types/documents'

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

const menuItems = ["Sobre Mim",
  "Serviços",
  "Produtos",
  "Fale comigo"]
const Index = ({topMenu,testimonials}: {topMenu: Document, testimonials: Test[]}) => {
  console.log(topMenu)
  return (

    <Container w="100%">
    <Header
      justifyContent="center"
       px={{base: 0, md: 16, lg: 32}}
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

        <Flex wrap="wrap" w="100%" justifyContent="space-evenly">
          {topMenu.data.menu_options.map((item,i) => <a href={'#'+item.href} key={i.toString()}><Text key={i.toString()}>{item.menu_label}</Text></a>)}
        </Flex>
      </Flex>
    </Header>

    <Main>
    {["about","services","products","contact"].map((item,i) => <Box id={item} key={i.toString()} d="flex" alignItems="center" justifyContent="center" bgColor="bg" minH="20rem"><Text fontSize="4xl" color="bege">{menuItems[i]}</Text></Box>)}
    <Testimonial {...{testimonials, id: 'testimonials'}}/>

    </Main>

    <Footer logo={topMenu.data.logo.url}/>
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
