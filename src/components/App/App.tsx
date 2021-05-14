import React, { useState } from 'react';
import Form from '../Form/Form'

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
    <div className="App">
      {page === 0 && 
        <Form 
          header="name"
          page={page}
          setPage={setPage}
          inputs={[{property: name, method: setName, placeholder: 'name'}, 
          {property: username, method: setUsername, placeholder: 'username'}, 
          {property: email, method: setEmail, placeholder: 'email'}]} 
        />
      }
      {page === 1 &&
        <Form 
          header="car"
          page={page}
          setPage={setPage}
          inputs={[{property: make, method: setMake, placeholder: 'make'}, 
          {property: model, method: setModel, placeholder: 'model'}, 
          {property: year, method: setYear, placeholder: 'year'}]} 
        />
      }
      {page === 2 &&
        <Form 
          header="origin and destination"
          page={page}
          setPage={setPage}
          inputs={[{property: origin, method: setOrigin, placeholder: 'origin'}, 
          {property: destination, method: setDestination, placeholder: 'destination'}]} 
        />
      }
      {page === 3 &&
        <Form 
          header="days and time"
          page={page}
          setPage={setPage}
          inputs={[{property: destination, method: setDestination, placeholder: 'destination'}]} 
        />
      }
    </div>
  );
}

export default App;
