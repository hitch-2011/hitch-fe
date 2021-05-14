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
                <>
                <Registration {...formProps}/> 
                  {page === 0 && 
                    <Form 
                      header="Name"
                      page={page}
                      setPage={setPage}
                      inputs={[{property: name, method: setName, placeholder: 'Name'}, 
                      {property: username, method: setUsername, placeholder: 'Username'}, 
                      {property: email, method: setEmail, placeholder: 'Email'}]} 
                    />
                  }
                  {page === 1 &&
                    <Form 
                      header="Car Details"
                      page={page}
                      setPage={setPage}
                      inputs={[{property: make, method: setMake, placeholder: 'Make'}, 
                      {property: model, method: setModel, placeholder: 'Model'}, 
                      {property: year, method: setYear, placeholder: 'Year'}]} 
                    />
                  }
                  {page === 2 &&
                    <Form 
                      header="Origin and Destination"
                      page={page}
                      setPage={setPage}
                      inputs={[{property: origin, method: setOrigin, placeholder: 'Origin'}, 
                      {property: destination, method: setDestination, placeholder: 'Destination'}]} 
                    />
                  }
                  {page === 3 &&
                    <Form 
                      header="Days and Time"
                      page={page}
                      setPage={setPage}
                      inputs={[{property: destination, method: setDestination, placeholder: 'Destination'}]} 
                    />
                  }
                </>
              )
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
