import React from 'react';
import Sprite from '../Common/Sprite';

import styles from './PokemonInfoView.module.css';

//Here i want use the context api with a PokemonContext
const PokemonInfoView = ({ pokemon }) => {

    return(
        <div className={styles.infoContainer}>
            <BasicInfo pokemon={pokemon} />
            <Abilities abilities={pokemon.abilities} /> 
            <Gallerie sprites={pokemon.sprites} />
        </div>
    )
};

const Gallerie = ({sprites}) => (
    <div className={styles.gallerie}>
        <Sprite url={sprites.front_default} label="Front default" />
        <Sprite url={sprites.back_default} label="Back default" />
    </div>
)


const BasicInfo = ({pokemon}) => (
    <div className={styles.basicInfo}>
        <h2>Basic Info</h2>
        <p>name: {pokemon.name}</p>
        <p>height: {pokemon.height}</p>
        <p>weight: {pokemon.weight}</p>
    </div>
);

const Abilities = ({abilities}) => {
    return(
        <div className={styles.abilities}>
            <h2>Abilities</h2>
            <ul>
                {abilities.map((ability) => (
                    <li>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    )
}



export default PokemonInfoView;