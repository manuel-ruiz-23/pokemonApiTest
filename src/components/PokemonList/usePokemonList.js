import { useEffect, useState } from 'react';

const usePokemonList = () => {
    const [pokemons, setPokemons] = useState([])

    const [offset, setOffset] = useState(0);

    const navigation = {
        nextPage: () => {setOffset(offset + 20)},
        lastPage: () => {setOffset(944)},
        prevPage: () => {setOffset(offset - 20)},
        firstPage: () => {setOffset(0)},
    }

    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
            const data = await response.json();
            setPokemons(data.results);
        }  
        fetchData();
    },[offset]);

    return [{ pokemons, offset}, navigation];
};

export default usePokemonList;