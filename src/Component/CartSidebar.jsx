import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Cartsidebar.css";
import cartempty from "../assets/cartempty.png";
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import amex from "../assets/amex.png";
import discover from "../assets/discover.png";
import apple from "../assets/apple.png";
import paypal from "../assets/paypal.png";
import shop from "../assets/shoppay.png";
import { useCart } from "./CartContext.jsx";

const CartSidebar = ({ isOpen, onClose }) => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    updateSubscription,
    updateDeliveryFrequency,
    getCartItemsCount,
    getCartTotal
  } = useCart();

  const navigate = useNavigate();

  // Free shipping threshold
  const FREE_SHIPPING_THRESHOLD = 50;

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

  const handleQuantityChange = (id, subscribe, change) => {
    updateCartItemQuantity(id, subscribe, change);
  };

  const handleSubscribeChange = (id, currentSubscribe) => {
    updateSubscription(id, !currentSubscribe);
  };

  const handleDeliveryFrequencyChange = (id, subscribe, frequency) => {
    updateDeliveryFrequency(id, subscribe, frequency);
  };

  const handleRemoveItem = (id, subscribe) => {
    removeFromCart(id, subscribe);
  };

  const handleCheckout = () => {
    onClose(); // Close the sidebar
    navigate("/checkout"); // Navigate to checkout page
  };

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.99;
    return subtotal + shipping;
  };

  // Calculate progress towards free shipping
  const calculateShippingProgress = () => {
    const cartTotal = calculateSubtotal();
    if (cartTotal === 0) return 0;
    const progress = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
    return progress;
  };

  // Get progress bar color based on progress
  const getProgressBarColor = () => {
    const progress = calculateShippingProgress();
    if (progress >= 100) {
      return "#10B981"; // Green when free shipping achieved
    } else if (progress >= 70) {
      return "#F59E0B"; // Amber when close to free shipping
    } else {
      return "#5D5FEF"; // Default purple
    }
  };

  // Get shipping message based on progress
  const getShippingMessage = () => {
    const cartTotal = calculateSubtotal();
    const amountNeeded = FREE_SHIPPING_THRESHOLD - cartTotal;
    
    if (cartTotal >= FREE_SHIPPING_THRESHOLD) {
      return "🎉 You've unlocked free shipping!";
    } else if (cartTotal > 0) {
      return `You're $${amountNeeded.toFixed(2)} away from free shipping`;
    } else {
      return `Add $${FREE_SHIPPING_THRESHOLD} to get free shipping`;
    }
  };

  if (!isOpen) return null;

  const isCartEmpty = cartItems.length === 0;
  const progress = calculateShippingProgress();
  const progressBarColor = getProgressBarColor();
  const shippingMessage = getShippingMessage();

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="cart-backdrop" onClick={onClose} />
      
      <aside className="cart-sidebar">
        <div className="cart-header">
          <div className="cart-header-top">
            <span className="cart-title">Your cart ({getCartItemsCount()})</span>
            <button className="cart-close-btn" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <span className="cart-subtext">{shippingMessage}</span>
          <div className="cart-progress-bar">
            <div 
              className="cart-progress" 
              style={{ 
                width: `${progress}%`,
                background: progressBarColor
              }} 
            />
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
                <div key={`${item.id}-${item.subscribe}-${index}`} className="cart-item-container">
                  {/* Product Container */}
                  <div className="cart-item-product">
                    <div className="cart-item-main">
                      <img src={item.image} alt={item.name} className="cart-item-image" />
                      <div className="cart-item-details">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <div className="cart-item-quantity-container">
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, item.subscribe, -1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="quantity-number">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, item.subscribe, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-pricing">
                        <div className="cart-item-price">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</div>
                        {item.originalPrice && (
                          <div className="cart-item-original-price">${(item.originalPrice * (item.quantity || 1)).toFixed(2)}</div>
                        )}
                        <button 
                          className="cart-item-remove"
                          onClick={() => handleRemoveItem(item.id, item.subscribe)}
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
                        checked={item.subscribe || false}
                        onChange={() => handleSubscribeChange(item.id, item.subscribe || false)}
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
                              className={`frequency-option ${(item.deliveryFrequency || '1 month') === freq ? 'active' : ''}`}
                              onClick={() => handleDeliveryFrequencyChange(item.id, item.subscribe, freq)}
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
                  <span>Subtotal ({getCartItemsCount()} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {calculateSubtotal() >= FREE_SHIPPING_THRESHOLD || calculateSubtotal() === 0 ? "Free" : `$${5.99}`}
                  </span>
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
          {isCartEmpty ? (
            <button className="continue-shopping-btn" onClick={onClose}>
              Continue shopping
            </button>
          ) : (
            <>
              <div className="estimated-total">
                <div className="estimated-total-label">Estimated total</div>
                <div className="estimated-total-price">${calculateTotal().toFixed(2)}</div>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
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