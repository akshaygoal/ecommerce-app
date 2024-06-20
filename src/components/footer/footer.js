import React from "react";
import { NavLink } from "react-router-dom";

import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="Quick-main-grid-div">
          <div className="Quick-navbar-content">
            <ul className="footer-item-container">
              <h4 className="footer-header">Quick Links</h4>
              <NavLink className="footer-items" to={"/"}>
                <li className="footer-items">Home</li>
              </NavLink>
              <NavLink className="footer-items" to={"/oversized-page1"}>
                <li className="footer-items">Oversized Tees</li>
              </NavLink>
              {/* <Link className="footer-items" to={"/tees"}>
                <li className="footer-items">Graphic T-shits</li>
              </Link> */}
              <NavLink className="footer-items" to={"/oversized-basics"}>
                <li className="footer-items">Oversized Basics</li>
              </NavLink>
              <NavLink className="footer-items" to={"/basic-tees"}>
                <li className="footer-items">Basic Tees</li>
              </NavLink>
              <NavLink className="footer-items" to={"/hoodies"}>
                <li className="footer-items">Hoodies</li>
              </NavLink>
              <NavLink className="footer-items" to={"/contact"}>
                <li className="footer-items">Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="Quick-link-us">
            <ul className="footer-item-container">
              <h4 className="footer-header">Quick links</h4>
              <NavLink className="footer-items" to={"/search"}>
                <li className="footer-items">Search</li>
              </NavLink>
              <NavLink className="footer-items" to={"/contact"}>
                <li className="footer-items">Contact</li>
              </NavLink>
              <NavLink className="footer-items" to={"/refund"}>
                <li className="footer-items">Returns & Refunds</li>
              </NavLink>
              <NavLink className="footer-items" to={"/privacypolicy"}>
                <li className="footer-items">Privacy Policy</li>
              </NavLink>
              <NavLink className="footer-items" to={"/service"}>
                <li className="footer-items">Terms of Service</li>
              </NavLink>
              <NavLink className="footer-items" to={"/exchange"}>
                <li className="footer-items">Exchange & Cancellation Policy</li>
              </NavLink>
              <NavLink className="footer-items" to={"/about"}>
                <li className="footer-items">About Us</li>
              </NavLink>
            </ul>
          </div>

          <div className="Broken-record">
            <h4 className="footer-broken-header">Dapper Next</h4>
            <p className="broken-record-para">
              A streetwear brand that is working towards <br /> bringing new and
              authentic designs for the Tshirts in you!
            </p>
          </div>
        </div>
        <div className="social-media-container">
          <div className="subscribe-email">
            <h2 className="email-header">Subscribe to our emails</h2>
            <div className="email-input-container">
              <input className="email-input" type="email" placeholder="Email" />
              <FaArrowRightLong className="arrow-icon" />
            </div>
          </div>
          <div className="social-medias">
            <div>
              <ImFacebook2 className="social-media-icon-fb" />
            </div>
            <div>
              <FaInstagram className="social-media-icon-instagram" />
            </div>
            <div>
              <CiTwitter className="social-media-icon-twitter" />
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="footer-content-bottom">
        <div className="footer-copyright">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} DAPPER NEXT UNISEX STORE |Best
            Streetwear Oversized Tshirts in India
          </p>{" "}
        </div>
        <div>
          <p> Powered by shopify . </p>
        </div>
        <div>
          <p>Refund Policy .</p>
        </div>
        <div>
          <p> Privacy Policy . </p>
        </div>
        <div>
          <p> Terms of service . </p>
        </div>
        <div>
          <p> Contact information . </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
