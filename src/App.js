import './App.css';
import NavBar from './components/NavBar.js'
import CountriesList from './components/CountriesList.js'
import CountryDetails from './components/CountryDetails.js'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
            Learn React
        <NavBar />
        <div className="container">
          <div className="row">
            <CountriesList list={countries} />
            <CountryDetails />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
