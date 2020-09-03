import React from "react";
import ContactFrom from "./ContactForm";
import Copyright from "./Copyright";

export default function Contact() {
  return (
    <div>
      <div id="contact" className="footer center">
        <div className="container">
          <div className="col-sm-offset-3 col-sm-6">
            <h3>Contact</h3>
            <p>I am available for Freelancing work and collaboration.</p>
            <ContactFrom/>
          </div>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className="content flex">
          <Copyright />
        </div>
      </div>

      <a href="#top" className="toTop scroll">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}
