import React from "react";

export default function Header2() {
  return (
    <header className="header-section-2">
      <div className="header-top">
        <div className="topbar">
          <img src="/img/header/top-bar-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="header-top-wrapper">
            <ul>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                House 25, New York, city 652, canada.
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a href="tel:+1101819987021">+110 1819-987021</a>
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <a href="mailto:info@kidzubranch.com">info@kidzubranch.com</a>
              </li>
            </ul>
            <div className="social-icon d-flex align-items-center">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-vimeo-v"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <a href="/" className="logo">
                <img src="/img/logo/black-logo.svg" alt="img" />
              </a>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Programs</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#" className="main-header__search search-toggler">
                  <i className="fa-light fa-magnifying-glass"></i>
                </a>
                <a href="#" className="theme-btn hover-header">
                  <span className="theme-bg">
                    <svg width="159" height="59" viewBox="0 0 159 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20.0253C0 11.5787 6.56575 4.58706 14.9957 4.05687L79.5 0L144.004 4.05687C152.434 4.58706 159 11.5787 159 20.0253V39.7848C159 48.3088 152.317 55.3362 143.804 55.7646L79.5 59L15.196 55.7646C6.68271 55.3362 0 48.3088 0 39.7848V20.0253Z" fill="#F39F5F" fillOpacity="0.15" />
                      <path d="M143.973 4.55566C152.139 5.06928 158.5 11.8428 158.5 20.0254V39.7852C158.5 48.0425 152.026 54.8505 143.779 55.2656L79.5 58.499L15.2207 55.2656C6.97377 54.8505 0.500189 48.0425 0.5 39.7852V20.0254C0.5 11.8428 6.86084 5.06928 15.0273 4.55566L79.5 0.500977L143.973 4.55566Z" stroke="#F39F5F" strokeOpacity="0.3" />
                    </svg>
                  </span>
                  <span className="theme-text">Apply Now <img src="/img/icon/arrow2.svg" alt="img" /></span>
                  <span className="theme-text2">Apply Now <img src="/img/icon/arrow2.svg" alt="img" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
