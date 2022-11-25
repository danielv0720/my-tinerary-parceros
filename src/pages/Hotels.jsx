import React, {useEffect, useState}  from "react";

import Card from "../components/Card/Card"
import '../pages/Cities.css'
import "../App.css";
/* import axios from "axios";
import { URL_API } from "../api/url"; */
import hotelsActions from "../redux/actions/hotelsAction"; 
import { useDispatch, useSelector } from "react-redux";

const Hotels = () => {
    const [ inputValue, setInputValue ] = useState('')
    const [ optionValue, setOptionValue ] = useState('')


    const dispatch = useDispatch()
    const { getHotels } = hotelsActions  
    const stateHotels = useSelector(state => state.hotels.hotels)

    let dataValues = {
      input: inputValue,
      select: optionValue
    }


  useEffect(()=>{
    dispatch(getHotels(dataValues))
  },[inputValue, optionValue])
 
  return (
   
      <div className="w-100 cities d-flex align-center grow column" >
       <div className="container-inputs p-10">
          <div className="d-flex center gap-5">
            <select name="select" id="" onChange={ (e) => setOptionValue(e.target.value)}>
              <option value="Order by">Order By</option>
              <option value="Asc">Asc</option>
              <option value="Desc">Desc</option>
            </select>
          </div>
          <div className="d-flex gap-5">
            <input type="text" name="search" id="search" placeholder='Search' onChange={(e) => setInputValue(e.target.value)} />
          </div>
       </div> 
       <div className="cards">
        {stateHotels.map((hotel, index) => { 
           return <Card img={hotel.photo[0]} name={hotel.name} key={index} path={`/hotels/${hotel._id}`} />
        } )}
      </div> 
    </div>
   
   
  );
};

export default Hotels;
