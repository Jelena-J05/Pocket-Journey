import React, { useState } from "react"
import FooterDark from "../FooterDark"
import { useNavigate } from "react-router"

function Register() {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        avatar: "",
    })
    const handleAvatarChange = (e) => {
        // Imposta il file selezionato nell'oggetto di stato newUser
        setNewUser({ ...newUser, avatar: e.target.files[0] });
    };
    /* const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("http://localhost:3030/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })

            if (response.ok) {
                let data = await response.json()
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.payload))
                navigate("/") // o qualsiasi altra rotta post-login
            } else {
                console.log("Registration failed")
            }
        } catch (error) {
            console.error("Error during registration process", error)
        }
    } */

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', newUser.name);
        formData.append('lastName', newUser.lastName);
        formData.append('email', newUser.email);
        formData.append('password', newUser.password);
        if (newUser.avatar) {
            formData.append('avatar', newUser.avatar);
        }
    
        try {
            const response = await fetch("http://localhost:3030/api/register", {
                method: "POST",
                body: formData, // Non impostare l'header 'Content-Type', lascia che il browser lo faccia
            });
    
            if (response.ok) {
                let data = await response.json();
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.payload));
                navigate("/"); // o qualsiasi altra rotta post-login
            } else {
                console.log("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration process", error);
        }
    };

    return (
        <>
            <div className="main-container mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="login-plane-container mt-2">
                                <div className="login-container">
                                    <form
                                        className="login-form"
                                        onSubmit={handleSubmit}
                                    >
                                        <label htmlFor="name">First Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="First Name"
                                            value={newUser.name}
                                            required
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            value={newUser.lastName}
                                            required
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    lastName: e.target.value,
                                                })
                                            }
                                        />
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            value={newUser.email}
                                            required
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                        <label htmlFor="password">
                                            Create Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            value={newUser.password}
                                            required
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                        <label htmlFor="avatar"> Profile Photo</label>
                                        <input
                                            type="file"
                                            id="avatar"
                                            name="avatar"
                                            onChange={(e) =>
                                                handleAvatarChange(e)
                                            }
                                        />
                                        <button
                                            type="submit"
                                            className="button-style"
                                        >
                                            REGISTER
                                        </button>
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
export default Register
