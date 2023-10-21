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
import ErrorBoundary from "./components/error-boundry/ErrorBoundries";

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
            <ErrorBoundary>
              <Builder key={5} />
            </ErrorBoundary>,
            <Footer key={6} />,
          ]}
        />
        <Route
          path="/:builder/:city/:slug"
          element={[
            <Navbar key={7} />,
            <ErrorBoundary>
              <Project key={8} />
            </ErrorBoundary>,
            <Footer key={9} />,
          ]}
        />
        <Route
          path="/:city/:microlocation"
          element={[
            <Navbar key={13} />,
            <ErrorBoundary>
              <MicrolocationPage key={14} />
            </ErrorBoundary>,
            <Footer key={15} />,
          ]}
        />
        <Route
          path="/:city/filter/:filteredValue"
          element={[
            <Navbar key={10} />,
            <ErrorBoundary>
              <FilteredItems key={11} />
            </ErrorBoundary>,
            <Footer key={12} />,
          ]}
        />
        <Route
          path="/:city/projects/:featured"
          element={[
            <Navbar key={26} />,
            <ErrorBoundary>
              {" "}
              <FeaturedCollection key={27} />
            </ErrorBoundary>,
            <Footer key={28} />,
          ]}
        />

        <Route
          path="/:city"
          element={[
            <Navbar key={16} />,
            <ErrorBoundary>
              <City key={17} />
            </ErrorBoundary>,
            <Footer key={18} />,
          ]}
        />
        <Route
          path="/:builder/:city/:slug/image-gallery"
          element={
            <ErrorBoundary>
              <ProjectImageGallery key={19} />
            </ErrorBoundary>
          }
        />
        <Route
          path="/contact"
          element={[
            <Navbar key={20} />,
            <ErrorBoundary>
              <Contact key={21} />
            </ErrorBoundary>,
            <Footer key={22} />,
          ]}
        />
        <Route
          path="/builder/:builder/image-gallery"
          element={
            <ErrorBoundary>
              <BuilderImageGallery key={23} />
            </ErrorBoundary>
          }
        />
        <Route
          path="/builder/:builder/projects/:projectType"
          element={[
            <Navbar key={23} />,
            <ErrorBoundary>
              <ProjectTypePage key={24} />
            </ErrorBoundary>,
            <Footer key={25} />,
          ]}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
