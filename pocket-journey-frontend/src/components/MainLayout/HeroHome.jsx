import React, { useState, useEffect } from "react";
import HeroBackground from "../../images/HeroBackground.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./HeroHome.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

export default function HeroHome({ onSearch }) {
  const [activeTab, setActiveTab] = useState("FLIGHTS");
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    guests: "",
    isOneWay: false,
  });


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const fetchResults = async () => {
    const baseUrls = {
      FLIGHTS: "http://localhost:3030/api/flights",
      TRAINS: "http://localhost:3030/api/trains",
      HOTELS: "http://localhost:3030/api/hotels",
      RESTAURANTS: "http://localhost:3030/api/restaurants",
      ACTIVITIES: "http://localhost:3030/api/activities",
    };
    const url = baseUrls[activeTab];
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return [];
      }
      let data = await response.json();
  
      // Esempio di filtraggio lato client per i voli
      if (activeTab === "FLIGHTS") {
        data = data.filter(flight => {
          return flight.from.includes(searchData.from) &&
                 flight.to.includes(searchData.to) &&
                 // Altri controlli di filtraggio in base a searchData
                 (!searchData.departureDate || flight.departureDate.startsWith(searchData.departureDate)) &&
                 (searchData.isOneWay || flight.returnDate.startsWith(searchData.returnDate));
        });
      }
      if (activeTab === "TRAINS") {
        data = data.filter(train => {
          return train.from.includes(searchData.from) &&
                 train.to.includes(searchData.to) &&
                 // Altri controlli di filtraggio in base a searchData
                 (!searchData.departureDate || train.departureDate.startsWith(searchData.departureDate)) &&
                 (searchData.isOneWay || train.returnDate.startsWith(searchData.returnDate));
        });
      }
      // Aggiungi qui ulteriori condizioni di filtraggio per altri tab se necessario
  
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    const results = await fetchResults();
    onSearch(results); // Invia i risultati al componente padre
    
    // Reset dello stato searchData ai valori iniziali
    setSearchData({
      from: "",
      to: "",
      departureDate: "",
      returnDate: "",
      guests: 1,
      isOneWay: false,
    });
  };

  const renderInputsForActiveTab = () => {
    let inputs = [
      { name: "from", type: "text", placeholder: "From" },
      { name: "to", type: "text", placeholder: "To" },
      { name: "departureDate", type: "date", placeholder: "Departure Date" },
    ];

    if (activeTab === "FLIGHTS" || activeTab === "TRAINS") {
      if (!searchData.isOneWay) {
        inputs.push({ name: "returnDate", type: "date", placeholder: "Return Date" });
      }
      inputs.push(
        { name: "guests", type: "number", placeholder: "Passengers", value: searchData.guests },
        { name: "isOneWay", type: "checkbox", label: "One way", checked: searchData.isOneWay }
      );
    } else if (activeTab === "HOTELS") {
      inputs = [
        { name: "destination", type: "text", placeholder: "Destination" },
        { name: "checkIn", type: "date", placeholder: "Check-In" },
        { name: "checkOut", type: "date", placeholder: "Check-Out" },
      ];
    } else {
      inputs = [
        { name: "city", type: "text", placeholder: "City" },
        { name: "date", type: "date", placeholder: "Date" },
      ];
      if (activeTab !== "ACTIVITIES") {
        inputs.push({ name: "guests", type: "number", placeholder: "Number of Guests", value: searchData.guests });
      }
    }

    return inputs.map((input, index) => (
      <Col key={index} xs={12} md={6}>
        {input.type === "checkbox" ? (
          <Form.Check
            type="checkbox"
            label={input.label}
            checked={input.checked}
            onChange={handleInputChange}
            name={input.name}
          />
        ) : (
          <Form.Control
            type={input.type}
            placeholder={input.placeholder}
            value={searchData[input.name]}
            onChange={handleInputChange}
            name={input.name}
            className="mb-3"
          />
        )}
      </Col>
    ));
  };

  return (
    <div className="Section" style={{ backgroundImage: `url(${HeroBackground})` }}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="Content">
              <div className="Tabs">
                {["FLIGHTS", "TRAINS", "HOTELS", "RESTAURANTS", "ACTIVITIES"].map((tab) => (
                  <div
                    className={`Tab ${activeTab === tab ? "active" : ""}`}
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              <div className="SearchBar">
                <Form onSubmit={handleSearchClick}>
                  <Row>{renderInputsForActiveTab()}</Row>
                  <Row>
                    <Col xs={12}>
                      <Button type="submit" className="SearchButton button-style fw-bold d-flex align-items-center">
                        SEARCH
                        <FontAwesomeIcon icon={faSearchengin} className="fs-4 ms-2"/>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
