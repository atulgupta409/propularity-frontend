import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Builder from "./components/builder/Builder";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:builder" element={<Builder />} />
      </Routes>
    </>
  );
}

export default App;
