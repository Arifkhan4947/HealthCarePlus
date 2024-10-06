import React, { useState } from 'react'
import {assets} from '../assets/assets'
const MyProfile = () => {

    const [userData, setUserData] = useState({
      name: "Arif khan",
      image: assets.profile_pic,
      email: 'khanarif2738@gmail.com',
      phone: '91 7991518306',
      address: {
        line1: '27th Cross, Gorakhhpur',
        line2: 'Circle, Paryatan Bhawan, India'
      },
      gender: 'Male',
      dob: '2000-09-10'
    })

  return (
    <div>
        
      <img src={userData.image} alt=""/>

    </div>
  )
}

export default MyProfile