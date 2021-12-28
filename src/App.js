import './App.css';
import React from "react";
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Show from './Components/Show';
import Nav from './Components/Nav';
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
    </>
  )
}



export default App;
