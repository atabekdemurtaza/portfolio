import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an inquisitive developer based in Karakalpakstan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Atabek De Murtaza
          </Heading>
          <p>Software Engineer / Designer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/atabekdemurtaza.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Atabek is a freelance and a full-stack developer based in Nukus with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his laptop. Currently, he is living off of his own
          product called{' '}
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/@atabekdemurtaza"
            passHref
            target="_blank"
          >
            Atabek de murtaza
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Nukus, Karakalpakstan.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the Master&apos;s Program in the Artificial intelligence at Anglia Ruskin University
          (Magistrant Anglia Ruskin Universitetinde Jasalma Intellekt tarawi)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Anaconda! (Anaconda - kompaniyasinda jumis isledi)
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working as a mentor
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          
            Drawing
          
          , Playing Videogames,{' '}
         
            Reading
          
          , Dancing, Machine Learning
        </Paragraph>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          <p>PL -- Python (clear), JS(nextjs, reactjs)</p>
          <p>SQL -- (Postgres), NoSQL - (Redis)</p>
          <p>OS -- (Linux -- Manjaro), </p>
          <p>Server -- (nginx, apache, jenkins)</p>
          <p>Container -- (Docker, Podman, Kubernetes)</p>
          <p>Clouds -- (AWS, DigitalOcean)</p>
          <p>More -- (Celery, RabbitMQ, Flower)</p>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/atabekdemurtaza" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @atabekdemurtaza
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/atabekdemurtaza/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @atabekdemurtaza
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
