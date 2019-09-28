import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import styles from './PokemonList.module.css';

const PokemonListView = ({ pokemons, offset }) => (
    <div className={styles.listContainer}>
        <Header offset={offset}/>
        <ul>
            {pokemons.map((pokemon, index) => (
                <Link key={index} to={`/${pokemon.name}`}>
                    <li>{pokemon.name}</li>
                </Link>
            ))}
        </ul>
    </div>
);

const Header = ({offset}) => {
    return(
        <Fragment>
            <h1>Pokemon Index</h1>
            <p>page {(offset/20)+1} Showing {offset} - {offset + 20} of 964 items</p>
        </Fragment>
    )
}

export default PokemonListView;