import { Link } from 'react-router-dom'

const DetailedRoute = () => {
  return (
    <div>
      <section>
        // user photo and back button 
        <Link to='matches'>
          {/* <img src=''/> */}
          <p> <- </p>
        </Link>
        <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fhowto_css_image_avatar.asp&psig=AOvVaw2RdjKO-ExUR_YPaoMiw0cK&ust=1621281826441000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOC17dj_zvACFQAAAAAdAAAAABAD' />
      </section>
      <section>
        // ride details 
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