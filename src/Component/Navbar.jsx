import React, { useState, useEffect } from 'react';
import '../Style/Navbar.css';
import logo from "../assets/logo.png";
import CartSidebar from './CartSidebar';
import { RiShoppingBag4Line, RiAccountCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="petwell-navbar-container">
      {/* Free Shipping Banner */}
      <div className="petwell-free-shipping-banner text-center py-2">
        <span className="petwell-free-shipping-text">Free shipping on orders over $50</span>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`petwell-mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Main Navbar */}
      <nav className="petwell-navbar navbar-expand-lg petwell-main-navbar">
        <div className="petwell-container-fluid">
          {/* Mobile Menu Toggle - Three Dashes */}
          <button className="petwell-mobile-menu-toggle" onClick={toggleMobileMenu}>
            <div className="petwell-three-dashes">
              <div className="petwell-dash"></div>
              <div className="petwell-dash"></div>
              <div className="petwell-dash"></div>
            </div>
          </button>

          {/* Brand Logo */}
          <a className="petwell-navbar-brand" href="#">
            <div className="petwell-brand-logo">
              <img src={logo} alt="Petwell Logo" className="petwell-logo-img" />
            </div>
          </a>

          {/* Mobile Search Bar */}
          <div className={`petwell-mobile-search-container ${isMobileSearchActive ? 'active' : ''}`}>
            <div className="petwell-mobile-search-bar-expanded">
              <input 
                type="text" 
                className="petwell-mobile-search-input-expanded" 
                placeholder="Search..." 
                autoFocus
              />
              <button className="petwell-mobile-search-close" onClick={closeMobileSearch}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Links (centered pill) - Hidden on mobile */}
          <div className="petwell-nav-pill rounded-pill d-none d-xxl-flex align-items-center mx-auto">
            <a className="petwell-nav-link" href="#">How it works</a>
            <a className="petwell-nav-link" href="#">Our tests</a>
            <div className="petwell-nav-dropdown">
              <a className="petwell-nav-link" href="#">
                Learn
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '6px'}}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side Icons - Login and Get Started hidden on mobile */}
          <div className="petwell-navbar-right-items d-flex align-items-center">
            {/* Mobile Search Icon - Visible on mobile */}
            <button 
              className={`petwell-mobile-search-icon-btn ${isMobileSearchActive ? 'active' : ''}`}
              onClick={toggleMobileSearch}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
            
            <a className="petwell-nav-link petwell-login-link d-none d-xxl-block" href="#">Login</a>
            <button className="petwell-btn petwell-get-started-btn d-none d-xxl-flex">
              <span className="petwell-btn-dot">•</span>
              <span className="petwell-btn-text">Get Started</span>
            </button>
            <div className="petwell-icon-btn petwell-account-icon">
              <RiAccountCircleLine size={24} />
            </div>
            <div className="petwell-icon-btn petwell-cart-icon" onClick={openCart} style={{cursor: 'pointer'}}>
              <RiShoppingBag4Line size={24} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Contains all navigation items */}
      <div className={`petwell-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="petwell-mobile-menu-header">
          <div className="petwell-brand-logo">
            <img src={logo} alt="Petwell Logo" className="petwell-logo-img" />
          </div>
          <button className="petwell-mobile-menu-close" onClick={closeMobileMenu}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        {/* Search Bar in Mobile Menu */}
        <div className="petwell-mobile-search-bar">
          <input type="text" className="petwell-mobile-search-input" placeholder="Search..." />
          <svg className="petwell-mobile-search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </div>
        
        {/* Mobile Navigation Links - Includes all navigation items */}
        <div className="petwell-mobile-nav-links">
          {/* Navigation Pill Items */}
          <a className="petwell-mobile-nav-link" href="#" onClick={closeMobileMenu}>
            How it works
          </a>
          <a className="petwell-mobile-nav-link" href="#" onClick={closeMobileMenu}>
            Our tests
          </a>
          <a className="petwell-mobile-nav-link" href="#" onClick={closeMobileMenu}>
            Learn
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '6px'}}>
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
          
          {/* Login Link */}
          <a className="petwell-mobile-nav-link" href="#" onClick={closeMobileMenu}>
            Login
          </a>
        </div>
        
        {/* Get Started Button in Mobile Menu */}
        <button className="petwell-btn petwell-get-started-btn w-100" onClick={closeMobileMenu}>
          <span className="petwell-btn-dot">•</span>
          <span className="petwell-btn-text">Get Started</span>
        </button>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={closeCart} />
    </div>
  );
};

export default Navbar;