import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Builder from "./components/builder/Builder";
import "./App.css";
import Project from "./components/project/Project";
import Home from "./components/homepage/home/Home";
import ProjectTypesNav from "./components/project-types-navbar/ProjectTypesNav";

function App() {
  return (
    <>
      <Navbar />
      <ProjectTypesNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:builder" element={<Builder />} />
        <Route path="/:builder/:city/:project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
