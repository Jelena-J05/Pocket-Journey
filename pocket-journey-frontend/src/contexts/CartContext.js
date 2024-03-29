import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex((i) => i.id === item.id)
            if (itemIndex > -1) {
                const newCartItems = [...prevItems]
                newCartItems[itemIndex].quantity += 1
                return newCartItems
            } else {
                return [...prevItems, { ...item, quantity: 1 }]
            }
        })
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        )
    }

    const updateQuantity = (itemId, quantity) => {
        setCartItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: quantity } : item
            )
        })
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    )
}
