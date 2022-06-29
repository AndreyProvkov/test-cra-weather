import React from 'react';

function Weather(props) {
    return (
        <div>
            { props.city &&
                <div>
                    <p>Location: {props.city}, {props.country}</p>
                    <p>Temp: {props.temp}</p>
                    <p>Sunrise: {props.sunrise}</p>
                    <p>Sunset: {props.sunset}</p>
                </div>
            }
            <p>{props.error}</p>
        </div>
    );
}

export default Weather;