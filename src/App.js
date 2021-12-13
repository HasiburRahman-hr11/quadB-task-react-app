import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import AllShows from './pages/AllShows';
import Home from './pages/Home';
import SingleShow from './pages/SingleShow';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<AllShows />} />
        <Route path="/shows/:id" element={<SingleShow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;