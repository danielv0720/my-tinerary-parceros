import React, { useState } from 'react'

import '../App.css'
import '../components/SignUp/SignUpSubmit.css'

import SignUpInput from '../components/SignUp/SignUpInput'
import SignUpSubmit from '../components/SignUp/SignUpSubmit'


const SignUp = () => {

    const imgGoogle = "https://nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png"

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let dataSignUp = {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        pass: ''
    }

    let handlerCatchValue = e => {
        e.preventDefault()

        dataSignUp = {
            firstName,
            lastName,
            age,
            email,
            pass: password
        }

        console.log(dataSignUp)

        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('age', age)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
    }

    return (
        <div className='w-100 h-100vh d-flex center align-center'>
            <form className='p-15 d-flex column center align-center container-form gap-5'>
                <SignUpInput
                    className='input-signup'
                    value={firstName} type="text"
                    name="name"
                    placeholder="Name"
                    eventFunction={(e) => setFirstName(e.target.value)}
                />
                <SignUpInput
                    className='input-signup'
                    value={lastName}
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    eventFunction={(e) => setLastName(e.target.value)}
                />
                <SignUpInput
                    className='input-signup'
                    value={age} type="text"
                    name="age"
                    placeholder="Age"
                    eventFunction={(e) => setAge(e.target.value)}
                />
                <SignUpInput
                    className='input-signup'
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    eventFunction={(e) => setEmail(e.target.value)}
                />
                <SignUpInput
                    className='input-signup'
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    eventFunction={(e) => setPassword(e.target.value)}
                />

                <div className="d-flex space-around gap-5 ">
                    <SignUpSubmit event={handlerCatchValue} />
                    <button className='btn-google'><img src={imgGoogle} alt="icon google" className='img-google' />  Sign Up with Google</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp