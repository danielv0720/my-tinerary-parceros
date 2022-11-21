import { createReducer } from "@reduxjs/toolkit";
import cityActionFilter from "../actions/cityActionFilter";


const { getcitiesfilter} = cityActionFilter;

const initialState = {
  listacitiesfilter:[]
}

const cityReducerFilter = createReducer(initialState,(buider)=>{

  buider.addCase(getcitiesfilter,(state,action) =>{
console.log(action);
  })
})

export default cityReducerFilter