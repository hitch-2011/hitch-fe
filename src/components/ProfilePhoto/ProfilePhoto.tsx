import userPhoto1 from '../../assets/images/user-1.png';
import userPhoto2 from '../../assets/images/user-2.png';
import userPhoto3 from '../../assets/images/user-3.png';
import userPhoto4 from '../../assets/images/user-4.png';
import { useEffect, useState } from 'react'

const ProfilePhoto = () => {

  const [randomPhoto, setRandomPhoto] = useState('')

  useEffect(() => {
    let number = Math.floor(Math.random() * 4) + 1
    if (number === 1) {
      setRandomPhoto(userPhoto1)
    } else if (number === 2) {
      setRandomPhoto(userPhoto2)
    } else if (number === 3) {
      setRandomPhoto(userPhoto3)
    } else if (number === 4) {
      setRandomPhoto(userPhoto4)
    } 
  }, [])

  return (
    <div>
      <img src={randomPhoto} className='photo'/>
    </div>
  )
}

export default ProfilePhoto 