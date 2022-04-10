import React from 'react';
import classes from './Form.module.css';

const Form = (props) => {

    const { city, searchCity, updateCity } = props || {};

    return (
        <div className={classes.Form}>
            <input type="text" onChange={updateCity} value={city} placeholder="Enter a valid city name..." />
            <button onClick={searchCity} >Search</button>
        </div>
    );
}

export default Form;