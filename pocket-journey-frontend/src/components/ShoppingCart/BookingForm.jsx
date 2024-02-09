import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function BookingForm() {
    const [guests, setGuests] = useState([
        {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
        },
    ])

    const handleInputChange = (index, event) => {
        const updatedGuests = guests.map((guest, i) =>
            i === index
                ? { ...guest, [event.target.name]: event.target.value }
                : guest
        )
        setGuests(updatedGuests)
    }

    const addGuest = () => {
        setGuests([
            ...guests,
            { firstName: "", lastName: "", dateOfBirth: "", email: "" },
        ])
    }

    const removeGuest = (index) => {
        setGuests(guests.filter((_, i) => i !== index))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submitted Guests Data:", guests)
    }

    return (
        <div className="row justify-content-start">
            <div className="col-12 col-md-8">
                <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Add Guest's Data</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {guests.map((guest, index) => (
                                <div key={index}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                            <label htmlFor="firstName">
                                                First Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="firstName"
                                                type="text"
                                                value={guest.firstName}
                                                onChange={(e) =>
                                                    handleInputChange(index, e)
                                                }
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                            <label htmlFor="lastName">
                                                Last Name
                                            </label>
                                            <input
                                                className="form-control"
                                                name="lastName"
                                                type="text"
                                                value={guest.lastName}
                                                onChange={(e) =>
                                                    handleInputChange(index, e)
                                                }
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                            <label htmlFor="dateOfBirth">
                                                Date of Birth
                                            </label>
                                            <input
                                                className="form-control"
                                                name="dateOfBirth"
                                                type="date"
                                                value={guest.dateOfBirth}
                                                onChange={(e) =>
                                                    handleInputChange(index, e)
                                                }
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                className="form-control"
                                                name="email"
                                                type="email"
                                                value={guest.email}
                                                onChange={(e) =>
                                                    handleInputChange(index, e)
                                                }
                                            />
                                        </div>
                                        {guests.length > 1 && (
                                            <div className="col-12 mb-2">
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        removeGuest(index)
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrash}
                                                    />{" "}
                                                    Remove Guest
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <hr />
                                </div>
                            ))}
                            <button
                                className="btn button-style text-white fw-bold "
                                onClick={addGuest}
                            >
                                Add Additional Guest
                            </button>
                            <button
                                type="submit"
                                className="btn button-style text-white fw-bold ms-3"
                            >
                                Save Guest's Data
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
