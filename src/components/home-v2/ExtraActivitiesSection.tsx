import React from "react";

const activities = [
  { id: 1, title: "art & craft", img: "/img/home-2/extra-activities-1.jpg", icon: "/img/home-2/icon/icon4.svg" },
  { id: 2, title: "Music & dance", img: "/img/home-2/extra-activities-2.jpg", icon: "/img/home-2/icon/icon5.svg" },
  { id: 3, title: "Music & dance", img: "/img/home-2/extra-activities-3.jpg", icon: "/img/home-2/icon/icon5.svg" },
];

export default function ExtraActivitiesSection() {
  return (
    <section className="extra-activities-section-2 section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Our Extra Activities</span>
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Our Extra Activities For kids</h2>
        </div>
      </div>
      <div className="extra-activities-wrapper-2 wow fadeInUp" data-wow-delay=".3s">
        <div className="swiper extra-activities-slider">
          <div className="swiper-wrapper">
            {activities.map((item, idx) => (
              <div key={idx} className="swiper-slide">
                <div className="extra-activities-box-2">
                  <div className="thumb">
                    <img src={item.img} alt="img" />
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="content">
                    <div className="icon">
                      <img src={item.icon} alt="img" />
                    </div>
                    <h3 className="title">
                      <a href="#">{item.title}</a>
                    </h3>
                    <p>Fun-based learning through games, music, and activities to develop social skills and confidence.</p>
                    <div className="arrow-btn">
                      <a href="#" className="icons">
                        <span className="bg"></span>
                        <div className="arrow-icon">
                          <img src="/img/home-2/icon/arrow.svg" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-dot text-center mt-5">
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
}
