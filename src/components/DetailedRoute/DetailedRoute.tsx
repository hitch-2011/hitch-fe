import React, {FC, Dispatch, SetStateAction} from 'react';
import { Link } from 'react-router-dom';
import { detailedRouteData } from '../../mockData';
import userPhoto from '../../assets/images/man.png'
import './_DetailedRoute.scss'

// interface DetailedRouteProps {
//   id: string
// }

// const DetailedRoute: FC<DetailedRouteProps> = () => {
const DetailedRoute = () => {
  return (
    <div>
      <section className='header'>
        <Link to='matches'>
          <p> back </p>
        </Link>
        <img className='header__photo' src={userPhoto} />
      </section>
      <hr></hr>
      <section>
      </section>
      <section>
        // origin map 
        // destination map 
      </section>
      <button>
        // Link to user profile? 
        // request a hitch
      </button>
    </div>
  )
}

export default DetailedRoute