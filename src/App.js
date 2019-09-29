import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PokedexView from './components/Common/PokedexView';
import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

const  App = () => (  
  <PokedexView >
    <Router>
      <Route path="/" exact component={PokemonList} />
      <Route path="/:name" component={PokemonInfo} />
    </Router> 
  </PokedexView>
);

export default App;
