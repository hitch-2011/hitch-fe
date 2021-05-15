import React, { useState } from 'react';
import Form from '../Form/Form';
import LandingPage from '../LandingPage/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

  return (
    <div className="app">
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
                <h1 className="app__header">HITCH</h1>
                // {page === 0 && 
                //   <Form 
                //     header="Name"
                //     page={page}
                //     setPage={setPage}
                //     inputs={[{property: name, method: setName, placeholder: 'Name'}, 
                //     {property: username, method: setUsername, placeholder: 'Username'}, 
                //     {property: email, method: setEmail, placeholder: 'Email'}]} 
                //   />
                // }
                // {page === 1 &&
                //   <Form 
                //     header="Car Details"
                //     page={page}
                //     setPage={setPage}
                //     inputs={[{property: make, method: setMake, placeholder: 'Make'}, 
                //     {property: model, method: setModel, placeholder: 'Model'}, 
                //     {property: year, method: setYear, placeholder: 'Year'}]} 
                //   />
                // }
                // {page === 2 &&
                //   <Form 
                //     header="Origin and Destination"
                //     page={page}
                //     setPage={setPage}
                //     inputs={[{property: origin, method: setOrigin, placeholder: 'Origin'}, 
                //     {property: destination, method: setDestination, placeholder: 'Destination'}]} 
                //   />
                // }
                // {page === 3 &&
                //   <Form 
                //     header="Days and Time"
                //     page={page}
                //     setPage={setPage}
                //     inputs={[{property: destination, method: setDestination, placeholder: 'Destination'}]} 
                //   />
                // }
              )
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
