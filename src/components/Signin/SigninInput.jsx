import React from "react";

export default function SigninInput(props) {
  let { titulo, handleInputChange, value, name, placeholder } = props;

  return (
   

      <input className="input-signup" type="text" placeholder={placeholder} id={titulo.value} value={value} onChange={handleInputChange} name={name} prequired/>
    
  );
}
