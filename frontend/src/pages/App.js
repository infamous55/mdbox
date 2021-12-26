import { Flex } from '@chakra-ui/react';

import Layout from '../components/Layout';
import Editor from '../components/Editor';
import Preview from '../components/Preview';

function App() {
  return (
    <Layout>
      <Flex flexDirection={{ base: 'column', md: 'row' }} flexGrow={1}>
        <Editor />
        <Preview />
      </Flex>
    </Layout>
  );
}

export default App;
