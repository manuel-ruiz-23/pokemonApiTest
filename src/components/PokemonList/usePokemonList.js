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
                .then(response => {
                    return response.json();
                });


            console.log('hola',response);
            setPokemons(response.results);
        }  
        
        fetchData();
    },[offset]);

    return [pokemons, navigation];
};

export default usePokemonList;