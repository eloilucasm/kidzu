import React from "react";

export default function SpecialOfferSection() {
  return (
    <section className="special-offer-section">
      <div className="tree-shape bz-gsap-animate-circle">
        <img src="/img/home-2/tree.png" alt="img" />
      </div>
      <div className="doll-shape bz-gsap-animate-circle">
        <img src="/img/home-2/doll.png" alt="img" />
      </div>
      <div className="container">
        <div className="special-offer-wrapper">
          <div className="border-shape">
            <img src="/img/home-2/border-shape.png" alt="img" />
          </div>
          <div className="special-offer-image">
            <div className="thumb fix">
              <img src="/img/home-2/special-image.jpg" alt="img" />
            </div>
            <div className="content text-center">
              <div className="section-title mb-0 text-center">
                <span className="text-white sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Special Offer</span>
                <h2 className="text-white tx-title sec_title tz-itm-title tz-itm-anim">
                  Learn To Play, Converse <br /> With Confidence
                </h2>
              </div>
              <a href="#" className="theme-btn hover-header wow fadeInUp" data-wow-delay=".3s">
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
    </section>
  );
}
