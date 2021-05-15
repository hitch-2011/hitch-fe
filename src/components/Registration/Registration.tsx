import React, {Dispatch, SetStateAction, FC, FormEvent} from 'react';
import Form from '../Form/Form';
import DaysAndTime from '../DaysAndTime/DaysAndTime';
import { RegistrationProps } from '../../interfaces/interfaces'



const Registration: FC<RegistrationProps> = (props) => {
  const { name, setName, username, setUsername, email, setEmail,
    page, setPage, make, setMake, model, setModel, year, setYear, origin, 
    setOrigin, destination, setDestination, departTime, setDepartTime, days, setDays,
    password, setPassword } = props;

  const progress = {
    transform: `scaleX(.${page * 25})`
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(page + 1)
  }

  return(
    <form onSubmit={e => handleSubmit(e)} className="registration">
      {page === 0 && 
          <Form 
            header="Name"
            inputs={[{property: name, method: setName, placeholder: 'Name'}, 
            {property: username, method: setUsername, placeholder: 'Username'}, 
            {property: email, method: setEmail, placeholder: 'Email', type: 'email'},
            {property: password, method: setPassword, placeholder: 'Password', type: 'password'}]} 
          />
        }
        {page === 1 &&
          <Form 
            header="Car Details"
            inputs={[{property: make, method: setMake, placeholder: 'Make'}, 
            {property: model, method: setModel, placeholder: 'Model'}, 
            {property: year, method: setYear, placeholder: 'Year'}]} 
          />
        }
        {page === 2 &&
          <Form 
            header="Origin and Destination"
            inputs={[{property: origin, method: setOrigin, placeholder: 'Origin'}, 
            {property: destination, method: setDestination, placeholder: 'Destination'}]} 
          />
        }
        {page === 3 &&
          <DaysAndTime property={departTime} method={setDepartTime} setDays={setDays} days={days}/>
        }
        {page === 4 && 
          <div className="bio">
            <h1 className="bio__header">About Me</h1>
            <textarea placeholder='Write your about me here' className="bio__text">

            </textarea>
          </div>
        }
        <div className="registration__progress">
          <div className='progress-bar' style={progress}/>
          <button
          className="registration__button btn"
          type='submit'
          >Next</button>
        </div>
      </form>
  )
}

export default Registration;