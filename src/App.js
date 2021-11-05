import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import City from './components/City';

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
        <AppBar/>
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
