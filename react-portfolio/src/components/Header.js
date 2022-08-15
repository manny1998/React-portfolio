import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");


  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact Me":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/manny1998"
          >
            <span className="content is-large">Manroven Singh</span>
          </a>
        </div>
      </nav>
      { }
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      { }
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;