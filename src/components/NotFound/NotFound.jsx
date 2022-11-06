import React from 'react'
import CallToAction from '../CallToAction'

export default function NotFound(props) {
  const img1 = "https://assets.weforum.org/global_future_council/image/iaqsVsnxTVwW8ct0Bq9Q-M5UnTcKgpMvuuxea3rX3Qk.jpeg"
  const img2 = "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
  
  return (
    <>
    <div className='main_notfound'>
      <h2>Oooops,The page not found</h2>
      {props.children}
     
      <div className="container-home2">
        <div className="buttons-redirect d-flex center row gap-15 card_container">
          <div className="img-btn2 d-flex column gap-5 ">
            
            <CallToAction path="/cities" message="Go to Cities" />
          </div>
          <div className="img-btn2 d-flex column gap-5">
            
            <CallToAction path="/hotels" message="Go to Hotels" />
          </div>
        </div>
      </div>
      </div>
    
    </>

  )
}