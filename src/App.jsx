import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OurBikes from "./components/OurBikes";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurBikes />
      <ContactUs />
    </>
  );
}

export default App;
