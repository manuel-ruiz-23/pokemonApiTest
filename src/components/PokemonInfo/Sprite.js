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