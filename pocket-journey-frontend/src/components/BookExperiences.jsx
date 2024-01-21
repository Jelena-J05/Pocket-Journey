import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

function BookExperiences() {
  const [experienceData, setExperienceData] = useState({
    destination: "",
    date: "",
    time: "",
    search: "",
    guests: 0,
  });

  const [modalShow, setModalShow] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setExperienceData({
      ...experienceData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Data:", experienceData.search);
  };

  const handleGuestsChange = (name, value) => {
    setExperienceData({ ...experienceData, [name]: value });
  };

  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="2">
                  <label htmlFor="destination"> Destination</label>
                  <MDBInput
                    name="destination"
                    type="text"
                    value={experienceData.destination}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="date"> Date</label>
                  <MDBInput
                    name="date"
                    type="date"
                    value={experienceData.date}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="time">Time</label>
                  <MDBInput
                    name="time"
                    type="time"
                    value={experienceData.time}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol
                  md="auto d-flex align-items-end justify-content-end"
                >
                  <MDBBtn onClick={openModal}>Guests</MDBBtn>
                </MDBCol>
                <MDBCol
                  md="auto"
                  className="d-flex align-items-end justify-content-end"
                >
                  <MDBBtn onClick={handleSearch}>Search</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBModal show={modalShow} setShow={setModalShow}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Guests</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={closeModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Adults"
                type="number"
                min="1"
                value={experienceData.adults}
                onChange={(e) => handleGuestsChange("adults", e.target.value)}
              />
              <MDBInput
                label="Children"
                type="number"
                min="0"
                value={experienceData.children}
                onChange={(e) => handleGuestsChange("children", e.target.value)}
              />
              <MDBInput
                label="Infants"
                type="number"
                min="0"
                value={experienceData.infants}
                onChange={(e) => handleGuestsChange("infants", e.target.value)}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={closeModal}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
}

export default BookExperiences;
