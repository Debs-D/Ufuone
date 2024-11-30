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
//import Package from "./components/Package";
import Key from "./components/Key";
import Gain from "./components/Gain";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Project */}
        <Route
          path="/"
          element={
            <div>
              <div className="space-y-3">
                <Navbar />
                <Header />
                <Hero />
              </div>
              <div className="">
                <About />
                <SectionStudy />
                <Feature />
                <Layout />
                <BookLayout />
                <Skills />
                <Review />
              </div>
              <Footer />
            </div>
          }
        />

        {/* Branch Project */}
        <Route
          path="/branch"
          element={
            <div>
              <Management />
              <ManagementHero />
              <About />

              {/*<Package />*/}
              <Key />
              <Gain />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
