import React, { useState,  } from "react";
import SigninInput from "./SigninInput";
import SigninButton from "./SigninButton";
import { useNavigate } from "react-router-dom";
import '../../App'


export default function Signin() {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({user: '', password: ''});
  const [message, setMessage] = useState('')
  
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const verifyToLocalStorage = () => {
    console.log("Valores del formulario", formValues);

    console.log('Verificando');
    const users = getUsersRegistered();
    const userFound = users.filter(user => {
      if (user.user === formValues.user && user.password === formValues.password) {
        return user 
      }
    })
    
    if (userFound.length > 0 ) {
      console.log('Ingreso');
      // Redirigir a home 
      return navigate("/");
    } else {
      console.log('Credenciales incorrectas');
      setMessage('Credenciales incorrectas')
    }
  }

  const getUsersRegistered= ()=> {
    return JSON.parse(localStorage.getItem('users')) || []
  }

  return (
    <>
      <div className="form">
      <div className="p-15 d-flex column center align-center container-form gap-5">
          <SigninInput handleInputChange={handleInputChange} value={formValues.user} titulo="User" name="user" placeholder='User'/>
          <SigninInput handleInputChange={handleInputChange} value={formValues.password} titulo="Password" name="password" placeholder='password' />
          { message ?? <p>{message}</p> }
          <SigninButton verifyToLocalStorage={verifyToLocalStorage}/>
        </div>
      </div>

      
    </>
  );
}

