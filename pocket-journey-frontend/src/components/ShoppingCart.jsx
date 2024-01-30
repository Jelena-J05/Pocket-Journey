import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPlus,
    faMinus,
    faTrash,
    faHeart,
} from "@fortawesome/free-solid-svg-icons"
import BookingForm from "./BookingForm"

function ShoppingCart() {
    return (
      <>
        <section className="h-100 gradient-custom mb-2">
            <div className="container py-5 h-100">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="mb-0">Your Cart - items</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3 col-md-12 mb-2 mb-lg-0">
                                        <div>
                                            <img
                                                src=""
                                                className="w-100"
                                                alt="Product"
                                            />
                                            <a href="#!">
                                                <div
                                                    className="mask"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(251, 251, 251, 0.2)",
                                                    }}
                                                ></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p>
                                            <strong>Travel Product</strong>
                                        </p>
                                        <button
                                            className="border border-0 bg-white fs-5 text-danger p-0 me-1 mb-2"
                                            title="Remove item"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <button
                                            className="btn btn-warning border border-0 bg-white color-icon fs-4 p-0 ms-2 mb-1"
                                            title="Move to the wish list"
                                        >
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div className="d-flex align-items-start">
                                            <button className="btn btn-outline-warning me-2">
                                                <FontAwesomeIcon
                                                    icon={faMinus}
                                                />
                                            </button>
                                            <input
                                                defaultValue={1}
                                                min={0}
                                                type="number"
                                                className="form-control"
                                                placeholder="Quantity"
                                            />
                                            <button className="btn btn-outline-warning ms-2">
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                />
                                            </button>
                                        </div>
                                        <p className="text-start text-md-center">
                                            <strong>Price</strong>
                                        </p>
                                    </div>
                                </div>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-0">
                        <div className="card mb-lg-0">
                            <div className="card-body">
                                <p>
                                    <strong>We accept</strong>
                                </p>
                                <img
                                    className="me-2"
                                    width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa"
                                />
                                <img
                                    className="me-2"
                                    width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express"
                                />
                                <img
                                    className="me-2"
                                    width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard"
                                />
                                <img
                                    className="me-2"
                                    width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                    alt="PayPal acceptance mark"
                                />
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-header">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Travel Products <span>Price</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                        </div>
                                        <span>
                                            <strong>Price</strong>
                                        </span>
                                    </li>
                                </ul>
                                <button className="btn button-style text-white fw-bold">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <BookingForm />
            </div>
        </section>
        </>
    )
}

export default ShoppingCart
