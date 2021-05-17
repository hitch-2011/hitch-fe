import React, { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from '../Registration/Registration';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Menu from '../Menu/Menu';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState(0);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departTime, setDepartTime] = useState('08:00');
  const [days, setDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  });
  const [bio, setBio] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const formProps = {name, setName, email, 
    setEmail, page, setPage, make, setMake, model, setModel, year, setYear, origin, 
    setOrigin, destination, setDestination, days, setDays, departTime, setDepartTime, 
    password, setPassword, bio, setBio
  };

  const toggleMenu = () => {
    console.log('es')
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="app">
      <h1 className="app__header">HITCH</h1>
      <div className="hamburger" onClick={toggleMenu}><HiOutlineMenuAlt2 /></div>
      <Switch>
        <Route 
          exact path="/"
          render={() => <LandingPage />}
          />
        <Route
          exact path="/register"
          render={() =>  <Registration {...formProps}/>}
          />
      </Switch>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
    </div>
  );
}
export default App;
