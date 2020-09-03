import React from "react";

export default function Works() {
  return (
    <div id="works" className="portfolio spacer">
      <div className="container">
        <h2 className="center">Works</h2>

        <ul className="grid effect-2" id="grid">
          <li>
            <img alt="portfolio" src="images/grid-image/1.png" />
            <div className="overlay animated fadeIn">
              <span className="animated bounceIn">
                <a href="https://rkp1819.github.io/2048/" target="_blank">
                  <i className="fa fa-link"></i>
                  View Website
                </a>
              </span>
            </div>
          </li>
          <li>
            <img alt="portfolio" src="images/grid-image/2.png" />
            <div className="overlay animated fadeIn">
              <span className="animated fadeInDown">
                <a href="https://rkp1819.github.io/drum-kit/" target="_blank">
                  <i className="fa fa-link"></i>
                  View Website
                </a>
              </span>
            </div>
          </li>
          <li>
            <img alt="portfolio" src="images/grid-image/3.png" />
            <div className="overlay animated fadeIn">
              <span className="animated fadeInUp">
                <a href="https://accomplisher.herokuapp.com/" target="_blank">
                  <i className="fa fa-link"></i>
                  View Website
                </a>
              </span>
            </div>
          </li>
          <li>
            <img alt="portfolio" src="images/grid-image/4.png" />
            <div className="overlay animated fadeIn">
              <span className="animated bounceIn">
                <a
                  href="https://rkp1819.github.io/Simon-memory-game/"
                  target="_blank"
                >
                  <i className="fa fa-link"></i>
                  View Website
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
