import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {URL_API} from "../../api/url"

let rutaBase = `${URL_API}/api/cities?`;

const getcitiesfilter = createAsyncThunk('obtenercitiesfilter',async()=>{
const res = await axios.get(rutaBase)
console.log(res);

return {
  listacitiesfilter :res.data
}
})


const cityActionFilter ={
  getcitiesfilter
}

export default cityActionFilter