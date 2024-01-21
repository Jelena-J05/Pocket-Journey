import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function BookingForm() {
  const [guests, setGuests] = useState([
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const updatedGuests = guests.map((guest, i) =>
      i === index
        ? { ...guest, [event.target.name]: event.target.value }
        : guest
    );
    setGuests(updatedGuests);
  };

  const addGuest = () => {
    setGuests([
      ...guests,
      { firstName: "", lastName: "", dateOfBirth: "", email: "" },
    ]);
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Guests Data:", guests);
    // Qui va aggiunta la logica per l'invio dei dati
  };

  return (
    <MDBRow className="justify-content-start">
      <MDBCol md="8">
        <MDBCard className="mb-4">
          <MDBCardHeader className="py-3">
            <MDBTypography tag="h5" className="mb-0">
              Add Guest's Data
            </MDBTypography>
          </MDBCardHeader>
          <MDBCardBody>
            <form onSubmit={handleSubmit}>
              {guests.map((guest, index) => (
                <div key={index}>
                  <MDBRow>
                    <MDBCol lg="6" md="12" className="mb-4">
                      <label htmlFor="First Name"> First Name </label>
                      <MDBInput
                        name="firstName"
                        type="text"
                        value={guest.firstName}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </MDBCol>
                    <MDBCol lg="6" md="12" className="mb-4">
                      <label htmlFor="Last Name"> Last Name </label>
                      <MDBInput
                        name="lastName"
                        type="text"
                        value={guest.lastName}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </MDBCol>
                    <MDBCol lg="6" md="12" className="mb-4">
                      <label htmlFor="Date of Birth"> Date of Birth </label>
                      <MDBInput
                        name="dateOfBirth"
                        type="date"
                        value={guest.dateOfBirth}
                        onChange={(e) => handleInputChange(index, e)}
                        className="text-center"
                      />
                    </MDBCol>
                    <MDBCol lg="6" md="12" className="mb-4">
                    <label htmlFor="Email"> Email </label>
                      <MDBInput
                        name="email"
                        type="email"
                        value={guest.email}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </MDBCol>
                  </MDBRow>
                  {guests.length > 1 && (
                    <MDBBtn color="danger" onClick={() => removeGuest(index)}>
                      <FontAwesomeIcon icon={faTrash} /> Remove Guest
                    </MDBBtn>
                  )}
                  <hr />
                </div>
              ))}
              <MDBBtn onClick={addGuest}>Add Additional Guest</MDBBtn>
              <MDBBtn type="submit" className="ms-3">
                Save Guest's Data
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default BookingForm;
