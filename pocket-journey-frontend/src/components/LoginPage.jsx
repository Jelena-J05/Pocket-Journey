import React from "react";
import FlyingPlane from "./FlyingPlane";
import { FaGoogle } from "react-icons/fa";
import FooterLogin from "./FooterLogin";
/* import { useNavigate } from "react-router-dom"; */

function LoginPage() {

  /* let navigate = useNavigate(); */

/*   const handleLogin = () => {
    // Implementare la logica di login qui

    // Dopo il login, reindirizzare l'utente, ad esempio alla homepage
    navigate('/');
  }; */

  return (
    
    <>
      <div className="main-container">
        <div className="row justify-content-center gap-5">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="login-plane-container">
              <FlyingPlane />
              <div className="login-container">
                <div className="social-login">
                  <h3>Sign in with:</h3>
                  <div className="social-icons">
                    <FaGoogle className="icon google" />
                  </div>
                  <p>or:</p>
                </div>
                <form className="login-form">
                  <label htmlFor="username">Email or username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Email or username"
                  />
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" placeholder="Password" />
                  <button type="submit" className="sign-in-button">
                    SIGN IN      {/* <button onClick={handleLogin}>Login</button> */}
                  </button>
                  <p className="register">
                    Not a member? <a href="#register">Register</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLogin />
    </>
  );
}

export default LoginPage;
