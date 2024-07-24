import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Whychooseus from "../Whychooseus/Whychooseus";
import Wehelp from "../Wehelp/Wehelp";
import Testimonials from "../Testimonials/Testimonials";
import { Context } from "../Context/Context";
import axios from "axios";

function Index() {
  const navigate = useNavigate();

  const { userdata, setuserdata } = useContext(Context);

  console.log("response", userdata);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/login/sucess", {
        withCredentials: true,
      });

      setuserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("This is the userdata obatined from google", userdata);

  // logoout
  const logout = () => {
    setuserdata({})
    console.log("this is the userdata now", userdata)
    window.open("http://localhost:4000/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        {/* <!-- Start Header/Navigation --> */}
        <Navbar />
        {/* <!-- End Header/Navigation -->

		<!-- Start Hero Section --> */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  {/* <div style={{ color: 'black', fontSize: '18px' }}> */}
                  <h2 style={{ color: 'black'}}>
                    {userdata && userdata.username
                      ? `Welcome, ${userdata.username}`
                      : ""}
                  </h2>
                  {/* </div> */}
                  <h1>
                    Modern Interior{" "}
                    <span className="d-block">Design Studio</span>
                  </h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <a
                      href=""
                      className="btn btn-secondary me-2"
                      onClick={() => {
                        navigate("/shop");
                      }}
                    >
                      Shop Now
                    </a>
                    <a
                      href="#"
                      className="btn btn-white-outline"
                      onClick={() => {
                        navigate("/shop");
                      }}
                    >
                      Explore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img
                    src="/images/couch.png"
                    alt="green couch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Hero Section -->

		<!-- Start Product Section --> */}
        <div className="product-section">
          <div className="container">
            <div className="row">
              {/* <!-- Start Column 1 --> */}
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">
                  Crafted with excellent material.
                </h2>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.{" "}
                </p>
                <p>
                  <a
                    className="btn"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    Explore
                  </a>
                </p>
              </div>
              {/* <!-- End Column 1 -->

					<!-- Start Column 2 --> */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img
                    src="/images/product-1.png"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>

                  <span className="icon-cross">
                    <img src="/images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* <!-- End Column 2 -->

					<!-- Start Column 3 --> */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img
                    src="/images/product-2.png"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Kruzo Aero Chair</h3>
                  <strong className="product-price">$78.00</strong>

                  <span className="icon-cross">
                    <img src="/images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* <!-- End Column 3 -->

					<!-- Start Column 4 --> */}
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img
                    src="/images/product-3.png"
                    className="img-fluid product-thumbnail"
                  />
                  <h3 className="product-title">Ergonomic Chair</h3>
                  <strong className="product-price">$43.00</strong>

                  <span className="icon-cross">
                    <img src="/images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
              {/* <!-- End Column 4 --> */}
            </div>
          </div>
        </div>
        <Whychooseus />
        <Wehelp />
        <div className="popular-product">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="/images/product-1.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>Nordic Chair</h3>
                    <p>
                      Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                      odio{" "}
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="/images/product-2.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>Kruzo Aero Chair</h3>
                    <p>
                      Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                      odio{" "}
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src="/images/product-3.png"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-3">
                    <h3>Ergonomic Chair</h3>
                    <p>
                      Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                      odio{" "}
                    </p>
                    <p>
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Popular Product -->

		<!-- Start Testimonial Slider --> */}
        why testimonial not loading.................?
        <Testimonials />
        {/* <!-- End Testimonial Slider -->

		<!-- Start Blog Section --> */}
        <div className="blog-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2 className="section-title">Recent Blog</h2>
              </div>
              <div className="col-md-6 text-start text-md-end">
                <a href="#" className="more">
                  View All Posts
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img
                      src="/images/post-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">First Time Home Owner Ideas</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Kristin Watson</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 19, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img
                      src="/images/post-2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">How To Keep Your Furniture Clean</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Robert Fox</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 15, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img
                      src="/images/post-3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3>
                      <a href="#">Small Space Furniture Apartment Ideas</a>
                    </h3>
                    <div className="meta">
                      <span>
                        by <a href="#">Kristin Watson</a>
                      </span>{" "}
                      <span>
                        on <a href="#">Dec 12, 2021</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Blog Section -->	

		<!-- Start Footer Section --> */}
        <footer className="footer-section">
          <div className="container relative">
            <div className="sofa-img">
              <img src="/images/sofa.png" alt="Image" className="img-fluid" />
            </div>

            <div className="row">
              <div className="col-lg-8">
                <div className="subscription-form">
                  <h3 className="d-flex align-items-center">
                    <span className="me-1">
                      <img
                        src="/images/envelope-outline.svg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </span>
                    <span>Subscribe to Newsletter</span>
                  </h3>

                  <form action="#" className="row g-3">
                    <div className="col-auto">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">
                        <span className="fa fa-paper-plane"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row g-5 mb-5">
              <div className="col-lg-4">
                <div className="mb-4 footer-logo-wrap">
                  <a href="#" className="footer-logo">
                    Furni<span>.</span>
                  </a>
                </div>
                <p className="mb-4">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant
                </p>

                <ul className="list-unstyled custom-social">
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-brands fa-linkedin"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8">
                <div className="row links-wrap">
                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Support</a>
                      </li>
                      <li>
                        <a href="#">Knowledge base</a>
                      </li>
                      <li>
                        <a href="#">Live chat</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Jobs</a>
                      </li>
                      <li>
                        <a href="#">Our team</a>
                      </li>
                      <li>
                        <a href="#">Leadership</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Nordic Chair</a>
                      </li>
                      <li>
                        <a href="#">Kruzo Aero</a>
                      </li>
                      <li>
                        <a href="#">Ergonomic Chair</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-top copyright">
              <div className="row pt-4">
                <div className="col-lg-6">
                  <p className="mb-2 text-center text-lg-start">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>.
                    All Rights Reserved. &mdash; Designed with love by{" "}
                    <a href="https://untree.co">Untree.co</a> Distributed By{" "}
                    <a hreff="https://themewagon.com">ThemeWagon</a>
                  </p>
                </div>

                <div className="col-lg-6 text-center text-lg-end">
                  <ul className="list-unstyled d-inline-flex ms-auto">
                    <li className="me-4">
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Section -->	 */}
        <script src="/Scripts/bootstrap.bundle.min.js"></script>
        <script src="/Scripts/tiny-slider.js"></script>
        <script src="/Scripts/custom.js"></script>
      </div>
    </>
  );
}

export default Index;
