import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section hero-1">
      <div className="container">
        <div className="swiper hero-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="hero-content">
                    <span className="hero-sub">Um ambiente de aprendizado seguro e feliz.</span>
                    <h1 className="hero-title">Nutrindo Jovens Mentes para um Futuro Brilhante</h1>
                    <p>Somos uma escola pré-escolar atenciosa focada em construir bases fortes através da aprendizagem baseada em brincadeiras e atividades acadêmicas.</p>
                    <div className="hero-button">
                      <a href="#" className="theme-btn">
                        <span className="theme-bg">
                          <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F" />
                          </svg>
                        </span>
                        <span className="theme-text">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="hero-image">
                    <img src="/img/home-1/hero-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
