import { useState } from 'react';
import MarkdownContext from '../MarkdownContext';

import NavBar from './NavBar';
import { Flex } from '@chakra-ui/react';

function Layout({ children }) {
  const [markdownText, setMarkdownText] = useState('');

  const markdownContextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <MarkdownContext.Provider value={markdownContextValue}>
      <Flex
        flexDirection="column"
        width={'full'}
        minH={'100vh'}
        alignItems={'stretch'}
        alignContent={'stretch'}
      >
        <NavBar />
        {children}
      </Flex>
    </MarkdownContext.Provider>
  );
}

export default Layout;
