import React from "react";

const facilities = [
  { id: 1, title: "online class", delay: ".0s" },
  { id: 2, title: "healthy foods", delay: ".2s" },
  { id: 3, title: "Pickup & drop", delay: ".4s" },
  { id: 4, title: "play ground", delay: ".6s" },
  { id: 5, title: "100% safety", delay: ".7s" },
  { id: 6, title: "best quality", delay: ".9s" },
];

export default function SchoolFacilitiesSection() {
  return (
    <section className="school-facilities-section fix section-padding pt-0">
      <div className="container">
        <div className="facilities-text wow fadeInUp">
          <div className="line"></div>
          <p>our school facilities</p>
          <div className="line"></div>
        </div>
        <div className="school-facilities-wrapper">
          {facilities.map((item) => (
            <div key={item.id} className="school-facilities-box-items wow fadeInUp" data-wow-delay={item.delay}>
              <div className="thumb">
                <img src={`/img/home-2/shape/box-${item.id}.png`} alt="img" />
                <div className="icon">
                  <img src={`/img/icon/icon${item.id}.svg`} alt="img" />
                </div>
              </div>
              <h2 className="title">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
