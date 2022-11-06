import { useCallback, useEffect, useState } from 'react'

import "../Carousel/Carousel.css";
import "..//Desplazar/Desplazar.css";
import "../Footer/Footer.css";

import Desplazar from '../Desplazar/Desplazar1';
import Carousel from "../Carousel/Carousel";



export default function Home2() {

  let [id, setId] = useState(0);
  let [tipoImagen, setTipoImagen] = useState("cities");

  let next = useCallback(() => {
    if (tipoImagen === "cities") {
      setTipoImagen("hotels");
    } else {
      setTipoImagen("cities");
    }
    console.log("Se ejecuto next");
    clearInterval(id);
  }, [id, tipoImagen]);


  useEffect(() => {
    let idInterval = setInterval(() => {
      next();
      console.log("pasaron 5 segundos");
    }, 5000);

    setId(idInterval);
    return clearInterval(id);
  }, [tipoImagen]);



  let prev = () => {
    if (tipoImagen === "cities") {
      setTipoImagen("hotels");
    } else {
      setTipoImagen("cities");
    }
    console.log("Se ejecuto prev");
    clearInterval(id);
  };


  return (
    <>
    <Desplazar next={next} prev={prev}>
    <Carousel tipoImagen={tipoImagen}></Carousel>
    </Desplazar>
  
    </>
  );
}
