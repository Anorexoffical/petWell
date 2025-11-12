import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/SuccessCheckout.css";
import SampleImage from "../assets/productdetailimg3.png";
import logo from "../assets/logo.png";

const SuccessCheckout = () => {
  const [orderData, setOrderData] = useState(null);
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    // In a real app, this would come from your backend or context
    const dummyOrderData = {
      orderNumber: "JFNS7GS4",
      customerName: "John",
      email: "johndoe@example.com",
      shippingAddress: {
        name: "John Doe",
        street: "206 Batran's Street",
        unit: "Unit 39",
        city: "Ottawa",
        state: "Ontario",
        postalCode: "2044",
        country: "Canada"
      },
      shippingMethod: "FedEx Ground",
      paymentMethod: {
        type: "visa",
        lastFour: "1234"
      },
      items: [
        {
          id: 1,
          name: "Canine Collection Kit",
          size: "25 ml",
          price: 239.99,
          quantity: 1,
          image: SampleImage
        }
      ],
      subtotal: 69.98,
      shipping: 10.00,
      tax: 0.00,
      total: 79.98,
      totalItems: 21
    };

    setOrderData(dummyOrderData);
    
    // Generate Google Maps URL based on address
    const address = `${dummyOrderData.shippingAddress.street}, ${dummyOrderData.shippingAddress.city}, ${dummyOrderData.shippingAddress.state}, ${dummyOrderData.shippingAddress.country}`;
    const encodedAddress = encodeURIComponent(address);
    setMapUrl(`https://maps.google.com/maps?q=${encodedAddress}&output=embed`);
  }, []);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid success-bg">
      <div className="row min-vh-100">
        {/* Left Column - Order Confirmation */}
        <div className="col-lg-7 col-md-12 d-flex align-items-center justify-content-center py-4 py-lg-5">
          <div className="success-content w-100 max-width-700">
            {/* Header with Logo */}
            <div className="success-header mb-4">
              <div className="logo mb-4">
                <img src={logo} alt="petwell" className="logo-img black-logo" />
                <div className="confirmation-number">
                  Confirmation #{orderData.orderNumber}
                </div>
                <h1 className="thank-you">Thank you, {orderData.customerName}!</h1>
              </div>
            </div>

            <div className="border-line mb-4"></div>

            {/* Order Confirmed Section - UPDATED DESIGN */}
            <div className="confirmation-section mb-4">
              <div className="order-confirmed-header">
                <div className="confirmed-icon">✓</div>
                <div className="confirmed-text">
                  <div className="confirmed-title-main">Your order is confirmed</div>
                  <div className="confirmed-description-main">
                    Preparing for shipment. Return to this page for shipment status updates.
                  </div>
                </div>
              </div>
              <button className="track-order-btn">Track order</button>
            </div>

            <div className="border-line mb-4"></div>

            {/* Email Updates */}
            <div className="email-updates mb-4">
              <div className="form-check">
                <input
                  className="form-check-input custom-checkbox black-checkbox"
                  type="checkbox"
                  id="emailUpdates"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="emailUpdates">
                  Email me with updates and special offers
                </label>
              </div>
            </div>

            <div className="border-line mb-4"></div>

            {/* Order Details */}
            <div className="order-details-section mb-4">
              <h3 className="section-title-small">Order details</h3>
              
              <div className="detail-group mb-3">
                <div className="detail-label">Contact information</div>
                <div className="detail-value">{orderData.email}</div>
              </div>

              <div className="detail-group mb-3">
                <div className="detail-label">Shipping address</div>
                <div className="detail-value">
                  {orderData.shippingAddress.name}<br />
                  {orderData.shippingAddress.state}, {orderData.shippingAddress.city}, {orderData.shippingAddress.postalCode}<br />
                  {orderData.shippingAddress.street}, {orderData.shippingAddress.unit} {orderData.shippingAddress.country}
                </div>
              </div>

              <div className="detail-group mb-3">
                <div className="detail-label">Shipping method</div>
                <div className="detail-value">{orderData.shippingMethod}</div>
              </div>

              {/* Map Section */}
              <div className="map-section mb-4">
                <div className="map-container">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delivery Location Map"
                  ></iframe>
                </div>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input custom-checkbox black-checkbox"
                  type="checkbox"
                  id="saveInfo"
                />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save my information for a faster checkout
                </label>
              </div>
            </div>

            <div className="border-line mb-4"></div>

            {/* Payment Method */}
            <div className="payment-section mb-4">
              <h3 className="section-title-small">Payment method</h3>
              <div className="payment-method-display">
                <div className="payment-type">
                  <strong className="visa-text">visa</strong> Visa ****{orderData.paymentMethod.lastFour}
                </div>
              </div>

              <div className="detail-group mt-3">
                <div className="detail-label">Billing address</div>
                <div className="detail-value">
                  {orderData.shippingAddress.name}<br />
                  {orderData.shippingAddress.state}, {orderData.shippingAddress.city}, {orderData.shippingAddress.postalCode}<br />
                  {orderData.shippingAddress.street}, {orderData.shippingAddress.unit} {orderData.shippingAddress.country}
                </div>
              </div>
            </div>

            <div className="border-line mb-4"></div>

            {/* Help Section */}
            <div className="help-section mb-4">
              <p className="help-text">Need help? <a href="#contact" className="contact-link">Contact us</a></p>
              <button className="continue-shopping-btn">Continue shopping</button>
            </div>

            <div className="border-line mb-4"></div>

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
              {orderData.items.map((item) => (
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

            {/* Pricing Summary */}
            <div className="pricing-summary">
              <div className="price-row d-flex justify-content-between mb-2">
                <span className="price-label">Subtotal ({orderData.totalItems} items)</span>
                <span className="price-value">${orderData.subtotal.toFixed(2)}</span>
              </div>
              
              <div className="price-row d-flex justify-content-between mb-2">
                <span className="price-label">Shipping</span>
                <span className="price-value">${orderData.shipping.toFixed(2)}</span>
              </div>
              
              <div className="price-row d-flex justify-content-between mb-3">
                <span className="price-label">Tax</span>
                <span className="price-value">${orderData.tax.toFixed(2)}</span>
              </div>
              
              <div className="price-row d-flex justify-content-between total-row">
                <span className="total-label">Total</span>
                <span className="total-value">${orderData.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCheckout;