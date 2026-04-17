import React from "react";

export default function BookAdmissionSection() {
  return (
    <section className="book-admission-banner bg-cover section-padding">
      <div className="container">
        <div className="book-admission-content">
          <div className="bg-shape">
            <img src="/img/home-1/book-bg.png" alt="img" />
            <div className="bg-shape2">
              <img src="/img/home-1/book-bg2.png" alt="img" />
            </div>
          </div>
          
          <div className="content">
            <div className="section-title mb-0">
              <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Matrículas Abertas</span>
              <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">
                Garanta a Matrícula <br /> Para o Seu Filho
              </h2>
            </div>
            <div className="info-content wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <img src="/img/home-1/icon/phone.svg" alt="img" />
              </div>
              <div className="info-cont">
                <p>Ligue Agora</p>
                <h3>
                  <a href="tel:+11123065498">+11 123 0654 98</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="vec-1">
            <img src="/img/home-1/vec6.png" alt="" />
          </div>
          <div className="vec-2">
            <img src="/img/home-1/vec7.png" alt="" />
          </div>
        </div>
      </div>
    </section> 
  );
}
