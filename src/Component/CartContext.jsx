import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('petwell-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCartItems([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('petwell-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  // Generate a unique key for cart items
  const getItemKey = (item) => {
    return `${item.id}-${item.subscribe ? 'subscribe' : 'onetime'}`;
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemKey = getItemKey(product);
      const existingItemIndex = prevItems.findIndex(item => 
        getItemKey(item) === itemKey
      );

      if (existingItemIndex > -1) {
        // Item exists, increment quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + (product.quantity || 1)
        };
        return updatedItems;
      } else {
        // New item, add to cart
        return [...prevItems, {
          ...product,
          quantity: product.quantity || 1,
          deliveryFrequency: product.deliveryFrequency || '1 month'
        }];
      }
    });
    setIsCartOpen(true);
  };

  const updateCartItemQuantity = (id, subscribe, change) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id && item.subscribe === subscribe) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) {
            return item; // Don't allow quantity less than 1
          }
          return {
            ...item,
            quantity: newQuantity
          };
        }
        return item;
      });
    });
  };

  const removeFromCart = (id, subscribe) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.subscribe === subscribe))
    );
  };

  const updateSubscription = (id, subscribe) => {
    setCartItems(prevItems => {
      const itemToUpdate = prevItems.find(item => item.id === id && item.subscribe !== subscribe);
      
      if (itemToUpdate) {
        // Remove old item and add new one with updated subscription
        const filteredItems = prevItems.filter(item => !(item.id === id && item.subscribe !== subscribe));
        return [...filteredItems, {
          ...itemToUpdate,
          subscribe,
          deliveryFrequency: subscribe ? '1 month' : undefined
        }];
      }
      return prevItems;
    });
  };

  const updateDeliveryFrequency = (id, subscribe, frequency) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.subscribe === subscribe 
          ? { ...item, deliveryFrequency: frequency }
          : item
      )
    );
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  // Get shipping cost based on method
  const getShippingCost = (shippingMethod) => {
    const subtotal = getCartTotal();
    const FREE_SHIPPING_THRESHOLD = 50;
    
    // Free shipping if subtotal meets threshold or cart is empty
    if (subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0) {
      return 0;
    }

    // Return shipping cost based on method
    switch (shippingMethod) {
      case "FedEx Ground":
        return 10.00;
      case "FedEx Express":
        return 25.00;
      case "FedEx Overnight":
        return 25.00;
      default:
        return 10.00;
    }
  };

  // Calculate fixed tax amount - always $9.79 regardless of cart contents
  const getTaxAmount = () => {
    return 9.79; // Fixed tax amount for all orders
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    updateSubscription,
    updateDeliveryFrequency,
    getCartItemsCount,
    getCartTotal,
    getShippingCost,
    getTaxAmount,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};