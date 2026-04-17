import React from "react";

const testimonials = [
  { id: 1, image: "/img/home-2/client-1.png" },
  { id: 2, image: "/img/home-2/client-2.png" },
  { id: 3, image: "/img/home-2/client-3.png" },
  { id: 4, image: "/img/home-2/client-4.png" },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section-2 fix section-padding">
      <div className="girl-shape float-bob-y">
        <img src="/img/home-2/girl-shape.png" alt="img" />
      </div>
      <div className="zirap-shape float-bob-y">
        <img src="/img/home-2/zirap.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Testimonials</span>
          <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
            Parents' Words Are The Key <br /> To Happy Kids
          </h2>
        </div>
        <div className="swiper testimonial-slider-2 wow fadeInUp" data-wow-delay=".3s">
          <div className="swiper-wrapper">
            {testimonials.map((testi) => (
              <div key={testi.id} className="swiper-slide">
                <div className="testimonial-box-items-2">
                  <div className="bg-thumb">
                    <img src="/img/home-2/testi-bg.png" alt="img" />
                  </div>
                  <div className="content">
                    <div className="client-image">
                      <img src={testi.image} alt="img" />
                    </div>
                    <h3 className="title">Parent of Nursery Student</h3>
                    <p>This school has provided a safe, caring, and joyful environment for my child.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-dot text-center mt-5">
            <div className="dot01"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
