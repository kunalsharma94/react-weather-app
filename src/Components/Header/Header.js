import React from 'react';
import classes from './Header.module.css';
const Header = () => {
    return (
        <header className={classes.Header}>
            <h1>Weather Checker</h1>
            <span>(Enter city name to get started)</span>
        </header>
    );
}

export default Header;