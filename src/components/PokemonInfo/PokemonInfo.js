import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Common/Button';
import PokemonInfoView from './PokemonInfoView';

import usePokemon from './usePokemon';

import { PokemonProvider } from './PokemonContext';


const PokemonInfo = ({match}) => {

    const pokemon = usePokemon(match.url)

    //here i could do a better loading screen...
    if(pokemon){
        return(
            <Fragment>
                <PokemonProvider pokemon={pokemon}>
                    <PokemonInfoView pokemon={pokemon}/>
                </PokemonProvider>
                
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
        <Button label="Back"/>
    </Link>
);
export { PokemonInfo };