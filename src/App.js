import React from 'react';
import Header from './Components/Header/Header';
import WeatherFetch from './Components/WeatherFetch/WeatherFetch';
import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <WeatherFetch />
    </div>
  );
}

export default App;
