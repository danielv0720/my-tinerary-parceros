import React from 'react'
import '../App.css'
import CallToAction from './CallToAction'

import CoverTwo from '../svg/CoverTwo'
const Header = () => {
  return (
    <div className="cover d-flex row center" >
        <div className="container-title">
          <h1 className="title-cover" >My Tinerary</h1>
          <p className="text-center size-30p fw-500 paragraph-cover" >In "My Itinerary" find you the best activities and events in the place that wish you</p>
          <div className="container-calls">
        <CallToAction path="/cities" message="Go to Cities"  colors="bg-blue" />
        <CallToAction path="/hotels" message="Go to Hotels"  colors="white-border_blue" />
        </div>
        </div>
        <CoverTwo/>
      </div>

      
  )
}

export default Header