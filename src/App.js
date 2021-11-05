import './App.css';
import City from './components/City';
import ButtonAppBar from './components/ButtonAppBar';
import * as React from 'react';
import ReactDOM from 'react-dom';
import CityCard from './components/CityCard';

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
      {/* <CityCard key={`city__${city.id}`} name={city.name}/> */}
      <div className="cityContainer">
        {lsCities.map((city) => (
          <CityCard key={`city__${city.id}`} name={city.name}>
            {city.temperature}
            {city.humidity}
          </CityCard>
        ))}

      </div>
    </div>
  );
}

export default App;
