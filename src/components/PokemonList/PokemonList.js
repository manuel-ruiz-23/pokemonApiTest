import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import NavigationBar from './NavigationBar';
import usePokemonList from './usePokemonList';

import styles from './PokemonList.module.css';


const  PokemonList = () => {
    const [pokemons, navigation] = usePokemonList();

    return(
        <Fragment>
            <PokemonListView pokemons={pokemons}/>
            <NavigationBar navigation={navigation} />
        </Fragment>
        
    );
};

const PokemonListView = ({ pokemons }) => (
    <div className={styles.listContainer}>
        <h1>Pokemon Index</h1>
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