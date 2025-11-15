import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast, FaUndo, FaUsers } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaCalendar, FaCogs, FaChartBar, } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { Navigation } from 'swiper/modules';


import "../Style/Productdetail.css";
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';
import productdetailimg1 from '../assets/productdetailimg1.png';
import productdetailimg2 from '../assets/productdetailimg2.png';
import productdetailimg3 from '../assets/productdetailimg3.png';  
import productdetailimg4 from '../assets/productdetailimg4.png';
import productdetailimg5 from '../assets/productdetailimg5.png';




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





// Import Swiper styles 4th 
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



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
    icon: <RiVerifiedBadgeLine className="pd-feature-icon" />,
    title: "Trusted by thousands",
    description: "Join thousands of happy customers who shop with us every month."
  }
];









/// Your slides data for the 4th 
const slides = [
  {
    id: 1,
    step: "Step",
    number: "1",
    title: "Collect, Swab & Send",
    description: "A simple at home swab, no stressful car journey, no waiting rooms, no veterinary bills.",
    background: "linear-gradient(to left bottom, #19242B 55%, #0E4655 100%)",
    color: "white",
    image: productdetailimg3,
  },
  {
    id: 2,
    step: "Step", 
    number: "2",
    title: "Learn, Understand, Thrive",
    description: "Finally understand what is going on with your pet, and with it receive bespoke health recommendations to suit their lifestyle.",
    background: "#CAB3FF",
    color: "#121212",
    image: productdetailimg4,
  },
  {
    id: 3,
    step: "Step",
    number: "3", 
    title: "Learn, Understand, Thrive",
    description: "Finally understand what is going on with your pet, and with it receive bespoke health recommendations to suit their lifestyle.",
    background: "#ffffffff",
    color: "#121212",
    image: productdetailimg5,
  },
];







