import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

function Resume() {
    const RESUME_URL =
        "./Hardik Bachhan CV.pdf";

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const handleClick = (e) => {

    }

    return (
        <div className="container mx-5 mt-5 text-center">
            <Document file={RESUME_URL} onLoadSuccess={onDocumentLoadSuccess}>
                <Page className={"resume-margin"} renderAnnotationLayer={false} pageNumber={pageNumber} />
            </Document>
            {/* <p>
                Page {pageNumber} of {numPages}
            </p> */}
                <button type="button" class="button btn2" > <a href="https://drive.google.com/file/d/1Hxjqaz28djyDnonQBQN9i7F8uMJ6txzZ/view?usp=sharing">Pdf Link</a> </button>
        </div>
    );
}

export default Resume;
