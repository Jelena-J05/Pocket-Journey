import React from "react"
import { Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function DeleteAccount(props) {
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://localhost:3030/api/users/${props.userId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${props.token}`,
                    },
                }
            )

            if (response.ok) {
                navigate("/login")
            } else {
                console.error("Errore durante l'eliminazione dell'account")
            }
        } catch (error) {
            console.error(
                "Si è verificato un errore durante la richiesta DELETE:",
                error
            )
        }
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title> Confirmation </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this account?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    No, keep it
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Yes, proceed
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteAccount
