import Layout from '../components/Layout';
import { Flex } from '@chakra-ui/react';

function About() {
  return (
    <Layout>
      <Flex
        padding={10}
        flexGrow={1}
        direction={'column'}
        alignItems={'center'}
      ></Flex>
    </Layout>
  );
}

export default About;
