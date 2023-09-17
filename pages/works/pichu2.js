import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Alltor.me <Badge>2011</Badge>
      </Title>
      <P>
        A torrent tracker app for downloading materials from the users to users
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Windows XP/Vista</Meta>
          <span>PC</span>
        </ListItem>
        <ListItem>
          <Meta>Management</Meta>
          <span>PHP, jQuery, MySQL</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>


      <WorkImage src="/images/works/alltor1.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/alltor2.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
