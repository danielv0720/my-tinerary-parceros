import React from "react";

export default function SigninButton(props) {
  const { verifyToLocalStorage } = props;

  let url = "https://nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png"

  return (
    <>
      <div className="button_forn" >
        <button className="submit-signup" onClick={verifyToLocalStorage}>Sign in</button>
        <button className="submit-signup">Sign up</button>
      </div>
      <div >
        <button className="submit-signup btn-google "><img className="img-google" src={url} alt="" />Signin with Google </button>
      </div>
    </>
  );
}
