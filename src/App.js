import { Provider } from "./components/ui/provider";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import MetaTags from './MataTags';
import { system } from './theme';

function App() {
  return (
    <Provider value={system}>
      <MetaTags />
      <Header />
      <Main/>
      <Footer />
    </Provider>
  );
}

export default App;
