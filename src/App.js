import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Hotels from "./components/Hotels";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";



function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Offers />
      <Plan />  
      <Hotels />
      <ImageSlider /> 
      <Footer/>
    </div>
  );
}

export default App;
