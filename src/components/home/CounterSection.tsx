import React from "react";

export default function CounterSection() {
  return (
    <section className="counter-section fix section-padding pt-0">
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="counter-box-items">
              <svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M330 200.106C330 297.696 240.218 330 154.752 330C69.2846 330 0 297.696 0 200.106C0 102.516 69.2846 0 154.752 0C240.218 0 330 102.516 330 200.106Z" fill="#FEF4DE"/>
              </svg>
              <div className="counter-box">
                <h2>
                  <span className="count">100</span>%
                </h2>
                <p>Salas de Aula Inteligentes</p>
                <div className="bg-shape"></div>
              </div>
              <div className="bg-image">
                <img src="/img/home-1/counter-bg.png" alt="" />
              </div>
            </div>
          </div>
           <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div className="counter-box-items active">
              <svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M330 200.106C330 297.696 240.218 330 154.752 330C69.2846 330 0 297.696 0 200.106C0 102.516 69.2846 0 154.752 0C240.218 0 330 102.516 330 200.106Z" fill="#C0EEFF"/>
              </svg>
              <div className="counter-box">
                <h2>
                  <span className="count">95</span>%
                </h2>
                <p>Parquinho Seguro</p>
                <div className="bg-shape bg-2"></div>
              </div>
              <div className="bg-image">
                <img src="/img/home-1/counter-bg.png" alt="" />
              </div>
            </div>
          </div>
           <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="counter-box-items">
              <svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M330 200.106C330 297.696 240.218 330 154.752 330C69.2846 330 0 297.696 0 200.106C0 102.516 69.2846 0 154.752 0C240.218 0 330 102.516 330 200.106Z" fill="#E6E8FC"/>
              </svg>
              <div className="counter-box">
                <h2>
                  <span className="count">100</span>%
                </h2>
                <p>Segurança Infantil</p>
                <div className="bg-shape bg-3"></div>
              </div>
              <div className="bg-image">
                <img src="/img/home-1/counter-bg.png" alt="" />
              </div>
            </div>
          </div>
           <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div className="counter-box-items">
              <svg width="330" height="330" viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M330 200.106C330 297.696 240.218 330 154.752 330C69.2846 330 0 297.696 0 200.106C0 102.516 69.2846 0 154.752 0C240.218 0 330 102.516 330 200.106Z" fill="#FEDFEF"/>
              </svg>
              <div className="counter-box">
                <h2>
                  <span className="count">99</span>%
                </h2>
                <p>Ambiente Limpo</p>
                <div className="bg-shape bg-4"></div>
              </div>
              <div className="bg-image">
                <img src="/img/home-1/counter-bg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
