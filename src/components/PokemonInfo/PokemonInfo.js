import React from 'react';


//TODO Add more pokemon properties and the sprites

const PokemonInfo = () => {

    //TODO figure out how to use dynamic routing to fecth the data here

    const pokemon = {
        name: 'ditto',
        height: '3',
        weight: '40'
    };

    return(
        <PokemonInfoView 
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
        />
    )
};

const PokemonInfoView = ({ name, height, weight }) => (
    <div>
        <p>name: {name}</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
    </div>
);


export { PokemonInfo };



/* 

Beast Museum 

*/

// const  PokemonList = ({location}) => {
//     console.log('location', location)
//     const [{ data, isLoading, isError }, doFetch] = useDataApi(
//         location.state.url,
//         // `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
//         null,
//       );

//     console.log('data', data);

//     return(
//         <div>
//             {data && (
//                 <Pokemon abilities={data.abilities} experience={data.base_experience} name={data.forms[0].name}/>
//             )}
//         </div>
//     );
// };

// const Pokemon = ({ abilities, experience, name }) => (
//     <div>
//         <p>
//             mane: {name}
//         </p>
//         <p>
//             xp: {experience}
//         </p>
//         <div>
//             {abilities.map((ability, index) => (
//                 <p key={index}> ability {index+1}: {ability.ability.name}</p>
//             ))}
//         </div>
//     </div>
// )
// export default PokemonList;