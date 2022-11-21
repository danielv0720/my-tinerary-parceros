import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_API } from "../../api/url";

const getcities = createAsyncThunk('getcities',async()=>{
const res = await axios.get(`${URL_API}`)
console.log(res);

// return {
//   listacities :res.data.response
// }
})


const cityAction ={
  getcities
}

export default cityAction