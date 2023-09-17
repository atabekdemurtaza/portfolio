import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Mentor <Badge>2020-2022</Badge>
      </Title>
      <P>
        Certainly, here's a brief job description in 50 words:**Mentor at Texnopos** 
        As a Mentor at Texnopos, I teach Python Basic and Advanced courses. I've successfully guided over 200 students, many of whom have secured jobs. My passion for Python and mentorship helps individuals excel in programming and launch their tech careers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows\MacOS\Linux</span>
        </ListItem>
        <ListItem>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, JS, PostgreSQL</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/job1.jpg" alt="walknote" />
        <WorkImage src="/images/works/job2.jpg" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
