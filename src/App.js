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
  const cityNames = ["São Paulo","Vitória", "Campos do Jordao", "Maceio", "Guarapari", "Rio de Janeiro", "Porto Alegre"]; //Muitas cidades para teste
  // const cityNames = ["São Paulo","Vitória"];
  let promises = [];
  const [getCities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    for (let city of cityNames) {
    promises.push(
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then((response) => {
        getCities.push(response.data);
      })
    );
  }
  setCities(getCities);
  Promise.all(promises).then(() => setLoading(false));
  console.log(getCities);
  }, []);

  if (isLoading) {
    return <div className="cityContainer">Loading...</div>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
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
          <CityCard key={`city__${city.id}`} name={city.name}>
            {city.main.temp-273.15}
            {city.main.humidity}
          </CityCard>
        ))}
      </Grid>
    </div>
  );
}

export default App;
