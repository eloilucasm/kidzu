import React from "react";

export default function ChooseUsSection() {
  return (
    <section className="choose-us-section-2 fix section-padding">
      <div className="men-shape bz-gsap-animate-circle">
        <img src="/img/home-2/shape/man.png" alt="img" />
      </div>
      <div className="girl-shape bz-gsap-animate-circle">
        <img src="/img/home-2/shape/girl.png" alt="img" />
      </div>
      <div className="container">
        <div className="choose-us-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="choose-us-thumb">
                <div className="shape1">
                  <img src="/img/home-2/shape/choose-shape.png" alt="" />
                </div>
                <div className="thumb">
                  <img src="/img/home-2/choose-us.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-us-content">
                <div className="section-title mb-0">
                  <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Why Choose Us?</span>
                  <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Why Choose Our School</h2>
                </div>
                <p className="choose-text wow fadeInUp" data-wow-delay=".3s">
                  Qualified teachers who understand children’s needs and focus on personal attention. through play-based and academic learning.
                </p>
                <ul className="wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <div className="icon">
                      <img src="/img/home-2/choose-icon1.png" alt="img" />
                    </div>
                    <div className="title">
                      <h3 className="icon-title">
                        Child-Friendly Learning <br />
                        Environment
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/home-2/choose-icon2.png" alt="img" />
                    </div>
                    <div className="title">
                      <h3 className="icon-title">
                        Focus on child-friendly, <br />
                        safe, & quality education
                      </h3>
                    </div>
                  </li>
                </ul>
                <div className="skill-feature-items">
                  <div className="skill-feature wow fadeInUp" data-wow-delay=".3s">
                    <p className="box-title">Creativity</p>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }}>
                        <div className="progress-value">
                          <span className="counter-number2">90</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-feature wow fadeInUp" data-wow-delay=".5s">
                    <p className="box-title">expert teacher</p>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "99%" }}>
                        <div className="progress-value">
                          <span className="counter-number2">99</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="theme-btn hover-header wow fadeInUp" data-wow-delay=".3s">
                  <span className="theme-bg">
                    <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#385469"></path>
                    </svg>
                  </span>
                  <span className="theme-text">Book a Visit <img src="/img/icon/arrow1.svg" alt="img" /></span>
                  <span className="theme-text2">Book a Visit <img src="/img/icon/arrow1.svg" alt="img" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
