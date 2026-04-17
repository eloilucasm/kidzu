import React from "react";

export default function MarqueeSection() {
  return (
    <div className="marquee-section2">
      <div className="bg-shape">
        <img src="/img/home-2/shape/marque-bg.png" alt="" />
      </div>
      <div className="marquee">
        <div className="marquee-group">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text2">
              <img src="/img/home-2/shape/marque-star.svg" alt="img" />
              Safe • Fun • Learning • Caring Environment for Every Child
            </div>
          ))}
        </div>
        <div className="marquee-group">
           {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text2">
              <img src="/img/home-2/shape/marque-star.svg" alt="img" />
              Safe • Fun • Learning • Caring Environment for Every Child
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
