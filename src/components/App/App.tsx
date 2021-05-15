import React, { useState } from 'react';
import Form from '../Form/Form';
import LandingPage from '../LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from '../Registration/Registration';

const App = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [page, setPage] = useState(0)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [departTime, setDepartTime] = useState('08:00')
  const [days, setDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false
  })
  const [bio, setBio] = useState('');

  const formProps = {name, setName, username, setUsername, email, 
    setEmail, page, setPage, make, setMake, model, setModel, year, setYear, origin, setOrigin, destination, setDestination, days, setDays, departTime, setDepartTime, password, setPassword, bio, setBio
  };

  return (
    <div className="app">
      <h1 className="app__header">HITCH</h1>
      <BrowserRouter>
        <Switch>
          <Route 
            exact path="/"
            render={() => <LandingPage />}
          />
          <Route
            exact path="/register"
            render={() => {
              return (
                <Registration {...formProps}/>                 
              )
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
