import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (productId, variantId, cartId) => {
        setCartItems(prevItems => {
            const newItems = [...prevItems, { productId, variantId, cartId }];
            // Optionally save to localStorage
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return newItems;
        });
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        console.log("item", itemId);

        setCartItems(prevItems => {
            const newItems = prevItems.filter(item =>
                item.cartId !== itemId
            );
            console.log("newItems", newItems);

            // Update localStorage
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return newItems;
        });
    };

    // Load cart from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);