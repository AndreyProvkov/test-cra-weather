import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '411a5327295aa3c0343d2206a3d4bd81';

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  msToDate(sec) {
      const ms = sec * 1000;
      let date = new Date();
      date.setTime(ms);
      return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  gettingWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    
    if (city) {
      const api_url_geocoding = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
      const dataGeocoding = await api_url_geocoding.json();

      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataGeocoding[0].lat}&lon=${dataGeocoding[0].lon}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: this.msToDate(data.sys.sunrise),
        sunset: this.msToDate(data.sys.sunset),
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'Enter city'
      });
    }
  } 

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
          />
      </div>
    )
  }
}

export default App;
