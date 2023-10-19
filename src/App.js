import { Route, Routes } from "react-router-dom";
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
import ProjectTypePage from "./components/project-type-page/ProjectTypePage";
import FeaturedCollection from "./components/city/featured-collection/FeaturedCollection";
import PageNotFound from "./components/page-not-found/PageNotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={[<Navbar key={1} />, <Home key={2} />, <Footer key={3} />]}
        />
        <Route
          path="builder/:builder"
          element={[
            <Navbar key={4} />,
            <Builder key={5} />,
            <Footer key={6} />,
          ]}
        />
        <Route
          path="/:builder/:city/:slug"
          element={[
            <Navbar key={7} />,
            <Project key={8} />,
            <Footer key={9} />,
          ]}
        />
        <Route
          path="/:city/:microlocation"
          element={[
            <Navbar key={13} />,
            <MicrolocationPage key={14} />,
            <Footer key={15} />,
          ]}
        />
        <Route
          path="/:city/filter/:filteredValue"
          element={[
            <Navbar key={10} />,
            <FilteredItems key={11} />,
            <Footer key={12} />,
          ]}
        />
        <Route
          path="/:city/projects/:featured"
          element={[
            <Navbar key={26} />,
            <FeaturedCollection key={27} />,
            <Footer key={28} />,
          ]}
        />

        <Route
          path="/:city"
          element={[
            <Navbar key={16} />,
            <City key={17} />,
            <Footer key={18} />,
          ]}
        />
        <Route
          path="/:builder/:city/:slug/image-gallery"
          element={<ProjectImageGallery key={19} />}
        />
        <Route
          path="/contact"
          element={[
            <Navbar key={20} />,
            <Contact key={21} />,
            <Footer key={22} />,
          ]}
        />
        <Route
          path="/builder/:builder/image-gallery"
          element={<BuilderImageGallery key={23} />}
        />
        <Route
          path="/builder/:builder/projects/:projectType"
          element={[
            <Navbar key={23} />,
            <ProjectTypePage key={24} />,
            <Footer key={25} />,
          ]}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
