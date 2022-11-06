import React from 'react'

export default function Desplazar(props) {
  let { next } = props
  let { prev } = props


  return (
    <>
      <div className='container_flecha1' >
        <img className='flechai' src="images/flechaizq.png" alt="flechaPrev" onClick={prev} />
        {props.children}
        <img className='flechad' src="images/flechader.png" alt="flechaNext" onClick={next} />
      </div>
    </>
  )
}
