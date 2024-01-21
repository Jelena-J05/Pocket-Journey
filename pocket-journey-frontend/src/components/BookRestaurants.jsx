import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

function BookRestaurants() {
  const [restaurantData, setRestaurantData] = useState({
    destination: "",
    date: "",
    time: "",
    search: "",
    adults: 1,
    children: 0,
    infants: 0,
  });


  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setRestaurantData({
      ...restaurantData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Data:", restaurantData.search);
  };

  const handleGuestsChange = (name, value) => {
    setRestaurantData({ ...restaurantData, [name]: value });
  };


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
                    value={restaurantData.from}
                    onChange={handleInputChange}
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="date"> Date</label>
                  <MDBInput
                    name="date"
                    type="date"
                    value={restaurantData.date}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="time">Time</label>
                  <MDBInput
                    name="time"
                    type="time"
                    value={restaurantData.time}
                    onChange={handleInputChange}
                    className="text-center"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <label htmlFor="guests"> Guests</label>
                  <MDBInput
                    name="guests"
                    type="number"
                    min="1"
                    value={restaurantData.guests}
                    onChange={handleInputChange}
                  />
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
    </MDBContainer>
  );
}

export default BookRestaurants;
