import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section hero-2">
      <div className="star">
        <img src="/img/home-2/shape/star1.png" alt="img" />
      </div>
      <div className="star2">
        <img src="/img/home-2/shape/star2.png" alt="img" />
      </div>
      <div className="star3">
        <img src="/img/home-2/shape/star2.png" alt="img" />
      </div>
      <div className="vec-shape float-bob-x">
        <img src="/img/home-2/shape/vec-1.png" alt="img" />
      </div>
      <div className="vec-shape2 float-bob-x">
        <img src="/img/home-2/shape/vec-2.png" alt="img" />
      </div>
      <div className="vec-shape3 float-bob-x">
        <img src="/img/home-2/shape/vec-3.png" alt="img" />
      </div>
      <div className="zirap-shape float-bob-y">
        <img src="/img/home-2/shape/zirap.png" alt="img" />
      </div>
      <div className="line-shape">
        <img src="/img/home-2/shape/line.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1 wow fadeInUp" data-wow-delay=".3s">
            <div className="hero-image-items">
              <div className="thumb">
                <img src="/img/home-2/hero-image.jpg" alt="img" />
              </div>
              <div className="hero-line">
                <img src="/img/home-2/hero-line.png" alt="img" />
              </div>
              <div className="shape1">
                <img src="/img/home-2/hero-shape1.png" alt="img" />
              </div>
              <div className="shape2">
                <img src="/img/home-2/hero-shape2.png" alt="img" />
              </div>
              <div className="shape3">
                <img src="/img/home-2/hero-shape3.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="hero-content">
              <div className="hero-sub wow fadeInUp" data-wow-delay=".3s">
                <img src="/img/home-2/hero-client.png" alt="img" />
                <span>
                  student’s admission <br />
                  in 2026
                </span>
              </div>
              <h1 className="hero-title text-anim">
                A Joyful Start to Your
                Child’s Education
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".3s">
                We are a caring kindergarten & school dedicated to building strong foundations
                through play-based and academic learning.
              </p>
              <div className="hero-button wow fadeInUp" data-wow-delay=".5s">
                <a href="#" className="theme-btn">
                  <span className="theme-bg">
                    <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F" />
                    </svg>
                  </span>
                  <span className="theme-text">Enroll Now <img src="/img/icon/arrow1.svg" alt="" /></span>
                  <span className="theme-text2">Enroll Now <img src="/img/icon/arrow1.svg" alt="" /></span>
                </a>
                <a href="#" className="theme-btn hover-header">
                  <span className="theme-bg">
                    <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#385469" />
                    </svg>
                  </span>
                  <span className="theme-text">Book a Visit <img src="/img/icon/arrow1.svg" alt="" /></span>
                  <span className="theme-text2">Book a Visit <img src="/img/icon/arrow1.svg" alt="" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
