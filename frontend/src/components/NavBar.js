import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import Alert from './Alert';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { useLocation } from 'react-router-dom';
import { useRef, useState, useContext } from 'react';

import MarkdownContext from '../MarkdownContext';

import axios from 'axios';
import FileDownload from 'js-file-download';

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pathname } = useLocation();

  const { markdownText, setMarkdownText } = useContext(MarkdownContext);
  const [error, setError] = useState(false);

  const fileUploader = useRef(null);

  const handleClick = () => {
    fileUploader.current.click();
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    await axios
      .post('http://localhost:5000/upload', formData)
      .then((response) => {
        if (response.data) setMarkdownText(response.data.content);
      })
      .catch(() => {
        setError(true);
      });
  };

  const handleDownload = async () => {
    await axios
      .post('http://localhost:5000/download', {
        responseType: 'blob',
        data: markdownText,
      })
      .then((response) => {
        FileDownload(response.data, 'export.md');
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <Box px={10}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={'outline'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={10} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link px={2} py={1} rounded={'md'} href={'/'}>
              Home
            </Link>
            <Link px={2} py={1} rounded={'md'} href={'/about'}>
              About
            </Link>
            <Link px={2} py={1} rounded={'md'} href={'/app'}>
              App
            </Link>
          </HStack>
        </HStack>
        {pathname === '/app' ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant={'outline'}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleClick}>
                Import a file
                <input
                  type="file"
                  ref={fileUploader}
                  onChange={handleUpload}
                  style={{ display: 'none' }}
                />
              </MenuItem>
              <MenuItem onClick={handleDownload}>Export as .md</MenuItem>
            </MenuList>
          </Menu>
        ) : null}
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link px={2} py={1} rounded={'md'} href={'/'}>
              Home
            </Link>
            <Link px={2} py={1} rounded={'md'} href={'/about'}>
              About
            </Link>
            <Link px={2} py={1} rounded={'md'} href={'/app'}>
              App
            </Link>
          </Stack>
        </Box>
      ) : null}

      {error ? <Alert error={error} setError={setError} /> : null}
    </Box>
  );
}
