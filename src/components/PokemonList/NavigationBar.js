import React from 'react';

import Button from '../Common/Button';
import styles from './PokemonList.module.css';

const NavigationBar = ({navigation}) => (
    <div className={styles.navigationBarContainer}>
        <div>
            <Button label="first" handleClick={navigation.firstPage} />
            <Button label="prev" handleClick={navigation.prevPage} />
        </div>
        <div>
            <Button label="next" handleClick={navigation.nextPage} />
            <Button label="last" handleClick={navigation.lastPage} />
        </div>
    </div>
);

export default NavigationBar;