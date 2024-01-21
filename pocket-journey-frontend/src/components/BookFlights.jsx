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

function BookFlights() {
  const [flightData, setFlightData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    oneWay: false,
    search: "",
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [modalShow, setModalShow] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFlightData({
      ...flightData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Data:", flightData.search);
  };

  const handleGuestsChange = (name, value) => {
    setFlightData({ ...flightData, [name]: value });
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
                  <label htmlFor="from">From</label>
                  <MDBInput
                    name="from"
                    type="text"
                    value={flightData.from}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="to">To</label>
                  <MDBInput
                    name="to"
                    type="text"
                    value={flightData.to}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="departureDate">Departure</label>
                  <MDBInput
                    name="departureDate"
                    type="date"
                    value={flightData.departureDate}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="returnDate">Return</label>
                  <MDBInput
                    name="returnDate"
                    type="date"
                    value={flightData.returnDate}
                    onChange={handleInputChange}
                    disabled={flightData.oneWay}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="auto d-flex align-items-end justify-content-end">
                  <MDBBtn onClick={openModal}>Guests</MDBBtn>
                </MDBCol>
                <MDBCol
                  md="auto"
                  className="d-flex align-items-end justify-content-end"
                >
                  <MDBCheckbox
                    name="oneWay"
                    id="oneWayCheckbox"
                    checked={flightData.oneWay}
                    onChange={handleInputChange}
                    className="me-2"
                  />
                  <label htmlFor="oneWay">One-way</label>
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
                value={flightData.adults}
                onChange={(e) => handleGuestsChange("adults", e.target.value)}
              />
              <MDBInput
                label="Children"
                type="number"
                min="0"
                value={flightData.children}
                onChange={(e) => handleGuestsChange("children", e.target.value)}
              />
              <MDBInput
                label="Infants"
                type="number"
                min="0"
                value={flightData.infants}
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

export default BookFlights;