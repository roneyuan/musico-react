import React from 'react';


export default function Login() {
  return (
    <div className="login">
      <div className="login__button">
        <button className="btn__google">
        	<a href="api/user/auth/google">Login with Google</a>
        </button>
      </div>
      <div className="login__button">
        <button className="btn__demo">
        	<a href="/#/demo">Explore with Demo Account</a>
        </button>
      </div>
    </div>
  )
}