import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function Resume() {

    const RESUME_URL =
        "./Hardik Bachhan CV.pdf";

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const myStyle = {
        display: "block",
        padding: "0 0",
        margin: "2% 0 0 10%",
        textAlign: "center"
    }

    return (
        <div className="container" style={myStyle}>
            <Document file={RESUME_URL} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className={"resume-margin"} renderAnnotationLayer={false} pageNumber={pageNumber} />
            </Document>
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
            <button type="button" className="button btn2" > <a href="https://drive.google.com/file/d/1Hxjqaz28djyDnonQBQN9i7F8uMJ6txzZ/view?usp=sharing">Have to quick look...</a> </button>
        </div>
    );
}

export default Resume;
