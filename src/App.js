import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import * as React from 'react';
import ReactDOM from 'react-dom';
import CityCard from './components/CityCard';
import axios from "axios";
import { useState, useEffect} from "react";

function App() {
  const token = "b41e25882385ee402f115680cb550c54"

  // const [cityNames, setCityNames] = useState([]); //Para quando eu tiber backend, esperar request do back chegar apra rodar front
  const cityNames = ["São Paulo","Vitória"];
  let promises = [];
  const [getCities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    for (let city of cityNames) {
    promises.push(
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b41e25882385ee402f115680cb550c54`)
      .then((response) => {
        getCities.push(response.data);
      })
    );
  }
  setCities(getCities);
  Promise.all(promises).then(() => setLoading(false));
  
}, [] );

if (isLoading) {
  return <div className="cityContainer">Loading...</div>;
}
  
  
  
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
        {getCities.map((city) => (
          <CityCard key={`city__${city.id}`} name={city.name}>
            {city.main.temp-273.15}
            {city.main.humidity}
          </CityCard>
        ))}

      </div>
    </div>
  );
}

export default App;
