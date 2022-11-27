import React, { useState } from "react";

import "../App.css";
import "../components/SignUp/SignUpSubmit.css";

import SignUpInput from "../components/SignUp/SignUpInput";
import SignUpSubmit from "../components/SignUp/SignUpSubmit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../api/url";
import Swal from "sweetalert2";

const SignUp = () => {
  const imgGoogle =
    "https://nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png";
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let dataSignUp = {
    name: "",
    lastName: "",
    role: "",
    photo: "",
    age: "",
    email: "",
    password: "",
  };

  let handlerCatchValue = (e) => {
    e.preventDefault();

    dataSignUp = {
      name: name,
      lastName: lastName,
      role: role,
      photo: photo,
      age: age,
      email: email,
      password: password,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          url: `${URL_API}/auth/sign-up`,
          data: dataSignUp,
        })
          .then((res) => {
            console.log(res);
            setName("");
            if (res.data.success) {
              Swal.fire(
                "usuario creado!",
                "verification message was sent to your email ",
                "success"
              );
              return navigate("/signin");
            } else {
              Swal.fire(res.data.message.join(" - - - - -"));
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="w-100 h-100vh d-flex center align-center">
      <form className="p-15 d-flex column center align-center container-form gap-5">
        <SignUpInput
          className="input-signup"
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          eventFunction={(e) => setName(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={lastName}
          type="text"
          name="name"
          placeholder="Last Name"
          eventFunction={(e) => setLastName(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={role}
          type="text"
          name="name"
          placeholder="Role admin o user"
          eventFunction={(e) => setRole(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={photo}
          type="text"
          name="name"
          placeholder="Photo(URL)"
          eventFunction={(e) => setPhoto(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={age}
          type="text"
          name="age"
          placeholder="Age"
          eventFunction={(e) => setAge(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          eventFunction={(e) => setEmail(e.target.value)}
        />
        <SignUpInput
          className="input-signup"
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          eventFunction={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex space-around gap-5 ">
          <SignUpSubmit event={handlerCatchValue} />
          <button className="btn-google">
            <img src={imgGoogle} alt="icon google" className="img-google" />{" "}
            Sign Up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
