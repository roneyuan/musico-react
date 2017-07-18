import React from 'react';


export default function Login() {
  return (
    <div className="login">
      <div className="login__bed">
        <div className="login__title">
          <h1> The jounery of listening to great music starts here </h1>
          <h2> Are you a musican and have difficult time let people know where you are going to perform? </h2>
          <h2> Are you a music love and hard to find where a good musican perfom? </h2>
          <h2> If yes, come join now! </h2>
        </div>
        <div className="login__button">
          <button className="btn__google">
          	<a href="api/user/auth/google">Login with Google</a>
          </button>
        </div>
        <div className="login__button">
          <button className="btn__demo">
          	<a href="/#/demo/home">Explore with Demo Account</a>
          </button>
        </div>
      </div>
    </div>
  )
}