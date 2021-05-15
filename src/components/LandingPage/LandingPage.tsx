import { Link } from 'react-router-dom';
import './LandingPage.scss'

const LandingPage = () => {
  return (
    <div className='signup'>
      {/* <img>LOGO</img> */}
      <Link to="/register">
        <button className='signup__button'>Sign up now</button> 
      </Link>
    </div>
  )

}

export default LandingPage