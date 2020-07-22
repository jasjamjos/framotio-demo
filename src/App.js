import React, { useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { 
  Base, 
  Home, 
  Order, 
  Toppings,
  Header
} from './components';

const App = () => {
  const [pizza, setPizza] = useState({ base: '', toppings: []});

  const addBase = (base) => {
    setPizza({...pizza, base})
  }

  const addTopping = (topping) => {
    let newToppings;

    if(!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza(newToppings);
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/toppings">
          <Toppings />
        </Route>
        <Route path="/base">
          <Base />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;