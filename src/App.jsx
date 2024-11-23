import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import SectionStudy from "./components/SectionStudy";
import LandingPage from "./components/landingPage";
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
      <div className="space-y-8">
        <Navbar />
        <Header />
        <Hero />
        <About />
        <Feature />
        <SectionStudy />
      </div>
      <div className="space-y-8">
        <LandingPage />
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
