import React from 'react'

import './Card.css'


const Card = (props) => {
    let { img , name } = props

    return (
        <div className='card-citie-hotel shadow1'>
            <img src={img} alt={name} className='img-card'/>
            <h4 className="title-card">{name}</h4>
            <button className='btn-card'>More info</button>
        </div>
    )
}



export default Card