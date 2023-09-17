import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
        VideoEditor <Badge>2021</Badge>
      </Title>
      <P>
        The an app for users for cutting and editing videos
      </P>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Application</Meta>          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Python, C#
          </span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/videoeditor.png" alt="Margelo" />
      <WorkImage src="/images/works/videoeditor1.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
