import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import MetaTags from './MataTags';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MetaTags />
      <Header />
      <Main/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
