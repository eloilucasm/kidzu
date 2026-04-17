import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section-2 fix section-padding">
      <div className="about-pencil bz-gsap-animate-circle">
        <img src="/img/home-2/shape/about-pencil.png" alt="img" />
      </div>
      <div className="about-vec bz-gsap-animate-circle">
        <img src="/img/home-2/shape/about-vec.png" alt="img" />
      </div>
      <div className="about-vec2 bz-gsap-animate-circle">
        <img src="/img/home-2/shape/about-shape3.png" alt="img" />
      </div>
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="about-content-2">
                <div className="section-title mb-0">
                  <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">About Us</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    A Safe, Joyful & Learning-Focused Environment for Your Child
                  </h2>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".5s">
                  At Kidzu, our aim is to give everyone a chance to learn a new language. Our skilled team creates fun and useful lessons so each student can reach their goals. We’re here to help you gain skills for both work and life.
                </p>
                <div className="about-list wow fadeInUp" data-wow-delay=".7s">
                  <ul>
                    <li>
                      <img src="/img/home-2/icon/check.svg" alt="img" />
                      Learn Through Fun
                    </li>
                    <li>
                      <img src="/img/home-2/icon/check.svg" alt="img" />
                      Secure Environment
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img src="/img/home-2/icon/check.svg" alt="img" />
                      Healthy Food Choices
                    </li>
                    <li>
                      <img src="/img/home-2/icon/check.svg" alt="img" />
                      Bright & Cheerful Environment
                    </li>
                  </ul>
                </div>
                <div className="about-button wow fadeInUp" data-wow-delay=".6s">
                  <a href="#" className="theme-btn">
                    <span className="theme-bg">
                      <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F"></path>
                      </svg>
                    </span>
                    <span className="theme-text">know more <img src="/img/icon/arrow1.svg" alt="" /></span>
                    <span className="theme-text2">know more <img src="/img/icon/arrow1.svg" alt="" /></span>
                  </a>
                  <div className="author-icon">
                    <div className="icon">
                      <img src="/img/home-1/icon/telephone.svg" alt="img" />
                    </div>
                    <div className="content">
                      <span>Call Us Now</span>
                      <h3>
                        <a href="tel:+11123065498">+11 123 0654 98</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="/img/home-2/about-image.png" alt="img" />
                <div className="shape1">
                  <img src="/img/home-2/shape/about-shape1.png" alt="img" />
                </div>
                <div className="shape2">
                  <img src="/img/home-2/shape/about-shape2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
