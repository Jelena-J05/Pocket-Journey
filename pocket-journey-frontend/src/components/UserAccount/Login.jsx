import React from "react"
import FooterDark from "../Footer/FooterDark"
import { useNavigate } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.scss"

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
            localStorage.setItem("user", JSON.stringify(data.payload))

            navigate("/")
        } else {
            document.getElementById("error").innerHTML = "Wrong Credentials!"
            setBody({ ...body, password: "" })
        }
    }
    return (
        <>
            <section className="section-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-plane-container">
                                <div className="login-container">
                                    <div className="social-login mb-4">
                                        <h3>Sign in and travel with us!</h3>
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
                                            <Link
                                                to="/register"
                                                className="fw-bold color-icon"
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterDark />
        </>
    )
}

export default Login
