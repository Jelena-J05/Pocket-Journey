import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import BookingForm from "./BookingForm";

function ShoppingCart() {
  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-0">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Your Cart - items {/* shopping cart items */}
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-2 mb-lg-0">
                    <MDBRipple
                      rippleTag="div"
                      rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <img src="" className="w-100" /> Photo
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>

                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong> Travel Product </strong>
                    </p>

                    <MDBTooltip
                      wrapperProps={{ size: "sm" }}
                      wrapperClass="me-1 mb-2"
                      title="Remove item"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </MDBTooltip>

                    <MDBTooltip
                      wrapperProps={{ size: "sm", color: "danger" }}
                      wrapperClass="me-1 mb-2"
                      title="Move to the wish list"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </MDBTooltip>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex align-items-start">
                      <MDBBtn className="me-2">
                      <FontAwesomeIcon icon={faMinus} />
                      </MDBBtn>
                      <MDBInput
                        defaultValue={1}
                        min={0}
                        type="number"
                        label="Quantity"
                      />   {/* Quantity si deve compilare da sola e anche il prezzo */}

                      <MDBBtn className="ms-2">
                      <FontAwesomeIcon icon={faPlus} />
                      </MDBBtn>
                    </div>

                    <p className="text-start text-md-center">
                      <strong>Price</strong>
                    </p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4 my-0">
            <MDBCard className="mb-lg-0">
              <MDBCardBody>
                <p>
                  <strong>We accept</strong>
                </p>
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mt-3">
              <MDBCardHeader>
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Travel Products
                    <span>Price </span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>Price</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <MDBBtn block size="lg fw-bold fs-6">
                  Checkout
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <BookingForm/>
      </MDBContainer>
    </section>
  );
}

export default ShoppingCart;
