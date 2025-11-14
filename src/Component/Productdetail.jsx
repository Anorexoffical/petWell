import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast, FaUndo, FaUsers } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import "../Style/Productdetail.css";
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';
import productdetailimg1 from '../assets/productdetailimg1.png';
import productdetailimg2 from '../assets/productdetailimg2.png';
import productdetailimg3 from '../assets/productdetailimg3.png';  

import futurpet from "../assets/futurepet.png";
import logo from "../assets/logo.png";
import Navbar from "./Navbar.jsx"

// icons for footer
import visa from "../assets/visa.png";
import master from "../assets/master.png";
import amex from "../assets/amex.png";
import discover from "../assets/discover.png";
import apple from "../assets/apple.png";
import paypal from "../assets/paypal.png";
import shop from "../assets/shoppay.png";
import qrcode from "../assets/qrcode.png";

const benefits = [
  {
    heading: "Detailed reports & advice",
    paragraph:
      "Our simple swab and send system saves you time and money, and makes your pet happier and healthier in the process.",
    image: productdetailimg1,
  },
  {
    heading: "Fast results & insights",
    paragraph:
      "Our simple swab and send system saves you time and money, and makes your pet happier and healthier in the process.",
    image: productdetailimg2,
  },
  {
    heading: "Easy to Use",
    paragraph:
      "A powerful antioxidant that protects the skin barrier, reduces free radical damage, and supports a healthy, luminous glow.",
    image: productdetailimg3,
  },
];

// for the 4th module slider
const slides = [
  {
    id: 1,
    background: 'linear-gradient(to bottom, #19242B 0%, #0E4655 100%)',
    color: '#FFF',
    step: 'Step 1',
    title: 'Collect, Swab & Send',
    description: 'A simple at home swab, no stressful car journey, no waiting rooms, no veterinary bills.',
  },
  {
    id: 2,
    background: '#CAB3FF',
    color: '#1E1E1E',
    step: 'Step 2',
    title: 'Learn, Understand, Thrive',
    description:
      'Finally understand what is going on with your pet, and receive bespoke health recommendations to suit their lifestyle.',
  },
  {
    id: 3,
    background: 'linear-gradient(to bottom, #19242B 0%, #0E4655 100%)',
    color: '#FFF',
    step: 'Step 3',
    title: 'Easy as One, Two, Three',
    description: 'It\'s as easy as one, two, three.. get started right away!',
  },
];

const Productdetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [purchaseType, setPurchaseType] = useState("one-time");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  // Individual question toggle state
  const [openQuestions, setOpenQuestions] = useState({});

  const oneTimePrice = 125.00;
  const subscribePrice = 139.99;
  const oldPrice = 149.99;
  const productImages = product?.images || product?.productImages || [
    home3,
    home4,
    home5
  ];

  // Example questions/answers
  const questions = [
    {
      q: "How is the sample collected?",
      a: "You will use the kit tools to safely collect a stool sample from your dog and send it back using the included pre-paid mailer."
    },
    {
      q: "How long does it take to get results?",
      a: "Results are typically emailed to you within 7 days after the lab receives the sample."
    },
    {
      q: "Does the kit include instructions?",
      a: "Yes, step-by-step instructions are provided inside the kit."
    }
  ];

  // Handle add to cart and redirect to checkout
  const handleAddToCart = () => {
    // Prepare cart data
    const cartData = {
      product: product || {
        name: "Fecal Diagnostic Panel",
        price: purchaseType === "one-time" ? oneTimePrice : subscribePrice,
        image: productImages[0]
      },
      quantity: quantity,
      purchaseType: purchaseType,
      totalPrice: (purchaseType === "one-time" ? oneTimePrice : subscribePrice) * quantity
    };

    // Redirect to checkout page with cart data
    navigate('/checkout', { 
      state: { 
        cartItems: [cartData],
        totalAmount: cartData.totalPrice
      }
    });
  };

  // Handle add pairs product to cart
  const handleAddPairsToCart = () => {
    const pairsProductData = {
      product: {
        name: "Oral Health Kit",
        price: 23.99,
        originalPrice: 29.99,
        image: home3
      },
      quantity: 1,
      purchaseType: "one-time",
      totalPrice: 23.99
    };

    navigate('/checkout', { 
      state: { 
        cartItems: [pairsProductData],
        totalAmount: pairsProductData.totalPrice
      }
    });
  };

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  if (!product) {
    return (
      <div className="container-fluid pdp-panel-root py-5">
        <div className="row">
          <div className="col-12 text-center">
            <p>Product not found. Please go back to home page.</p>
          </div>
        </div>
      </div>
    );
  }

  // for the 2nd module 
  const features = [
    {
      icon: <FaShippingFast className="pd-feature-icon" />,
      title: "Free shipping over $50",
      description: "Orders above $50 ship free — no hidden fees, no surprises."
    },
    {
      icon: <FaUndo className="pd-feature-icon" />,
      title: "30-day easy returns",
      description: "Changed your mind? Return unused products within 30 days, hassle-free."
    },
    {
      icon: <FaUsers className="pd-feature-icon" />,
      title: "Trusted by thousands",
      description: "Join thousands of happy customers who shop with us every month."
    }
  ];

  // for the 4th module slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const sliderWrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const setPositionByIndex = () => {
    if (!containerRef.current) return;
    
    const slideWidth = getSlideWidth();
    let newPosition;
    
    if (currentIndex === 0) {
      // First slide - show small portion of next slide
      newPosition = 0;
    } else if (currentIndex === slides.length - 1) {
      // Last slide - take full width (centered)
      newPosition = -((slideWidth * 0.95 + getSlideOffset()) * currentIndex - (slideWidth - slideWidth * 0.95) / 2);
    } else {
      // Middle slides
      newPosition = -((slideWidth * 0.85 + getSlideOffset()) * currentIndex);
    }
    
    containerRef.current.style.transform = `translateX(${newPosition}px)`;
  };

  const getSlideWidth = () => {
    if (!sliderWrapperRef.current) return window.innerWidth;
    return sliderWrapperRef.current.offsetWidth;
  };

  const getSlideOffset = () => {
    return getSlideWidth() * 0.02; // 2% gap
  };

  const goToSlide = (index) => {
    if (index === currentIndex || isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setPositionByIndex();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keep track of index change
  useEffect(() => {
    setPositionByIndex();
  }, [currentIndex]);

  return (
    <>
      <Navbar/>
      <div className="container-fluid pdp-panel-root py-5">
        <div className="row bordres">
          {/* Product Image Column - takes 6 columns on medium+ screens, 12 on small */}
          <div className="col-12 col-md-6 borders">
            <div className="pdp-product-image-container position-relative">
              <img
                src={productImages[currentImageIndex]}
                alt="Fecal Diagnostic Panel"
                className="pdp-product-panel-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop";
                }}
              />
              {productImages.length > 1 && (
                <>
                  <button className="pdp-slider-arrow pdp-slider-arrow-left" onClick={prevImage}>
                    ←
                  </button>
                  <button className="pdp-slider-arrow pdp-slider-arrow-right" onClick={nextImage}>
                    → 
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Product Details Column - takes 6 columns on medium+ screens, 12 on small */}
          <div className="col-12 col-md-6">
            <div className="pdp-product-details">
              <h1 className="pdp-product-title">Fecal Diagnostic Panel</h1>
              <div className="pdp-price-section mb-3">
                <div className="pdp-main-price">
                  <span className="pdp-current-price">${oneTimePrice.toFixed(2)}</span>
                  <span className="pdp-old-price">${oldPrice.toFixed(2)}</span>
                </div>
                <div className="pdp-discount-badge">20%</div>
              </div>
              <p className="pdp-product-description mb-4">
                Get to know your dog's gut microbiome with our simple at-home sampling kit and comprehensive report. Receive fast results straight to your inbox.
              </p>
              <div className="pdp-purchase-options mb-4">
                <div 
                  className={`pdp-purchase-option ${purchaseType === "one-time" ? "pdp-option-active" : ""}`}
                  onClick={() => setPurchaseType("one-time")}
                >
                  <div className="pdp-option-radio">
                    <div className={`pdp-radio-circle ${purchaseType === "one-time" ? "pdp-radio-active" : ""}`}></div>
                  </div>
                  <div className="pdp-option-content">
                    <div className="pdp-option-title">One-time purchase</div>
                    <div className="pdp-option-subtitle">Ordinary purchase, ordinary price, paid once - shipped once.</div>
                  </div>
                  <div className="pdp-option-price">${oneTimePrice.toFixed(2)}</div>
                </div>
                <div 
                  className={`pdp-purchase-option ${purchaseType === "subscribe" ? "pdp-option-active" : ""}`}
                  onClick={() => setPurchaseType("subscribe")}
                >
                  <div className="pdp-option-radio">
                    <div className={`pdp-radio-circle ${purchaseType === "subscribe" ? "pdp-radio-active" : ""}`}></div>
                  </div>
                  <div className="pdp-option-content">
                    <div className="pdp-option-title">Subscribe & save</div>
                    <div className="pdp-option-subtitle">Save 20%, billed once per delivery.</div>
                  </div>
                  <div className="pdp-option-price">
                    <div className="pdp-subscribe-price">${subscribePrice.toFixed(2)}</div>
                    <div className="pdp-subscribe-old-price">${oldPrice.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              <div className="pdp-cart-section mb-4">
                <div className="pdp-cart-controls">
                  <div className="pdp-quantity-selector">
                    <button className="pdp-quantity-btn" onClick={decreaseQuantity}>-</button>
                    <span className="pdp-quantity-value">{quantity}</span>
                    <button className="pdp-quantity-btn" onClick={increaseQuantity}>+</button>
                  </div>
                  <button className="pdp-add-to-cart-btn" onClick={handleAddToCart}>
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="pdp-free-shipping">
                Free shipping over $50
              </div>

              {/* Questionnaire Section with Individual Toggles */}
              <div className="pdp-questionnaire-section mt-4">
                <div className="pdp-questions-list">
                  {questions.map((item, index) => (
                    <div key={index} className="pdp-question-item">
                      <div 
                        className="pdp-question-header"
                        onClick={() => toggleQuestion(index)}
                      >
                        <div className="pdp-question-text">{item.q}</div>
                        <span className="pdp-question-toggle">
                          {openQuestions[index] ? '⌃' : '⌄'}
                        </span>
                      </div>
                      {openQuestions[index] && (
                        <div className="pdp-answer-content">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Updated Pairs Perfectly Section */}
              <div className="pdp-pairs-perfectly mt-4">
                <h3 className="pdp-pairs-title">Pairs perfectly with</h3>
                <div className="pdp-pairs-container">
                  <div className="pdp-pairs-product">
                    <div className="pdp-pairs-image-container">
                      <img 
                        src={home3} 
                        alt="Oral Health Kit" 
                        className="pdp-pairs-product-image"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop";
                        }}
                      />
                    </div>
                    <div className="pdp-pairs-product-info">
                      <h4 className="pdp-pairs-product-title">Oral Health Kit</h4>
                      <div className="pdp-pairs-price">
                        <span className="pdp-pairs-original-price">$29.99</span>
                        <span className="pdp-pairs-sale-price">$23.99</span>
                      </div>
                    </div>
                    <button className="pdp-pairs-add-btn" onClick={handleAddPairsToCart}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second container  */}
      <div className="pd-features-container container-fluid">
        <div className="pd-features-row row">
          {features.map((feature, index) => (
            <div key={index} className="pd-feature-col col-lg-4 col-md-4 col-sm-12">
              <div className="pd-feature-card">
                <div className="pd-feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="pd-feature-content">
                  <h3 className="pd-feature-title">{feature.title}</h3>
                  <p className="pd-feature-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3rd section   */}
      <div className="petwell-container container-fluid">
        <div className="petwell-row row">
          {benefits.map((ben, index) => (
            <div key={index} className="petwell-col col-lg-4 col-md-4 col-sm-12">
              <div className="petwell-card">
                <div className="petwell-content">
                  <div className="petwell-heading">{ben.heading}</div>
                  <div className="petwell-labels">
                    <span className="petwell-label-instock">In stock</span>
                    <span className="petwell-label-membership">Inc in membership</span>
                  </div>
                  <div className="petwell-image-wrapper">
                    <img src={ben.image} alt={ben.heading} className="petwell-image" />
                  </div>
                  <p className="petwell-description">{ben.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4th container */}
      <div className="slider-wrapper container-fluid p-0" ref={sliderWrapperRef}>
        <div className="slider-info">
          <h2>It's as easy as one, two, three..</h2>
          <button className="btn btn-light btn-get-started">Get Started</button>
        </div>

        <div className="slider-main-container">
          <div 
            ref={containerRef} 
            className={`slider-container ${isAnimating ? 'animating' : ''}`}
          >
            {slides.map((slide, index) => (
              <div
                className={`slider-slide ${index === currentIndex ? 'active' : ''} ${
                  index === currentIndex + 1 ? 'next' : ''
                } ${index === currentIndex - 1 ? 'prev' : ''}`}
                key={slide.id}
                style={{
                  background: slide.background,
                  color: slide.color,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <div className="step-tag">
                  <span>{slide.step}</span>
                </div>
                <h3 className="slider-title">{slide.title}</h3>
                <p className="slider-description">{slide.description}</p>
                {index === 0 && (
                  <div className="slider-image">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1534/1534998.png"
                      alt="Swab example"
                      className="img-fluid"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 5th container  */}
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

      {/* 6th container  */}
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
};

export default Productdetail;