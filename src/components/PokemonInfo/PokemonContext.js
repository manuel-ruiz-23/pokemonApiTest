import React, {Component} from 'react';

const PokemonContext = React.createContext();

class PokemonProvider extends Component {

    render() {
      return(
       <PokemonContext.Provider value={this.props.pokemon}>
            {this.props.children}
        </PokemonContext.Provider>
      )
    }
};

export { PokemonContext, PokemonProvider};