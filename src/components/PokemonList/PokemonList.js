import React, { Fragment } from 'react';

import NavigationBar from './NavigationBar';
import usePokemonList from './usePokemonList';
import PokemonListView from './PokemonListView';

const  PokemonList = () => {
    const [{pokemons, offset}, navigation] = usePokemonList();

    return(
        <Fragment>
            <PokemonListView pokemons={pokemons} offset={offset}/>
            <NavigationBar navigation={navigation} />
        </Fragment>
    );
};

export { PokemonList };