import React, { useState } from "react"
import { useUser } from "../UserContext" 


const UploadPost = ({ onPostSubmit }) => {

    const { user, setUser } = useUser()
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!image || !description) {
            alert("Please add both an image and a description.")
            return
        }

        // integrare la logica per inviare i dati al backend.
        // usare FormData per inviare l'immagine e la descrizione.
        const formData = new FormData()
        formData.append("image", image)
        formData.append("description", description)

        // Inviare i dati al backend e chiamare onPostSubmit per aggiornare l'interfaccia utente
        try {
            // const response = await fetch('backend-endpoint', { method: 'POST', body: formData });
            // onPostSubmit(await response.json());
            alert("Post submitted successfully!")
        } catch (error) {
            console.error("Error submitting post:", error)
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
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="form-control-file"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default UploadPost
