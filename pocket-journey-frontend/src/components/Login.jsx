import React from "react"
/* import FlyingPlane from "./FlyingPlane"
 */ import { FaGoogle } from "react-icons/fa"
import FooterDark from "./FooterDark"
import { useNavigate } from "react-router"
/* import { Link } from "react-router-dom"
 */ import { useState } from "react"
/* import { GoogleLoginButton } from "react-social-login-buttons"
 */

function Login() {
    const navigate = useNavigate()
    const [body, setBody] = useState({
        email: "",
        password: "",
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch(`http://localhost:3030/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        if (response.ok) {
            let data = await response.json()
            localStorage.setItem("token", data.token)

            // Salva l'intero payload dell'utente invece del solo id
            localStorage.setItem("user", JSON.stringify(data.payload))

            navigate("/")
        } else {
            document.getElementById("error").innerHTML = "Wrong Credentials!"
            setBody({ ...body, password: "" })
        }
    }
    return (
        <>
            <div className="main-container mb-5 mt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-plane-container">
                                {/*                                 <FlyingPlane />
                                 */}{" "}
                                <div className="login-container">
                                    <div className="social-login text-center">
                                        <h3>Sign in with:</h3>
                                        <div className="social-icons">
                                            <FaGoogle className="icon google" />
                                        </div>
                                        <p>or:</p>
                                    </div>
                                    <form
                                        className="login-form"
                                        onSubmit={(event) =>
                                            handleSubmit(event)
                                        }
                                    >
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="text"
                                            placeholder="Email"
                                            value={body.email}
                                            required
                                            onInput={(e) =>
                                                setBody({
                                                    ...body,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={body.password}
                                            required
                                            onInput={(e) =>
                                                setBody({
                                                    ...body,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <button
                                            type="submit"
                                            className="button-style"
                                        >
                                            SIGN IN
                                        </button>
                                        <p className="register">
                                            Not a member?{" "}
                                            <a
                                                href="#register"
                                                className="fw-bold color-icon"
                                            >
                                                Register
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterDark />
            </div>
        </>
    )
}

export default Login

/* <GoogleLoginButton
className="mt-4 fs-6"
onClick={() => {
    window.location.assign(
        `api/profile/oauth-google`
    )
}}
></GoogleLoginButton>
<div className="text-center mt-3 w-100">
<Link
    to="/register"
    className="text-decoration-none"
>
    Don't have an account? Sign Up
</Link>
</div>
 */
