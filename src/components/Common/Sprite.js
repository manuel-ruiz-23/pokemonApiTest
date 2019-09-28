/*
this is in a commons forlder because i intent to use it in PokemonList and PokemonInfo 
*/
import React from 'react';

import styles from './Sprite.module.css';

const Sprite = ({url , label}) => {

    return(
        <div className={styles.sprite}>
            <img src={url} alt={label} />
            <p>{label}</p>
        </div>
    )
};

export default Sprite;