import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Checkout.css";
import SampleImage from "../assets/productdetailimg3.png";
import logo from "../assets/logo.png";

const CheckoutPage = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("Standard Shipping");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [billingAddress, setBillingAddress] = useState("same");
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

  return (
    <div className="container-fluid checkout-bg">
      <div className="row min-vh-100">
        {/* Left Column - Checkout Form */}
        <div className="col-lg-7 col-md-12 d-flex align-items-center justify-content-center py-4 py-lg-5">
          <div className="checkout-form w-100 max-width-700">
            <form onSubmit={handleSubmit}>
              {/* Header with Logo and Cart Icon */}
              <div className="checkout-header d-flex justify-content-between align-items-center mb-4">
                <div className="logo">
                  <img src={logo} alt="Logo" className="logo-img black-logo" />
                </div>
                <div className="cart-icon">
                  <span className="cart-badge">🛍️</span>
                </div>
              </div>
              
              {/* Contact Section */}
              <div className="form-section mb-4">
                <div className="section-header mb-3">
                  <h4 className="section-title">Contact</h4>
                  <p className="login-prompt">
                    Have an account? <a href="#login" className="login-link">Login</a>
                  </p>
                </div>
                
                <div className="mb-3 input-container">
                  <input
                    type="email"
                    className="form-control custom-input full-width-input"
                    placeholder="Enter an email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-check input-container">
                  <input
                    className="form-check-input custom-checkbox black-checkbox"
                    type="checkbox"
                    id="emailUpdates"
                    name="emailUpdates"
                    checked={formData.emailUpdates}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="emailUpdates">
                    Email me with updates and special offers
                  </label>
                </div>
              </div>

              {/* Delivery Section */}
              <div className="form-section mb-4">
                <h4 className="section-title mb-3">Delivery</h4>
                
                {/* Country/Region */}
                <div className="mb-4 input-container">
                  <label className="form-label section-subtitle">Country/region</label>
                  <div className="country-select-wrapper">
                    <select 
                      className="form-select custom-input full-width-input country-select"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <span className="select-arrow">▼</span>
                  </div>
                </div>

                {/* Name Row - Combined in one row */}
                <div className="mb-4 input-container">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label section-subtitle">First name (optional)</label>
                      <input
                        type="text"
                        className="form-control custom-input full-width-input"
                        placeholder="First name (optional)"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label section-subtitle">Last name</label>
                      <input
                        type="text"
                        className="form-control custom-input full-width-input"
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
                <div className="mb-4 input-container">
                  <label className="form-label section-subtitle">Address</label>
                      <input
                    type="text"
                    className="form-control custom-input full-width-input"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Apartment */}
                <div className="mb-4 input-container">
                  <label className="form-label section-subtitle">Apartment, suite, etc. (optional)</label>
                  <input
                    type="text"
                    className="form-control custom-input full-width-input"
                    placeholder="Apartment, suite, etc. (optional)"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                  />
                </div>

                {/* City, State, Postal Code - Combined in one row */}
                <div className="mb-4 input-container">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label section-subtitle">City</label>
                      <input
                        type="text"
                        className="form-control custom-input full-width-input"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label section-subtitle">State</label>
                      <select 
                        className="form-select custom-input full-width-input"
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
                      <label className="form-label section-subtitle">Postal code</label>
                      <input
                        type="text"
                        className="form-control custom-input full-width-input"
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
                <div className="mb-4 input-container">
                  <label className="form-label section-subtitle">Phone number</label>
                  <input
                    type="tel"
                    className="form-control custom-input full-width-input"
                    placeholder="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Text Updates */}
                <div className="form-check input-container">
                  <input
                    className="form-check-input custom-checkbox black-checkbox"
                    type="checkbox"
                    id="textUpdates"
                    name="textUpdates"
                    checked={formData.textUpdates}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="textUpdates">
                    Text me with news and offers
                  </label>
                </div>
              </div>

              {/* Shipping Methods Section */}
              <div className="form-section mb-4">
                <h4 className="section-title mb-3 input-container">Shipping methods</h4>
                
                <div className="shipping-methods">
                  {shippingMethods.map((method, index) => (
                    <div 
                      key={method.id}
                      className={`shipping-method ${
                        selectedShipping === method.name ? 'selected' : ''
                      } ${index === 0 ? 'first-shipping-method' : ''} ${
                        index === shippingMethods.length - 1 ? 'last-shipping-method' : ''
                      }`}
                      onClick={() => handleShippingChange(method.name)}
                    >
                      <div className="shipping-method-content">
                        <div className="method-radio">
                          <input
                            type="radio"
                            name="shippingMethod"
                            id={method.id}
                            checked={selectedShipping === method.name}
                            onChange={() => handleShippingChange(method.name)}
                            className="method-radio-input"
                          />
                        </div>
                        <div className="method-details">
                          <div className="method-header">
                            <label htmlFor={method.id} className="method-name">
                              {method.name}
                            </label>
                            <div className="method-price">${method.price.toFixed(2)}</div>
                          </div>
                          <div className="method-info">
                            <div className="method-delivery">{method.delivery}</div>
                            {method.description && (
                              <div className="method-description">{method.description}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Section */}
              <div className="form-section mb-4">
                <h4 className="section-title mb-3 input-container">Payment</h4>
                <p className="payment-security input-container">All transactions are secured and encrypted.</p>
                
                <div className="payment-methods">
                  {/* Credit/Debit Card Option */}
                  <div className="payment-method first-payment-method">
                    <div 
                      className={`payment-option ${selectedPayment === 'card' ? 'selected' : ''}`}
                      onClick={() => handlePaymentChange('card')}
                    >
                      <div className="payment-radio">
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="card"
                          checked={selectedPayment === 'card'}
                          onChange={() => handlePaymentChange('card')}
                          className="method-radio-input"
                        />
                      </div>
                      <div className="payment-label">
                        <label htmlFor="card" className="payment-method-name">
                          Credit or debit card
                        </label>
                      </div>
                    </div>
                    
                    {selectedPayment === 'card' && (
                      <div className="card-details">
                        <div className="mb-3">
                          <label className="form-label section-subtitle">Card number</label>
                          <input
                            type="text"
                            className="form-control custom-input full-width-input"
                            placeholder="Card number"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <label className="form-label section-subtitle">Expiration date (MM/YY)</label>
                            <input
                              type="text"
                              className="form-control custom-input full-width-input"
                              placeholder="MM/YY"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label section-subtitle">Security code</label>
                            <input
                              type="text"
                              className="form-control custom-input full-width-input"
                              placeholder="CVC"
                              name="securityCode"
                              value={formData.securityCode}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <label className="form-label section-subtitle">Name on card</label>
                          <input
                            type="text"
                            className="form-control custom-input full-width-input"
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
                  <div className="payment-method last-payment-method">
                    <div 
                      className={`payment-option ${selectedPayment === 'paypal' ? 'selected' : ''}`}
                      onClick={() => handlePaymentChange('paypal')}
                    >
                      <div className="payment-radio">
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="paypal"
                          checked={selectedPayment === 'paypal'}
                          onChange={() => handlePaymentChange('paypal')}
                          className="method-radio-input"
                        />
                      </div>
                      <div className="payment-label">
                        <label htmlFor="paypal" className="payment-method-name">
                          PayPal
                        </label>
                      </div>
                    </div>
                    
                    {selectedPayment === 'paypal' && (
                      <div className="paypal-details">
                        <div className="paypal-info">
                          <p>You will be redirected to PayPal to complete your payment securely.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Billing Address Section */}
              <div className="form-section mb-4">
                <h4 className="section-title mb-3 input-container">Billing address</h4>
                <p className="billing-description input-container">
                  Select the address that matches your card or payment method.
                </p>
                
                <div className="billing-options">
                  <div className="billing-option first-billing-option">
                    <div 
                      className={`billing-radio-option ${billingAddress === 'same' ? 'selected' : ''}`}
                      onClick={() => handleBillingAddressChange('same')}
                    >
                      <div className="billing-radio">
                        <input
                          type="radio"
                          name="billingAddress"
                          id="sameAddress"
                          checked={billingAddress === 'same'}
                          onChange={() => handleBillingAddressChange('same')}
                          className="method-radio-input"
                        />
                      </div>
                      <div className="billing-label">
                        <label htmlFor="sameAddress" className="billing-option-name">
                          Same as shipping address
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="billing-option last-billing-option">
                    <div 
                      className={`billing-radio-option ${billingAddress === 'different' ? 'selected' : ''}`}
                      onClick={() => handleBillingAddressChange('different')}
                    >
                      <div className="billing-radio">
                        <input
                          type="radio"
                          name="billingAddress"
                          id="differentAddress"
                          checked={billingAddress === 'different'}
                          onChange={() => handleBillingAddressChange('different')}
                          className="method-radio-input"
                        />
                      </div>
                      <div className="billing-label">
                        <label htmlFor="differentAddress" className="billing-option-name">
                          Use a different billing address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <div className="form-section mb-4">
                <div className="continue-section">
                  <button type="submit" className="continue-btn">
                    Continue to Shipping
                  </button>
                </div>
              </div>
            </form>

            {/* Footer Links */}
            <div className="footer-links">
              <div className="footer-link-item">
                <a href="#return" className="footer-link">Return policy</a>
              </div>
              <div className="footer-link-item">
                <a href="#privacy" className="footer-link">Privacy policy</a>
              </div>
              <div className="footer-link-item">
                <a href="#terms" className="footer-link">Terms of use</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="col-lg-5 col-md-12 order-summary-bg d-flex align-items-start justify-content-center py-4 py-lg-5">
          <div className="order-summary w-100 max-width-500">
            {/* Product Items */}
            <div className="order-items mb-4">
              {cartItems.map((item, index) => (
                <div key={item.id} className="order-item d-flex align-items-center mb-3">
                  <div className="item-image-wrapper position-relative me-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-badge">{item.quantity}</div>
                  </div>
                  
                  <div className="item-details flex-grow-1">
                    <h5 className="item-name mb-1">{item.name}</h5>
                    <p className="item-size text-muted mb-0">{item.size}</p>
                  </div>
                  
                  <div className="item-price">
                    <span className="price-amount">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-line mb-4"></div>

            {/* Discount Code Section */}
            <div className="discount-section mb-4 input-container">
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="discount-input flex-grow-1 me-3"
                  placeholder="Discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button 
                  type="button"
                  className="apply-btn"
                  onClick={handleApplyDiscount}
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="border-line mb-4"></div>

            {/* Pricing Summary */}
            <div className="pricing-summary">
              <div className="price-row d-flex justify-content-between mb-2">
                <span className="price-label">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="price-value">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="price-row d-flex justify-content-between mb-2">
                <span className="price-label">Shipping</span>
                <span className="price-value">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              
              <div className="price-row d-flex justify-content-between mb-3">
                <span className="price-label">Tax</span>
                <span className="price-value">${tax.toFixed(2)}</span>
              </div>
              
              <div className="price-row d-flex justify-content-between total-row">
                <span className="total-label">Total</span>
                <span className="total-value">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;