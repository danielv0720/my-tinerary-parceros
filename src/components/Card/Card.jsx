import React from 'react'
import { Link as LinkDetail } from 'react-router-dom'
import './Card.css'


const Card = (props) => {
    let { img , name, path } = props


    return (
        <div className='card-citie-hotel shadow1'>
            <img src={img} alt={name} className='img-card'/>
            <h4 className="title-card">{name}</h4>
            <LinkDetail to={path} className='btn-card'>More info</LinkDetail>
        </div>
    )
}



export default Card