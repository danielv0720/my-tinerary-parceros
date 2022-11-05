import React, { useEffect, useState } from 'react'

export default function Scrolltotop() {

  const [scrolltotop,setScrolltotop] = useState(false)

useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
      setScrolltotop(true)
    }else{
      setScrolltotop(false)
    }
  })
},[])

const scrollUp=() =>{
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

  return (
  <>
    {scrolltotop &&(
      <button style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        height: "50px",
        width:"50px",
        fontSize:"50px"
      }}
      onClick={scrollUp}>^</button>
    )}
</>
    )
    }
    


