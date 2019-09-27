import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';

function App() {
  return (
    <Router>
            {/* <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link> */}
         

      <Route path="/" exact component={PokemonList} />
      <Route path="/:id/" component={PokemonInfo} />
      <Route path="/pokemon" component={PokemonInfo} />
  </Router>
  );
}

export default App;
