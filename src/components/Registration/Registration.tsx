import React, { FC, FormEvent, useState } from 'react';
import Form from '../Form/Form';
import DaysAndTime from '../DaysAndTime/DaysAndTime';
import { RegistrationProps } from '../../interfaces/interfaces';
import { IoArrowBackSharp } from 'react-icons/io5';
import OriginDestination from '../OriginDestination/OriginDestination';
import { postUserInfo, postRouteData } from '../../apiCalls';
import Error from '../Error/Error'



const Registration: FC<RegistrationProps> = (props) => {
  const [error, setError] = useState(false)
  const { name, setName, email, setEmail,
    page, setPage, make, setMake, model, setModel, year, setYear, origin,
    setOrigin, destination, setDestination, departTime, setDepartTime, days, setDays,
    password, setPassword, bio, setBio, setIsLoggedIn, currentUserId, setCurrentUserId } = props;

  const progress = {
    transform: `scaleX(.${page * 20})`
  };

  const daysSelected = Object.values(days).some(day => day === true);
  
  const userInfo = {
    email,
    password,
    fullname: name,
    bio,
    make,
    model,
    year
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(page < 2) {
      setPage(page + 1);
    }
    if (page === 2) {
      postUserInfo(userInfo)
        .then(response => {
          setCurrentUserId(response.data.id);
          setPage(page + 1);
          setError(false);
        })
        .catch(err => {
          console.log(err)
          setError(true);
          setPage(0);
        })
      return
    }
    if(page === 4 && !daysSelected) {
      setError(!daysSelected)
      return
    }
    if (page === 4) {
      const routeData = {
        user_id: currentUserId,
        origin,
        destination,
        departure_time: departTime,
        days: Object.keys(days).filter(el => days[el] === true)
      }
      postRouteData(routeData)
        .then(() => setIsLoggedIn(true))
      return
    }
    setPage(page + 1)
  }

  const toggleView = page > 0 ? 'registration__back-btn btn' : 'registration__back-btn__hidden btn';

  return (
    <form className="registration" onSubmit={e => handleSubmit(e)}>
      <button className={toggleView} type="button" onClick={() => setPage(page - 1)}>
        <IoArrowBackSharp /> Back
      </button>
      {page === 0 &&
        <>
        <Form
          header="Name"
          inputs={[{ property: name, method: setName, placeholder: 'Name' },
          { property: email, method: setEmail, placeholder: 'Email', type: 'email' },
          { property: password, method: setPassword, placeholder: 'Password', type: 'password' }]}
        />
        {error && <Error message={'This email is already registered'}/>}
        </>
      }
      {page === 1 &&
        <div className="bio">
          <h1 className="bio__header">About Me</h1>
          <textarea
            placeholder="Add bio here"
            className="bio__text"
            value={bio}
            onChange={event => setBio(event.target.value)}
          />
        </div>
      }
      {page === 2 &&
        <Form
          header="Car Details"
          inputs={[{ property: make, method: setMake, placeholder: 'Make' },
          { property: model, method: setModel, placeholder: 'Model' },
          { property: year, method: setYear, placeholder: 'Year' }]}
        />
      }
      {page === 3 &&
        <OriginDestination
          setOrigin={setOrigin}
          origin={origin}
          destination={destination}
          setDestination={setDestination}
        />
      }
      {page === 4 &&
        <DaysAndTime property={departTime} method={setDepartTime} setDays={setDays} days={days} error={error} />
      }
      <div className="registration__progress">
        <div className="progress-bar" style={progress} />
        <button
          className="registration__button btn"
          type="submit"
        >{page === 4 ? 'Submit' : 'Next'}</button>
      </div>
    </form>
  )
}

export default Registration;