import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Context } from "../Context/Context";

function Navbar() {
  const { userdata, setuserdata } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    // alert('here')
    setuserdata({});
    // console.log("this is the userdata now", userdata);
    window.open("http://localhost:4000/logout", "_self");
    setShowDropdown(!showDropdown);
    // navigate("/");
  };

  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a
            className="navbar-brand"
            onClick={() => {
              navigate("/");
            }}
          >
            Furni<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  {userdata ? (
                    <img
                      onClick={handleDropdownToggle}
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                      src={
                        userdata.picture ? userdata.picture : "/images/user.svg"
                      }
                    />
                  ) : (
                    <img src="/images/user.svg" />
                  )}
                </a>
                {/* {(userdata && userdata.picture)? (<button onClick={handleLogout}>Logout</button>):(<div></div>)} */}
                {/* {(showDropdown)?(<h1>Hello</h1>):(<h1>Bye</h1>)} */}
                {/* {console.log("this is userdata", userdata)} */}
                {userdata && userdata._id && showDropdown ? (
                  // <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff', zIndex: 999 }}>
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <div></div>
                )}
              </li>
              <li>
                <a className="nav-link">
                  <img
                    src="/images/cart.svg"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
