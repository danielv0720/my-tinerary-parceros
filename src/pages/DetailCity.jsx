import React from 'react'
import { useParams } from 'react-router-dom'
import cityData from '../data2/cityData'

import './DetailCity.css'
import '../App.css'

const DetailCity = () => {

  const { idCity } = useParams()
  console.log(idCity)

  const filter = cityData.find(data => data.id === idCity)
  console.log(filter)
  return (
    <div className="d-flex center align-center w-100 h-100vh">
        <div className="cardDetail shadow1">
            <img  className='img-detail' src={filter.photo[0]} alt='imagen' />
            <h3>{filter.name}</h3>
            <p><b>Continent: </b> {filter.continent}</p>
            <p><b>Population: </b> {filter.population}</p>
        </div>
    </div>
  )
}

export default DetailCity










/* 
    <div className="d-flex center align-center w-100 h-100vh">
        <div className="cardDetail">
            <img  className='img-detail' src={filter.photo} alt='imagen' />
            <h3>algo que se yo</h3>
            <p><b>Continent: </b> dsadkasdas</p>
            <p><b>Population: </b> sdadkasdaksdapo</p>
        </div>
    </div>

*/