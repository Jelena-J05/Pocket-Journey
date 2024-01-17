// LoginPage.jsx
import React from 'react';
import '../App.css';
import FlyingPlane from './FlyingPlane';

function WelcomePage () {
    return (
        <div className="login-container">
            <FlyingPlane/>
            <form className="login-form">
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <button type="button">Register</button>
            </form>
        </div>
    );
}

export default WelcomePage;
