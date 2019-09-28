import React from 'react';

import PokemonInfoView from './PokemonInfoView';

import usePokemon from './usePokemon';

//the context provider should live here
const PokemonInfo = ({match}) => {

    const pokemon = usePokemon(match.url)

    if(pokemon){
        return(
            <PokemonInfoView pokemon={pokemon}/>
        )
    }else{
        return(
            <div>
                Cargando...
            </div>
        )
    }
};

export { PokemonInfo };