import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import SectionStudy from "./components/SectionStudy";
import Feature from "./components/Feature";
import Layout from "./components/Layout";
import BookLayout from "./components/BookLayout";
import Skills from "./components/Skills";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Management from "./components/Management";
import ManagementHero from "./components/ManagementHero";
import Key from "./components/Key";
import Gain from "./components/Gain";
import Build from "./components/Build";
import WorkPlace from "./components/WorkPlace";
import WorkPlaceHero from "./components/WorkPlaceHero";

// Importing CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "flowbite";

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          {/* Main Project Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <Hero />
                <About />
                <SectionStudy />
                <Feature />
                <Layout />
                <BookLayout />
                <Skills />
                <Review />
              </>
            }
          />

          {/* Branch Project Route */}
          <Route
            path="/branch"
            element={
              <>
                <Management />
                <ManagementHero />
                <About />
                <Key />
                <Gain />
              </>
            }
          />

          {/* Workplace Route */}
          <Route
            path="/workplace"
            element={
              <>
                <Header />
                <WorkPlace />
                <WorkPlaceHero />
                <About />
                <Key />
                <Gain />
              </>
            }
          />

          {/* Build Page Route */}
          <Route path="/build" element={<Build />} />
        </Routes>

        {/* Footer always present at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
