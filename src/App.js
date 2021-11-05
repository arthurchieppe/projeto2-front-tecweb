import './App.css';
import City from './components/City';
import ButtonAppBar from './components/ButtonAppBar';
import * as React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const lsCities = [
    {
      id: 1,
      name: "São Paulo",
      temperature: "30°",
      humidity: "50%",
    },
    {
      id: 2,
      name: "Vitória",
      temperature: "24°",
      humidity: "80%",
    }
  ];

  
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
      </header>
      <div className="cityContainer">
        {lsCities.map((city) => (
          <City key={`city__${city.id}`} name={city.name}>
            {city.temperature}
            {city.humidity}
          </City>
        ))}

      </div>
    </div>
  );
}

export default App;
