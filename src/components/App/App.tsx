import React, { useState } from 'react';
import Form from '../Form/Form'
// import logo from './logo.svg';
import './App.css';

const App = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <Form 
        header="name"
        inputs={[{property: name, method: setName, placeholder: 'name'}, 
        {property: username, method: setUsername, placeholder: 'username'}, 
        {property: email, method: setEmail, placeholder: 'email'}]} 
      />
    </div>
  );
}

export default App;
