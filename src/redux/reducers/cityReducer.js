import { createReducer } from "@reduxjs/toolkit";
import cityAction from "../actions/cityAction";


const { getcities} = cityAction;

const initialState = {
  listacities:[]
}

const cityReducer = createReducer(initialState,(buider)=>{

  buider.addCase(getcities,(state,action) =>{
console.log(action);
  })
})

export default cityReducer