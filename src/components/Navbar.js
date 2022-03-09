import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function Navbar() {

    const [progress, setProgress] = useState(0);

    const handleClick = (e) => {
        setProgress(60);
        setTimeout(() => {
            setProgress(100);
        }, 500);
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: "sticky" }} >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" onClick={handleClick}>
                            Hardik Bachhan
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/projects" onClick={handleClick}>
                                    Projects
                                </Link>
                                <Link className="nav-link" to="/experience" onClick={handleClick}>
                                    Experiences
                                </Link>
                                <Link className="nav-link" to="/resume" onClick={handleClick}>
                                    Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <LoadingBar
                color="#f11946" height={3} progress={progress} onLoaderFinished={() => { setProgress(0) }} loaderSpeed={900}
            />
        </>
    );
}

export default Navbar;
