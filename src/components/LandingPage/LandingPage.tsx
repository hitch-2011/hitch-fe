import React, { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/landing-logo.svg';

interface LandingPageProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const LandingPage: FC<LandingPageProps> = ({setIsLoggedIn}) => {
  return (
    <div className="signup">
      <img className="signup__logo" src={logo} alt="Two passengers driving in a car" />
      <div className="btn-container">
        <Link to="/register">
          <button className="signup__btn btn">Sign up</button> 
        </Link>
        <button className="login__btn btn" onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    </div>
  )

}

export default LandingPage