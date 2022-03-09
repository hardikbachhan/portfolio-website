import "./App.css";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";

import { Routes, Route } from "react-router-dom";

function App() {

    const [progress, setProgress] = useState(0);

    return (
        <>
            <Navbar setProgress={setProgress} />
            <div className="page-body" style={{ "paddingBottom": "0" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="resume" element={<Resume />} />
                </Routes>
                <LoadingBar
                    color="#f11946" height={3} progress={progress} onLoaderFinished={() => { setProgress(0) }} loaderSpeed={900}
                />
            </div>
            <Footer />

        </>
    );
}

export default App;
