import React from "react";

export default function Testimonials() {
  return (
    <div className="testimonials-bg">
      <div className="testimonials center spacer">
        <div className="container">
          <h2>Testimonials</h2>

          <div
            id="carousel-testimonials"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="item active animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="portfolio"
                    src="images/testimonials/1.jpg"
                    width="100"
                    className="img-circle"
                  />
                </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <span>Canada</span>
              </div>
              <div className="item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="portfolio"
                    src="images/testimonials/1.jpg"
                    width="100"
                    className="img-circle"
                  />
                </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <span>Canada</span>
              </div>
              <div className="item  animated bounceInRight">
                <span className="animated slideInLeft">
                  <img
                    alt="portfolio"
                    src="images/testimonials/1.jpg"
                    width="100"
                    className="img-circle"
                  />
                </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <span>Canada</span>
              </div>
            </div>

            <a
              className="left arrow"
              href="#carousel-testimonials"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="right arrow"
              href="#carousel-testimonials"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
