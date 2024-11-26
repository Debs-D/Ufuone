import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import SectionStudy from "./components/SectionStudy";
import Feature from "./components/Feature";
//import LandingPage from "./components/landingPage";
import Layout from "./components/Layout";
import BookLayout from "./components/BookLayout";
import Skills from "./components/Skills";
//import Review from "./components/Review";
import Footer from "./components/Footer";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="space-y-3">
        <Navbar />
        <Header />
        <Hero />
      </div>
      <div className="space-y-8">
        <About />
        <SectionStudy />
        <Feature />
        <Layout />
        <BookLayout />
        <Skills />
        {/*<Review />*/}
      </div>
      <Footer />
    </div>
  );
};

export default App;
