import React from "react";

import Header from "./Header";
import Stars from "./Stars";
import Works from "./Works";
import ContentBody from "./ContentBody";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

function Home() {
  return (
    <div>
      <Header />
      <ContentBody />
      <Contact />
    </div>
  );
}

export default Home;
