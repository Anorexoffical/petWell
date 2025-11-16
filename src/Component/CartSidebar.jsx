
import React, { useState } from "react";
import "../Style/Cartsidebar.css";
import cartempty from "../assets/cartempty.png";
import productdetailimg1 from '../assets/productdetailimg1.png';
import productdetailimg2 from '../assets/productdetailimg2.png';
import productdetailimg3 from '../assets/productdetailimg3.png';
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import amex from "../assets/amex.png";
import discover from "../assets/discover.png";
import apple from "../assets/apple.png";
import paypal from "../assets/paypal.png";
import shop from "../assets/shoppay.png";
import qrcode from "../assets/qrcode.png";

const CartSidebar = ({ isOpen, onClose, cartItems, setCartItems }) => {
  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
    };
  }, [isOpen]);

  const handleQuantityChange = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleSubscribeChange = (id) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          // If checking this checkbox, uncheck all others
          if (!item.subscribe) {
            return { ...item, subscribe: true };
          } else {
            return { ...item, subscribe: false };
          }
        } else {
          // Uncheck all other items when one is checked
          return { ...item, subscribe: false };
        }
      })
    );
  };

  const handleDeliveryFrequencyChange = (id, frequency) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, deliveryFrequency: frequency }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  if (!isOpen) return null;

  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="cart-backdrop" onClick={onClose} />
      
      <aside className="cart-sidebar">
        <div className="cart-header">
          <div className="cart-header-top">
            <span className="cart-title">Your cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})</span>
            <button className="cart-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <span className="cart-subtext">You're $50 away from free shipping</span>
          <div className="cart-progress-bar">
            <div className="cart-progress" style={{ width: "70%" }} />
          </div>
        </div>
        
        {isCartEmpty ? (
          <div className="cart-empty-content">
            <img src={cartempty} alt="Empty cart illustration" className="cart-empty-img" />
            <div className="cart-empty-text">Your cart is empty</div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={item.id} className="cart-item-container">
                  {/* Product Container */}
                  <div className="cart-item-product">
                    <div className="cart-item-main">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <div className="cart-item-quantity-container">
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="quantity-number">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-pricing">
                        <div className="cart-item-price">${item.price.toFixed(2)}</div>
                        <div className="cart-item-original-price">${item.originalPrice.toFixed(2)}</div>
                        <button 
                          className="cart-item-remove"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subscribe Container */}
                  <div className="subscribe-container">
                    <label className="subscribe-checkbox">
                      <input 
                        type="checkbox" 
                        checked={item.subscribe}
                        onChange={() => handleSubscribeChange(item.id)}
                      />
                      <span className="checkmark"></span>
                      <div className="subscribe-content">
                        <div className="subscribe-title-container">
                          <span className="subscribe-title">Subscribe & save </span>
                          <span className="discount-badge">20%</span>
                        </div>
                        <span className="subscribe-description">
                          Order 1 item every 30 days for $31.99. Swap choices or cancel anytime.
                        </span>
                      </div>
                    </label>
                    
                    {/* Delivery frequency section - ONLY VISIBLE WHEN SUBSCRIBE IS CHECKED */}
                    {item.subscribe && (
                      <div className="delivery-frequency">
                        <span className="delivery-label">DELIVER EVERY</span>
                        <div className="frequency-options">
                          {['1 month', '2 months', '3 months'].map(freq => (
                            <button
                              key={freq}
                              className={`frequency-option ${item.deliveryFrequency === freq ? 'active' : ''}`}
                              onClick={() => handleDeliveryFrequencyChange(item.id, freq)}
                            >
                              {freq}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-section">
                <div className="summary-row separation">
                  <span>Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row tax-row">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              {/* Payment Methods */}
              <div className="payment-methods">
                <div className="payment-label">We accept</div>
                <div className="payment-icons">
                  <img src={visa} alt="Visa" className="payment-icon" />
                  <img src={master} alt="Mastercard" className="payment-icon" />
                  <img src={amex} alt="American Express" className="payment-icon" />
                  <img src={discover} alt="Discover" className="payment-icon" />
                  <img src={apple} alt="Apple Pay" className="payment-icon" />
                  <img src={paypal} alt="PayPal" className="payment-icon" />
                  <img src={shop} alt="Shop Pay" className="payment-icon" />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="cart-footer">
          <div className="estimated-total">
            <div className="estimated-total-label">Estimated total</div>
            <div className="estimated-total-price">${calculateTotal().toFixed(2)}</div>
          </div>
          {isCartEmpty ? (
            <button className="continue-shopping-btn" onClick={onClose}>
              Continue shopping
            </button>
          ) : (
            <>
              <button className="checkout-btn">
                Checkout
              </button>
              <div className="tax-shipping-note">
                Tax and shipping calculated at checkout
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;