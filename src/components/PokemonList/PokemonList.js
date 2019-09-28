import React, {useState} from 'react';
import useDataApi from 'use-data-api';
import { Link } from "react-router-dom";

const  PokemonList = () => {

    const startUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const [currentUrl, setCurrentUrl] = useState(startUrl);

    
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        currentUrl,
        null,
      );

    const handleNextUrL = () =>{
        const nextUrl = data.next;
        setCurrentUrl(nextUrl);
    }

    return(
        <div>
            <ul>
            {data && (
                data.results.map((pokemon) => (
                    <li>
                        <Link to={
                            {
                                pathname: "/pokemon",
                                state: { url: pokemon.url}
                            }
                        }>{pokemon.name}</Link>
                    </li>   
                ))
            )}
            </ul>
        </div>
    );
};

export { PokemonList };