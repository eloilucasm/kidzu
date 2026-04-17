import React from "react";

const programs = [
  {
    id: 1,
    title: "Play Group Program",
    age: "3-5 Years",
    duration: "2.5 Hr",
    delay: ".2s",
    img: "/img/home-2/program1.png",
    hand: "/img/home-2/hand-1.png",
    style: "",
  },
  {
    id: 2,
    title: "Nursery Program",
    age: "5-7 Years",
    duration: "2.5 Hr",
    delay: ".4s",
    img: "/img/home-2/program2.png",
    hand: "/img/home-2/hand-2.png",
    style: "active",
    nestedStyle: "style-2",
  },
  {
    id: 3,
    title: "Kindergarten Program",
    age: "7-10 Years",
    duration: "2.5 Hr",
    delay: ".6s",
    img: "/img/home-2/program3.png",
    hand: "/img/home-2/hand-3.png",
    style: "",
    thumbStyle: "style-left",
    nestedStyle: "style-3",
  },
  {
    id: 4,
    title: "Junior School",
    age: "10-15 Years",
    duration: "2.5 Hr",
    delay: ".8s",
    img: "/img/home-2/program4.png",
    hand: "/img/home-2/hand-4.png",
    style: "",
    nestedStyle: "style-4",
  },
];

export default function ProgramsSection() {
  return (
    <section className="program-section-2 section-padding">
      <div className="top-line-1">
        <img src="/img/home-2/shape/top-line-1.png" alt="img" />
      </div>
      <div className="bottom-line-1">
        <img src="/img/home-2/shape/bottom-line-2.png" alt="img" />
      </div>
      <div className="star-shape bz-gsap-animate-circle">
        <img src="/img/home-2/shape/star4.png" alt="img" />
      </div>
      <div className="star-shape2 bz-gsap-animate-circle">
        <img src="/img/home-2/shape/star5.png" alt="img" />
      </div>
      <div className="cat-shape bz-gsap-animate-circle">
        <img src="/img/home-2/shape/cat-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Our Programs</span>
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Our Program / Classes</h2>
        </div>
        <div className="row">
          {programs.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
              <div className={`program-box-items-2 ${item.style}`}>
                <div className={`thumb ${item.thumbStyle || ""}`}>
                  <img src={item.img} alt="img" />
                </div>
                <div className={`content ${item.nestedStyle || ""}`}>
                  <div className="hand-image">
                    <img src={item.hand} alt="" />
                  </div>
                  <div className="year-text">{item.age}</div>
                  <h3 className="title">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p>Fun-based learning through games, music, and activities to develop social skills and confidence.</p>
                  <div className="duration-text">duration : {item.duration}</div>
                  <div className="arrow-btn">
                    <a href="#" className="icon">
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
    </section>
  );
}
