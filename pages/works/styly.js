import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="STYLY">
    <Container>
      <Title>
        EducationPlatform <Badge>2022</Badge>
      </Title>
      <P>
      EducationPlatform is a web-based educational platform developed for learning purposes. It offers a range of features, including user authentication, course management, enrollment, and a responsive user interface. This project serves as a practical demonstration of web development skills and showcases the implementation of key functionality for an online education platform.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Next JS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://educa.uz/">
            educa <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/educa1.jpg" alt="STYLY" />
      <WorkImage src="/images/works/educa2.jpg" alt="STYLY" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
