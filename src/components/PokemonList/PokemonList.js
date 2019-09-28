import React, { useState, useEffect, Fragment} from 'react';
import { Link } from "react-router-dom";

import styles from './PokemonList.module.css';

const usePokemonList = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => {
                    return response.json();
                });


            // console.log('hola',response);
            setPokemons(response.results);
        }  
        
        fetchData();
    },[]);

    return pokemons;
}


const  PokemonList = () => {
    const pokemons = usePokemonList();

    return(
        <Fragment>
            <PokemonListView pokemons={pokemons}/>
        </Fragment>
        
    );
};

const PokemonListView = ({ pokemons }) => (
    <div className={styles.listContainer}>
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