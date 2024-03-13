import React from "react";
import Navbar from "./Pages/Layout/Navbar/Navbar";
import TopBar from "./Pages/Layout/Navbar/TopBar";
import Hero from "./Pages/Layout/Content/Hero";
import Service from "./Pages/Layout/Content/Service";
import About from "./Pages/Layout/Content/About";
import Menu from "./Pages/Layout/Content/Menu";
import SpecialDish from "./Pages/Layout/Content/SpecialDish";
import Testimonials from "./Pages/Layout/Content/Testimonials";
import Reservation from "./Pages/Layout/Content/Reservation";
import Features from "./Pages/Layout/Content/Features";
import Event from "./Pages/Layout/Content/Event";
import Footer from "./Pages/Layout/Footer/Footer";
import Preload from "./Pages/Preload";
import BackToTop from "./Pages/BackToTop";

const App = () => {
  return (
    <div>
      <Preload />
      <TopBar />
      <Navbar />
      <main>
        <article>
          <Hero />
          <Service />
          <About />
          <SpecialDish />
          <Menu />
          <Testimonials />
          <Reservation />
          <Features />
          <Event />
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
