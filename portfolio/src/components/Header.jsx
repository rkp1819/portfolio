import React from "react";

import Stars from "./Stars";

export default function Header() {
  return (
    <div className="lastlayer blur-box">
      <Stars />

      <div id="top" className="fullpage">
        <div className="header fullpage">
          <div className="container container-fluid">
            <div className="absolute-center">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="personal animated fadeInDown">
                    <a
                      href=""
                      className="typewrite"
                      data-period="5000"
                      data-type='[ "Hi, Im RAJ.", "I love food."]'
                    >
                      <span className="wrap"></span>
                    </a>
                  </h1>
                  <h1 className="full-stack animated fadeInDown">
                    <a
                      href=""
                      className="typewrite"
                      data-period="5000"
                      data-type='[ 
					 "A Full Stack Developer.", "I create web-apps."]'
                    >
                      <span className="wrap"></span>
                    </a>
                  </h1>
                  <h1 className="ai animated fadeInDown">
                    <a
                      href=""
                      className="typewrite"
                      data-period="5000"
                      data-type='["An AI enthusiast.", "I have made chatbots and predictors." ]'
                    >
                      <span className="wrap"></span>
                    </a>
                  </h1>
                </div>

                <div className="row row-spacer">
                  <div className="col-sm-3">
                    <a href="#works" className="btn scroll animated bounceInUp">
                      View My Works
                    </a>
                  </div>
                  <div className="col-sm-3">
                    <a
                      href="#contact"
                      className="btn scroll animated bounceInDown"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="col-sm-3">
                    <div className="connect-icon">
                      <div className="prof-links clearfix animated bounceInUp">
                        <a href="https://www.linkedin.com/in/raj-kumar-panda-48b6a5141/">
                          <i
                            className="fab fa-linkedin-in fa-6x"
                            style={{ color: "aliceblue" }}
                          ></i>
                        </a>
                        <a href="https://wa.me/919777830889">
                          <i
                            className="fab fa-whatsapp fa-6x"
                            style={{ color: "aliceblue" }}
                          ></i>
                        </a>
                        <a href="https://github.com/rkp1819">
                          <i
                            className="fab fa-github fa-6x"
                            style={{ color: "aliceblue" }}
                          ></i>
                        </a>
                        <a href="https://www.hackerrank.com/rkp1819">
                          <i
                            className="fab fa-hackerrank fa-6x"
                            style={{ color: "aliceblue" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
