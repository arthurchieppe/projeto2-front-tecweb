import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import * as React from 'react';
import ReactDOM from 'react-dom';
import CityCard from './components/CityCard';
import axios from "axios";
import { useState, useEffect} from "react";
import Grid from '@mui/material/Grid';

function App() {
  const token = "b41e25882385ee402f115680cb550c54"

  // const [cityNames, setCityNames] = useState([]); //Para quando eu tiver backend, esperar request do back chegar apra rodar front
  // const cityNames = ["São Paulo","Vitória", "Campos do Jordao", "Maceio"]; //Muitas cidades para teste
  // const cityNames = ["São Paulo","Vitória"];
  let promises = [];
  const [getCities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const username = "Teste" //Modificar aqui username
  const cityNames = [];
  useEffect(() => {
    axios //Axios para Backend
    .get(`http://127.0.0.1:8000/api/user/${username}/`)
    .then((response) => {
    // console.log(response.data)
    const cityNames = response.data.cities
    for (let city of cityNames) {
    promises.push(
      axios //Axios para API
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then((response) => {
        getCities.push(response.data);
      })
    );
  }
  setCities(getCities);
  Promise.all(promises).then(() => setLoading(false));
  console.log(getCities);
    });
  }, []);

  if (isLoading) {
    return <div className="cityContainer">Loading...</div>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar cityNames={cityNames} username={username}/>
      </header>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        flexWrap="wrap"
        padding={10}

        
      >
        {getCities.map((city) => (
          <CityCard key={`city__${city.id}`} name={city.name} username={username} image={city.weather[0].icon}>
            {city.main.temp-273.15}
            {city.main.temp_max-273.15}
            {city.main.temp_min-273.15}
            {city.main.humidity}
            {city.weather[0].description}
          </CityCard>
        ))}
      </Grid>
    </div>
  );
}

export default App;
