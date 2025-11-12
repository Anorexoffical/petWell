import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Homepage.css";
import Navbar from "./Navbar";
import {react, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add this import


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
import gizmoImage from '../assets/gizmo-image.png'; // Add your Gizmo image path
import proteinImage from '../assets/protein-image.png'; // Add your Protein Absorption image path
import futurpet from "../assets/futurepet.png"; // Adjust path if needed




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

// for email subscription
function Homepage() {


 const navigate = useNavigate(); // Add this line
  
  // Your existing code...
  const handleProductClick = (product) => {
    // Navigate to product detail page with product data
    navigate('/Productdetail', { state: { product } });
  };



  return (
    <>    
      <div className="main-container">
        {/* Gizmo Image - Direct image without container */}
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
            <button className="get-started-btnhome">
              {/* <span className="btn-dot">•</span> */}
              <span className="btn-text">Get Started</span>
            </button>
            <button className="btn-main-secondary">Explore benefits</button>
          </div>
        </div>
        
        {/* Protein Absorption Image - Direct image without container */}
        <img 
          src={proteinImage} 
          alt="Protein Absorption" 
          className="protein-image"
        />
      </div>






{/* //second container */}
<Container fluid className="diagnostic-header-container py-4">
  <Row className="align-items-center">
    <Col xs={12} md={6} className="mb-3 mb-md-0">
      <h1 className="diagnostic-title">Diagnostic Test Kits</h1>
      <div className="d-flex align-items-center mt-2 flex-wrap">
        <Button variant="outline-secondary" className="filter-btn me-2 mb-2 mb-md-0">
          {/* Using SVG icon instead of bi-funnel */}
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-1">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
          </svg>
          Show filter (0)
        </Button>
        <span className="result-count">4 results</span>
      </div>
    </Col>
    <Col xs={12} md={6} className="d-flex justify-content-md-end mt-2 mt-md-0">
      <Dropdown>
        <Dropdown.Toggle variant="light" className="sort-dropdown">
          Best selling
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Best selling</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Newest</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  </Row>
</Container>








    {/* third section - cards  */}


<div className="container py-4">
      <div className="row justify-content-center">
        {cards.map((card, idx) => (
          <div key={card.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 border-0 product-card"
              style={{ backgroundColor: "#f8f9fa", borderRadius: "16px" }}
            >
              <div className="product-image-container">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="card-img-top product-image"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title mb-3 font-weight-bold">{card.title}</h5>
                <div className="mb-3">
                  <span className="current-price">{card.price}</span>
                  <span className="old-price">{card.oldPrice}</span>
                </div>
                <button 
                  className="btn btn-outline-dark rounded-btn w-100"
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


 {/* forth section  */}


<div className="petwell-hero-section">
  <div className="petwell-hero-container">
    <div className="petwell-hero-row align-items-center">
      {/* Left: Text Section */}
      <div className="col-12 col-md-6 petwell-hero-text">
        <h1>
          The future of pet health is 
          <span className="petwell-highlight"> preventive, personal and positive</span>
        </h1>
        <p>
          PetWell combines scientific precision with emotional care — helping every pet live longer, happier, and closer to you.
        </p>
        <button className="petwell-hero-btn">
          <span className="btn-dot"></span>
          Learn more
        </button>
      </div>
      {/* Right: Image Section */}
      <div className="col-12 col-md-6 petwell-hero-image-wrapper">
        <img 
          src={futurpet} 
          alt="PetWell Hero" 
          className="petwell-hero-image" 
        />
      </div>
    </div>
  </div>
</div>



{/* fifth container  */}





<div className="footer-section">
  <div className="container-fluid p-0">
    <div className="row mx-0">
      {/* Left Column - Subscribe Box */}
      <div className="col-md-4 subscribe-col">
        <h4>
          Subscribe to our news & offers and save 10% on your first order
        </h4>
        <p>
          Preventive health testing for pets. Because they can't tell us when
          something's wrong, but their biomarkers can.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button>Sign me up</button>
        </div>
        <small>Your information is never disclosed to third parties.</small>
      </div>

      {/* Right Column - Links & Info */}
      <div className="col-md-8 links-col">
        <div className="row">
          <div className="col-sm-6 col-md-3 footer-links">
            <h6>Product</h6>
            <ul>
              <li>How it Works</li>
              <li>Pricing</li>
              <li>Our Tests</li>
              <li>Sample Results</li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 footer-links">
            <h6>Company</h6>
            <ul>
              <li>Our Story</li>
              <li>Veterinary Partners</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 footer-links">
            <h6>Support</h6>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Info</li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3 footer-links">
            <div className="app-download">
              <img
                src={qrcode}
                alt="QR Code"
                className="qr-img"
              />
              <div>
                <h6>Download our app</h6>
                <p>For iOS and Android</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Logos */}
        <div className="payment-logos">
          <img src={visa} alt="Visa" />
          <img src={master} alt="MasterCard" />
          <img src={amex} alt="Amex" />
          <img src={discover} alt="Discover" />
          <img src={apple} alt="Apple Pay" />
          <img src={paypal} alt="PayPal" />
          <img src={shop} alt="Shop" />
        </div>

        {/* Social + Policies */}
        <div className="footer-bottom">
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <div className="policy-links">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>©️ 2025 Petwell, Inc.</span>
          </div>
        </div>
      </div>
    </div>

    {/* Petwell TM Large Text Row */}
    <div className="footer-brand-row">
      <img src={logo} alt="Petwell TM" className="petwell-tm-img" />
    </div>
  </div>
</div>



    </>
  );
}

export default Homepage;