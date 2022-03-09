import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="page-body" style={{ "paddingBottom": "0" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="resume" element={<Resume />} />
                </Routes>

            </div>
            <Footer />

        </>
    );
}

export default App;
