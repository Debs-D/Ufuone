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
import UfuonFun from "./components/UfuonFun";
import Register from "./components/Register";
import Success from "./components/Success";
import LowProjectBox from "./components/LowProjectBox";
import CourseDetails from "./components/CourseDetails";
import ButtonNavbar from "./components/ButtonNavbar";
import HighLevelPage from "./components/HighLevelPage";
import UfoneAbout from "./components/UfoneAbout";
import AdvancedProject from "./components/AdvancedProject";
import ContactUfone from "./components/ContactUfone";
import ContactQuestion from "../src/components/ContactQuestion";
import UnfoneAboutSch from "./components/UnfoneAboutSch";
import AboutSkills from "./components/AboutSkills";
import UfoneManagement from "./components/UfoneManagement";
import AboutStem from "./components/AboutStem";
import StemCommunity from "./components/StemCommunity";
import ImageGallery from "./components/ImageGallery";
// Importing CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "flowbite";

import ProjectLevel from "./components/ProjectLevel";
import RegisterWorkshop from "./components/RegisterWorkshop";
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
                <Footer />
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
                <AboutStem />
                <ImageGallery />
                <StemCommunity />
                <About />
                <Key />
                <Gain />
                <Footer />
              </>
            }h
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
                <Footer />
              </>
            }
          />

          {/* UfuonFun Route */}
          <Route
            path="/UfuonFun"
            element={
              <>
                <Header />
                <WorkPlace />
                <UfuonFun />
                <About />
                <Key />
                <Gain />
                <Footer />
              </>
            }
          />

          {/* Build Page Route */}
          <Route
            path="/build"
            element={
              <>
                <ButtonNavbar />
                <Build />
              </>
            }
          />

          {/* About Page Route */}
          <Route
            path="/ufoneAbout"
            element={
              <>
                <UfoneAbout />
                <UnfoneAboutSch />
                <AboutSkills />
                <ContactQuestion />
                <Footer />
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/low-project" element={<LowProjectBox />} />
          <Route path="/project/:projectName" element={<ProjectLevel />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
          <Route path="/high-level" element={<HighLevelPage />} />
          <Route path="/ufoneAbout" element={<UfoneAbout />} />
          <Route path="/advanced-project" element={<AdvancedProject />} />
          <Route path="/contactUfone" element={<ContactUfone />} />
          <Route path="/contactQuestion" element={<ContactQuestion />} />
          <Route path="/ufonemanagement" element={<UfoneManagement />} />
          <Route path="/Register-workshop" element={<RegisterWorkshop />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
