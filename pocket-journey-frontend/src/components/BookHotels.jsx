import React, { useState } from "react";
import {
  MDBContainer,
  MDBCheckbox,
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

function BookHotels() {
  const [hotelData, setHotelData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    search: "",
    rooms: "",
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [modalShow, setModalShow] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setHotelData({
      ...hotelData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Data:", hotelData.search);
  };

  const handleGuestsChange = (name, value) => {
    setHotelData({ ...hotelData, [name]: value });
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
                    value={hotelData.from}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="departureDate"> Check-in</label>
                  <MDBInput
                    name="departureDate"
                    type="date"
                    value={hotelData.departureDate}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="returnDate">Check-out</label>
                  <MDBInput
                    name="returnDate"
                    type="date"
                    value={hotelData.returnDate}
                    onChange={handleInputChange}
                    disabled={hotelData.oneWay}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                <label htmlFor="rooms"> Number of rooms</label>
                  <MDBInput
                    name="rooms"
                    type="number"
                    min="1"
                    value={hotelData.rooms}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="auto d-flex align-items-end justify-content-end">
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
                value={hotelData.adults}
                onChange={(e) => handleGuestsChange("adults", e.target.value)}
              />
              <MDBInput
                label="Children"
                type="number"
                min="0"
                value={hotelData.children}
                onChange={(e) => handleGuestsChange("children", e.target.value)}
              />
              <MDBInput
                label="Infants"
                type="number"
                min="0"
                value={hotelData.infants}
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

export default BookHotels;