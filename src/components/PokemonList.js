import React {useState} from 'react';
import useDataApi from 'use-data-api';
import { Link } from "react-router-dom";

const  PokemonList = ({url , id}) => {

    const startUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const [currentUrl, setCurrentUrl] = useState(startUrl);

    // https://pokeapi.co/api/v2/pokemon/?offset=20&limit=964
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        currentUrl,
        null,
      );

    // console.log('data', data);

    const handleNextUrL = () =>{
        const nextUrl = data.next;
        setCurrentUrl(nextUrl);
    }

    return(
        <div>
            <ul>
            {data && (
                data.results.map((pokemon) => (
                    <div>
                        <li>
                            <Link to={
                                {
                                    pathname: "/pokemon",
                                    state: { url: pokemon.url}
                                }
                            }>{pokemon.name}</Link>
                        </li>   
                    </div>
                    
                ))
            )}
            {data && (
                <button
                    onClick={handleNextUrL}
                >

                </button>
            )}
            </ul>
            
        </div>
    );
};

export default PokemonList;