import './App.css';
import React from "react";
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Show from './Components/ShowItem/Show';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/show/:id' element={<Show />} />
        </Routes>
      </Router >
      <Footer />
    </>
  )
}



export default App;
