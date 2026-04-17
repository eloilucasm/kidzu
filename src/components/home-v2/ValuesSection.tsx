import React from "react";

export default function ValuesSection() {
  return (
    <section className="values-section-2 section-padding pt-0">
      <div className="top-line">
        <img src="/img/home-2/top-line.png" alt="img" />
      </div>
      <div className="bottom-line">
        <img src="/img/home-2/bottom-line.png" alt="img" />
      </div>
      <div className="shape bz-gsap-animate-circle">
        <img src="/img/home-2/shape1.png" alt="img" />
      </div>
      <div className="love-shape bz-gsap-animate-circle">
        <img src="/img/home-2/love.png" alt="img" />
      </div>
      <div className="plane-shape bz-gsap-animate-circle">
        <img src="/img/home-2/plane.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Our Values</span>
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">The Best Playschool For Your Kids</h2>
        </div>
        <div className="values-wrapper-2">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <ul className="values-list wow fadeInUp" data-wow-delay=".3s">
                <li>
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Teacher Training And <br /> Progress</h3>
                  </div>
                </li>
                <li className="active">
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Advanced Placement <br /> Courses</h3>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">best Nanny Selection <br /> in 24/7 </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 order-2 order-xl-1 wow fadeInUp" data-wow-delay=".5s">
              <div className="thumb">
                <img src="/img/home-2/girl-graduation.png" alt="" />
                <div className="line-1">
                  <img src="/img/home-2/line1.png" alt="" />
                </div>
                <div className="line-2">
                  <img src="/img/home-2/line-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 order-1 order-xl-2">
              <ul className="values-list wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Child-Friendly Learning <br /> Environment </h3>
                  </div>
                </li>
                <li className="active">
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Self-Contained Gifted <br /> Programs​</h3>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/img/home-2/icon/check3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3 className="title">Free nanny on first <br /> trial day </h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
