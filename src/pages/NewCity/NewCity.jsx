import React, { useState } from 'react'

import '../../App.css'
import ButtonCity from '../../components/ButtonCity/ButtonCity'
import './NewCity.css'

const NewCity = () => {

  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [population, setPopulation] = useState(0)
  const [continent, setContinent] = useState('')

  let storage = (key, value) => {
    localStorage.setItem(key, value)
  }

    let dataNewCity = {
      name: '',
      photo: '',
      population: 0,
      continent: ''
    }

    

    let handlerClickForm = e => {
        e.preventDefault()

        dataNewCity = {
          name : name,
          photo : photo,
          population : population,
          continent : continent
        }

        console.log(dataNewCity)

        storage('Name', name)
        storage('Photo', photo)
        storage('Population', population)
        storage('Continent', continent)
      }

  return (
    <div className='d-flex w-100 h-100vh space-evenly align-center'>
      <form className="form-city" onSubmit={handlerClickForm}>
        <input  onChange={(e) => setName(e.target.value)} className='input-text' type="text" name="name" value={name} placeholder='Name'/>
        <input  onChange={(e) => setPhoto(e.target.value)} className='input-text' type="text" name="photo" value={photo}  placeholder='Photo(URL)'/>
        <input  onChange={(e) => setPopulation(e.target.value) } className='input-text' type="text" name="population" value={population}  placeholder='Population'/>
        <input  onChange={(e) => setContinent(e.target.value) } className='input-text' type="text" name="continent" value={continent} placeholder='Continent'/>
        <div className="container-button">
          <ButtonCity/> 
        </div>
      </form>
      <div className="city-created">
        <h2>City Created Dinamic</h2>
      </div>
    </div>
  )
}

export default NewCity