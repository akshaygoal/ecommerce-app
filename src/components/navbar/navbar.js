// import React, { useState, useEffect } from "react";
// import "./navbar.css";
// import logo from "../Images/logo.jpg";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { GoChevronRight, GoChevronLeft } from "react-icons/go";
// import { IoMenu, IoCloseSharp } from "react-icons/io5";
// import { TfiSearch } from "react-icons/tfi";
// import { HiMiniShoppingBag } from "react-icons/hi2";
// import { LuLogIn,LuLogOut } from "react-icons/lu";

// function Navbar({ toggleCart }) {
//   const [state, setState] = useState(false);
//   const [data, setData] = useState(true);
//   const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

//   return (
//     <>
//       <div className="top-offer-container">
//         <GoChevronLeft />
//         <p> Flat 10% off on all prepaid orders!</p>
//         <GoChevronRight />
//       </div>
//       <div className={`navbar ${state ? "navbar1" : ""}`}>
//         <div className={`nav-items ${state ? "nav-item1" : ""}`}>
//           <NavLink to="/">
//             <img
//               className={`logo-image ${state ? "logo-image1" : ""}`}
//               src={logo}
//               alt="logo-image"
//             />
//           </NavLink>

// <ul className={`navbar-nav ${state ? "navbar-nav1" : ""}`}>
//   {['/', '/oversized-page', '/oversized-basics', '/regular-tees', '/hoodies', '/contact'].map((path, index) => (
//     <NavLink key={index} className={`Nav-link ${state ? "Nav-link1" : ""}`} to={path}>
//       <li className="nav-item">{path.split('/').pop().replace('-', ' ') || 'Home'}</li>
//     </NavLink>
//   ))}
// </ul>

//           <span onClick={() => setState(!state)} className="icon">
//             {state ? <IoCloseSharp /> : <IoMenu />}
//           </span>

//           <div className="search-cart">
//             <div className="box">
//               <input type="text" placeholder="Search..." />
//               <TfiSearch className="search-nav" />
//             </div>
//             <Link to="/hoodies-cart">
//               <HiMiniShoppingBag onClick={toggleCart} className={`cart-nav ${data ? 'open' : 'closed'}`} />
//             </Link>
//             <Link to="/login">
//               <LuLogIn className="login-nav"  onClick={"/login"}/>
//               <LuLogOut className="login-nav"  onClick={"/login"}/>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import logo from "../Images/logo.jpg";
import "./navbar.css";

function Navbar({ toggleCart }) {
  const [state, setState] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedin");
    setLoggedIn(!!isLoggedIn); // Set loggedIn state based on localStorage
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <>
      <div className="top-offer-container">
        <p>Flat 10% off on all prepaid orders!</p>
      </div>
      <div className={`navbar ${state ? "navbar1" : ""}`}>
        <div className={`nav-items ${state ? "nav-item1" : ""}`}>
          <NavLink to="/">
            <img
              className={`logo-image ${state ? "logo-image1" : ""}`}
              src={logo}
              alt="logo"
            />
          </NavLink>

          <ul className={`navbar-nav ${state ? "navbar-nav1" : ""}`}>
            {[
              "/",
              "/oversized-page",
              "/oversized-basics",
              "/regular-tees",
              "/hoodies",
              "/contact",
            ].map((path, index) => (
              <NavLink
                key={index}
                className={`Nav-link ${state ? "Nav-link1" : ""}`}
                to={path}
              >
                <li className="nav-item">
                  {path.split("/").pop().replace("-", " ") || "Home"}
                </li>
              </NavLink>
            ))}
          </ul>

          <span onClick={() => setState(!state)} className="icon">
            {state ? <IoCloseSharp /> : <IoMenu />}
          </span>

          {/* <div className="search-cart">
            <div className="box">
              <input type="text" placeholder="Search..." />
              <TfiSearch className="search-nav" />
            </div>
            <HiMiniShoppingBag className="cart-nav" onClick={toggleCart} />
            {loggedIn ? (
              <LuLogOut className="login-nav" onClick={handleLogout} />
            ) : (
              <Link to="/login">
                <p style={{ color: "#fff", display: "flex" }}>LOGIN</p>
                <LuLogIn className="login-nav" />
              </Link>
            )}
          </div> */}
          <div className="search-cart">
            <div className="box">
              <input type="text" placeholder="Search..." />
              <TfiSearch className="search-nav" />
            </div>
            <HiMiniShoppingBag className="cart-nav" onClick={toggleCart} />

            {loggedIn ? (
              <>
                
                <LuLogOut className="log-nav" onClick={handleLogout} />
                <p className="log-p">OUT</p>
              </>
            ) : (
              <Link to="/login" style={{ display: "flex", alignItems: "center" }}>
               
                <LuLogIn className="log-nav" />
                <p className="log-p">IN</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
