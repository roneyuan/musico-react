import React from 'react';


export default function Login() {
  return (
    <div className="btn__google">
      <button className="google-button">
      	<a href="api/user/auth/google">Login with Google</a>
      </button>

      <button className="btn__demo">
      	<a href="/#/demo">Explore with Demo Account</a>
      </button>
    </div>
  )
}