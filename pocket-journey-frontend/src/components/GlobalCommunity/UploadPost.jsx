import React, { useState } from "react"
import { useUser } from "../../contexts/UserContext"

const UploadPost = ({ onPostSubmit }) => {
    const { user } = useUser()
    const [description, setDescription] = useState("")
    const token = localStorage.getItem("token")

    if (!token) {
        alert("You must be logged in to post.");
        return;
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!description) {
            alert("Please add a description.")
            return
        }

        // Preparazione dei dati da inviare come JSON
        const postData = { description }

        try {
            const response = await fetch("http://localhost:3030/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(postData),
            })

            if (response.ok) {
                const newPost = await response.json();
                // Aggiungi manualmente le informazioni dell'utente a newPost prima di passarlo
                const postWithUserInfo = {
                    ...newPost,
                    user: [{
                        _id: user.id, // Assicurati che 'id' sia la proprietà corretta per l'ID dell'utente
                        avatar: user.avatar,
                        name: user.name // Assumi che questi siano disponibili nel contesto utente
                    }]
                };
                onPostSubmit(postWithUserInfo);
                alert("Post submitted successfully!");
                setDescription(""); // Reset del campo di input dopo il successo
    
            } else {
                throw new Error("Failed to submit post")
            }
        } catch (error) {
            console.error("Error submitting post:", error)
            alert("Error submitting post. Please try again.")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="form-group d-flex">
                        <img
                            src={`${user.avatar}?${new Date().getTime()}`}
                            alt="User Avatar"
                            className="navbar-avatar rounded-circle img-fluid me-2 mb-5"
                            style={{
                                width: "40px",
                                height: "40px",
                            }}
                        /> 
                        <textarea
                            placeholder="Write a description..."
                            value={description}
                            onChange={handleDescriptionChange}
                            className="form-control mt-3"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="form-group d-flex justify-content-start gap-2 mt-3 ms-5 align-items-center">
                        <button
                            type="submit"
                            className="btn button-style text-white fw-bold"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadPost
