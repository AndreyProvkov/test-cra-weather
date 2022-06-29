import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App;
