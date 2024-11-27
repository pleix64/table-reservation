import { useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Reservations from "./Reservation";
import Menu from "./Menu";
import LogIn from "./LogIn";
import OrderOnline from "./OrderOnline";
import MetaTags from './MataTags';
import { theme } from './theme';
import { addDays } from "date-fns";
import { globals } from "./globals";
import { toDateString } from "./utils";

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, new Date(), initializeTimes);
  return (
    <ChakraProvider theme={theme}>
      <MetaTags />
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
            />}
          />
          <Route path='/cart' element={<OrderOnline />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;

function reducer(availableTimes, action) {
  switch (action.type) {
    case 'reserve': {
      let date = action.date;
      const slotsUpdate = [
        ...availableTimes[date].slice(0, action.slot),
        availableTimes[date][action.slot] - action.numTables,
        ...availableTimes[date].slice(action.slot + 1)
      ];
      console.log(slotsUpdate);
      return {
        ...availableTimes,
        [date]: slotsUpdate,
      };
    }
    default: {
      return {...availableTimes}
    }
  }
};

function initializeTimes(dateObj) {
  const times = {};
  for (let i = 0; i < globals.NUM_DAYS; i++) {
    const dateObjPlus = addDays(dateObj, i);
    let date = toDateString(dateObjPlus);
    // check if the date key does not exist. not necessary for initialization, but can be used for existing slot data
    times[date] = Array(globals.NUM_SLOTS).fill(globals.NUM_TABLES);
  }
  return times;
};
