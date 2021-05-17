import { Link } from 'react-router-dom';
import logo from '../../assets/landing-logo.svg';

const LandingPage = () => {
  return (
    <div className="signup">
      <img className="signup__logo" src={logo} alt="Two passengers driving in a car" />
      <Link to="/register">
        <button className="signup__btn btn">Sign up now</button> 
      </Link>
    </div>
  )

}

export default LandingPage