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
          <a href="api/user/auth/google"><button className="btn__google">Login with Google</button></a> 
        </div>
        <div className="login__button">
          <a href="/#/demo/home"><button className="btn__demo">Explore with Demo Account</button></a>  
        </div>
      </div>
    </div>
  )
}