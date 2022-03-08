import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="container page-body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="projects" element={<Projects />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
