import React from "react";

function Resume() {
  return (
      <div>
          <p className="content is-medium">Resume</p>
          <hr />
          <p className="content">
            Please click on this button to download my <a className="button is-primary" href={process.env.PUBLIC_URL + "/ResumeAK.pdf"} target="_blank"
            rel="noreferrer" > <span className="icon"> <i className="fas fa-download"></i></span><span>   Resume</span> </a>
          </p>
      </div>
       
  );
}

export default Resume;