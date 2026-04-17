import React from "react";

export default function FeaturesSection() {
  return (
    <section className="feature-section fix section-padding">
      <div className="penil-shape">
        <img src="/img/home-1/pencil1.png" alt="img" />
      </div>
      <div className="zirap-shape float-bob-y">
        <img src="/img/home-1/zirap1.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="feature-box-items">
              <div className="feature-bg"></div>
              <div className="border-circle">
                <img src="/img/home-1/icon/border-circle.png" alt="" />
              </div>
              <div className="icon-box">
                <img src="/img/home-1/icon/icon-box.png" alt="img" />
                <div className="icon">
                  <img src="/img/home-1/icon/icon-1.svg" alt="" />
                </div>
              </div>
              <h2>Aprendizado Ativo</h2>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="feature-box-items">
              <div className="feature-bg bg-2" style={{ transform: 'scaleX(-1)' }}></div>
              <div className="border-circle" style={{ transform: 'scaleX(-1)' }}>
                <img src="/img/home-1/icon/border-circle.png" alt="" />
              </div>
              <div className="icon-box" style={{ marginLeft: 0, marginRight: 'auto', textAlign: 'left', transform: 'scaleX(-1)' }}>
                <img src="/img/home-1/icon/icon-box.png" alt="img" />
                <div className="icon" style={{ transform: 'scaleX(-1)' }}>
                  <img src="/img/home-1/icon/icon-2.svg" alt="" />
                </div>
              </div>
              <h2>Professores Especialistas</h2>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="feature-box-items">
              <div className="feature-bg bg-3"></div>
              <div className="border-circle">
                <img src="/img/home-1/icon/border-circle.png" alt="" />
              </div>
              <div className="icon-box">
                <img src="/img/home-1/icon/icon-box.png" alt="img" />
                <div className="icon">
                  <img src="/img/home-1/icon/icon-3.svg" alt="" />
                </div>
              </div>
              <h2>Campus 100% Seguro</h2>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="feature-box-items">
              <div className="feature-bg bg-4" style={{ transform: 'scaleX(-1)' }}></div>
              <div className="border-circle" style={{ transform: 'scaleX(-1)' }}>
                <img src="/img/home-1/icon/border-circle.png" alt="" />
              </div>
              <div className="icon-box" style={{ marginLeft: 0, marginRight: 'auto', textAlign: 'left', transform: 'scaleX(-1)' }}>
                <img src="/img/home-1/icon/icon-box.png" alt="img" />
                <div className="icon" style={{ transform: 'scaleX(-1)' }}>
                  <img src="/img/home-1/icon/icon-4.svg" alt="" />
                </div>
              </div>
              <h2>Currículo Moderno</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
