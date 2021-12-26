import Layout from '../components/Layout';
import { Flex, Heading, Text, Button, Stack, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa';

function Home() {
  return (
    <Layout>
      <Flex
        padding={10}
        textAlign={'center'}
        flexGrow={1}
        alignItems={'center'}
        justifyContent={'center'}
        direction={'column'}
      >
        <Heading fontSize={{ base: '4xl', md: '6xl' }}>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
            Markdown Box
          </Text>
          A Simple Web Editor
        </Heading>
        <Text fontSize={{ base: 'xl', md: '3xl' }} my={10}>
          Project built using React and Chakra UI, by infamous55.
        </Text>
        <Stack spacing={10} direction={['column', 'row']}>
          <Link href={'https://github.com'}>
            <Button leftIcon={<FaGithub />} size={'lg'} variant={'outline'}>
              Source Code
            </Button>
          </Link>
          <Link href={'https://infamous55.com'}>
            <Button
              leftIcon={<FaExternalLinkSquareAlt />}
              size={'lg'}
              variant={'outline'}
            >
              Personal Blog
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Layout>
  );
}

export default Home;
