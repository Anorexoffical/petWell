import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Checkout.css";
import SampleImage from "../assets/productdetailimg3.png";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { RiShoppingBag4Line } from "react-icons/ri";

const CheckoutPage = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("Standard Shipping");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [billingAddress, setBillingAddress] = useState("same");
  const [showMobileOrderSummary, setShowMobileOrderSummary] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    emailUpdates: true,
    country: "United States",
    firstName: "John",
    lastName: "Doe",
    address: "206 Batran's Street",
    apartment: "Unit 39",
    city: "Miami",
    state: "FL",
    postalCode: "2044",
    phone: "",
    textUpdates: true,
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    nameOnCard: ""
  });

  const cartItems = [
    {
      id: 1,
      name: "Canine Collection Kit",
      size: "25 ml",
      price: 239.99,
      quantity: 1,
      image: SampleImage
    },
    {
      id: 2,
      name: "Another Product",
      size: "50 ml", 
      price: 29.99,
      quantity: 1,
      image: SampleImage
    }
  ];

  const shippingMethods = [
    {
      id: "standard-shipping",
      name: "Standard Shipping",
      price: 10.00,
      delivery: "3-5 business days",
      description: ""
    },
    {
      id: "express-shipping",
      name: "Express Shipping",
      price: 25.00,
      delivery: "1-2 business days",
      description: ""
    },
    {
      id: "overnight-shipping",
      name: "Overnight Shipping",
      price: 40.00,
      delivery: "Next business day",
      description: "No weekend shipments or deliveries. No PO boxes"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethods.find(method => method.name === selectedShipping)?.price || 0;
  const tax = 9.79;
  const total = subtotal + shippingCost + tax;

  const handleApplyDiscount = () => {
    if (discountCode.trim()) {
      alert(`Discount code "${discountCode}" applied!`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleShippingChange = (methodName) => {
    setSelectedShipping(methodName);
  };

  const handlePaymentChange = (method) => {
    setSelectedPayment(method);
  };

  const handleBillingAddressChange = (type) => {
    setBillingAddress(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Order placed successfully!");
  };

  const toggleMobileOrderSummary = () => {
    setShowMobileOrderSummary(!showMobileOrderSummary);
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid checkout-container-bg">
        <div className="row min-vh-100">
          {/* Left Column - Checkout Form */}
          <div className="col-lg-7 col-md-12 d-flex align-items-center justify-content-center py-4 py-lg-5">
            <div className="checkout-form-container w-100 checkout-max-width-700">
              <form onSubmit={handleSubmit}>
                {/* Header with Logo and Cart Icon */}
                <div className="checkout-main-header d-flex justify-content-between align-items-center mb-4">
                  <div className="checkout-logo">
                    <img src={logo} alt="Logo" className="checkout-logo-img checkout-black-logo" />
                  </div>
                  <div className="checkout-cart-icon">
                    <RiShoppingBag4Line className="checkout-cart-icon-svg" />
                  </div>
                </div>

                {/* Mobile Order Summary Container */}
                <div className="checkout-mobile-summary-wrapper d-lg-none mb-4">
                  {/* Mobile Order Summary Toggle */}
                  <div 
                    className="checkout-mobile-summary-container"
                    onClick={toggleMobileOrderSummary}
                  >
                    <div className="checkout-mobile-summary-content">
                      <div className="checkout-mobile-cart-icon">
                        <RiShoppingBag4Line className="checkout-mobile-cart-icon-svg" />
                      </div>
                      <div className="checkout-mobile-summary-text">
                        <span className="checkout-mobile-summary-title">
                          {showMobileOrderSummary ? 'Hide order summary' : 'Show order summary'}
                        </span>
                        <svg 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          className={`checkout-mobile-arrow-icon ${showMobileOrderSummary ? 'checkout-arrow-up' : 'checkout-arrow-down'}`}
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                    </div>
                    <div className="checkout-mobile-total-price">${total.toFixed(2)}</div>
                  </div>

                  {/* Mobile Order Summary Content */}
                  <div className={`checkout-mobile-summary-section ${showMobileOrderSummary ? 'checkout-mobile-summary-expanded' : 'checkout-mobile-summary-collapsed'}`}>
                    {/* Product Items */}
                    <div className="checkout-order-items-mobile mb-4">
                      {cartItems.map((item, index) => (
                        <div key={item.id} className="checkout-order-item-mobile d-flex align-items-center mb-3">
                          <div className="checkout-item-image-wrapper-mobile position-relative me-3">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="checkout-item-image-mobile"
                            />
                            <div className="checkout-item-badge-mobile">{item.quantity}</div>
                          </div>
                          
                          <div className="checkout-item-details-mobile flex-grow-1">
                            <h5 className="checkout-item-name-mobile mb-1">{item.name}</h5>
                            <p className="checkout-item-size-mobile text-muted mb-0">{item.size}</p>
                          </div>
                          
                          <div className="checkout-item-price-mobile">
                            <span className="checkout-price-amount-mobile">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="checkout-border-line-mobile mb-4"></div>

                    {/* Discount Code Section */}
                    <div className="checkout-discount-section-mobile mb-4">
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="checkout-discount-input-mobile flex-grow-1 me-3"
                          placeholder="Discount code"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button 
                          type="button"
                          className="checkout-apply-btn-mobile"
                          onClick={handleApplyDiscount}
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                    <div className="checkout-border-line-mobile mb-4"></div>

                    {/* Pricing Summary */}
                    <div className="checkout-pricing-summary-mobile">
                      <div className="checkout-price-row-mobile d-flex justify-content-between mb-2">
                        <span className="checkout-price-label-mobile">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                        <span className="checkout-price-value-mobile">${subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="checkout-price-row-mobile d-flex justify-content-between mb-2">
                        <span className="checkout-price-label-mobile">Shipping</span>
                        <span className="checkout-price-value-mobile">Calculated on next step</span>
                      </div>
                      
                      <div className="checkout-price-row-mobile d-flex justify-content-between mb-3">
                        <span className="checkout-price-label-mobile">Tax</span>
                        <span className="checkout-price-value-mobile">Calculated on next step</span>
                      </div>
                      
                      <div className="checkout-price-row-mobile d-flex justify-content-between checkout-total-row-mobile">
                        <span className="checkout-total-label-mobile">Total</span>
                        <span className="checkout-total-value-mobile">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Section */}
                <div className="checkout-form-section mb-4">
                  <div className="checkout-section-header mb-3">
                    <h4 className="checkout-section-title">Contact</h4>
                    <p className="checkout-login-prompt">
                      Have an account? <a href="#login" className="checkout-login-link">Login</a>
                    </p>
                  </div>
                  
                  <div className="mb-3 checkout-input-container">
                    <input
                      type="email"
                      className="form-control checkout-custom-input checkout-full-width-input"
                      placeholder="Enter an email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-check checkout-input-container">
                    <input
                      className="form-check-input checkout-custom-checkbox checkout-black-checkbox"
                      type="checkbox"
                      id="emailUpdates"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label checkout-form-check-label" htmlFor="emailUpdates">
                      Email me with updates and special offers
                    </label>
                  </div>
                </div>

                {/* Delivery Section */}
                <div className="checkout-form-section mb-4">
                  <h4 className="checkout-section-title mb-3">Delivery</h4>
                  
                  {/* Country/Region */}
                  <div className="mb-4 checkout-input-container">
                    <label className="form-label checkout-section-subtitle">Country/region</label>
                    <div className="checkout-country-select-wrapper">
                      <select 
                        className="form-select checkout-custom-input checkout-full-width-input checkout-country-select"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                      <span className="checkout-select-arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '6px'}}>
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Name Row */}
                  <div className="mb-4 checkout-input-container">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label checkout-section-subtitle">First name (optional)</label>
                        <input
                          type="text"
                          className="form-control checkout-custom-input checkout-full-width-input"
                          placeholder="First name (optional)"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label checkout-section-subtitle">Last name</label>
                        <input
                          type="text"
                          className="form-control checkout-custom-input checkout-full-width-input"
                          placeholder="Last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-4 checkout-input-container">
                    <label className="form-label checkout-section-subtitle">Address</label>
                    <input
                      type="text"
                      className="form-control checkout-custom-input checkout-full-width-input"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Apartment */}
                  <div className="mb-4 checkout-input-container">
                    <label className="form-label checkout-section-subtitle">Apartment, suite, etc. (optional)</label>
                    <input
                      type="text"
                      className="form-control checkout-custom-input checkout-full-width-input"
                      placeholder="Apartment, suite, etc. (optional)"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* City, State, Postal Code */}
                  <div className="mb-4 checkout-input-container">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <label className="form-label checkout-section-subtitle">City</label>
                        <input
                          type="text"
                          className="form-control checkout-custom-input checkout-full-width-input"
                          placeholder="City"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label checkout-section-subtitle">State</label>
                        <select 
                          className="form-select checkout-custom-input checkout-full-width-input"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="FL">FL</option>
                          <option value="CA">CA</option>
                          <option value="NY">NY</option>
                          <option value="TX">TX</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label checkout-section-subtitle">Postal code</label>
                        <input
                          type="text"
                          className="form-control checkout-custom-input checkout-full-width-input"
                          placeholder="Postal code"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4 checkout-input-container">
                    <label className="form-label checkout-section-subtitle">Phone number</label>
                    <input
                      type="tel"
                      className="form-control checkout-custom-input checkout-full-width-input"
                      placeholder="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Text Updates */}
                  <div className="form-check checkout-input-container">
                    <input
                      className="form-check-input checkout-custom-checkbox checkout-black-checkbox"
                      type="checkbox"
                      id="textUpdates"
                      name="textUpdates"
                      checked={formData.textUpdates}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label checkout-form-check-label" htmlFor="textUpdates">
                      Text me with news and offers
                    </label>
                  </div>
                </div>

                {/* Shipping Methods Section */}
                <div className="checkout-form-section mb-4">
                  <h4 className="checkout-section-title mb-3 checkout-input-container">Shipping methods</h4>
                  
                  <div className="checkout-shipping-methods">
                    {shippingMethods.map((method, index) => (
                      <div 
                        key={method.id}
                        className={`checkout-shipping-method ${
                          selectedShipping === method.name ? 'checkout-selected' : ''
                        } ${index === 0 ? 'checkout-first-shipping-method' : ''} ${
                          index === shippingMethods.length - 1 ? 'checkout-last-shipping-method' : ''
                        }`}
                        onClick={() => handleShippingChange(method.name)}
                      >
                        <div className="checkout-shipping-method-content">
                          <div className="checkout-method-radio">
                            <input
                              type="radio"
                              name="shippingMethod"
                              id={method.id}
                              checked={selectedShipping === method.name}
                              onChange={() => handleShippingChange(method.name)}
                              className="checkout-method-radio-input"
                            />
                          </div>
                          <div className="checkout-method-details">
                            <div className="checkout-method-header">
                              <label htmlFor={method.id} className="checkout-method-name">
                                {method.name}
                              </label>
                              <div className="checkout-method-price">${method.price.toFixed(2)}</div>
                            </div>
                            <div className="checkout-method-info">
                              <div className="checkout-method-delivery">{method.delivery}</div>
                              {method.description && (
                                <div className="checkout-method-description">{method.description}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Section */}
                <div className="checkout-form-section mb-4">
                  <h4 className="checkout-section-title mb-3 checkout-input-container">Payment</h4>
                  <p className="checkout-payment-security checkout-input-container">All transactions are secured and encrypted.</p>
                  
                  <div className="checkout-payment-methods">
                    {/* Credit/Debit Card Option */}
                    <div className="checkout-payment-method checkout-first-payment-method">
                      <div 
                        className={`checkout-payment-option ${selectedPayment === 'card' ? 'checkout-selected' : ''}`}
                        onClick={() => handlePaymentChange('card')}
                      >
                        <div className="checkout-payment-radio">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="card"
                            checked={selectedPayment === 'card'}
                            onChange={() => handlePaymentChange('card')}
                            className="checkout-method-radio-input"
                          />
                        </div>
                        <div className="checkout-payment-label">
                          <label htmlFor="card" className="checkout-payment-method-name">
                            Credit or debit card
                          </label>
                        </div>
                      </div>
                      
                      {selectedPayment === 'card' && (
                        <div className="checkout-card-details">
                          <div className="mb-3">
                            <label className="form-label checkout-section-subtitle">Card number</label>
                            <input
                              type="text"
                              className="form-control checkout-custom-input checkout-full-width-input"
                              placeholder="Card number"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <label className="form-label checkout-section-subtitle">Expiration date (MM/YY)</label>
                              <input
                                type="text"
                                className="form-control checkout-custom-input checkout-full-width-input"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label checkout-section-subtitle">Security code</label>
                              <input
                                type="text"
                                className="form-control checkout-custom-input checkout-full-width-input"
                                placeholder="CVC"
                                name="securityCode"
                                value={formData.securityCode}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <label className="form-label checkout-section-subtitle">Name on card</label>
                            <input
                              type="text"
                              className="form-control checkout-custom-input checkout-full-width-input"
                              placeholder="Name on card"
                              name="nameOnCard"
                              value={formData.nameOnCard}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* PayPal Option */}
                    <div className="checkout-payment-method checkout-last-payment-method">
                      <div 
                        className={`checkout-payment-option ${selectedPayment === 'paypal' ? 'checkout-selected' : ''}`}
                        onClick={() => handlePaymentChange('paypal')}
                      >
                        <div className="checkout-payment-radio">
                          <input
                            type="radio"
                            name="paymentMethod"
                            id="paypal"
                            checked={selectedPayment === 'paypal'}
                            onChange={() => handlePaymentChange('paypal')}
                            className="checkout-method-radio-input"
                          />
                        </div>
                        <div className="checkout-payment-label">
                          <label htmlFor="paypal" className="checkout-payment-method-name">
                            PayPal
                          </label>
                        </div>
                      </div>
                      
                      {selectedPayment === 'paypal' && (
                        <div className="checkout-paypal-details">
                          <div className="checkout-paypal-info">
                            <p>You will be redirected to PayPal to complete your payment securely.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Billing Address Section */}
                <div className="checkout-form-section mb-4">
                  <h4 className="checkout-section-title mb-3 checkout-input-container">Billing address</h4>
                  <p className="checkout-billing-description checkout-input-container">
                    Select the address that matches your card or payment method.
                  </p>
                  
                  <div className="checkout-billing-options">
                    <div className="checkout-billing-option checkout-first-billing-option">
                      <div 
                        className={`checkout-billing-radio-option ${billingAddress === 'same' ? 'checkout-selected' : ''}`}
                        onClick={() => handleBillingAddressChange('same')}
                      >
                        <div className="checkout-billing-radio">
                          <input
                            type="radio"
                            name="billingAddress"
                            id="sameAddress"
                            checked={billingAddress === 'same'}
                            onChange={() => handleBillingAddressChange('same')}
                            className="checkout-method-radio-input"
                          />
                        </div>
                        <div className="checkout-billing-label">
                          <label htmlFor="sameAddress" className="checkout-billing-option-name">
                            Same as shipping address
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="checkout-billing-option checkout-last-billing-option">
                      <div 
                        className={`checkout-billing-radio-option ${billingAddress === 'different' ? 'checkout-selected' : ''}`}
                        onClick={() => handleBillingAddressChange('different')}
                      >
                        <div className="checkout-billing-radio">
                          <input
                            type="radio"
                            name="billingAddress"
                            id="differentAddress"
                            checked={billingAddress === 'different'}
                            onChange={() => handleBillingAddressChange('different')}
                            className="checkout-method-radio-input"
                          />
                        </div>
                        <div className="checkout-billing-label">
                          <label htmlFor="differentAddress" className="checkout-billing-option-name">
                            Use a different billing address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="checkout-form-section mb-4">
                  <div className="checkout-continue-section">
                    <button type="submit" className="checkout-continue-btn">
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </form>

              {/* Footer Links */}
              <div className="checkout-footer-links">
                <div className="checkout-footer-link-item">
                  <a href="#return" className="checkout-footer-link">Return policy</a>
                </div>
                <div className="checkout-footer-link-item">
                  <a href="#privacy" className="checkout-footer-link">Privacy policy</a>
                </div>
                <div className="checkout-footer-link-item">
                  <a href="#terms" className="checkout-footer-link">Terms of use</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="col-lg-5 col-md-12 checkout-order-summary-bg d-flex align-items-start justify-content-center py-4 py-lg-5 d-none d-lg-flex">
            <div className="checkout-order-summary w-100 checkout-max-width-500">
              {/* Product Items */}
              <div className="checkout-order-items mb-4">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="checkout-order-item d-flex align-items-center mb-3">
                    <div className="checkout-item-image-wrapper position-relative me-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="checkout-item-image"
                      />
                      <div className="checkout-item-badge">{item.quantity}</div>
                    </div>
                    
                    <div className="checkout-item-details flex-grow-1">
                      <h5 className="checkout-item-name mb-1">{item.name}</h5>
                      <p className="checkout-item-size text-muted mb-0">{item.size}</p>
                    </div>
                    
                    <div className="checkout-item-price">
                      <span className="checkout-price-amount">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-border-line mb-4"></div>

              {/* Discount Code Section */}
              <div className="checkout-discount-section mb-4 checkout-input-container">
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="checkout-discount-input flex-grow-1 me-3"
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <button 
                    type="button"
                    className="checkout-apply-btn"
                    onClick={handleApplyDiscount}
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="checkout-border-line mb-4"></div>

              {/* Pricing Summary */}
              <div className="checkout-pricing-summary">
                <div className="checkout-price-row d-flex justify-content-between mb-2">
                  <span className="checkout-price-label">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="checkout-price-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="checkout-price-row d-flex justify-content-between mb-2">
                  <span className="checkout-price-label">Shipping</span>
                  <span className="checkout-price-value">
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="checkout-price-row d-flex justify-content-between mb-3">
                  <span className="checkout-price-label">Tax</span>
                  <span className="checkout-price-value">${tax.toFixed(2)}</span>
                </div>
                
                <div className="checkout-price-row d-flex justify-content-between checkout-total-row">
                  <span className="checkout-total-label">Total</span>
                  <span className="checkout-total-value">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;