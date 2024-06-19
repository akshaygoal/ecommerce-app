import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../Images/logo.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { HiMiniShoppingBag } from "react-icons/hi2";

function Navbar() {
  const [state, setState] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [activeSelector, setActiveSelector] = useState();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when location changes
  }, [location]);

  // function activeClickHandler(event) {
  //   const value = event.target.value;
  //   setActiveSelector(value);
    
  // }

  return (
    <>
      <div className="top-offer-container">
        <GoChevronLeft />
        <p> Flate 10% off on all prepaid orders!</p>
        <GoChevronRight />
      </div>
      <div className={navbar === false ? "navbar" : "navbar1"}>
        <div className={navbar === false ? "nav-items" : "nav-item1"}>
          <NavLink to={"/"}>
            <img
              className={navbar === false ? "logo-image" : "logo-image1"}
              src={logo}
              alt="logo-image"
            />
          </NavLink>

          <ul className={navbar === false ? "navbar-nav" : "navbar-nav1"}>
            <NavLink
            className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/"}
            >
              <li className="nav-item">Home</li>
            </NavLink>

            <NavLink
             className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/oversized-page1"}
            >
              <li className="nav-item">Oversized Tees</li>
            </NavLink>

            <NavLink
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/oversized-basics"}
            >
              <li className="nav-item">Oversized Basics</li>
            </NavLink>
            <NavLink
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/regular-tees"}
            >
              <li className="nav-item">Regular Tees</li>
            </NavLink>
            <NavLink
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/hoodies"}
            >
              <li className="nav-item">Hoodies</li>
            </NavLink>
            <NavLink
              className={state === false ? "Nav-link" : "Nav-link1"}
              to={"/contact"}
            >
              <li className="nav-item">Contact</li>
            </NavLink>
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
