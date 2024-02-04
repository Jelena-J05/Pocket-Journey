import React, { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./EditAccount.scss"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useUser } from "../../UserContext" // Assicurati che il percorso sia corretto

function EditAccount() {
    const { user, setUser } = useUser()
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        avatar: "",
        birthday: "",
        bio: "",
    })

    const { id } = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    /*  const user = JSON.parse(localStorage.getItem("user")) */

    const fetchData = async () => {
        if (user && user.id) {
            const response = await fetch(
                `http://localhost:3030/api/users/${user.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            if (response.ok) {
                const data = await response.json()
                setFormData(data)
            } else {
                console.error("Error message.")
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [token])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleAvatarChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        if (!file) {
            console.error("No file selected.")
            return
        }

        const formData = new FormData()
        formData.append("avatar", file)

        try {
            const response = await fetch(
                `http://localhost:3030/api/users/${user.id}/avatar`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            )

            if (response.ok) {
                const data = await response.json()

                setFormData((prevState) => ({
                    ...prevState,
                    avatar: data.avatar,
                }))
                setUser({ ...user, avatar: data.avatar })
                toast.success("Profile photo updated successfully!")
                localStorage.setItem(
                    "user",
                    JSON.stringify({ ...user, avatar: data.avatar })
                )
                fetchData()
            } else {
                toast.error("Error during profile photo upload.")
            }
        } catch (error) {
            toast.error("Error uploading avatar.")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataToUpdate = {
            name: formData.name,
            lastName: formData.lastName,
            birthday: formData.birthday,
            bio: formData.bio,
        }

        try {
            const response = await fetch(
                `http://localhost:3030/api/users/${user.id}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToUpdate),
                }
            )

            if (response.ok) {
                toast.success("Account updated successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    /*  onClose: () => navigate("/"),  */
                })
            } else {
                toast.error("Failed to update account.")
            }
        } catch (error) {
            toast.error("Error during account update.")
        }
    }

    return (
        <>
            <ToastContainer />
            <Container className="mt-5">
                <Form onSubmit={handleSubmit} className="edit-account-form">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Birthday </Form.Label>
                                <Form.Control
                                    type="date"
                                    name="birthday"
                                    value={formData.birthday}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Bio </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label> Profile Photo </Form.Label>
                                <div className="avatar-edit mb-3">
                                    <img
                                        key={formData.avatar}
                                        src={formData.avatar}
                                        alt="User Avatar"
                                        className="user-avatar"
                                    />
                                    <Form.Control
                                        type="file"
                                        name="avatar"
                                        onChange={handleAvatarChange}
                                    />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={6} className="d-flex align-items-end mb-3">
                            <Button className="button-style" type="submit">
                                Save Changes
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default EditAccount
