import { useState, useReducer } from "react";
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
import { addDays } from "date-fns";
import { globals } from "./globals";
import { toDateString } from "./utils";
import { HStack, Button } from "@chakra-ui/react";

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
  }
};

function initializeTimes(dateObj) {
  console.log("initializeTimes() is called.");
  const times = {};
  // console.log("InitializeTimes:");
  // console.log("dateObject as the paremeter:");
  // console.log(dateObj);
  for (let i = 0; i < globals.NUM_DAYS; i++) {
    //console.log("i = ", i);
    const dateObjPlus = addDays(dateObj, i);
    //console.log(dateObjPlus);
    let date = toDateString(dateObjPlus);
    //console.log(date);
    //if (!(date in times)) {
    // check if the date key does not exist. not necessary for initialization, but can be used for existing slot data
    times[date] = Array(globals.NUM_SLOTS).fill(globals.NUM_TABLES);
  }
  // hard coded for test
  //times['2024-11-18'][0] = 0;
  //times['2024-11-19'][3] = 0;
  return times;
};

function App() {
  const [availableTimes, dispatch] = useReducer(reducer, new Date(), initializeTimes);
  const [count, setCount] = useState(0);
  return (
    <ChakraProvider theme={theme}>
      <MetaTags />
      <Router>
        <Header />
        <HStack>
          <h1>Couter for test: {count}</h1>
          <Button onClick={() => setCount(count + 1)}>
            <h2>+1</h2>
          </Button>
        </HStack>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/reservation' element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
            />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;