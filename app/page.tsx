"use client";

import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {
  return (
    <main>
      <Navigation />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
