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

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="builder/:builder" element={<Builder />} />
        <Route path="/:builder/:city/:slug" element={<Project />} />
        <Route
          path="/:city/filter/:filteredvalue"
          element={<FilteredItems />}
        />
        <Route path="/:city/:microlocation" element={<MicrolocationPage />} />
        <Route path="/:city" element={<City />} />
        <Route
          path="/:builder/:city/:slug/image-gallery"
          element={<ProjectImageGallery />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
