import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

const  App = () => (  
  <Router>
    <Route path="/" exact component={PokemonList} />
    <Route path="/:name" component={PokemonInfo} />
  </Router> 
);

export default App;
