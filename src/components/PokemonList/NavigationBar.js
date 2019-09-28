import React from 'react'

import styles from './PokemonList.module.css';

const NavigationBar = ({navigation}) => (
    <div className={styles.navigationBarContainer}>
        <div>
            <button onClick={navigation.firstPage}>
                first page
            </button>
            <button onClick={navigation.prevPage}>
                prev page 
            </button>
        </div>
        <div>
            <button onClick={navigation.nextPage}>
                next page
            </button>
            <button onClick={navigation.lastPage}>
                last page
            </button>
        </div>
    </div>
);

export default NavigationBar;