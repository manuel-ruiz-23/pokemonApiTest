import React from 'react';
import useDataApi from 'use-data-api';

const  PokemonList = ({location}) => {


    console.log('location', location)
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        location.state.url,
        // `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        null,
      );

    console.log('data', data);

    return(
        <div>
            {data && (
                <Pokemon abilities={data.abilities} experience={data.base_experience} name={data.forms[0].name}/>
            )}
        </div>
    );
};

const Pokemon = ({ abilities, experience, name }) => (
    <div>
        <p>
            mane: {name}
        </p>
        <p>
            xp: {experience}
        </p>
        <div>
            {abilities.map((ability, index) => (
                <p key={index}> ability {index+1}: {ability.ability.name}</p>
            ))}
        </div>
    </div>
)

export default PokemonList;