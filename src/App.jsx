import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skillset from './components/Skillset';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Test from './components/Test';

function App() {
  return (
    <div className=''>
      <Navbar />
      {/* <Test /> */}
      <Home />
      <About />
      <Skillset />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
