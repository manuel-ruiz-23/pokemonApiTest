import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import NavigationBar from './NavigationBar';
import usePokemonList from './usePokemonList';

import styles from './PokemonList.module.css';


const  PokemonList = () => {
    const [{pokemons, offset}, navigation] = usePokemonList();

    return(
        <Fragment>
            <PokemonListView pokemons={pokemons} offset={offset}/>
            <NavigationBar navigation={navigation} />
        </Fragment>
        
    );
};

// Divide this into multiple components
const PokemonListView = ({ pokemons, offset }) => (
    <div className={styles.listContainer}>
        <h1>Pokemon Index</h1>
        <p>page {(offset/20)+1} Showing {offset} - {offset + 20} of 964 items</p>
        <ul>
            {pokemons.map((pokemon, index) => (
                <Link key={index} to={`/${pokemon.name}`}>
                    <li>{pokemon.name}</li>
                </Link>
            ))}
        </ul>
    </div>
);

export { PokemonList };