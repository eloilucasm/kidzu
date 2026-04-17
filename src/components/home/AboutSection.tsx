import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section fix section-padding pt-0">
      <div className="about-vec">
        <img src="/img/home-1/about-vec.png" alt="img" />
      </div>
      <div className="about-vec2">
        <img src="/img/home-1/about-vec2.png" alt="img" />
      </div>
      <div className="about-vec3">
        <img src="/img/home-1/about-3.png" alt="img" />
      </div>
      <div className="about-wrapper">
        <div className="about-line">
          <img src="/img/home-2/about-line.png" alt="img" />
        </div>
        <div className="bg-shape"></div>
        <div className="row align-items-center">
          <div className="col-xl-6 order-2 order-xl-1">
            <div className="about-image">
              <img src="/img/home-1/about-1.png" alt="img" className="wow fadeInUp" />
              <div className="about-image-2">
                <img src="/img/home-1/about-2.png" alt="img" className="wow fadeInUp" data-wow-delay=".3s" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 order-1 order-xl-2">
            <div className="about-content">
              <div className="section-title mb-0">
                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Sobre Nós</span>
                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                  Inspire o Crescimento Através do Aprendizado Diário
                </h2>
              </div>
              <p className="about-text wow fadeInUp">
                Somos uma escola pré-escolar atenciosa focada em construir bases fortes através da aprendizagem baseada em brincadeiras e atividades acadêmicas.
              </p>
              <ul className="icon-box">
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  <div className="icon">
                    <img src="/img/home-1/icon/check.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Ambiente de Aprendizado<br />Amigável para Crianças
                    </h3>
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".5s">
                  <div className="icon">
                    <img src="/img/home-1/icon/check.svg" alt="" />
                  </div>
                  <div className="content">
                    <h3>
                      Foco em educação infantil de qualidade, <br />
                      amigável e segura
                    </h3>
                  </div>
                </li>
              </ul>
              <p className="about-text-2 wow fadeInUp" data-wow-delay=".4s">
                Na Kidzu, nosso objetivo é dar a todos uma chance de aprender. Nossa equipe qualificada cria aulas divertidas e úteis para que cada aluno possa alcançar seus objetivos. Estamos aqui para ajudar você a ganhar habilidades para o trabalho e para a vida.
              </p>
              <div className="about-button wow fadeInUp" data-wow-delay=".6s">
                <a href="about.html" className="theme-btn">
                  <span className="theme-bg">
                    <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F"></path>
                    </svg>
                  </span>
                  <span className="theme-text">Saiba Mais <img src="/img/icon/arrow1.svg" alt="" /></span>
                  <span className="theme-text2">Saiba Mais <img src="/img/icon/arrow1.svg" alt="" /></span>
                </a>
                <div className="author-icon">
                  <div className="icon">
                    <img src="/img/home-1/icon/telephone.svg" alt="img" />
                  </div>
                  <div className="content">
                    <span>Ligue Agora</span>
                    <h4>
                      <a href="tel:+11123065498">+11 123 0654 98</a>
                    </h4>
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
