import React from "react";

export default function NewsletterSection() {
  return (
    <section className="newsletter-section section-padding pt-0">
      <div className="line-shape">
        <img src="/img/home-2/line-shape.png" alt="img" />
      </div>
      <div className="line-shape2">
        <img src="/img/home-2/line-shape2.png" alt="img" />
      </div>
      <div className="container">
        <div className="newsletter-wrapper style-2">
          <div className="plane-1">
            <img src="/img/home-2/shape/plane.png" alt="img" />
          </div>
          <div className="flower-shape">
            <img src="/img/home-2/shape/flower.png" alt="img" />
          </div>
          <div className="newsletter-bg"></div>
          <div className="vec-1">
            <img src="/img/home-1/vec2.png" alt="img" />
          </div>
          <div className="vec-2">
            <img src="/img/home-1/vec3.png" alt="img" />
          </div>
          <div className="content">
            <div className="section-title mb-0">
              <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Newsletter</span>
              <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Sign Up To Our Newsletter</h2>
            </div>
            <form action="#" className="newsletter-items wow fadeInUp" data-wow-delay=".3s" onSubmit={(e) => e.preventDefault()}>
              <div className="icon">
                <i className="fa-light fa-envelope"></i>
              </div>
              <div className="form-clt">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <button className="subscribe-btn" type="submit">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