// fifth container 

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




  const swiperRef = useRef(null);

  const handleProductClick = (product) => {
    navigate('/Productdetail', { state: { product } });
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };




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
          <FaShippingFast className="pdp-shipping-icon" />
          Free shipping over $50
        </div>

        {/* Updated Questionnaire Section */}
        <div className="pdp-questionnaire-section mt-4">
          <div className="pdp-questions-list">
            <div className="pdp-question-item">
              <div 
                className="pdp-question-header"
                onClick={() => toggleQuestion(0)}
              >
                <div className="pdp-question-text">Product Overview</div>
                <span className="pdp-question-toggle">
                  {openQuestions[0] ? '⌃' : '⌄'}
                </span>
              </div>
              {openQuestions[0] && (
                <div className="pdp-answer-content">
                  <div className="pdp-answer-with-icon">
                    <FaCalendar className="pdp-answer-icon" />
                    <span>Determine the underlying cause of problems and how to resolve them. The at-home Gut Microbiome Test kit contains everything you need, including step-by-step instructions, to take a sample of your dog's stool and mail it back to Petwells's laboratory. The kit includes test kit content and directions for use.</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pdp-question-item">
              <div 
                className="pdp-question-header"
                onClick={() => toggleQuestion(1)}
              >
                <div className="pdp-question-text">How it works</div>
                <span className="pdp-question-toggle">
                  {openQuestions[1] ? '⌃' : '⌄'}
                </span>
              </div>
              {openQuestions[1] && (
                <div className="pdp-answer-content">
                  <div className="pdp-answer-with-icon">
                    <FaCogs className="pdp-answer-icon" />
                    <span>Simple at-home testing process with easy-to-follow instructions and quick results. Our Gut Microbiome Test makes it easy to understand your dog's digestive health from the comfort of your home. Collect sample using our provided kit, mail it back with prepaid shipping, receive comprehensive results in 5-7 days, and get personalized recommendations.</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pdp-question-item">
              <div 
                className="pdp-question-header"
                onClick={() => toggleQuestion(2)}
              >
                <div className="pdp-question-text">Results & Reporting</div>
                <span className="pdp-question-toggle">
                  {openQuestions[2] ? '⌃' : '⌄'}
                </span>
              </div>
              {openQuestions[2] && (
                <div className="pdp-answer-content">
                  <div className="pdp-answer-with-icon">
                    <FaChartBar className="pdp-answer-icon" />
                    <span>Comprehensive analysis and easy-to-understand reports delivered directly to you. Your dog's gut health report includes detailed insights and actionable recommendations including microbiome diversity analysis, pathogen detection results, personalized dietary recommendations, supplement suggestions if needed, and veterinary-grade report format.</span>
                  </div>
                </div>
              )}
            </div>
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
                  <span className="pdp-pairs-sale-price">$23.99</span>
                  <span className="pdp-pairs-original-price">$29.99</span>
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
</div>









{/* Seond container  */}


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





{/* third section */}
<div className="petwell-container container-fluid">
  <div className="petwell-header">
    <h1 className="petwell-main-heading">why you'll love petwell</h1>
  </div>
  <div className="petwell-row row">
    {benefits.map((ben, index) => (
      <div key={index} className="petwell-col col-lg-4 col-md-4 col-sm-12">
        <div className="petwell-card">
          <div className={`petwell-content ${index === 2 ? 'petwell-content-reverse' : ''}`}>
            <div className="petwell-heading">{ben.heading}</div>
            <div className="petwell-labels">
              <span className="petwell-label-instock">In stock</span>
              <span className="petwell-label-membership">Inc in membership</span>
            </div>
            {index === 2 ? (
              <>
                <p className="petwell-description">{ben.paragraph}</p>
                <div className="petwell-image-wrapper petwell-image-wrapper-third">
                  <img src={ben.image} alt={ben.heading} className="petwell-image" />
                </div>
              </>
            ) : (
              <>
                <div className="petwell-image-wrapper">
                  <img src={ben.image} alt={ben.heading} className="petwell-image" />
                </div>
                <p className="petwell-description petwell-description-normal">{ben.paragraph}</p>
              </>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>








{/* forth container */}
<div className="slider-wrapper container-fluid p-0">
  <div className="slider-info">
    <h2 className="slider-main-heading">It's as easy as one, two, three..</h2>
    <button className="slider-custom-btn">
      <span className="slider-btn-dot">•</span>
      <span className="slider-btn-text">Get Started</span>
    </button>
  </div>

  <div className="slider-main-container">
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode]}
      className="simple-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id} className="simple-slide">
          <div
            className="slider-slide"
            style={{
              background: slide.background,
              color: slide.color,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {/* Step and Number Section */}
            <div className="step-section">
              <div className="step-tag">
                <span>{slide.step}</span>
              </div>
              <div className="step-number">
                <span>{slide.number}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="slide-content">
              <div className="text-content">
                <h3 
                  className="slider-title"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '25px',
                    lineHeight: '120%',
                    letterSpacing: '-3%',
                    marginBottom: '10.28px'
                  }}
                >
                  {slide.title}
                </h3>
                <p 
                  className="slider-description"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '-3%',
                    marginBottom: '16px'
                  }}
                >
                  {slide.description}
                </p>
              </div>
              <div className="image-content">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-image"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>





{/* fifth section - cards slider */}

<div className="custom-container py-4">
  <div className="swiper-wrapper-container">
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1417: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {cards.map((card, idx) => (
        <SwiperSlide key={card.id}>
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
        </SwiperSlide>
      ))}
    </Swiper>
    
    {/* Custom Navigation Buttons - Positioned at Right Side */}
    <div className="custom-navigation-container">
      <button className="custom-swiper-button-prev">
        ←
        
      </button>
      <button className="custom-swiper-button-next">
        →
        
      </button>
    </div>
  </div>
</div>












{/* 6th module  */}






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







{/* 7th container */}
<div className="petwell-footer container-fluid p-0">
  <div className="container-fluid px-0">
    <div className="row gx-5 align-items-start mx-0">
      {/* Left Column - Subscribe Box */}
      <div className="col-lg-5 col-md-6 mb-4 ps-4">
        <div className="petwell-footer-subscribe">
          <h4>
            Subscribe to our news & offers and save 10% on your first order
          </h4>
          <p>
            Preventive health testing for pets. Because they can't tell us when
            something's wrong, but their biomarkers can.
          </p>
          
          <div className="petwell-subscribe-form">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email address" />
              <button className="btn btn-dark">Sign me up</button>
            </div>
          </div>
          <small>Your information is never disclosed to third parties.</small>
        </div>
      </div>

      {/* Right Column - Links & QR in SAME COLUMN */}
      <div className="col-lg-7 col-md-6 pe-4">
        <div className="petwell-footer-links">
          <div className="row g-3 mx-0 align-items-start">
            
            {/* Quick Links and QR in SAME ROW */}
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="row g-4 mx-0">
                <div className="col-md-4 col-6">
                  <div className="petwell-link-group">
                    <h6>Product</h6>
                    <ul className="list-unstyled">
                      <li>How it Works</li>
                      <li>Pricing</li>
                      <li>Our Tests</li>
                      <li>Sample Results</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="petwell-link-group">
                    <h6>Company</h6>
                    <ul className="list-unstyled">
                      <li>Our Story</li>
                      <li>Veterinary Partners</li>
                      <li>Careers</li>
                      <li>Press</li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-6">
                  <div className="petwell-link-group">
                    <h6>Support</h6>
                    <ul className="list-unstyled">
                      <li>Contact Us</li>
                      <li>FAQs</li>
                      <li>Shipping Info</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Section - In SAME COLUMN as quick links */}
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="petwell-link-group qr-section">
                <div className="petwell-app-download">
                  <img
                    src={qrcode}
                    alt="QR Code"
                    className="petwell-qr-img"
                  />
                  <div className="petwell-app-info">
                    <h6>Download our app</h6>
                    <p>For iOS and Android</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Payment Logos - Hidden on mobile */}
          <div className="petwell-payment-logos d-none d-md-flex">
            <img src={visa} alt="Visa" />
            <img src={master} alt="MasterCard" />
            <img src={amex} alt="Amex" />
            <img src={discover} alt="Discover" />
            <img src={apple} alt="Apple Pay" />
            <img src={paypal} alt="PayPal" />
            <img src={shop} alt="Shop" />
          </div>

          {/* Social + Policies - All in one row */}
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
    </div>

    {/* Petwell TM Large Text Row - Full Width */}
    <div className="container-fluid p-0">
      <div className="petwell-footer-brand">
        <img src={logo} alt="Petwell TM" className="petwell-brand-img" />
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Productdetail;