import React from "react";

const brands = [1, 2, 3, 4, 5, 6, 7];

export default function BrandSection() {
  return (
    <div className="brand-section style-2 fix section-padding pt-0">
      <div className="container">
        <p className="text-center wow fadeInUp" data-wow-delay=".3s">Our other’s brand</p>
        <div className="swiper brand-slider wow fadeInUp" data-wow-delay=".3s">
          <div className="swiper-wrapper">
            {brands.map((num) => (
              <div key={num} className="swiper-slide">
                <div className="brand-box-1">
                  <span className="brand-img-1">
                    <img src={`/img/home-1/brand-${num}.png`} alt="img" />
                  </span>
                  <span className="brand-img-1">
                    <img src={`/img/home-1/brand-hover-${num}.png`} alt="img" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
