import React, { useState } from 'react'
import NewHotel from './NewHotel'
import NewHotelButton from './NewHotelButton'


export default function NewHotelCreate() {

const [inputText,setInputText]= useState('')

  const handlendInputchange= (e) =>{
    const text = e.target.value
  setInputText(text)
  console.log(inputText);
  
  }

  return (
    <>
    <div className='create_form'>
    <NewHotel onChange={handlendInputchange} placeholder='Holtel Name' ></NewHotel>
    <NewHotel placeholder='Photo (URL)' ></NewHotel>
    <NewHotel placeholder='Capacity' ></NewHotel>
    <NewHotel placeholder='City' ></NewHotel>
    <NewHotelButton></NewHotelButton>
      </div>

    
    
    </>
  )
}
