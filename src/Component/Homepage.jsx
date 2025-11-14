import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Homepage.css";
import Navbar from "./Navbar";
import {react, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

// images 
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';
import home6 from "../assets/home6.png";
import home7 from "../assets/home7.png";
import home8 from "../assets/home8.png";
import home9 from "../assets/home9.png";
import logo from "../assets/logo.png";

// icons for footer
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import amex from "../assets/amex.png";
import discover from "../assets/discover.png";
import apple from "../assets/apple.png";
import paypal from "../assets/paypal.png";
import shop from "../assets/shoppay.png";
import qrcode from "../assets/qrcode.png";

// Add these imports for the new images
import gizmoImage from '../assets/gizmo-image.png';
import proteinImage from '../assets/protein-image.png';
import futurpet from "../assets/futurepet.png";

const CARD_BG = "#0f0e0cff";

// Update these image sources as needed in your project setup
const cards = [
    {
      id: 1, 
      imgSrc: home3,
      title: "FecalPCR Health Test",
      price: "$21.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 21.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home3
    },
    {
      id: 2, 
      imgSrc: home4,
      title: "FecalPCR Health Test",
      price: "$23.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 23.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home4
    },
    {
      id: 3, 
      imgSrc: home5,
      title: "FecalPCR Health Test",
      price: "$23.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 23.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home5
    },
    {
      id: 4, 
      imgSrc: home4,
      title: "FecalPCR Health Test",
      price: "$23.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 23.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home4
    },
    {
      id: 5, 
      imgSrc: home5,
      title: "FecalPCR Health Test",
      price: "$20.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 23.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home5
    },
    {
      id: 6,
      imgSrc: home3,
      title: "FecalPCR Health Test",
      price: "$23.99",
      oldPrice: "$29.99",
      btnText: "Add to cart",
      oneTimePrice: 23.99,
      subscribePrice: 19.19,
      oldPriceValue: 29.99,
      productImage: home3
    },
  ];

function Homepage() {
  const navigate = useNavigate();
  
  const handleProductClick = (product) => {
    navigate('/Productdetail', { state: { product } });
  };

  return (
    <>  
      <Navbar/>  
      <div className="main-container">
        {/* Gizmo Image */}
        <img 
          src={gizmoImage} 
          alt="Gizmo" 
          className="gizmo-image"
        />
        
        {/* Main Text and Buttons */}
        <div className="content-wrap">
          <div className="content-treatment">Treatment</div>
          <div className="main-title">
            At-home vet-grade PCR.<br/>24–48 hour results.
          </div>
          <div className="main-subtitle">
            Your pet doesn't have the same needs everywhere. Identify and address bacterial overgrowths and imbalances.
          </div>
          <div className="d-flex align-items-center button-container">
            <button className="petwell-get-started-btn1">
              <span className="petwell-btn-dot">•</span>
              <span className="petwell-btn-text">Get Started</span>
            </button>
            <button className="btn-main-secondary">Explore benefits</button>
          </div>
        </div>
        
        {/* Protein Absorption Image */}
        <img 
          src={proteinImage} 
          alt="Protein Absorption" 
          className="protein-image"
        />
      </div>


{/* //second container */}
<Container fluid className="diagnostic-header-container py-4">
  <Row className="align-items-center">
    <Col xs={12}>
      <h1 className="diagnostic-title">Diagnostic Test Kits</h1>
    </Col>
  </Row>
  <Row className="align-items-center mt-3">
    <Col xs={12}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center mb-2 mb-md-0">
          <Button variant="outline-secondary" className="filter-btn">
            {/* Using SVG icon instead of bi-funnel */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-1 me-md-1">
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
            </svg>
            <span className="filter-text d-none d-md-inline">Show filter (0)</span>
          </Button>
          {/* Changed to hide at same breakpoint as filter text */}
          <span className="result-count ms-3 d-none d-md-inline">4 results</span>
        </div>
        
        <div className="d-flex align-items-center">
          {/* Changed to show only on mobile */}
          <span className="result-count me-3 d-inline d-md-none">4 results</span>
          <Dropdown>
            <Dropdown.Toggle variant="light" className="sort-dropdown d-flex align-items-center justify-content-between position-relative">
              {/* Added flex-grow and text-align for better spacing */}
              <span className="sort-text flex-grow-1 text-start">Best selling</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="dropdown-chevron ms-2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Best selling</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Col>
  </Row>
</Container>













{/* third section - cards */}

<div className="custom-container py-4">
  <div className="custom-row">
    {cards.map((card, idx) => (
      <div key={card.id} className="custom-col">
        <div className="custom-card">
          <div className="custom-image-container">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="custom-card-img"
            />
          </div>
          <div className="custom-card-body">
            <h5 className="custom-card-title">{card.title}</h5>
            <div className="custom-price-container">
              <span className="custom-current-price">{card.price}</span>
              <span className="custom-old-price">{card.oldPrice}</span>
            </div>
            <button 
              className="custom-card-btn"
              onClick={() => handleProductClick(card)}
            >
              {card.btnText}
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>















{/* fourth section - futurpet */}

<div className="petwell-futurpet-section">
  <div className="petwell-futurpet-container">
    <div className="petwell-futurpet-row petwell-futurpet-align-center">
      {/* Left: Text Section */}
      <div className="petwell-futurpet-col-12 petwell-futurpet-col-md-6 petwell-futurpet-text">
        <h1>
          The future of pet health is 
          <span className="petwell-futurpet-highlight"> preventive, personal and positive</span>
        </h1>
        <p>
          PetWell combines scientific precision with emotional care — helping every pet live longer, happier, and closer to you.
        </p>
        <button className="petwell-futurpet-btn">
          <span className="petwell-futurpet-btn-dot">•</span>
          <span className="petwell-futurpet-btn-text">Learn more</span>
        </button>
      </div>
      {/* Right: Image Section */}
      <div className="petwell-futurpet-col-12 petwell-futurpet-col-md-6 petwell-futurpet-image-wrapper">
        <img 
          src={futurpet} 
          alt="PetWell Hero" 
          className="petwell-futurpet-image" 
        />
      </div>
    </div>
  </div>
</div>















{/* 5th */}

<div className="petwell-footer">
  <div className="petwell-footer-container">
    <div className="petwell-footer-row">
      {/* Left Column - Subscribe Box */}
      <div className="petwell-footer-subscribe">
        <h4>
          Subscribe to our news & offers and save 10% on your first order
        </h4>
        <p>
          Preventive health testing for pets. Because they can't tell us when
          something's wrong, but their biomarkers can.
        </p>
        
        {/* Moved form elements to bottom */}
        <div className="petwell-subscribe-form">
          <input type="email" placeholder="Email address" />
          <button>Sign me up</button>
        </div>
        <small>Your information is never disclosed to third parties.</small>
      </div>

      {/* Right Column - Links & Info */}
      <div className="petwell-footer-links">
        <div className="petwell-links-grid">
          <div className="petwell-link-group">
            <h6>Product</h6>
            <ul>
              <li>How it Works</li>
              <li>Pricing</li>
              <li>Our Tests</li>
              <li>Sample Results</li>
            </ul>
          </div>

          <div className="petwell-link-group">
            <h6>Company</h6>
            <ul>
              <li>Our Story</li>
              <li>Veterinary Partners</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="petwell-link-group">
            <h6>Support</h6>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Info</li>
            </ul>
          </div>

          <div className="petwell-link-group">
            <div className="petwell-app-download">
              <img
                src={qrcode}
                alt="QR Code"
                className="petwell-qr-img"
              />
              <div>
                <h6>Download our app</h6>
                <p>For iOS and Android</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Logos - Centered and aligned with social icons */}
        <div className="petwell-payment-logos">
          <img src={visa} alt="Visa" />
          <img src={master} alt="MasterCard" />
          <img src={amex} alt="Amex" />
          <img src={discover} alt="Discover" />
          <img src={apple} alt="Apple Pay" />
          <img src={paypal} alt="PayPal" />
          <img src={shop} alt="Shop" />
        </div>

        {/* Social + Policies */}
        <div className="petwell-footer-bottom">
          <div className="petwell-social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className="petwell-policy-links">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>©️ 2025 Petwell, Inc.</span>
          </div>
        </div>
      </div>
    </div>

    {/* Petwell TM Large Text Row */}
    <div className="petwell-footer-brand">
      <img src={logo} alt="Petwell TM" className="petwell-brand-img" />
    </div>
  </div>
</div>


    </>
  );
}

export default Homepage;