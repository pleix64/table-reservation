import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Reservations from "./Reservation";
import MetaTags from './MataTags';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MetaTags />
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/reservation' element={<Reservations />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
