import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { useContext } from 'react';
import MarkdownContext from '../MarkdownContext';

function Preview() {
  const { markdownText } = useContext(MarkdownContext);
  return (
    <Box width={{ base: 'full', md: '50%' }} minH="full" padding="10">
      <Flex direction="column">
        <Heading size="lg" marginBottom="10" align="center">
          Markdown Preview
        </Heading>
        <Text>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={markdownText}
          />
        </Text>
      </Flex>
    </Box>
  );
}

export default Preview;
