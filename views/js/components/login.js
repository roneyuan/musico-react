import React from 'react';


export default function Login() {
  return (
    <div className="land-button">
      <button className="google-button">
      	<a href="api/user/auth/google">Login with Google</a>
      </button>

      <button className="demo-button">
      	<a href="/#/demo">Explore with Demo Account</a>
      </button>
    </div>
  )
}