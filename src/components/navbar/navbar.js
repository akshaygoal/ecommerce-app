import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../Images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { HiMiniShoppingBag } from "react-icons/hi2";

function Navbar() {
  const [state, setState] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  return (
    <>
      <div className="top-offer-container">
        <GoChevronLeft />
        <p> Flate 10% off on all prepaid orders!</p>
        <GoChevronRight />
      </div>
      <div className={state === false ? "navbar" : "navbar1"}>
        <div className={state === false ? "nav-items" : "nav-item1"}>
          <img
            className={state === false ? "logo-image" : "logo-image1"}
            src={logo}
            alt="logo-image"
          />
          <ul className={state === false ? "navbar-nav" : "navbar-nav1"}>
            <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/"}
            >
              <li className="nav-item">Home</li>
            </Link>

            <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/oversized-page1"}
            >
              <li className="nav-item">Oversized Tees</li>
            </Link>
            {/* <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/tees"}
            >
              <li className="nav-item">Graphic T-shits</li>
            </Link> */}
            <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/oversized-basics"}
            >
              <li className="nav-item">Oversized Basics</li>
            </Link>
            <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/basic-tees"}
            >
              <li className="nav-item">Basic Tees</li>
            </Link>
            <Link
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/hoodies"}
            >
              <li className="nav-item">Hoodies</li>
            </Link>
            <Link  className={state === false ? "Nav-link" : "Nav-link1"} to={"/contact"}>
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
          <span onClick={() => setState(!state)}>
            <IoMenu />
          </span>
          <div className="searct-cart">
            <div className="box">
              <input type="text" placeholder="Search..." />
              <a href="#" />
              <TfiSearch className="search-nav" />
            </div>
            <HiMiniShoppingBag className="cart-nav" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
