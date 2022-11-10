import React, { useState } from 'react'


import '../App.css' 
import '../pages/Cities.css'

import Checkbox from '../components/Checkbox/Checkbox'

import cityData from '../data2/cityData.js'
import Card from '../components/Card/Card'



const Cities = () => {


  const continent = cityData.map( city => {return city.continent})
  const continentClean = new Set(continent)
  const arrContinent = Array.from(continentClean)
  
  const cities = cityData

  const [ valueCheck, setValueCheck ] = useState([])
  const [ valueSearch, setValueSearch ] = useState('')

  let onHandlerChecked = e => {
    const checked = e.target.checked
    const value = e.target.value

   
    console.log(valueCheck)
    if (checked === true) {
      setValueCheck([...valueCheck, value])
      } else if (checked === false) {
        setValueCheck(valueCheck.filter(item => item !== value))
      }
  }

  let handleChangeSearch = e => {
      setValueSearch(e.target.value)
  }
  console.log(valueSearch)

console.log(valueCheck) 
 
  return (
    <div className="w-100 cities d-flex align-center grow column" >
       <div className="container-inputs p-10">
          <div className="d-flex center gap-5">
              {arrContinent.map(item => <Checkbox onChange={onHandlerChecked} continent={item} /> )}
          </div>
          <div className="d-flex gap-5">
            <input type="text" name="search" id="search" placeholder='Search' onChange={handleChangeSearch} />
            <button className='btn-search' >Search</button>
          </div>
       </div> 
       <div className="cards">
        {cities.map(city => { 
           return <Card img={city.photo} name={city.name} key={city.id} idCity={city.id} />
        } )}
      </div> 
    </div>
   
  )
}

export default Cities