import { useContext } from 'react';
import MarkdownContext from '../MarkdownContext';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { AutoResizeTextarea } from './AutoResizeTextArea';

function Editor() {
  const { markdownText, setMarkdownText } = useContext(MarkdownContext);

  return (
    <Box
      width={{ base: 'full', md: '50%' }}
      minH="full"
      padding="10"
      borderRight={{ base: 'none', md: '1px' }}
    >
      <Flex direction="column" align="center">
        <Heading size="lg" marginBottom="10">
          Markdown Editor
        </Heading>
        <AutoResizeTextarea
          value={markdownText}
          placeholder={'Start writing your text...'}
          onChange={(e) => setMarkdownText(e.currentTarget.value)}
        />
      </Flex>
    </Box>
  );
}

export default Editor;
