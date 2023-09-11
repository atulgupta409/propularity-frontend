import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Builder from "./components/builder/Builder";
import "./App.css";
import Project from "./components/project/Project";
import Home from "./components/homepage/home/Home";
import ProjectTypesNav from "./components/project-types-navbar/ProjectTypesNav";
import FilteredItems from "./components/filtered-items/FilteredItems";
import Footer from "./components/footer/Footer";
import City from "./components/city/City";

function App() {
  return (
    <>
      <Navbar />
      <ProjectTypesNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/m3m-india" element={<Builder />} />
        <Route path="/:builder/:city/:project" element={<Project />} />
        <Route path="/:city/:filteredvalue" element={<FilteredItems />} />
        <Route path="/:city" element={<City />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
