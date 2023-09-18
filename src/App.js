import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Builder from "./components/builder/Builder";
import "./App.css";
import Project from "./components/project/Project";
import Home from "./components/homepage/home/Home";
import FilteredItems from "./components/filtered-items/FilteredItems";
import Footer from "./components/footer/Footer";
import City from "./components/city/City";
import MicrolocationPage from "./components/microlocation-page/MicrolocationPage";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import ProjectImageGallery from "./components/project/ProjectImageGallery";
import Contact from "./components/contact/Contact";
import BuilderImageGallery from "./components/builder/BuilderImageGallery";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={[<Navbar />, <Home />, <Footer />]} />
        <Route
          path="builder/:builder"
          element={[<Navbar />, <Builder />, <Footer />]}
        />
        <Route
          path="/:builder/:city/:slug"
          element={[<Navbar />, <Project />, <Footer />]}
        />
        <Route
          path="/:city/filter/:filteredvalue"
          element={[<Navbar />, <FilteredItems />, <Footer />]}
        />
        <Route
          path="/:city/:microlocation"
          element={[<Navbar />, <MicrolocationPage />, <Footer />]}
        />
        <Route path="/:city" element={[<Navbar />, <City />, <Footer />]} />
        <Route
          path="/:builder/:city/:slug/image-gallery"
          element={<ProjectImageGallery />}
        />
        <Route
          path="/contact"
          element={[<Navbar />, <Contact />, <Footer />]}
        />
        <Route
          path="/builder/:builder/image-gallery"
          element={<BuilderImageGallery />}
        />
      </Routes>
    </>
  );
}

export default App;
