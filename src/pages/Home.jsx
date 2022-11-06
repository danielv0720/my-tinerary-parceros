import React from 'react'


import '../App.css'
import CallToAction from '../components/CallToAction'


import Header from '../components/Header'
import Home2 from '../components/Home2/Home2'


const Home = () => {
  const img1 = "https://assets.weforum.org/global_future_council/image/iaqsVsnxTVwW8ct0Bq9Q-M5UnTcKgpMvuuxea3rX3Qk.jpeg"
  const img2 = "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg"
  return (
    <>
     
    <div className="w-100 h-100 top-0">
    <Header />

      <div className="container-home1 grow">
        <h2 className="size-35p title-question" >What are you looking for?</h2>
        <div className="buttons-redirect d-flex center row gap-15">
          <div className="img-btn d-flex column gap-5">
            <img className="img-link" src={img1} alt="cities"/>
            <CallToAction path="/cities" message="Go to Cities" />
          </div>
          <div className="img-btn d-flex column gap-5">
            <img className="img-link" src={img2} alt="hotels"/>
            <CallToAction path="/hotels" message="Go to Hotels" />
          </div>
        </div>
      </div>
    </div>
    <div className="home2 w-100 d-flex center align-center hidden">
        <Home2/>
    </div>
    </>
  )
}

export default Home