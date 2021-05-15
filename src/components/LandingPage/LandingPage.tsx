import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='signup'>
      {/* <img>LOGO</img> */}
      <Link to="/register">
        <button className='signup__btn btn'>Sign up now</button> 
      </Link>
    </div>
  )

}

export default LandingPage