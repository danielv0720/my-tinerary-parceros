import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Desplazar(props) {
  let { next } = props
  let { prev } = props


  return (
    <>
      <div className='container_flecha1' >
        <FaAngleLeft className='flechai'  alt="flechaPrev" onClick={prev} />
        {props.children}
        <FaAngleRight className='flechad'  alt="flechaNext" onClick={next} />
      </div>
    </>
  )
}
