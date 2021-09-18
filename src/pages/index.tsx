import {
  Link as ChakraLink,
  Text,
  Flex,
  Box,
  Grid,
  Image,
  Img,
  Code,
  UnorderedList,
  List,
  ListIcon,
  ListItem,
  HStack,
  
  
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {FaUserGraduate} from 'react-icons/fa'
import Prismic from '@prismicio/client'

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
import React from 'react'

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

const menuItems = [
  
  "Produtos",
  "Fale comigo"]
const Index = ({topMenu,testimonials, services}: {topMenu: Document, testimonials: Test[], services: Document[]}) => {
  console.log(services)
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
      <Box pb="1rem" minW="16rem" textAlign="center" >
        <Text  pb="" fontSize="2xl" color="begeDark">Carolina Procaci</Text>
        <Text>Consultora de amamentação</Text>
      {/* <Image  w="5rem" borderRadius="full" src='/carol.jpg'></Image> */}
      </Box>

        <Flex wrap="wrap" w="100%" justifyContent="space-evenly">
          {topMenu.data.menu_options.map((item,i) => <a href={'#'+item.href} key={i.toString()}><Text display={(item.menu_label==="Quem sou")?{base: "none",md:"block"}:"block"} key={i.toString()}>{item.menu_label}</Text></a>)}
        </Flex>
      </Flex>
    </Header>

    <Main>
    <Box as="section" py="2rem" id="about"    bgColor="bg">
      <Text pb="1rem" textAlign="center" fontSize="4xl" color="begeDark">Sobre mim</Text>
      <Flex maxW="48rem" mx="auto" d="flex" flexDirection={{ base: "column", md:"row"}} spacing={{base: "2rem", md:"4rem", lg:"6rem"}} alignItems="center" justifyContent="space-between">

      <Box h="240px" w="240px" mb="1rem">
        <Image h="240px" src="./carol.jpg"/>

      </Box>
      <Flex px="1rem" flexDirection="column" >

      <List bg="bgDark" color="bege100" borderRadius="md" py="1rem" maxW="424px" px="2rem" spacing="0.5rem">
        <ListItem><ListIcon as={CheckCircleIcon} />Consultora de Amamentação com curso reconhecido pelo MEC</ListItem>
        <ListItem><ListIcon as={FaUserGraduate}/>Biomédica de formação</ListItem>
        <ListItem ml="-4px">👩‍👧‍👦 Mãe de dois (Matheus e Lilian)</ListItem>

      </List>
      </Flex>
      </Flex>
      
    </Box>
    <Box as="section" py="3rem" id="services" d="flex" flexDirection={{ base: "column", md:"row"}}  alignItems="center" justifyContent="center" bgColor="bg" minH="20rem">
      <Flex ml="" flexDirection="column">

      <Text pb="3rem" fontSize="4xl" textAlign="center" color="begeDark">Serviços</Text>
<Grid px={{ base:"1rem"}} gridGap="2rem" templateColumns={{base: "1fr" ,md:"repeat(2, 1fr)"}}>

        {services.map((item,i)=>(<Box borderRadius="md" px="0.5rem" py="1.5rem" maxW="30rem" bgColor="bgDark" key={i}><Text maxW="25rem" ml="0.5rem" pb="1rem" as="h3" fontSize="xl" color="begeDark">{item.data.nome_servico}</Text>
        <List pt="0.5rem" stylePosition="outside" color="bege100" pl="1rem" maxW="25rem">
          {item.data.desc_servico.map((desc,i)=>(<ListItem ml="1.5rem" key={i}><ListIcon ml="-1.5rem" as={CheckCircleIcon}/>{desc.item[0].text}</ListItem>))}
          </List></Box>))}
</Grid>

      </Flex>
      
    </Box>
    {["products","contact"].map((item,i) => <Box as="section" id={item} key={i.toString()} d="flex" alignItems="center" justifyContent="center" bgColor="bg" minH="20rem"><Text fontSize="4xl" color="begeDark">{menuItems[i]}</Text></Box>)}
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
  const testimonials =  (await client.query(Prismic.Predicates.at('document.type', 'testimonial'))).results
  const services =  (await client.query(Prismic.Predicates.at('document.type', 'servicos'),{orderings:'[my.servicos.ordem]'})).results

  // const posts = await client.query(
  //   Prismic.Predicates.at("document.type", "post"), {
  //     orderings: "[my.post.date desc]",
  //     ...(ref ? { ref } : null)
  //   },
  // )

  return {
    props: {
      topMenu,
      testimonials,
      services
      // posts: posts ? posts.results : [],
    },
    revalidate: 10
  }
}
