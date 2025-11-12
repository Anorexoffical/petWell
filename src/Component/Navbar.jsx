import React, { useState, useEffect } from 'react';
import '../Style/Navbar.css';
import logo from "../assets/logo.png";
import CartSidebar from './CartSidebar'; // Add this import

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Add this state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchActive(false);
  };

  // Add cart functions
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Free Shipping Banner */}
      <div className="free-shipping-banner text-center py-2">
        <span className="free-shipping-text">Free shipping on orders over $50</span>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container-fluid">
          {/* Mobile Menu Toggle - Three Dashes */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className="three-dashes">
              <div className="dash"></div>
              <div className="dash"></div>
              <div className="dash"></div>
            </div>
          </button>

          {/* Brand Logo - Hidden when mobile search is active or on very small screens */}
          <a className="navbar-brand" href="#">
            <div className="brand-logo">
              <img src={logo} alt="Petwell Logo" className="logo-img" />
            </div>
          </a>

          {/* Mobile Search Bar - Appears when search icon is clicked */}
          <div className={`mobile-search-container ${isMobileSearchActive ? 'active' : ''}`}>
            <div className="mobile-search-bar-expanded">
              <input 
                type="text" 
                className="mobile-search-input-expanded" 
                placeholder="Search..." 
                autoFocus
              />
              <button className="mobile-search-close" onClick={closeMobileSearch}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links (centered pill) */}
          <div className="nav-pill rounded-pill d-none d-lg-flex align-items-center mx-auto">
            <a className="nav-link" href="#">How it works</a>
            <a className="nav-link" href="#">Our tests</a>
            <div className="nav-dropdown">
              <a className="nav-link" href="#">Learn</a>
            </div>
          </div>

          {/* Right Side Icons - Search icon included here for proper alignment */}
          <div className="navbar-right-items d-flex align-items-center">
            {/* Mobile Search Icon - Now part of the right items for proper alignment */}
            <button 
              className={`mobile-search-icon-btn ${isMobileSearchActive ? 'active' : ''}`}
              onClick={toggleMobileSearch}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
            
            <a className="nav-link login-link d-none d-lg-block" href="#">Login</a>
            <button className="btn get-started-btn d-none d-lg-flex">
              <span className="btn-dot">•</span>
              <span className="btn-text">Get Started</span>
            </button>
            <div className="icon-btn account-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172027" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            {/* Update cart icon with onClick handler */}
            <div className="icon-btn cart-icon" onClick={openCart} style={{cursor: 'pointer'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#172027" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="brand-logo">
            <img src={logo} alt="Petwell Logo" className="logo-img" />
          </div>
          <button className="mobile-menu-close" onClick={closeMobileMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        {/* Search Bar in Mobile Menu */}
        <div className="mobile-search-bar">
          <input type="text" className="mobile-search-input" placeholder="Search..." />
          <svg className="mobile-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </div>
        
        <div className="mobile-nav-links">
          <a className="mobile-nav-link" href="#" onClick={closeMobileMenu}>How it works</a>
          <a className="mobile-nav-link" href="#" onClick={closeMobileMenu}>Our tests</a>
          <a className="mobile-nav-link" href="#" onClick={closeMobileMenu}>Learn</a>
          <a className="mobile-nav-link" href="#" onClick={closeMobileMenu}>Login</a>
        </div>
        
        <button className="btn get-started-btn w-100" onClick={closeMobileMenu}>
          <span className="btn-dot">•</span>
          <span className="btn-text">Get Started</span>
        </button>
      </div>

      {/* Add CartSidebar component */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default Navbar;