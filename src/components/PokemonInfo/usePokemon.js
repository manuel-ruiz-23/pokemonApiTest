import {useState, useEffect } from 'react';

const usePokemon = (url) => {
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon${url}`)
            const data = await response.json();
            setPokemon(data);
        }  
        
        fetchData();
    },[url]);

    return pokemon;
}

export default usePokemon;