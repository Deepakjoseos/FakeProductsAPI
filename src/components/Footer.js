import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              SocialMedia Links
            </h5>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-facebook mr-3"></i>FaceBook
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-twitter mr-3"></i>Twitter
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-instagram mr-3"></i>Instagram
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-linkedin mr-3"></i>Linkedin
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                <i class="fa fa-youtube mr-3"></i>Youtube
              </a>
            </p>
          </div>

          <div>
            <hr className="mb-4" />
            <div className="row-align-items-center">
              <div className="col md 7  col lg  8">
                <p>
                  {" "}
                  Copyright @{new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
