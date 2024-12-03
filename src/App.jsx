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
// import Package from "./components/Package";
import Key from "./components/Key";
import Gain from "./components/Gain";
import Build from "./components/Build";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import ModalExample from "./components/ModalExample";

const App = () => {
  return (
    <Router>
      <div>
        {/* Routes */}
        <Routes>
          {/* Main Project */}
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

          {/* Branch Project */}
          <Route
            path="/branch"
            element={
              <>
                <Management />
                <ManagementHero />
                <About />
                {/* <Package /> */}
                <Key />
                <Gain />
              </>
            }
          />

          {/* Build Page */}
          <Route path="/build" element={<Build />} />

          {/* Modal Example Page */}
          <Route path="/modal-example" element={<ModalExample />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
