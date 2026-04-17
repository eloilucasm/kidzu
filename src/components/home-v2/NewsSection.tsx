import React from "react";

const newsItems = [
  {
    id: 1,
    date: "22 Dec, 2026",
    title: "How a Positive School Environmen Shapes Young Minds",
    img: "/img/home-2/news-01.jpg",
  },
  {
    id: 2,
    date: "22 Dec, 2026",
    title: "Fun Learning Activities That Boost Kids’ Creativity",
    img: "/img/home-2/news-02.jpg",
  },
  {
    id: 3,
    date: "22 Dec, 2026",
    title: "Why Early Childhood Education Matters for Your Child",
    img: "/img/home-2/news-03.jpg",
  },
  {
    id: 4,
    date: "22 Dec, 2026",
    title: "How a Positive School Environmen Shapes Young Minds",
    img: "/img/home-2/news-04.jpg",
  },
  {
    id: 5,
    date: "22 Dec, 2026",
    title: "How a Positive School Environmen Shapes Young Minds",
    img: "/img/home-2/news-05.jpg",
  },
];

export default function NewsSection() {
  return (
    <section className="news-section-2 fix section-padding">
      <div className="news-bg">
        <img src="/img/home-2/news-bg.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Latest News</span>
            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Latest News And Blog</h2>
          </div>
          <div className="swiper-dot text-center">
            <div className="dot0"></div>
          </div>
        </div>
      </div>
      <div className="swiper news-slider wow fadeInUp" data-wow-delay=".3s">
        <div className="swiper-wrapper">
          {newsItems.map((item) => (
            <div key={item.id} className="swiper-slide">
              <div className="news-box-items-2">
                <div className="thumb">
                  <img src={item.img} alt="img" />
                  <img src={item.img} alt="img" />
                </div>
                <div className="content">
                  <ul>
                    <li><i className="fa-regular fa-calendar"></i> {item.date}</li>
                    <li><i className="fa-regular fa-comment"></i> 25 Comments</li>
                  </ul>
                  <h3><a href="#">{item.title}</a></h3>
                  <p className="text">Qualified teachers who understand children’s needs and focus on personal attention.</p>
                  <div className="arrow-btn">
                    <a href="#" className="icon">
                      <span className="bg"></span>
                      <div className="arrow-icon">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.9" d="M10.4774 0.235515..." fill="white" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
