import React from "react";

function Resume() {
  return (
    <div className="container">
      <object
        data="https://drive.google.com/file/d/1Hxjqaz28djyDnonQBQN9i7F8uMJ6txzZ/view?usp=sharing"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Drive Link
          <a href="https://drive.google.com/file/d/1Hxjqaz28djyDnonQBQN9i7F8uMJ6txzZ/view?usp=sharing">to the PDF!</a>
        </p>
      </object>
    </div>
  );
}

export default Resume;
