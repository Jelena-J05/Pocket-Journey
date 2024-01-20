import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function FooterLogin() {
  return (
    <footer className="footer-login text-center bg-light container-fluid pt-2 mt-5 mb-0">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          &copy; Pocket Journey, 2024. All rights reserved.
        </div>
        <div className="col-lg-6 col-md-12">
          Follow us
          <a
            href="link-to-facebook"
            className="btn btn-outline-dark btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="link-to-twitter"
            className="btn btn-outline-dark btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="link-to-instagram"
            className="btn btn-outline-dark btn-floating m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterLogin;
