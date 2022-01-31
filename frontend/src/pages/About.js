import Layout from '../components/Layout';
import { Container, Flex, Heading, Text, Link, Code } from '@chakra-ui/react';

function About() {
  return (
    <Layout>
      <Flex
        padding={10}
        flexGrow={1}
        direction={'column'}
        alignItems={'center'}
      >
        <Container maxW={{ base: 'full', md: 'container.xl' }}>
          <Heading fontSize={{ base: '4xl', md: '6xl' }} marginBottom={10}>
            About
          </Heading>
          <Text fontSize={{ base: 'xl', md: '3xl' }} my={10}>
            Markdown Box is a simple web-based editor built using{' '}
            <Link href={'https://reactjs.org/'}>React</Link> on the Frontend and{' '}
            <Link href={'https://nodejs.org/'}>NodeJS</Link> with{' '}
            <Link href={'https://expressjs.com/'}>Express</Link> on the
            server-side. It allows the user to import markdown files and edit
            them while seeing a rendered version. The entire interface uses{' '}
            <Link href={'https://chakra-ui.com/'} color={'#FF0080'}>
              Chakra UI
            </Link>
            , an accessible and customizable component library. The user input
            can be exported as a markdown file (
            <Code fontSize={{ base: 'xl', md: '3xl' }}>.md</Code>) and
            downloaded locally.
          </Text>
          <Text fontSize={{ base: 'xl', md: '3xl' }}>
            I created the project for learning purposes, and the source code is
            available on{' '}
            <Link
              href={'https://github.com/infamous55/mdbox'}
              color={'#FF0080'}
            >
              GitHub
            </Link>
            .
          </Text>
        </Container>
      </Flex>
    </Layout>
  );
}

export default About;
