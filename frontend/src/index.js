import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/provider';
import theme from './theme';

import Home from './pages/Home';
import About from './pages/About';
import App from './pages/App';

const rootElement = document.getElementById('root');

render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  rootElement
);
