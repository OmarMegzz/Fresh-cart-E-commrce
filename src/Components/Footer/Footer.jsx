import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 mt-5">
    <div className="container-fluid text-center text-md-left mt-5">
      <div className="row">
        <div className="mt-md-0 mt-3">
          <h1 className="text-main">Get frech cart app</h1>
          <p className="h5">
            we will send you a link,open it on your phone to download the app
          </p>
        </div>
        <div className="container search-bar  w-75 mt-5">
          <form class="d-flex" role="search">
            <input
              className="form-control me-2 mt-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success text-main mt-5 "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="end-footer d-flex justify-content-between">
        <div className="l-footers d-flex justify-content-between align-items-center mt-5">
          <h4>payment partners</h4>
          <i className="fab mx-2 fa-amazon-pay"></i>
          <i className="fab mx-2 fa-cc-amex"></i>
          <i className="fab mx-2 fa-paypal"></i>
        </div>
        <div className="i-footers d-flex justify-content-between align-items-center mt-5">
          <h4> get deliveries with fresh cart</h4>
          <i className="fab mx-2 fa-google-play"></i>
          <i className="fab mx-2 fa-app-store-ios"></i>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
