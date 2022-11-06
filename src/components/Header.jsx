import React from 'react'
import '../App.css'

import imgCover from '../../src/img/portada-turismo-removebg-preview.png'
const Header = () => {
  return (
    <div className="cover d-flex row center" >
        <div className="container-title d-flex column center">
          <h1 className="title-cover" >My Itinerary</h1>
          <p className="text-center size-30p fw-500 paragraph-cover" >In "My Itinerary" find you the best activities and events in the place that wish you</p>
        </div>
        <img src={imgCover} alt="cover" className="img-cover" />
      </div>

      
  )
}

export default Header