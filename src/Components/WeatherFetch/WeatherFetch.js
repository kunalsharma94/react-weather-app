import React from 'react';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import classes from './WeatherFetch.module.css';

const WeatherFetch = (props) => {

    const { city, setWeather, updateCity, data } = props || {};

    const api = {
        key: '6feec7b03cc2452442e22fbacf6a73df',
        base: 'http://api.openweathermap.org/data/2.5/weather'
    };

    const searchCity = () => {

        fetch(
            `${api.base}?q=${city}&appid=${api.key}&units=metric`)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
            })
    }

    const dateBuilder = (d) => {
        let months = ["Janury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return (
        <>
            <Form updateCity={updateCity} city={city} searchCity={searchCity} />
            {data.cod === 200 ?

                <>
                    { data.main ?
                        <div className={classes.WheaterSection}>
                            <div className={classes.LocationSection}>
                                <p>{data?.name}, {data?.sys.country}</p>
                                <span>{dateBuilder(new Date())}</span>
                            </div>
                            <div className={classes.WeatherBox}>
                                <p className={classes.Temp}>{Math.round(data?.main.temp)}&deg; C</p>
                                <p className={classes.Weather}>{data?.weather[0].main}</p>
                                <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                                    alt="Weather Icon" />
                            </div>
                        </div>
                        : null}
                </>
                :
                null
            }
        </>
    );
}



const mapStateToProps = (state) => {
    return {
        city: state.city,
        data: state.weather,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateCity: (event) => dispatch({ type: 'SEARCH_CITY', city: event.target.value }),
        setWeather: (data) => dispatch({ type: 'SAVE_DATA', data: data }),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherFetch);

