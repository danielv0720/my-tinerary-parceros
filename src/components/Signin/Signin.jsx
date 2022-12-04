import React, { useState,  } from "react";
import SigninInput from "./SigninInput";
import SigninButton from "./SigninButton";
import { useNavigate } from "react-router-dom";
import '../../App'

import './Signin.css'

import userActions from '../../redux/actions/userAction'

import { useDispatch } from "react-redux";

export default function Signin() {
  let navigate = useNavigate();

  const [mail, setMail] = useState('');
  const [ password, setPassword ] = useState('')

  const dispatch = useDispatch()

  let { signIn } = userActions

  let dataSignIn = {
    name: '',
    password: ''
  }

    let handlerSignIn = (e) => {
      e.preventDefault()
      dataSignIn = {
        email: mail,
        password: password
      }

      console.log(dataSignIn)

      dispatch(signIn(dataSignIn))
      navigate('/')
    }
    let url = "https://nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png"

  return (
    <div className="container-signin"  >
      <form className="form" onSubmit={handlerSignIn} >
        <div className="p-15 d-flex column center align-center container-form gap-5">
          <h2>Sign In</h2>
          <SigninInput  change={ (e) => setMail(e.target.value) } value={mail} titulo="Email" name="email" placeholder='Email' type='text' />
          <SigninInput  change={ (e) => setPassword(e.target.value) } value={password} titulo="Password" name="password" placeholder='password'  type='password' />
          <SigninButton />
      <div className="container-buttons" >
        <button className="submit-signup">Sign up</button>
        <button className="submit-signup btn-google "><img className="img-google" src={url} alt="" /> with Google </button>
      </div>
        </div>
      </form>
      
    </div>
  );
}

