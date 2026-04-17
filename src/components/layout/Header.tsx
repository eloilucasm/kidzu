import React from "react";

export default function Header() {
  return (
    <header id="header-sticky" className="header-1">
      <div className="top-bar">
        <img src="/img/header/top-bar.png" alt="img" />
      </div>
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
                    <li className="has-dropdown active menu-thumb">
                      <a href="#">Home <i className="fa-light fa-chevron-down"></i></a>
                    </li>
                    <li><a href="#">Sobre Nós <i className="fa-light fa-chevron-down"></i></a></li>
                    <li><a href="#">Programs <i className="fa-light fa-chevron-down"></i></a></li>
                    <li><a href="#">Pages <i className="fa-light fa-chevron-down"></i></a></li>
                    <li><a href="#">Blog <i className="fa-light fa-chevron-down"></i></a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <a href="#" className="main-header__search search-toggler">
                <i className="fa-light fa-magnifying-glass"></i>
              </a>
              <a href="#" className="theme-btn">
                <span className="theme-bg">
                  <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F" />
                  </svg>
                </span>
                <span className="theme-text">Entrar em Contato <img src="/img/icon/arrow1.svg" alt="" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
