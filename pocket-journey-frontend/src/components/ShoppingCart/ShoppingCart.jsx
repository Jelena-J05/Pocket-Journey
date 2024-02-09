import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons"
import BookingForm from "./BookingForm"
import { useCart } from "../../contexts/CartContext"

function ShoppingCart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart()
    const [itemCount, setItemCount] = useState(0)
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    useEffect(() => {
        const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)
        setItemCount(count)
    }, [cartItems]) 

    return (
        <>
            <section className="h-100 gradient-custom mb-2">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        Your Cart: {itemCount} items
                                    </h5>
                                </div>
                                {cartItems.map((item, index) => (
                                    <div key={index}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-2 col-md-12 mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                                                    <img
                                                        src={
                                                            item.image ||
                                                            item.logo
                                                        }
                                                        className="w-50 h-100 pe-0"
                                                        alt="Product"
                                                    />
                                                </div>
                                                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 d-flex gap-2 align-items-center">
                                                    <span>
                                                        {item.airlineCompany ||
                                                            item.hotelName ||
                                                            item.trainCompany ||
                                                            item.hotelName ||
                                                            item.restaurantName ||
                                                            item.activity}
                                                    </span>
                                                    <span>{item.from} </span>
                                                    <span>{item.to} </span>
                                                    <span>
                                                        {item.destination}{" "}
                                                    </span>
                                                </div>
                                                <div className="col-lg-7 col-md-6 mb-4 mb-lg-0 d-flex gap-4 align-items-center">
                                                    <span>
                                                        Price: {item.price}€
                                                    </span>
                                                    <span>
                                                        Quantity: {item.guests}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }
                                                        className="border border-0 rounded bg-success px-2 py-1"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            className="fs-6 text-white"
                                                        />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }
                                                        className="border border-0 rounded bg-warning px-2 py-1"
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faMinus}
                                                            className="fs-6 text-white"
                                                        />
                                                    </button>
                                                    <button
                                                        className="bg-danger border border-0 rounded px-2 py-1"
                                                        onClick={() =>
                                                            removeFromCart(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                            className="fs-6 text-white"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    </div>
                                ))}
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
