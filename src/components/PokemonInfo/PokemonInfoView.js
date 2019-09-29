import React from 'react';
import Sprite from './Sprite';

import { PokemonContext } from './PokemonContext';

import styles from './PokemonInfoView.module.css';

//Here i want use the context api with a PokemonContext
const PokemonInfoView = ({ pokemon }) => {

    return(
        <div className={styles.infoContainer}>
            <BasicInfo />
            <Abilities abilities={pokemon.abilities} /> 
            <Galerie />
        </div>
    )
};

const Galerie = () => (
    <PokemonContext.Consumer>
        {({ sprites }) => (
            <div className={styles.galerie}>
                <Sprite url={sprites.front_default} label="Front default" />
                <Sprite url={sprites.back_default} label="Back default" />
            </div>
        )}
    </PokemonContext.Consumer>
);

const BasicInfo = () => (
    <PokemonContext.Consumer>
        {({ name, height, weight }) => (
            <div className={styles.basicInfo}>
                <h2>Basic Info</h2>
                <p>name: {name}</p>
                <p>height: {height}</p>
                <p>weight: {weight}</p>
            </div>
        )}
    </PokemonContext.Consumer>
);

const Abilities = ({abilities}) => (
    <PokemonContext.Consumer>
        {({abilities}) => (
            <div className={styles.abilities}>
                <h2>Abilities</h2>
                <ul>
                    {abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
            </div>
        )}   
    </PokemonContext.Consumer>
);




export default PokemonInfoView;