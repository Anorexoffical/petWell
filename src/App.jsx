import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Productdetail from './Component/Productdetail';
import Checkout from './Component/Checkout';
import SuccessCheckout from './Component/SuccessCheckout';

function App() {
  return (
    <Router>
        {/* <Navbar/> */}
        <Routes>
           <Route path="/" element={<Homepage />} />
          <Route path="/productdetail" element={<Productdetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/successcheckout" element={<SuccessCheckout />} />
          Add more routes as needed
        </Routes>
    </Router>
  );
}

export default App;