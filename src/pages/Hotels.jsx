import React, {useEffect, useState}  from "react";

import Card from "../components/Card/Card"
import '../pages/Cities.css'
import "../App.css";
import axios from "axios";
import { URL_API } from "../api/url";


const Hotels = () => {
  const [data, setData] = useState([])
    const [ inputValue, setInputValue ] = useState('')
    const [ optionValue, setOptionValue ] = useState('')
    
  useEffect(()=>{
    fetchApi()
  },[inputValue, optionValue])

    
    let fetchApi = () =>{
      axios.get(`${URL_API}/api/hotels?name=${inputValue}&order=${optionValue}`)
        .then(res => {
            console.log(res)
            setData(res.data.response)
            console.log(data)
        })
        .catch(err => console.log(err))
      }
     

    
    console.log(inputValue)
    console.log(optionValue)

  return (
   
      <div className="w-100 cities d-flex align-center grow column" >
       <div className="container-inputs p-10">
          <div className="d-flex center gap-5">
            <select name="select" id="" onChange={ (e) => setOptionValue(e.target.value) } >
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
        {data.map(hotel => { 
           return <Card img={hotel.photo} name={hotel.name} key={hotel.id} idCity={hotel.id} />
        } )}
      </div> 
    </div>
   
   
  );
};

export default Hotels;
