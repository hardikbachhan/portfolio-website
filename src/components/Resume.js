import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import data from "../config";

function Resume() {

    // eslint-disable-next-line
    const [numPages, setNumPages] = useState(null);
    // eslint-disable-next-line
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const myStyle = {
        display: "block",
        padding: "0 0",
        margin: "2% 0 0 6%",
        textAlign: "center"
    }

    return (
        <div className="container" style={myStyle}>
            <Document file={data.RESUME_URL} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className={"resume-margin"} renderAnnotationLayer={false} pageNumber={pageNumber} />
            </Document>
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
            <button type="button" className="button btn2" > <a href="https://drive.google.com/file/d/1Hxjqaz28djyDnonQBQN9i7F8uMJ6txzZ/view?usp=sharing">Download PDF</a> </button>
        </div>
    );
}

export default Resume;
