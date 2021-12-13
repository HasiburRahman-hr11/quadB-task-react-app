import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import AllShows from './pages/AllShows/AllShows';
import Home from './pages/Home/Home';
import SingleShow from './pages/SingleShow/SingleShow';
import Header from './components/Header/Header';
import Booking from './pages/Booking/Booking';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<AllShows />} />
        <Route path="/shows/:id" element={<SingleShow />} />
        <Route path="/booking/show/:id" element={<Booking />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;