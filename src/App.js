import React from 'react';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';

import About from "./components/About";
import WorkExamples from "./components/WorkExamples";
import ContactInfo from "./components/ContactInfo";

function Nav() {
  return (
    <nav className="nav">
        <Link to="/about">
          About
        </Link>
        <Link to="/work-examples">
          Work Examples
        </Link>
        <Link to="/contact-info">
          Contact Information
        </Link>
    </nav>
  )
}

function Page() {
  return (
    <div className="page">
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/work-examples" element={<WorkExamples />}/>
          <Route path="/contact-info" element={<ContactInfo />}/>
        </Routes> 
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Nav />
      <Page />
    </div>
  );
}

export default App;
