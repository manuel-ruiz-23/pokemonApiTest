import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PokemonInfoView from './PokemonInfoView';

import usePokemon from './usePokemon';

//the context provider should live here
const PokemonInfo = ({match}) => {

    const pokemon = usePokemon(match.url)

    //here i could do a better loading screen...
    if(pokemon){
        return(
            <Fragment>
                <PokemonInfoView pokemon={pokemon}/>
                <BackButton />
            </Fragment>
        )
    }else{
        return(
            <div>
                Cargando...
            </div>
        )
    }
};

const BackButton = () => (
    <Link to="/">
        <button>
            Back
        </button>
    </Link>
    
)
export { PokemonInfo };