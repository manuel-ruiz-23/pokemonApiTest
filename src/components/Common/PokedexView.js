import React from 'react';

const PokedexView = ({children}) => (
    <div style={styles.pokedex}>
        <div style={styles.screen}>
            {children}
        </div>
    </div>
);

const styles = {
    pokedex: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        backgroundColor: '#C2091B',
        width: '600px',
        padding: '32px',
        margin: '16px',
        borderRadius: '16px'
    },
    screen:{
        width: '500px',
        backgroundColor: '#F5F5F5',
        borderRadius: '4px'
    }
}
export default PokedexView;