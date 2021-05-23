import React, { FC, FormEvent } from 'react';
import Form from '../Form/Form';
import DaysAndTime from '../DaysAndTime/DaysAndTime';
import { RegistrationProps } from '../../interfaces/interfaces';
import { IoArrowBackSharp } from 'react-icons/io5';
import OriginDestination from '../OriginDestination/OriginDestination';
import { postUserInfo, postRouteData } from '../../apiCalls';



const Registration: FC<RegistrationProps> = (props) => {
  const { name, setName, email, setEmail,
    page, setPage, make, setMake, model, setModel, year, setYear, origin,
    setOrigin, destination, setDestination, departTime, setDepartTime, days, setDays,
    password, setPassword, bio, setBio, setIsLoggedIn, currentUserId, setCurrentUserId } = props;

  const progress = {
    transform: `scaleX(.${page * 20})`
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (page === 2) {
      const userInfo = {
        email,
        password,
        fullname: name,
        bio,
        make,
        model,
        year
      }
      postUserInfo(userInfo)
        .then(response => setCurrentUserId(response.data.id))
    }
    if (page === 4) {

      const routeData = {
        user_id: currentUserId,
        origin,
        destination,
        departure_time: departTime,
        days: Object.keys(days).filter(el => days[el] === true)
      }
      console.log(routeData)
      postRouteData(routeData)
        .then(() => setIsLoggedIn(true))
      return
    }
    setPage(page + 1);
  }

  const toggleView = page > 0 ? 'registration__back-btn btn' : 'registration__back-btn__hidden btn';

  return (
    <form className="registration" onSubmit={e => handleSubmit(e)}>
      <button className={toggleView} type="button" onClick={() => setPage(page - 1)}>
        <IoArrowBackSharp /> Back
      </button>
      {page === 0 &&
        <Form
          header="Name"
          inputs={[{ property: name, method: setName, placeholder: 'Name' },
          { property: email, method: setEmail, placeholder: 'Email', type: 'email' },
          { property: password, method: setPassword, placeholder: 'Password', type: 'password' }]}
        />
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
        <DaysAndTime property={departTime} method={setDepartTime} setDays={setDays} days={days} />
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