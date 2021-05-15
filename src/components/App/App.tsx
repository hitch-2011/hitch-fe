import React, { useState } from 'react';
import Form from '../Form/Form';
import LandingPage from '../LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from '../Registration/Registration';

const App = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [page, setPage] = useState(0)
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const formProps = {
    name,
    setName,
    username, 
    setUsername,
    email, 
    setEmail,
    page, 
    setPage,
    make, 
    setMake,
    model, 
    setModel,
    year, 
    setYear,
    origin, 
    setOrigin,
    destination,
    setDestination
  }

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
