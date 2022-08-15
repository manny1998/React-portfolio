import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Full Stack Development Portfolio</strong> - Site created using React {" "}
          <a href="https://github.com/ajaykulkarni01" target="_blank" rel="noreferrer">
            Manroven Singh
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/manroven-singh-1aa597239/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://manny1998.github.io/Manroven-Singh-Portfolio/" target="_blank" rel="noreferrer">
            My Coding portfolio
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;