import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Stars from "./components/Stars";
import Works from "./components/Works";
import ContentBody from "./components/ContentBody";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Header />
      <ContentBody />
      <Contact/>
    </div>
  );
}

export default App;
