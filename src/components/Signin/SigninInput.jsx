import React from "react";

export default function SigninInput(props) {
  let { titulo, change, value, name, placeholder, type } = props;

  return (
   

      <input className="input-signup" type={type} placeholder={placeholder} id={titulo.value} value={value} onChange={change} name={name} prequired/>
    
  );
}
