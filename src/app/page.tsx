"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * Kidzu Home Page Component
 */
export default function HomePage() {
  useEffect(() => {
    // Definir Swiper e WOW globalmente para que o main.js legado os encontre
    if (typeof window !== "undefined") {
      (window as any).Swiper = Swiper;
      
      // Forçar a ocultação do preloader após a montagem do componente,
      // já que o evento window.load pode não disparar novamente em SPAs
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        setTimeout(() => {
          (preloader as HTMLElement).style.display = "none";
        }, 1000); // 1 segundo de segurança
      }
    }
  }, []);

  return (
    <main>
        <div className="page-wrapper">
          {/* Preloader removido para desobstrução */}

        {/* Back To Top */}
        <button id="back-top" className="back-to-top">
          <i className="fa-regular fa-arrow-up"></i>
        </button>

        {/* MouseCursor */}
        <div className="mouseCursor cursor-outer"></div>
        <div className="mouseCursor cursor-inner"></div>

        {/* Header Section */}
        <header id="header-sticky" className="header-1">
          <div className="top-bar">
            <img src="/img/header/top-bar.png" alt="img" />
          </div>
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <a href="/" className="logo">
                  <img src="/img/logo/black-logo.svg" alt="img" />
                </a>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="#">Home <i className="fa-solid fa-chevron-down"></i></a>
                        </li>
                        <li><a href="#">Sobre Nós <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Programs <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Pages <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Blog <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <a href="#" className="main-header__search search-toggler">
                    <i className="fa-regular fa-magnifying-glass"></i>
                  </a>
                  <a href="#" className="theme-btn">
                    <span className="theme-bg">
                      <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F" />
                      </svg>
                    </span>
                    <span className="theme-text">Entrar em Contato <img src="/img/icon/arrow1.svg" alt="" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          <div>
            {/* Hero Section */}
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

{/*  Feature Section Start  */}
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
                                        <div className="feature-bg bg-2"></div>
                                        <div className="border-circle">
                                            <img src="/img/home-1/icon/border-circle.png" alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <img src="/img/home-1/icon/icon-box.png" alt="img" />
                                            <div className="icon">
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
                                        <div className="feature-bg bg-4"></div>
                                        <div className="border-circle">
                                            <img src="/img/home-1/icon/border-circle.png" alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <img src="/img/home-1/icon/icon-box.png" alt="img" />
                                            <div className="icon">
                                                <img src="/img/home-1/icon/icon-4.svg" alt="" />
                                            </div>
                                        </div>
                                        <h2>Currículo Moderno</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  About Section Start  */}
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
                                                        Child-Friendly Learning <br />
                                                        Ambiente
                                                    </h3>
                                                </div>
                                            </li>
                                            <li className="wow fadeInUp" data-wow-delay=".5s">
                                                <div className="icon">
                                                    <img src="/img/home-1/icon/check.svg" alt="" />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        Focus on child-friendly, <br />
                                                        safe, & quality education
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

                    {/*  Program Section Start  */}
                    <section className="program-section">
                        <div className="top-line">
                            <img src="/img/home-1/top-line-1.png" alt="img" />
                        </div>
                        <div className="bottom-line">
                            <img src="/img/home-1/bottom-line-1.png" alt="img" />
                        </div>
                        <div className="cat-shape">
                            <img src="/img/home-1/cat1.png" alt="img" />
                        </div>
                        <div className="star-shape">
                            <img src="/img/home-1/star1-1.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Nossos Programas</span>
                            </div>
                        </div>
                        <div className="marquee-section mt-3 mt-md-0">
                            <div className="marquee wow fadeInUp" data-wow-delay=".3s">
                                <div className="marquee-group">
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                </div>
                                <div className="marquee-group">
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                    <div className="text">
                                        <span>
                                            <img src="/img/home-1/star.svg" alt="img" />
                                        </span> 
                                        Nossos Programas / Aulas
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container">
                             <div className="program-wrapper">
                                <div className="border-shape">
                                    <img src="/img/home-1/border-shape.png" alt="" />
                                </div>
                                <div className="program-bg"></div>
                                <div className="program-wrap-items swiper program-slider">
                                    <div className="swiper-wrapper wow fadeInUp" data-wow-delay=".3s">
                                        <div className="swiper-slide">
                                            <div className="program-main-box-items">
                                                <div className="program-box-items">
                                                    <div className="item-bg"></div>
                                                    <div className="thumb">
                                                        <img src="/img/home-1/program-01.jpg" alt="img" />
                                                        <img src="/img/home-1/program-01.jpg" alt="img" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="post-box">
                                                            3-5 Years
                                                        </span>
                                                        <h2>
                                                            <a href="program-details.html">Programa Berçário</a>
                                                        </h2>
                                                        <p>
                                                            Aprendizado baseado em diversão através de jogos, música e atividades para desenvolver habilidades e confiança.
                                                        </p>
                                                        <span className="duration-text">Duração: 2.5 Hr</span>
                                                    </div>
                                                </div>
                                                <div className="arrow-btn">
                                                    <a href="program-details.html" className="icon">
                                                        <span className="bg"></span>
                                                        <div className="arrow-icon">
                                                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="#385469"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="program-main-box-items">
                                                <div className="program-box-items">
                                                    <div className="item-bg bg-2"></div>
                                                    <div className="thumb">
                                                        <img src="/img/home-1/program-02.jpg" alt="img" />
                                                        <img src="/img/home-1/program-02.jpg" alt="img" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="post-box">
                                                            7-10 Years
                                                        </span>
                                                        <h2>
                                                            <a href="program-details.html">Programa Maternal</a>
                                                        </h2>
                                                        <p>
                                                            Aprendizado baseado em diversão através de jogos, música e atividades para desenvolver habilidades e confiança.
                                                        </p>
                                                        <span className="duration-text color-2">Duração: 2.5 Hr</span>
                                                    </div>
                                                </div>
                                                <div className="arrow-btn">
                                                    <a href="program-details.html" className="icon">
                                                        <span className="bg bg-2"></span>
                                                        <div className="arrow-icon">
                                                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="#385469"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="program-main-box-items">
                                                <div className="program-box-items">
                                                    <div className="item-bg bg-3"></div>
                                                    <div className="thumb">
                                                        <img src="/img/home-1/program-03.jpg" alt="img" />
                                                        <img src="/img/home-1/program-03.jpg" alt="img" />
                                                    </div>
                                                    <div className="content">
                                                        <span className="post-box">
                                                            10-2 Years
                                                        </span>
                                                        <h2>
                                                            <a href="program-details.html">Programa Jardim de Infância</a>
                                                        </h2>
                                                        <p>
                                                            Aprendizado baseado em diversão através de jogos, música e atividades para desenvolver habilidades e confiança.
                                                        </p>
                                                        <span className="duration-text color-3">Duração: 2.5 Hr</span>
                                                    </div>
                                                </div>
                                                <div className="arrow-btn">
                                                    <a href="program-details.html" className="icon">
                                                        <span className="bg bg-3"></span>
                                                        <div className="arrow-icon">
                                                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="#385469"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-dot">
                                    <div className="dot2"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Choose Us Section Start  */}
                    <section className="choose-us-section fix section-padding">
                        <div className="shape1">
                            <img src="/img/home-1/choose-us-shape1.png" alt="img" />
                        </div>
                        <div className="shape2 float-bob-y">
                            <img src="/img/home-1/choose-us-shape2.png" alt="img" />
                        </div>
                        <div className="shape3 float-bob-y">
                            <img src="/img/home-1/choose-us-shape3.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="choose-us-wrapper">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-6">
                                        <div className="choose-us-content">
                                            <div className="section-title mb-0">
                                                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Por que nos escolher?</span>
                                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                                    Por que Escolher Nossa Escola
                                                </h2>
                                            </div>
                                            <ul className="nav wow fadeInUp" data-wow-delay=".3s">
                                                <li className="nav-item">
                                                    <a href="#Facilities" data-bs-toggle="tab" className="nav-link active">
                                                    Nossas Instalações
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#Curriculum" data-bs-toggle="tab" className="nav-link">
                                                       Currículo e Aprendizado
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#Mission" data-bs-toggle="tab" className="nav-link">
                                                    Missão e Visão
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div id="Facilities" className="tab-pane fade show active">
                                                    <div className="choose-items wow fadeInUp" data-wow-delay=".3s">
                                                        <p>
                                                            Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                                        </p>
                                                        <div className="about-list-items">
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Professores experientes e atenciosos
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Métodos modernos de aprendizado
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Ambiente seguro e amigável
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Foco em valores morais e sociais
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="choose-us-button wow fadeInUp" data-wow-delay=".5s">
                                                        <a href="program-details.html" className="theme-btn">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="theme-text">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                        <a href="program.html" className="theme-btn hover-header">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#385469"></path>
                                                                </svg>

                                                            </span>
                                                            <span className="theme-text">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="Curriculum" className="tab-pane fade">
                                                    <div className="choose-items">
                                                        <p>
                                                            Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                                        </p>
                                                        <div className="about-list-items">
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Professores experientes e atenciosos
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Métodos modernos de aprendizado
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Ambiente seguro e amigável
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Foco em valores morais e sociais
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="choose-us-button">
                                                        <a href="program-details.html" className="theme-btn">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="theme-text">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                        <a href="program.html" className="theme-btn hover-header">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#385469"></path>
                                                                </svg>

                                                            </span>
                                                            <span className="theme-text">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="Mission" className="tab-pane fade">
                                                    <div className="choose-items">
                                                        <p>
                                                            Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                                        </p>
                                                        <div className="about-list-items">
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Professores experientes e atenciosos
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                    Métodos modernos de aprendizado
                                                                </li>
                                                            </ul>
                                                            <ul>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Ambiente seguro e amigável
                                                                </li>
                                                                <li>
                                                                    <div className="icon">
                                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M19.8836 2.14995C19.8708 2.0905 19.8439 2.03311 19.782 1.98439C19.2172 1.53727 17.882 -0.265658 17.0051 0.0332479C15.7819 0.450643 9.05689 9.29809 7.56608 11.248C7.04547 10.504 2.70927 4.55606 2.4917 4.68941C1.7465 5.14479 0.977351 5.53411 0.265592 6.04811C0.185911 6.10591 0.145039 6.18063 0.133066 6.25701C0.0356327 6.33298 -0.0267081 6.4589 0.0112744 6.61289C0.622297 9.09414 2.69978 11.0482 4.18357 13.0026C5.0452 14.1376 6.2466 16.9945 7.86622 15.6457C7.89388 15.6226 7.9104 15.5962 7.92856 15.5693C8.24646 15.4397 8.51853 15.1874 8.8034 14.8803C10.0378 13.5509 11.1245 12.0902 12.2697 10.6816C13.4938 9.17547 14.8517 7.76558 16.1964 6.37509C17.3705 5.16089 18.4134 3.55324 19.7973 2.60367C19.9698 2.48436 19.9703 2.28743 19.8836 2.14995ZM3.89911 6.52826C3.51103 6.18518 3.10891 5.85159 2.68904 5.53039C3.14153 5.81072 3.54076 6.14802 3.89911 6.52826ZM2.03838 6.81313C1.9554 6.73468 1.86251 6.71858 1.77787 6.73799C1.72462 6.58936 1.68044 6.43991 1.65649 6.29169C1.64081 6.19591 1.59374 6.12531 1.53264 6.07783C1.55741 6.05926 1.58053 6.04068 1.60613 6.02251C1.61067 6.09146 1.63544 6.1604 1.68787 6.22316C2.62546 7.3325 3.68195 8.32252 4.63523 9.41699C4.74464 9.54291 4.85157 9.67007 4.95891 9.7964C3.94618 8.83693 3.05318 7.76723 2.03838 6.81313ZM5.83746 14.2197C5.932 14.3287 6.02613 14.4381 6.12274 14.545C6.23463 14.6978 6.34775 14.8506 6.46458 15.0012C6.465 15.0029 6.46541 15.005 6.46582 15.0062C6.23669 14.7998 6.02613 14.5083 5.83746 14.2197ZM6.14091 11.8008C6.41876 12.046 6.70941 12.2797 7.01492 12.4672C7.00749 12.5159 7.0112 12.5633 7.02318 12.6092C7.02689 12.6294 7.03515 12.6496 7.04299 12.6694C6.75111 12.3722 6.44683 12.0861 6.14091 11.8008ZM7.49218 14.9884C7.49135 14.9856 7.49176 14.9827 7.49053 14.9806C7.48062 14.9579 7.46906 14.9377 7.45915 14.9154C7.74237 14.9121 8.11311 14.7019 8.52018 14.3745C8.16059 14.7139 7.80512 14.9529 7.49218 14.9884ZM17.1385 0.825926C16.8743 0.941112 16.6542 1.11864 16.4573 1.32713C16.6522 1.04887 16.8586 0.835009 17.1385 0.825926ZM10.601 9.38768C10.4433 9.55323 10.1609 9.80384 9.82026 10.111C10.1212 9.81003 10.4333 9.52392 10.7137 9.23823C11.6281 8.30848 12.3362 7.16818 13.0744 6.07825C13.9116 5.25667 14.779 4.47472 15.5791 3.61103C16.1055 3.04212 16.4296 2.13013 17.0452 1.6442C16.6348 2.07687 16.3107 2.70193 16.0341 3.30263C15.5953 3.76503 15.2072 4.2877 14.8001 4.79386C13.5075 6.40316 12.0208 7.89769 10.601 9.38768ZM16.0081 5.53989C15.357 6.32885 14.6263 7.04721 13.9314 7.79696C14.4558 7.13969 14.9764 6.47913 15.4545 5.78306C15.492 5.72815 15.5374 5.65094 15.5874 5.5564C15.7554 5.38837 15.9235 5.22075 16.0882 5.04983C16.5655 4.55275 17.1327 4.00655 17.4808 3.37075C17.7586 2.99712 18.0629 2.62638 18.4068 2.40344C17.9085 3.53424 16.7 4.70221 16.0081 5.53989Z" fill="#F39F5F"/>
                                                                        </svg>

                                                                    </div>
                                                                Foco em valores morais e sociais
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="choose-us-button">
                                                        <a href="program-details.html" className="theme-btn">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#F39F5F"></path>
                                                                </svg>
                                                            </span>
                                                            <span className="theme-text">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Matricular Agora <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                        <a href="program.html" className="theme-btn hover-header">
                                                            <span className="theme-bg">
                                                                <svg width="170" height="59" viewBox="0 0 170 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0 20.0865C0 11.6149 6.60344 4.61156 15.0604 4.11409L85 0L154.94 4.11409C163.397 4.61156 170 11.6149 170 20.0865V39.7352C170 48.2794 163.287 55.3159 154.752 55.7175L85 59L15.2479 55.7175C6.71321 55.3159 0 48.2794 0 39.7352V20.0865Z" fill="#385469"></path>
                                                                </svg>

                                                            </span>
                                                            <span className="theme-text">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                            <span className="theme-text2">Agendar uma Visita <img src="/img/icon/arrow1.svg" alt="" /></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="choose-us-image-items wow fadeInUp" data-wow-delay=".3s">
                                            <div className="choose-us-image">
                                                <img src="/img/home-1/choose-us.jpg" alt="img" />
                                            </div>
                                            <div className="vec-shape">
                                                <img src="/img/home-1/vac-shape.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Counter Section Start  */}
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

                    {/*  Activities Section Start  */}
                    <section className="activities-section fix section-padding bg-cover" >
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Nossas Atividades Extras</span>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                   Nossas Atividades Extras For kids
                                </h2>
                            </div>
                            <div className="activities-wrapper-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="bg-shape"></div>
                                <div className="content">
                                    <span>
                                        01
                                    </span>
                                    <h3>
                                        <a href="program-details.html">Artes e Trabalhos Manuais</a>
                                    </h3>
                                </div>
                                <div className="right-items">
                                    <div className="thumb-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/activities-image.jpg" alt="" />
                                            <img src="/img/home-1/activities-image.jpg" alt="" />
                                        </div>
                                        <a href="program-details.html" className="icon">
                                            <span className="bg"></span>
                                            <div className="arrow-icon">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <p className="text">
                                        Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                    </p>
                                </div>
                            </div>
                            <div className="activities-wrapper-items active wow fadeInUp" data-wow-delay=".5s">
                                <div className="bg-shape"></div>
                                <div className="content">
                                    <span>
                                        02
                                    </span>
                                    <h3>
                                        <a href="program-details.html">Música e Dança</a>
                                    </h3>
                                </div>
                                <div className="right-items">
                                    <div className="thumb-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/activities-image-2.jpg" alt="" />
                                            <img src="/img/home-1/activities-image-2.jpg" alt="" />
                                        </div>
                                        <a href="program-details.html" className="icon">
                                            <span className="bg"></span>
                                            <div className="arrow-icon">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <p className="text">
                                        Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                    </p>
                                </div>
                            </div>
                            <div className="activities-wrapper-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="bg-shape"></div>
                                <div className="content">
                                    <span>
                                        03
                                    </span>
                                    <h3>
                                        <a href="program-details.html">Dia Anual de Esportes</a>
                                    </h3>
                                </div>
                                <div className="right-items">
                                    <div className="thumb-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/activities-image-3.jpg" alt="" />
                                            <img src="/img/home-1/activities-image-3.jpg" alt="" />
                                        </div>
                                        <a href="program-details.html" className="icon">
                                            <span className="bg"></span>
                                            <div className="arrow-icon">
                                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <p className="text">
                                        Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Schedule Section Start  */}
                    <section className="schedule-section fix section-padding">
                        <div className="vec-5 bz-gsap-animate-circle d-none d-xl-block">
                            <img src="/img/home-1/vec5.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="section-title-area bb-bottom align-items-end">
                                <div className="section-title">
                                    <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Cronograma Diário</span>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                       Our Cronograma Diário
                                    </h2>
                                </div>
                                <ul className="nav mt-0 justify-content-center justify-content-lg-start wow fadeInUp" data-wow-delay=".3s">
                                    <li className="nav-item">
                                        <a href="#Play" data-bs-toggle="tab" className="nav-link active">
                                            Berçário
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Nursery" data-bs-toggle="tab" className="nav-link">
                                            Maternal
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Kindergarten" data-bs-toggle="tab" className="nav-link">
                                            Jardim de Infância
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div id="Play" className="tab-pane fade show active">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="schedule-box-items">
                                                <div className="bg-shape"></div>
                                                <div className="icon">
                                                    <img src="/img/home-1/pocket-watch.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        7:00 - 8:00
                                                    </h3>
                                                    <p>
                                                        Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                            <div className="schedule-box-items">
                                                <div className="bg-shape bg-2"></div>
                                                <div className="icon">
                                                    <img src="/img/home-1/pocket-watch.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                    8:00 - 8:30
                                                    </h3>
                                                    <p>
                                                        Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                            <div className="schedule-box-items">
                                                <div className="bg-shape bg-3"></div>
                                                <div className="icon">
                                                    <img src="/img/home-1/pocket-watch.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                    8:30 - 10:30
                                                    </h3>
                                                    <p>
                                                        Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                            <div className="schedule-box-items">
                                                <div className="bg-shape bg-4"></div>
                                                <div className="icon">
                                                    <img src="/img/home-1/pocket-watch.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                    10:30 - 12:00
                                                    </h3>
                                                    <p>
                                                        Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="Nursery" className="tab-pane fade">
                                     <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                7:00 - 8:00
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-2"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                               8:00 - 8:30
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-3"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                              8:30 - 10:30
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-4"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                               10:30 - 12:00
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                                <div id="Kindergarten" className="tab-pane fade">
                                     <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                                7:00 - 8:00
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-2"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                               8:00 - 8:30
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-3"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                              8:30 - 10:30
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="schedule-box-items">
                                        <div className="bg-shape bg-4"></div>
                                        <div className="icon">
                                            <img src="/img/home-1/pocket-watch.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h3>
                                               10:30 - 12:00
                                            </h3>
                                            <p>
                                                Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Book Admission Banner Section Start  */}
                    <section className="book-admission-banner  bg-cover section-padding" >
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
                                        <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Cronograma Diário</span>
                                        <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                            Garanta a Matrícula <br /> Para o Seu Filho
                                        </h2>
                                    </div>
                                    <div className="info-content wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src="/img/home-1/icon/phone.svg" alt="img" />
                                        </div>
                                        <div className="info-cont">
                                            <p>
                                                Ligue Agora
                                            </p>
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

                    {/*  Team Section Start  */}
                    <section className="team-section fix section-padding">
                        <div className="pencil-shape">
                            <img src="/img/home-1/pencil2.png" alt="img" />
                        </div>
                        <div className="vec-shape">
                            <img src="/img/home-1/vec8.png" alt="img" />
                        </div>
                        <div className="vec-shape2">
                            <img src="/img/home-1/vec9.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="section-title text-center">
                                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Nossos Professores</span>
                                <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                   Conheça Nossos Professores Especialistas
                                </h2>
                            </div>
                            <div className="swiper team-slider wow fadeInUp" data-wow-delay=".3s">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="team-single-items">
                                            <div className="bg-shape">
                                                <img src="/img/home-1/team-bg.png" alt="img" />
                                                <div className="items">
                                                    <div className="thumb">
                                                        <img src="/img/home-1/team-1.png" alt="img" />
                                                        <div className="social-icon d-flex align-items-center">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="team-details.html">Dawson Timms</a>
                                                        </h3>
                                                        <p>
                                                            Professor de Educação Física
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-single-items">
                                            <div className="bg-shape">
                                                <img src="/img/home-1/team-bg2.png" alt="img" />
                                                <div className="items">
                                                    <div className="thumb">
                                                        <img src="/img/home-1/team-2.png" alt="img" />
                                                        <div className="social-icon d-flex align-items-center">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="team-details.html">Michele Bailey</a>
                                                        </h3>
                                                        <p>
                                                            Diretora
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="team-single-items">
                                            <div className="bg-shape">
                                                <img src="/img/home-1/team-bg3.png" alt="img" />
                                                <div className="items">
                                                    <div className="thumb">
                                                        <img src="/img/home-1/team-3.png" alt="img" />
                                                        <div className="social-icon d-flex align-items-center">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="team-details.html">Brian Marsh</a>
                                                        </h3>
                                                        <p>
                                                            Professora Titular
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="team-single-items">
                                            <div className="bg-shape">
                                                <img src="/img/home-1/team-bg4.png" alt="img" />
                                                <div className="items">
                                                    <div className="thumb">
                                                        <img src="/img/home-1/team-4.png" alt="img" />
                                                        <div className="social-icon d-flex align-items-center">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                    </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="team-details.html">Brian Marsh</a>
                                                        </h3>
                                                        <p>
                                                           Professora Titular
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-dot text-center mt-5">
                                <div className="dotss"></div>
                            </div>
                        </div>
                    </section>

                    {/*  FAQ Section Start  */}
                    <section className="faq-section">
                        <div className="top-shape">
                            <img src="/img/home-1/faq-top.png" alt="img" />
                        </div>
                        <div className="bottom-shape">
                            <img src="/img/home-1/faq-bottom.png" alt="img" />
                        </div>
                        <div className="plane-shape">
                            <img src="/img/home-1/plane.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-6">
                                    <div className="faq-image wow fadeInUp" data-wow-delay=".3s">
                                        <div className="faq-shape">
                                            <img src="/img/home-1/faq-shape.png" alt="img" />
                                        </div>
                                        <img src="/img/home-1/faq-image.png" alt="img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-content-1">
                                        <div className="section-title mb-0">
                                            <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">FAQ</span>
                                            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                                Perguntas Mais Frequentes
                                            </h2>
                                        </div>
                                        <p className="faq-text wow fadeInUp" data-wow-delay=".3s">
                                            Professores qualificados que entendem as necessidades das crianças e focam na atenção pessoal, através da aprendizagem lúdica e acadêmica.
                                        </p>
                                        <ul className="accordion-box">
                                            {/* Block */}
                                            <li className="accordion block active-block wow fadeInUp">
                                                <div className="acc-btn active">
                                                    Com que idade meu filho pode se matricular?
                                                    <div className="icon">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.23648 0.105787C9.05424 0.810401 9.17318 1.66949 9.18478 2.39223C9.19887 3.26717 9.24767 4.15775 9.42971 5.01705C9.42877 5.01767 9.42784 5.01695 9.42691 5.01767C9.41707 5.02513 9.40847 5.03383 9.39862 5.0414C8.15505 5.1307 6.91117 5.15039 5.66719 5.15515C5.65838 5.15256 5.6503 5.1535 5.64077 5.15526C3.85535 5.16168 2.06982 5.13754 0.28512 5.23928C0.261498 5.24063 0.248651 5.25441 0.231867 5.26415C0.156339 5.28135 0.0928289 5.33781 0.0963515 5.43893C0.154474 7.08707 0.0382291 8.73458 0.0754233 10.3822C-0.0380241 10.4403 -0.0201005 10.6369 0.106401 10.6492C0.159965 10.7292 0.279111 10.7221 0.322314 10.6312C2.55075 10.37 4.80996 10.7056 7.04078 10.6689C7.05011 10.6876 7.08015 10.696 7.09652 10.6733C7.09787 10.6715 7.09932 10.6698 7.10067 10.6679C7.94007 10.6516 8.77544 10.5828 9.60335 10.406C9.60055 10.417 9.59154 10.4214 9.5905 10.4338C9.58905 10.4511 9.58667 10.4689 9.58501 10.4864C9.5846 10.4869 9.58408 10.4874 9.58356 10.4879C9.58004 10.4916 9.58491 10.4949 9.58366 10.4991C9.4438 11.9811 8.82237 13.776 9.29481 15.2288C9.31584 15.2937 9.39293 15.3144 9.44328 15.2681C9.45043 15.2615 9.45768 15.2548 9.46483 15.2483C9.47736 15.2368 9.48348 15.2205 9.48493 15.2037C9.50969 15.2213 9.53994 15.2305 9.576 15.2102C13.2202 13.1551 16.8216 10.4453 19.9434 7.65212C20.0426 7.56333 19.9982 7.44419 19.9115 7.38741C18.4433 5.18323 16.0637 4.06399 13.924 2.62669C12.5897 1.73062 11.06 0.606093 9.56698 0.0100574C9.52647 -0.00610542 9.4928 0.00466919 9.46359 0.0238361C9.38578 -0.0253754 9.26352 0.00145817 9.23648 0.105787ZM3.51853 10.0224C3.24864 10.0167 2.97957 10.0159 2.71175 10.0218C4.30727 8.827 5.35637 6.95777 6.75204 5.5444C7.03902 5.5359 7.32632 5.53321 7.61289 5.51922C6.05788 6.76776 4.84146 8.53266 3.51853 10.0224ZM7.83232 5.5099C7.90961 5.50575 7.9867 5.49881 8.06399 5.49425C6.57228 6.68715 5.55664 8.59492 4.35327 10.0286C4.34592 10.0374 4.34498 10.0469 4.34436 10.0563C4.11094 10.0447 3.877 10.0306 3.64451 10.0244C5.06514 8.55027 6.46847 7.03257 7.83232 5.5099ZM5.05519 7.20611C4.29857 8.1975 3.57551 9.2583 2.57489 10.0243C2.57334 10.0255 2.57365 10.0274 2.5723 10.0286C2.38643 10.0343 2.20109 10.0434 2.01657 10.0564C3.57623 8.77012 4.89347 7.18673 6.08233 5.55683C6.21609 5.55465 6.34995 5.55538 6.4836 5.55217C5.90973 5.97104 5.46961 6.66322 5.05519 7.20611ZM5.45107 5.56128C5.58793 5.56025 5.72479 5.56139 5.86166 5.55952C4.63559 7.15234 3.37866 8.70236 1.89773 10.0675C1.67425 10.0853 1.45233 10.1123 1.23124 10.1433C2.85908 8.876 4.13477 7.14581 5.45107 5.56128ZM1.15675 10.1518C0.945808 10.183 0.737252 10.2272 0.529109 10.2735C1.43441 9.29695 2.23921 8.23397 3.1701 7.27998C3.5982 6.84142 4.00692 6.36266 4.39927 5.89168C4.49262 5.77958 4.64803 5.68509 4.73371 5.5588C4.89026 5.559 5.0468 5.56305 5.20325 5.56232C3.76687 7.00636 2.73569 8.82576 1.15675 10.1518ZM4.4461 10.0609C5.79421 8.57317 6.89263 6.90866 8.30715 5.47768C8.51394 5.4641 8.72094 5.45291 8.92743 5.43561C7.37387 6.79304 6.25794 8.58933 4.83079 10.0783C4.70232 10.0707 4.57457 10.0676 4.4461 10.0609ZM0.474613 5.49384C0.660273 5.49809 0.846762 5.50026 1.03294 5.50316C0.803559 5.78051 0.637066 6.12624 0.484663 6.45808C0.486113 6.1366 0.484456 5.81522 0.474613 5.49384ZM0.481658 6.73885C0.482591 6.7373 0.484352 6.73761 0.485284 6.73595C0.710107 6.30693 0.974611 5.91675 1.22575 5.50637C1.33029 5.50803 1.43462 5.50979 1.53905 5.51166C1.49212 5.62096 1.40022 5.75275 1.37017 5.80538C1.25041 6.01549 1.11541 6.21741 0.981448 6.41882C0.818271 6.66405 0.647012 6.90369 0.47741 7.14446C0.479793 7.00926 0.480104 6.87395 0.481658 6.73885ZM0.448919 8.21418C0.452027 8.2118 0.456482 8.21584 0.458762 8.21138C0.711454 7.71429 1.04382 7.26029 1.37204 6.81117C1.65177 6.42845 2.02154 6.0446 2.2044 5.60304C2.22616 5.55051 2.14369 5.50368 2.10846 5.54719C1.49284 6.30703 0.867069 7.20279 0.453789 8.09628C0.462595 7.85353 0.466014 7.61079 0.471712 7.36804C0.752378 6.96875 1.04475 6.57775 1.32044 6.17483C1.40302 6.05423 1.664 5.74964 1.70876 5.51425C2.13198 5.52098 2.55438 5.52968 2.97781 5.53538C1.96176 6.43156 1.0491 7.73739 0.420428 8.91579C0.430892 8.68195 0.440113 8.44812 0.448919 8.21418ZM0.418977 8.95174C0.427991 8.96624 0.445189 8.97463 0.456068 8.95536C1.18876 7.66103 2.23237 6.677 3.18419 5.55724C3.18906 5.55144 3.18699 5.54512 3.18999 5.53901C3.40643 5.5416 3.62223 5.54792 3.83877 5.54978C3.73889 5.78631 3.40995 6.10624 3.30365 6.24114C2.95222 6.68684 2.58722 7.12188 2.22036 7.55505C1.63468 8.24671 1.04662 8.94397 0.417112 9.59647C0.395252 9.61905 0.429234 9.65314 0.451509 9.63097C1.22316 8.86575 1.94135 8.04064 2.65695 7.22362C3.00288 6.82878 3.3483 6.43125 3.66761 6.01424C3.75713 5.89727 3.92797 5.72208 3.98351 5.55144C4.15507 5.55279 4.32654 5.55641 4.49801 5.55704C4.29266 5.69234 4.07468 6.02574 3.95636 6.16488C3.58711 6.5993 3.20502 7.03112 2.8108 7.44264C1.9543 8.33664 1.25983 9.37082 0.433275 10.2921C0.407995 10.298 0.382198 10.3007 0.357022 10.3069C0.377535 9.85527 0.398878 9.40356 0.418977 8.95174ZM19.6698 7.41984C16.5312 10.2096 12.9463 12.6837 9.48327 15.0508C9.4641 15.064 9.45685 15.0817 9.45074 15.0992C9.43344 15.0582 9.41613 15.0172 9.39883 14.9761C9.39707 14.9696 9.39065 14.9694 9.38536 14.9676C9.50295 14.9146 9.53766 14.8166 9.49425 14.6763C11.2498 13.2665 13.2253 12.1588 14.9544 10.718C16.4177 9.49867 17.5263 7.87135 19.254 6.98533C19.2573 6.98367 19.2572 6.98004 19.2599 6.97807C19.3975 7.12436 19.5393 7.26609 19.6698 7.41984ZM19.1719 6.88328C17.7387 7.4876 16.6717 8.79074 15.5898 9.86087C13.7573 11.6735 11.4674 12.9315 9.47477 14.556C9.47654 14.3697 9.48368 14.1837 9.50026 13.9981C9.50192 13.9724 9.50731 13.947 9.50938 13.9212C12.9678 11.9781 15.6661 8.94044 18.6927 6.41923C18.8544 6.57174 19.0177 6.72279 19.1719 6.88328ZM18.6026 6.33231C15.449 8.69356 12.8633 11.6928 9.52202 13.8135C9.54046 13.6217 9.5675 13.4307 9.5963 13.24C11.1973 12.4564 12.4618 11.1761 13.7206 9.93764C15.14 8.54105 16.628 7.21046 18.1817 5.96472C18.3229 6.08594 18.4658 6.20581 18.6026 6.33231ZM18.0682 5.86567C15.2054 8.12342 12.8 11.3722 9.61174 13.1299C9.63888 12.9583 9.66914 12.7873 9.69929 12.6165C12.5795 10.5149 14.963 7.83126 17.7385 5.60034C17.8486 5.68861 17.9603 5.77492 18.0682 5.86567ZM17.6232 5.50741C14.8466 7.66404 12.4738 10.2784 9.72498 12.4685C9.7513 12.3224 9.77896 12.1748 9.80558 12.0267C9.81833 12.0395 9.83832 12.0433 9.85407 12.0253C12.0028 9.54995 15.5275 8.06457 17.1691 5.17349C17.3197 5.2857 17.4759 5.39137 17.6232 5.50741ZM17.0592 5.09299C15.0694 7.82918 11.9247 9.32907 9.81874 11.9531C9.86609 11.6845 9.90619 11.4136 9.92566 11.1428C12.1429 8.99981 14.5589 7.05744 16.7109 4.84952C16.8264 4.93137 16.9452 5.00918 17.0592 5.09299ZM16.5811 4.75897C14.3672 6.8408 12.0265 8.81177 9.93095 11.0143C9.93955 10.8201 9.93944 10.6262 9.91613 10.4336C9.91002 10.3831 9.88702 10.3491 9.85822 10.3246C11.0004 9.31352 12.1941 8.36233 13.3459 7.36214C14.318 6.51797 15.4361 5.56688 16.048 4.39895C16.226 4.51861 16.4056 4.6361 16.5811 4.75897ZM15.9023 4.30094C14.1937 6.64385 11.784 8.22485 9.7831 10.2875C9.76072 10.284 9.73772 10.2844 9.71534 10.2896C9.71773 10.2239 9.68105 10.1563 9.60418 10.165C9.41779 10.1861 9.23047 10.2021 9.04243 10.2142C11.3469 8.36503 13.4512 6.22187 15.4681 4.07114C15.4794 4.05912 15.4806 4.04607 15.4826 4.03333C15.622 4.12346 15.764 4.20914 15.9023 4.30094ZM15.3816 3.96899C15.378 3.97147 15.374 3.97002 15.3704 3.97334C13.1837 6.03766 11.147 8.23542 8.88464 10.2212C8.62915 10.2345 8.372 10.2385 8.11413 10.2389C10.5025 8.1889 12.4076 5.64935 14.8151 3.61228C15.004 3.73122 15.1938 3.84808 15.3816 3.96899ZM14.673 3.52276C12.1583 5.46162 10.3115 8.11109 7.96763 10.2391C7.79202 10.2381 7.61589 10.2342 7.43956 10.2288C8.61682 8.74277 10.0691 7.52738 11.3763 6.15535C12.0924 5.4037 12.6932 4.55321 13.4038 3.79597C13.5176 3.67475 13.6483 3.56483 13.7693 3.45117C13.8737 3.35337 13.9788 3.25598 14.0845 3.15932C14.2807 3.28106 14.4768 3.39968 14.673 3.52276ZM13.8716 3.02774C12.8149 3.64222 11.9793 5.1767 11.2361 6.01517C9.95757 7.45735 8.44898 8.65242 7.33119 10.2247C7.05788 10.2153 6.78374 10.201 6.50919 10.1851C9.32973 8.30804 11.3834 5.41313 13.3606 2.71227C13.531 2.81784 13.701 2.92238 13.8716 3.02774ZM12.895 2.42487C13.0006 2.4889 13.1064 2.55551 13.2122 2.62078C11.1418 5.28393 9.16562 8.20092 6.37585 10.1715C6.37357 10.1731 6.37388 10.1756 6.37201 10.1775C6.21536 10.1681 6.0585 10.1575 5.90165 10.1472C7.39615 8.67843 8.79005 7.11193 10.1842 5.54864C11.0241 4.60688 12.3456 3.57664 12.8649 2.4144C12.8662 2.41213 12.8646 2.41026 12.8655 2.40798C12.875 2.41327 12.8859 2.41917 12.895 2.42487ZM12.7599 2.34675C12.7584 2.34841 12.7564 2.3481 12.755 2.34996C11.8562 3.59042 10.6765 4.68572 9.66738 5.84019C8.41096 7.2778 7.12823 8.69148 5.85834 10.1171C5.85016 10.1263 5.85513 10.1356 5.85907 10.1442C5.5583 10.1244 5.25764 10.1046 4.95698 10.0859C6.50711 8.67397 7.61859 6.84805 9.15878 5.41655C9.25751 5.40764 9.35646 5.40173 9.45509 5.39199C9.50544 5.38702 9.54315 5.36392 9.57123 5.33366C9.65204 5.35273 9.74964 5.31346 9.73783 5.21504C9.72695 5.1248 9.7199 5.03456 9.71027 4.94432C10.5093 3.998 11.4261 3.05737 12.037 1.97896C12.3073 2.11022 12.5576 2.2333 12.7599 2.34675ZM11.9328 1.92819C11.515 2.53541 11.0721 3.11954 10.6017 3.68946C10.2981 4.05726 9.964 4.43096 9.6996 4.83761C9.67732 4.61444 9.66603 4.39097 9.65028 4.1678C10.4321 3.47915 11.097 2.6644 11.6939 1.81215C11.7743 1.85121 11.8548 1.89037 11.9328 1.92819ZM11.5804 1.75662C10.9652 2.56287 10.3632 3.36808 9.64427 4.08679C9.62769 3.84031 9.61443 3.59363 9.60283 3.34674C10.19 2.83089 10.6451 2.15912 11.0526 1.48932C11.2279 1.58143 11.4056 1.67073 11.5804 1.75662ZM10.9268 1.42208C10.4905 2.03656 10.14 2.69652 9.59661 3.22977C9.58781 3.02816 9.58304 2.82613 9.57817 2.62389C9.82631 2.38602 10.0704 2.14545 10.2923 1.88219C10.4376 1.70989 10.6021 1.51025 10.7003 1.29413C10.7755 1.33713 10.8494 1.38054 10.9268 1.42208ZM10.5476 1.20804C10.4117 1.43016 10.2891 1.65768 10.1233 1.86675C9.95188 2.08328 9.76373 2.28625 9.57392 2.48703C9.5733 2.45543 9.57154 2.42394 9.57102 2.39234C9.56791 2.20005 9.57579 1.99802 9.58532 1.79361C9.81926 1.55335 10.0465 1.28657 10.2294 1.00663C10.3313 1.0749 10.4368 1.14245 10.5476 1.20804ZM10.078 0.899915C9.91271 1.12163 9.75855 1.35215 9.59527 1.57656C9.61309 1.20275 9.62728 0.823455 9.58625 0.465502C9.71545 0.615935 9.88577 0.760256 10.078 0.899915Z" fill="#385469"/>
                                                            </svg>

                                                    </div>
                                                </div>
                                                <div className="acc-content current">
                                                    <div className="content">
                                                        <div className="text">
                                                           A escola funciona no período matutino e vespertino, focando em atenção individual e baseando a aprendizagem através de atividades lúdicas e acadêmicas.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* Block */}
                                            <li className="accordion block wow fadeInUp" data-wow-delay=".2s">
                                                <div className="acc-btn">
                                                     Qual é o horário da escola?
                                                    <div className="icon">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.23648 0.105787C9.05424 0.810401 9.17318 1.66949 9.18478 2.39223C9.19887 3.26717 9.24767 4.15775 9.42971 5.01705C9.42877 5.01767 9.42784 5.01695 9.42691 5.01767C9.41707 5.02513 9.40847 5.03383 9.39862 5.0414C8.15505 5.1307 6.91117 5.15039 5.66719 5.15515C5.65838 5.15256 5.6503 5.1535 5.64077 5.15526C3.85535 5.16168 2.06982 5.13754 0.28512 5.23928C0.261498 5.24063 0.248651 5.25441 0.231867 5.26415C0.156339 5.28135 0.0928289 5.33781 0.0963515 5.43893C0.154474 7.08707 0.0382291 8.73458 0.0754233 10.3822C-0.0380241 10.4403 -0.0201005 10.6369 0.106401 10.6492C0.159965 10.7292 0.279111 10.7221 0.322314 10.6312C2.55075 10.37 4.80996 10.7056 7.04078 10.6689C7.05011 10.6876 7.08015 10.696 7.09652 10.6733C7.09787 10.6715 7.09932 10.6698 7.10067 10.6679C7.94007 10.6516 8.77544 10.5828 9.60335 10.406C9.60055 10.417 9.59154 10.4214 9.5905 10.4338C9.58905 10.4511 9.58667 10.4689 9.58501 10.4864C9.5846 10.4869 9.58408 10.4874 9.58356 10.4879C9.58004 10.4916 9.58491 10.4949 9.58366 10.4991C9.4438 11.9811 8.82237 13.776 9.29481 15.2288C9.31584 15.2937 9.39293 15.3144 9.44328 15.2681C9.45043 15.2615 9.45768 15.2548 9.46483 15.2483C9.47736 15.2368 9.48348 15.2205 9.48493 15.2037C9.50969 15.2213 9.53994 15.2305 9.576 15.2102C13.2202 13.1551 16.8216 10.4453 19.9434 7.65212C20.0426 7.56333 19.9982 7.44419 19.9115 7.38741C18.4433 5.18323 16.0637 4.06399 13.924 2.62669C12.5897 1.73062 11.06 0.606093 9.56698 0.0100574C9.52647 -0.00610542 9.4928 0.00466919 9.46359 0.0238361C9.38578 -0.0253754 9.26352 0.00145817 9.23648 0.105787ZM3.51853 10.0224C3.24864 10.0167 2.97957 10.0159 2.71175 10.0218C4.30727 8.827 5.35637 6.95777 6.75204 5.5444C7.03902 5.5359 7.32632 5.53321 7.61289 5.51922C6.05788 6.76776 4.84146 8.53266 3.51853 10.0224ZM7.83232 5.5099C7.90961 5.50575 7.9867 5.49881 8.06399 5.49425C6.57228 6.68715 5.55664 8.59492 4.35327 10.0286C4.34592 10.0374 4.34498 10.0469 4.34436 10.0563C4.11094 10.0447 3.877 10.0306 3.64451 10.0244C5.06514 8.55027 6.46847 7.03257 7.83232 5.5099ZM5.05519 7.20611C4.29857 8.1975 3.57551 9.2583 2.57489 10.0243C2.57334 10.0255 2.57365 10.0274 2.5723 10.0286C2.38643 10.0343 2.20109 10.0434 2.01657 10.0564C3.57623 8.77012 4.89347 7.18673 6.08233 5.55683C6.21609 5.55465 6.34995 5.55538 6.4836 5.55217C5.90973 5.97104 5.46961 6.66322 5.05519 7.20611ZM5.45107 5.56128C5.58793 5.56025 5.72479 5.56139 5.86166 5.55952C4.63559 7.15234 3.37866 8.70236 1.89773 10.0675C1.67425 10.0853 1.45233 10.1123 1.23124 10.1433C2.85908 8.876 4.13477 7.14581 5.45107 5.56128ZM1.15675 10.1518C0.945808 10.183 0.737252 10.2272 0.529109 10.2735C1.43441 9.29695 2.23921 8.23397 3.1701 7.27998C3.5982 6.84142 4.00692 6.36266 4.39927 5.89168C4.49262 5.77958 4.64803 5.68509 4.73371 5.5588C4.89026 5.559 5.0468 5.56305 5.20325 5.56232C3.76687 7.00636 2.73569 8.82576 1.15675 10.1518ZM4.4461 10.0609C5.79421 8.57317 6.89263 6.90866 8.30715 5.47768C8.51394 5.4641 8.72094 5.45291 8.92743 5.43561C7.37387 6.79304 6.25794 8.58933 4.83079 10.0783C4.70232 10.0707 4.57457 10.0676 4.4461 10.0609ZM0.474613 5.49384C0.660273 5.49809 0.846762 5.50026 1.03294 5.50316C0.803559 5.78051 0.637066 6.12624 0.484663 6.45808C0.486113 6.1366 0.484456 5.81522 0.474613 5.49384ZM0.481658 6.73885C0.482591 6.7373 0.484352 6.73761 0.485284 6.73595C0.710107 6.30693 0.974611 5.91675 1.22575 5.50637C1.33029 5.50803 1.43462 5.50979 1.53905 5.51166C1.49212 5.62096 1.40022 5.75275 1.37017 5.80538C1.25041 6.01549 1.11541 6.21741 0.981448 6.41882C0.818271 6.66405 0.647012 6.90369 0.47741 7.14446C0.479793 7.00926 0.480104 6.87395 0.481658 6.73885ZM0.448919 8.21418C0.452027 8.2118 0.456482 8.21584 0.458762 8.21138C0.711454 7.71429 1.04382 7.26029 1.37204 6.81117C1.65177 6.42845 2.02154 6.0446 2.2044 5.60304C2.22616 5.55051 2.14369 5.50368 2.10846 5.54719C1.49284 6.30703 0.867069 7.20279 0.453789 8.09628C0.462595 7.85353 0.466014 7.61079 0.471712 7.36804C0.752378 6.96875 1.04475 6.57775 1.32044 6.17483C1.40302 6.05423 1.664 5.74964 1.70876 5.51425C2.13198 5.52098 2.55438 5.52968 2.97781 5.53538C1.96176 6.43156 1.0491 7.73739 0.420428 8.91579C0.430892 8.68195 0.440113 8.44812 0.448919 8.21418ZM0.418977 8.95174C0.427991 8.96624 0.445189 8.97463 0.456068 8.95536C1.18876 7.66103 2.23237 6.677 3.18419 5.55724C3.18906 5.55144 3.18699 5.54512 3.18999 5.53901C3.40643 5.5416 3.62223 5.54792 3.83877 5.54978C3.73889 5.78631 3.40995 6.10624 3.30365 6.24114C2.95222 6.68684 2.58722 7.12188 2.22036 7.55505C1.63468 8.24671 1.04662 8.94397 0.417112 9.59647C0.395252 9.61905 0.429234 9.65314 0.451509 9.63097C1.22316 8.86575 1.94135 8.04064 2.65695 7.22362C3.00288 6.82878 3.3483 6.43125 3.66761 6.01424C3.75713 5.89727 3.92797 5.72208 3.98351 5.55144C4.15507 5.55279 4.32654 5.55641 4.49801 5.55704C4.29266 5.69234 4.07468 6.02574 3.95636 6.16488C3.58711 6.5993 3.20502 7.03112 2.8108 7.44264C1.9543 8.33664 1.25983 9.37082 0.433275 10.2921C0.407995 10.298 0.382198 10.3007 0.357022 10.3069C0.377535 9.85527 0.398878 9.40356 0.418977 8.95174ZM19.6698 7.41984C16.5312 10.2096 12.9463 12.6837 9.48327 15.0508C9.4641 15.064 9.45685 15.0817 9.45074 15.0992C9.43344 15.0582 9.41613 15.0172 9.39883 14.9761C9.39707 14.9696 9.39065 14.9694 9.38536 14.9676C9.50295 14.9146 9.53766 14.8166 9.49425 14.6763C11.2498 13.2665 13.2253 12.1588 14.9544 10.718C16.4177 9.49867 17.5263 7.87135 19.254 6.98533C19.2573 6.98367 19.2572 6.98004 19.2599 6.97807C19.3975 7.12436 19.5393 7.26609 19.6698 7.41984ZM19.1719 6.88328C17.7387 7.4876 16.6717 8.79074 15.5898 9.86087C13.7573 11.6735 11.4674 12.9315 9.47477 14.556C9.47654 14.3697 9.48368 14.1837 9.50026 13.9981C9.50192 13.9724 9.50731 13.947 9.50938 13.9212C12.9678 11.9781 15.6661 8.94044 18.6927 6.41923C18.8544 6.57174 19.0177 6.72279 19.1719 6.88328ZM18.6026 6.33231C15.449 8.69356 12.8633 11.6928 9.52202 13.8135C9.54046 13.6217 9.5675 13.4307 9.5963 13.24C11.1973 12.4564 12.4618 11.1761 13.7206 9.93764C15.14 8.54105 16.628 7.21046 18.1817 5.96472C18.3229 6.08594 18.4658 6.20581 18.6026 6.33231ZM18.0682 5.86567C15.2054 8.12342 12.8 11.3722 9.61174 13.1299C9.63888 12.9583 9.66914 12.7873 9.69929 12.6165C12.5795 10.5149 14.963 7.83126 17.7385 5.60034C17.8486 5.68861 17.9603 5.77492 18.0682 5.86567ZM17.6232 5.50741C14.8466 7.66404 12.4738 10.2784 9.72498 12.4685C9.7513 12.3224 9.77896 12.1748 9.80558 12.0267C9.81833 12.0395 9.83832 12.0433 9.85407 12.0253C12.0028 9.54995 15.5275 8.06457 17.1691 5.17349C17.3197 5.2857 17.4759 5.39137 17.6232 5.50741ZM17.0592 5.09299C15.0694 7.82918 11.9247 9.32907 9.81874 11.9531C9.86609 11.6845 9.90619 11.4136 9.92566 11.1428C12.1429 8.99981 14.5589 7.05744 16.7109 4.84952C16.8264 4.93137 16.9452 5.00918 17.0592 5.09299ZM16.5811 4.75897C14.3672 6.8408 12.0265 8.81177 9.93095 11.0143C9.93955 10.8201 9.93944 10.6262 9.91613 10.4336C9.91002 10.3831 9.88702 10.3491 9.85822 10.3246C11.0004 9.31352 12.1941 8.36233 13.3459 7.36214C14.318 6.51797 15.4361 5.56688 16.048 4.39895C16.226 4.51861 16.4056 4.6361 16.5811 4.75897ZM15.9023 4.30094C14.1937 6.64385 11.784 8.22485 9.7831 10.2875C9.76072 10.284 9.73772 10.2844 9.71534 10.2896C9.71773 10.2239 9.68105 10.1563 9.60418 10.165C9.41779 10.1861 9.23047 10.2021 9.04243 10.2142C11.3469 8.36503 13.4512 6.22187 15.4681 4.07114C15.4794 4.05912 15.4806 4.04607 15.4826 4.03333C15.622 4.12346 15.764 4.20914 15.9023 4.30094ZM15.3816 3.96899C15.378 3.97147 15.374 3.97002 15.3704 3.97334C13.1837 6.03766 11.147 8.23542 8.88464 10.2212C8.62915 10.2345 8.372 10.2385 8.11413 10.2389C10.5025 8.1889 12.4076 5.64935 14.8151 3.61228C15.004 3.73122 15.1938 3.84808 15.3816 3.96899ZM14.673 3.52276C12.1583 5.46162 10.3115 8.11109 7.96763 10.2391C7.79202 10.2381 7.61589 10.2342 7.43956 10.2288C8.61682 8.74277 10.0691 7.52738 11.3763 6.15535C12.0924 5.4037 12.6932 4.55321 13.4038 3.79597C13.5176 3.67475 13.6483 3.56483 13.7693 3.45117C13.8737 3.35337 13.9788 3.25598 14.0845 3.15932C14.2807 3.28106 14.4768 3.39968 14.673 3.52276ZM13.8716 3.02774C12.8149 3.64222 11.9793 5.1767 11.2361 6.01517C9.95757 7.45735 8.44898 8.65242 7.33119 10.2247C7.05788 10.2153 6.78374 10.201 6.50919 10.1851C9.32973 8.30804 11.3834 5.41313 13.3606 2.71227C13.531 2.81784 13.701 2.92238 13.8716 3.02774ZM12.895 2.42487C13.0006 2.4889 13.1064 2.55551 13.2122 2.62078C11.1418 5.28393 9.16562 8.20092 6.37585 10.1715C6.37357 10.1731 6.37388 10.1756 6.37201 10.1775C6.21536 10.1681 6.0585 10.1575 5.90165 10.1472C7.39615 8.67843 8.79005 7.11193 10.1842 5.54864C11.0241 4.60688 12.3456 3.57664 12.8649 2.4144C12.8662 2.41213 12.8646 2.41026 12.8655 2.40798C12.875 2.41327 12.8859 2.41917 12.895 2.42487ZM12.7599 2.34675C12.7584 2.34841 12.7564 2.3481 12.755 2.34996C11.8562 3.59042 10.6765 4.68572 9.66738 5.84019C8.41096 7.2778 7.12823 8.69148 5.85834 10.1171C5.85016 10.1263 5.85513 10.1356 5.85907 10.1442C5.5583 10.1244 5.25764 10.1046 4.95698 10.0859C6.50711 8.67397 7.61859 6.84805 9.15878 5.41655C9.25751 5.40764 9.35646 5.40173 9.45509 5.39199C9.50544 5.38702 9.54315 5.36392 9.57123 5.33366C9.65204 5.35273 9.74964 5.31346 9.73783 5.21504C9.72695 5.1248 9.7199 5.03456 9.71027 4.94432C10.5093 3.998 11.4261 3.05737 12.037 1.97896C12.3073 2.11022 12.5576 2.2333 12.7599 2.34675ZM11.9328 1.92819C11.515 2.53541 11.0721 3.11954 10.6017 3.68946C10.2981 4.05726 9.964 4.43096 9.6996 4.83761C9.67732 4.61444 9.66603 4.39097 9.65028 4.1678C10.4321 3.47915 11.097 2.6644 11.6939 1.81215C11.7743 1.85121 11.8548 1.89037 11.9328 1.92819ZM11.5804 1.75662C10.9652 2.56287 10.3632 3.36808 9.64427 4.08679C9.62769 3.84031 9.61443 3.59363 9.60283 3.34674C10.19 2.83089 10.6451 2.15912 11.0526 1.48932C11.2279 1.58143 11.4056 1.67073 11.5804 1.75662ZM10.9268 1.42208C10.4905 2.03656 10.14 2.69652 9.59661 3.22977C9.58781 3.02816 9.58304 2.82613 9.57817 2.62389C9.82631 2.38602 10.0704 2.14545 10.2923 1.88219C10.4376 1.70989 10.6021 1.51025 10.7003 1.29413C10.7755 1.33713 10.8494 1.38054 10.9268 1.42208ZM10.5476 1.20804C10.4117 1.43016 10.2891 1.65768 10.1233 1.86675C9.95188 2.08328 9.76373 2.28625 9.57392 2.48703C9.5733 2.45543 9.57154 2.42394 9.57102 2.39234C9.56791 2.20005 9.57579 1.99802 9.58532 1.79361C9.81926 1.55335 10.0465 1.28657 10.2294 1.00663C10.3313 1.0749 10.4368 1.14245 10.5476 1.20804ZM10.078 0.899915C9.91271 1.12163 9.75855 1.35215 9.59527 1.57656C9.61309 1.20275 9.62728 0.823455 9.58625 0.465502C9.71545 0.615935 9.88577 0.760256 10.078 0.899915Z" fill="#385469"/>
                                                            </svg>

                                                    </div>
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                    <div className="text">
                                                           A escola funciona no período matutino e vespertino, focando em atenção individual e baseando a aprendizagem através de atividades lúdicas e acadêmicas.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* Block */}
                                            <li className="accordion block wow fadeInUp" data-wow-delay=".4s">
                                                <div className="acc-btn">
                                                    O serviço de transporte está disponível?
                                                    <div className="icon">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.23648 0.105787C9.05424 0.810401 9.17318 1.66949 9.18478 2.39223C9.19887 3.26717 9.24767 4.15775 9.42971 5.01705C9.42877 5.01767 9.42784 5.01695 9.42691 5.01767C9.41707 5.02513 9.40847 5.03383 9.39862 5.0414C8.15505 5.1307 6.91117 5.15039 5.66719 5.15515C5.65838 5.15256 5.6503 5.1535 5.64077 5.15526C3.85535 5.16168 2.06982 5.13754 0.28512 5.23928C0.261498 5.24063 0.248651 5.25441 0.231867 5.26415C0.156339 5.28135 0.0928289 5.33781 0.0963515 5.43893C0.154474 7.08707 0.0382291 8.73458 0.0754233 10.3822C-0.0380241 10.4403 -0.0201005 10.6369 0.106401 10.6492C0.159965 10.7292 0.279111 10.7221 0.322314 10.6312C2.55075 10.37 4.80996 10.7056 7.04078 10.6689C7.05011 10.6876 7.08015 10.696 7.09652 10.6733C7.09787 10.6715 7.09932 10.6698 7.10067 10.6679C7.94007 10.6516 8.77544 10.5828 9.60335 10.406C9.60055 10.417 9.59154 10.4214 9.5905 10.4338C9.58905 10.4511 9.58667 10.4689 9.58501 10.4864C9.5846 10.4869 9.58408 10.4874 9.58356 10.4879C9.58004 10.4916 9.58491 10.4949 9.58366 10.4991C9.4438 11.9811 8.82237 13.776 9.29481 15.2288C9.31584 15.2937 9.39293 15.3144 9.44328 15.2681C9.45043 15.2615 9.45768 15.2548 9.46483 15.2483C9.47736 15.2368 9.48348 15.2205 9.48493 15.2037C9.50969 15.2213 9.53994 15.2305 9.576 15.2102C13.2202 13.1551 16.8216 10.4453 19.9434 7.65212C20.0426 7.56333 19.9982 7.44419 19.9115 7.38741C18.4433 5.18323 16.0637 4.06399 13.924 2.62669C12.5897 1.73062 11.06 0.606093 9.56698 0.0100574C9.52647 -0.00610542 9.4928 0.00466919 9.46359 0.0238361C9.38578 -0.0253754 9.26352 0.00145817 9.23648 0.105787ZM3.51853 10.0224C3.24864 10.0167 2.97957 10.0159 2.71175 10.0218C4.30727 8.827 5.35637 6.95777 6.75204 5.5444C7.03902 5.5359 7.32632 5.53321 7.61289 5.51922C6.05788 6.76776 4.84146 8.53266 3.51853 10.0224ZM7.83232 5.5099C7.90961 5.50575 7.9867 5.49881 8.06399 5.49425C6.57228 6.68715 5.55664 8.59492 4.35327 10.0286C4.34592 10.0374 4.34498 10.0469 4.34436 10.0563C4.11094 10.0447 3.877 10.0306 3.64451 10.0244C5.06514 8.55027 6.46847 7.03257 7.83232 5.5099ZM5.05519 7.20611C4.29857 8.1975 3.57551 9.2583 2.57489 10.0243C2.57334 10.0255 2.57365 10.0274 2.5723 10.0286C2.38643 10.0343 2.20109 10.0434 2.01657 10.0564C3.57623 8.77012 4.89347 7.18673 6.08233 5.55683C6.21609 5.55465 6.34995 5.55538 6.4836 5.55217C5.90973 5.97104 5.46961 6.66322 5.05519 7.20611ZM5.45107 5.56128C5.58793 5.56025 5.72479 5.56139 5.86166 5.55952C4.63559 7.15234 3.37866 8.70236 1.89773 10.0675C1.67425 10.0853 1.45233 10.1123 1.23124 10.1433C2.85908 8.876 4.13477 7.14581 5.45107 5.56128ZM1.15675 10.1518C0.945808 10.183 0.737252 10.2272 0.529109 10.2735C1.43441 9.29695 2.23921 8.23397 3.1701 7.27998C3.5982 6.84142 4.00692 6.36266 4.39927 5.89168C4.49262 5.77958 4.64803 5.68509 4.73371 5.5588C4.89026 5.559 5.0468 5.56305 5.20325 5.56232C3.76687 7.00636 2.73569 8.82576 1.15675 10.1518ZM4.4461 10.0609C5.79421 8.57317 6.89263 6.90866 8.30715 5.47768C8.51394 5.4641 8.72094 5.45291 8.92743 5.43561C7.37387 6.79304 6.25794 8.58933 4.83079 10.0783C4.70232 10.0707 4.57457 10.0676 4.4461 10.0609ZM0.474613 5.49384C0.660273 5.49809 0.846762 5.50026 1.03294 5.50316C0.803559 5.78051 0.637066 6.12624 0.484663 6.45808C0.486113 6.1366 0.484456 5.81522 0.474613 5.49384ZM0.481658 6.73885C0.482591 6.7373 0.484352 6.73761 0.485284 6.73595C0.710107 6.30693 0.974611 5.91675 1.22575 5.50637C1.33029 5.50803 1.43462 5.50979 1.53905 5.51166C1.49212 5.62096 1.40022 5.75275 1.37017 5.80538C1.25041 6.01549 1.11541 6.21741 0.981448 6.41882C0.818271 6.66405 0.647012 6.90369 0.47741 7.14446C0.479793 7.00926 0.480104 6.87395 0.481658 6.73885ZM0.448919 8.21418C0.452027 8.2118 0.456482 8.21584 0.458762 8.21138C0.711454 7.71429 1.04382 7.26029 1.37204 6.81117C1.65177 6.42845 2.02154 6.0446 2.2044 5.60304C2.22616 5.55051 2.14369 5.50368 2.10846 5.54719C1.49284 6.30703 0.867069 7.20279 0.453789 8.09628C0.462595 7.85353 0.466014 7.61079 0.471712 7.36804C0.752378 6.96875 1.04475 6.57775 1.32044 6.17483C1.40302 6.05423 1.664 5.74964 1.70876 5.51425C2.13198 5.52098 2.55438 5.52968 2.97781 5.53538C1.96176 6.43156 1.0491 7.73739 0.420428 8.91579C0.430892 8.68195 0.440113 8.44812 0.448919 8.21418ZM0.418977 8.95174C0.427991 8.96624 0.445189 8.97463 0.456068 8.95536C1.18876 7.66103 2.23237 6.677 3.18419 5.55724C3.18906 5.55144 3.18699 5.54512 3.18999 5.53901C3.40643 5.5416 3.62223 5.54792 3.83877 5.54978C3.73889 5.78631 3.40995 6.10624 3.30365 6.24114C2.95222 6.68684 2.58722 7.12188 2.22036 7.55505C1.63468 8.24671 1.04662 8.94397 0.417112 9.59647C0.395252 9.61905 0.429234 9.65314 0.451509 9.63097C1.22316 8.86575 1.94135 8.04064 2.65695 7.22362C3.00288 6.82878 3.3483 6.43125 3.66761 6.01424C3.75713 5.89727 3.92797 5.72208 3.98351 5.55144C4.15507 5.55279 4.32654 5.55641 4.49801 5.55704C4.29266 5.69234 4.07468 6.02574 3.95636 6.16488C3.58711 6.5993 3.20502 7.03112 2.8108 7.44264C1.9543 8.33664 1.25983 9.37082 0.433275 10.2921C0.407995 10.298 0.382198 10.3007 0.357022 10.3069C0.377535 9.85527 0.398878 9.40356 0.418977 8.95174ZM19.6698 7.41984C16.5312 10.2096 12.9463 12.6837 9.48327 15.0508C9.4641 15.064 9.45685 15.0817 9.45074 15.0992C9.43344 15.0582 9.41613 15.0172 9.39883 14.9761C9.39707 14.9696 9.39065 14.9694 9.38536 14.9676C9.50295 14.9146 9.53766 14.8166 9.49425 14.6763C11.2498 13.2665 13.2253 12.1588 14.9544 10.718C16.4177 9.49867 17.5263 7.87135 19.254 6.98533C19.2573 6.98367 19.2572 6.98004 19.2599 6.97807C19.3975 7.12436 19.5393 7.26609 19.6698 7.41984ZM19.1719 6.88328C17.7387 7.4876 16.6717 8.79074 15.5898 9.86087C13.7573 11.6735 11.4674 12.9315 9.47477 14.556C9.47654 14.3697 9.48368 14.1837 9.50026 13.9981C9.50192 13.9724 9.50731 13.947 9.50938 13.9212C12.9678 11.9781 15.6661 8.94044 18.6927 6.41923C18.8544 6.57174 19.0177 6.72279 19.1719 6.88328ZM18.6026 6.33231C15.449 8.69356 12.8633 11.6928 9.52202 13.8135C9.54046 13.6217 9.5675 13.4307 9.5963 13.24C11.1973 12.4564 12.4618 11.1761 13.7206 9.93764C15.14 8.54105 16.628 7.21046 18.1817 5.96472C18.3229 6.08594 18.4658 6.20581 18.6026 6.33231ZM18.0682 5.86567C15.2054 8.12342 12.8 11.3722 9.61174 13.1299C9.63888 12.9583 9.66914 12.7873 9.69929 12.6165C12.5795 10.5149 14.963 7.83126 17.7385 5.60034C17.8486 5.68861 17.9603 5.77492 18.0682 5.86567ZM17.6232 5.50741C14.8466 7.66404 12.4738 10.2784 9.72498 12.4685C9.7513 12.3224 9.77896 12.1748 9.80558 12.0267C9.81833 12.0395 9.83832 12.0433 9.85407 12.0253C12.0028 9.54995 15.5275 8.06457 17.1691 5.17349C17.3197 5.2857 17.4759 5.39137 17.6232 5.50741ZM17.0592 5.09299C15.0694 7.82918 11.9247 9.32907 9.81874 11.9531C9.86609 11.6845 9.90619 11.4136 9.92566 11.1428C12.1429 8.99981 14.5589 7.05744 16.7109 4.84952C16.8264 4.93137 16.9452 5.00918 17.0592 5.09299ZM16.5811 4.75897C14.3672 6.8408 12.0265 8.81177 9.93095 11.0143C9.93955 10.8201 9.93944 10.6262 9.91613 10.4336C9.91002 10.3831 9.88702 10.3491 9.85822 10.3246C11.0004 9.31352 12.1941 8.36233 13.3459 7.36214C14.318 6.51797 15.4361 5.56688 16.048 4.39895C16.226 4.51861 16.4056 4.6361 16.5811 4.75897ZM15.9023 4.30094C14.1937 6.64385 11.784 8.22485 9.7831 10.2875C9.76072 10.284 9.73772 10.2844 9.71534 10.2896C9.71773 10.2239 9.68105 10.1563 9.60418 10.165C9.41779 10.1861 9.23047 10.2021 9.04243 10.2142C11.3469 8.36503 13.4512 6.22187 15.4681 4.07114C15.4794 4.05912 15.4806 4.04607 15.4826 4.03333C15.622 4.12346 15.764 4.20914 15.9023 4.30094ZM15.3816 3.96899C15.378 3.97147 15.374 3.97002 15.3704 3.97334C13.1837 6.03766 11.147 8.23542 8.88464 10.2212C8.62915 10.2345 8.372 10.2385 8.11413 10.2389C10.5025 8.1889 12.4076 5.64935 14.8151 3.61228C15.004 3.73122 15.1938 3.84808 15.3816 3.96899ZM14.673 3.52276C12.1583 5.46162 10.3115 8.11109 7.96763 10.2391C7.79202 10.2381 7.61589 10.2342 7.43956 10.2288C8.61682 8.74277 10.0691 7.52738 11.3763 6.15535C12.0924 5.4037 12.6932 4.55321 13.4038 3.79597C13.5176 3.67475 13.6483 3.56483 13.7693 3.45117C13.8737 3.35337 13.9788 3.25598 14.0845 3.15932C14.2807 3.28106 14.4768 3.39968 14.673 3.52276ZM13.8716 3.02774C12.8149 3.64222 11.9793 5.1767 11.2361 6.01517C9.95757 7.45735 8.44898 8.65242 7.33119 10.2247C7.05788 10.2153 6.78374 10.201 6.50919 10.1851C9.32973 8.30804 11.3834 5.41313 13.3606 2.71227C13.531 2.81784 13.701 2.92238 13.8716 3.02774ZM12.895 2.42487C13.0006 2.4889 13.1064 2.55551 13.2122 2.62078C11.1418 5.28393 9.16562 8.20092 6.37585 10.1715C6.37357 10.1731 6.37388 10.1756 6.37201 10.1775C6.21536 10.1681 6.0585 10.1575 5.90165 10.1472C7.39615 8.67843 8.79005 7.11193 10.1842 5.54864C11.0241 4.60688 12.3456 3.57664 12.8649 2.4144C12.8662 2.41213 12.8646 2.41026 12.8655 2.40798C12.875 2.41327 12.8859 2.41917 12.895 2.42487ZM12.7599 2.34675C12.7584 2.34841 12.7564 2.3481 12.755 2.34996C11.8562 3.59042 10.6765 4.68572 9.66738 5.84019C8.41096 7.2778 7.12823 8.69148 5.85834 10.1171C5.85016 10.1263 5.85513 10.1356 5.85907 10.1442C5.5583 10.1244 5.25764 10.1046 4.95698 10.0859C6.50711 8.67397 7.61859 6.84805 9.15878 5.41655C9.25751 5.40764 9.35646 5.40173 9.45509 5.39199C9.50544 5.38702 9.54315 5.36392 9.57123 5.33366C9.65204 5.35273 9.74964 5.31346 9.73783 5.21504C9.72695 5.1248 9.7199 5.03456 9.71027 4.94432C10.5093 3.998 11.4261 3.05737 12.037 1.97896C12.3073 2.11022 12.5576 2.2333 12.7599 2.34675ZM11.9328 1.92819C11.515 2.53541 11.0721 3.11954 10.6017 3.68946C10.2981 4.05726 9.964 4.43096 9.6996 4.83761C9.67732 4.61444 9.66603 4.39097 9.65028 4.1678C10.4321 3.47915 11.097 2.6644 11.6939 1.81215C11.7743 1.85121 11.8548 1.89037 11.9328 1.92819ZM11.5804 1.75662C10.9652 2.56287 10.3632 3.36808 9.64427 4.08679C9.62769 3.84031 9.61443 3.59363 9.60283 3.34674C10.19 2.83089 10.6451 2.15912 11.0526 1.48932C11.2279 1.58143 11.4056 1.67073 11.5804 1.75662ZM10.9268 1.42208C10.4905 2.03656 10.14 2.69652 9.59661 3.22977C9.58781 3.02816 9.58304 2.82613 9.57817 2.62389C9.82631 2.38602 10.0704 2.14545 10.2923 1.88219C10.4376 1.70989 10.6021 1.51025 10.7003 1.29413C10.7755 1.33713 10.8494 1.38054 10.9268 1.42208ZM10.5476 1.20804C10.4117 1.43016 10.2891 1.65768 10.1233 1.86675C9.95188 2.08328 9.76373 2.28625 9.57392 2.48703C9.5733 2.45543 9.57154 2.42394 9.57102 2.39234C9.56791 2.20005 9.57579 1.99802 9.58532 1.79361C9.81926 1.55335 10.0465 1.28657 10.2294 1.00663C10.3313 1.0749 10.4368 1.14245 10.5476 1.20804ZM10.078 0.899915C9.91271 1.12163 9.75855 1.35215 9.59527 1.57656C9.61309 1.20275 9.62728 0.823455 9.58625 0.465502C9.71545 0.615935 9.88577 0.760256 10.078 0.899915Z" fill="#385469"/>
                                                            </svg>

                                                    </div>
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <div className="text">
                                                            A escola funciona no período matutino e vespertino, focando em atenção individual e baseando a aprendizagem através de atividades lúdicas e acadêmicas.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block wow fadeInUp" data-wow-delay=".4s">
                                                <div className="acc-btn">
                                                Como posso solicitar a matrícula?
                                                   <div className="icon">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9.23648 0.105787C9.05424 0.810401 9.17318 1.66949 9.18478 2.39223C9.19887 3.26717 9.24767 4.15775 9.42971 5.01705C9.42877 5.01767 9.42784 5.01695 9.42691 5.01767C9.41707 5.02513 9.40847 5.03383 9.39862 5.0414C8.15505 5.1307 6.91117 5.15039 5.66719 5.15515C5.65838 5.15256 5.6503 5.1535 5.64077 5.15526C3.85535 5.16168 2.06982 5.13754 0.28512 5.23928C0.261498 5.24063 0.248651 5.25441 0.231867 5.26415C0.156339 5.28135 0.0928289 5.33781 0.0963515 5.43893C0.154474 7.08707 0.0382291 8.73458 0.0754233 10.3822C-0.0380241 10.4403 -0.0201005 10.6369 0.106401 10.6492C0.159965 10.7292 0.279111 10.7221 0.322314 10.6312C2.55075 10.37 4.80996 10.7056 7.04078 10.6689C7.05011 10.6876 7.08015 10.696 7.09652 10.6733C7.09787 10.6715 7.09932 10.6698 7.10067 10.6679C7.94007 10.6516 8.77544 10.5828 9.60335 10.406C9.60055 10.417 9.59154 10.4214 9.5905 10.4338C9.58905 10.4511 9.58667 10.4689 9.58501 10.4864C9.5846 10.4869 9.58408 10.4874 9.58356 10.4879C9.58004 10.4916 9.58491 10.4949 9.58366 10.4991C9.4438 11.9811 8.82237 13.776 9.29481 15.2288C9.31584 15.2937 9.39293 15.3144 9.44328 15.2681C9.45043 15.2615 9.45768 15.2548 9.46483 15.2483C9.47736 15.2368 9.48348 15.2205 9.48493 15.2037C9.50969 15.2213 9.53994 15.2305 9.576 15.2102C13.2202 13.1551 16.8216 10.4453 19.9434 7.65212C20.0426 7.56333 19.9982 7.44419 19.9115 7.38741C18.4433 5.18323 16.0637 4.06399 13.924 2.62669C12.5897 1.73062 11.06 0.606093 9.56698 0.0100574C9.52647 -0.00610542 9.4928 0.00466919 9.46359 0.0238361C9.38578 -0.0253754 9.26352 0.00145817 9.23648 0.105787ZM3.51853 10.0224C3.24864 10.0167 2.97957 10.0159 2.71175 10.0218C4.30727 8.827 5.35637 6.95777 6.75204 5.5444C7.03902 5.5359 7.32632 5.53321 7.61289 5.51922C6.05788 6.76776 4.84146 8.53266 3.51853 10.0224ZM7.83232 5.5099C7.90961 5.50575 7.9867 5.49881 8.06399 5.49425C6.57228 6.68715 5.55664 8.59492 4.35327 10.0286C4.34592 10.0374 4.34498 10.0469 4.34436 10.0563C4.11094 10.0447 3.877 10.0306 3.64451 10.0244C5.06514 8.55027 6.46847 7.03257 7.83232 5.5099ZM5.05519 7.20611C4.29857 8.1975 3.57551 9.2583 2.57489 10.0243C2.57334 10.0255 2.57365 10.0274 2.5723 10.0286C2.38643 10.0343 2.20109 10.0434 2.01657 10.0564C3.57623 8.77012 4.89347 7.18673 6.08233 5.55683C6.21609 5.55465 6.34995 5.55538 6.4836 5.55217C5.90973 5.97104 5.46961 6.66322 5.05519 7.20611ZM5.45107 5.56128C5.58793 5.56025 5.72479 5.56139 5.86166 5.55952C4.63559 7.15234 3.37866 8.70236 1.89773 10.0675C1.67425 10.0853 1.45233 10.1123 1.23124 10.1433C2.85908 8.876 4.13477 7.14581 5.45107 5.56128ZM1.15675 10.1518C0.945808 10.183 0.737252 10.2272 0.529109 10.2735C1.43441 9.29695 2.23921 8.23397 3.1701 7.27998C3.5982 6.84142 4.00692 6.36266 4.39927 5.89168C4.49262 5.77958 4.64803 5.68509 4.73371 5.5588C4.89026 5.559 5.0468 5.56305 5.20325 5.56232C3.76687 7.00636 2.73569 8.82576 1.15675 10.1518ZM4.4461 10.0609C5.79421 8.57317 6.89263 6.90866 8.30715 5.47768C8.51394 5.4641 8.72094 5.45291 8.92743 5.43561C7.37387 6.79304 6.25794 8.58933 4.83079 10.0783C4.70232 10.0707 4.57457 10.0676 4.4461 10.0609ZM0.474613 5.49384C0.660273 5.49809 0.846762 5.50026 1.03294 5.50316C0.803559 5.78051 0.637066 6.12624 0.484663 6.45808C0.486113 6.1366 0.484456 5.81522 0.474613 5.49384ZM0.481658 6.73885C0.482591 6.7373 0.484352 6.73761 0.485284 6.73595C0.710107 6.30693 0.974611 5.91675 1.22575 5.50637C1.33029 5.50803 1.43462 5.50979 1.53905 5.51166C1.49212 5.62096 1.40022 5.75275 1.37017 5.80538C1.25041 6.01549 1.11541 6.21741 0.981448 6.41882C0.818271 6.66405 0.647012 6.90369 0.47741 7.14446C0.479793 7.00926 0.480104 6.87395 0.481658 6.73885ZM0.448919 8.21418C0.452027 8.2118 0.456482 8.21584 0.458762 8.21138C0.711454 7.71429 1.04382 7.26029 1.37204 6.81117C1.65177 6.42845 2.02154 6.0446 2.2044 5.60304C2.22616 5.55051 2.14369 5.50368 2.10846 5.54719C1.49284 6.30703 0.867069 7.20279 0.453789 8.09628C0.462595 7.85353 0.466014 7.61079 0.471712 7.36804C0.752378 6.96875 1.04475 6.57775 1.32044 6.17483C1.40302 6.05423 1.664 5.74964 1.70876 5.51425C2.13198 5.52098 2.55438 5.52968 2.97781 5.53538C1.96176 6.43156 1.0491 7.73739 0.420428 8.91579C0.430892 8.68195 0.440113 8.44812 0.448919 8.21418ZM0.418977 8.95174C0.427991 8.96624 0.445189 8.97463 0.456068 8.95536C1.18876 7.66103 2.23237 6.677 3.18419 5.55724C3.18906 5.55144 3.18699 5.54512 3.18999 5.53901C3.40643 5.5416 3.62223 5.54792 3.83877 5.54978C3.73889 5.78631 3.40995 6.10624 3.30365 6.24114C2.95222 6.68684 2.58722 7.12188 2.22036 7.55505C1.63468 8.24671 1.04662 8.94397 0.417112 9.59647C0.395252 9.61905 0.429234 9.65314 0.451509 9.63097C1.22316 8.86575 1.94135 8.04064 2.65695 7.22362C3.00288 6.82878 3.3483 6.43125 3.66761 6.01424C3.75713 5.89727 3.92797 5.72208 3.98351 5.55144C4.15507 5.55279 4.32654 5.55641 4.49801 5.55704C4.29266 5.69234 4.07468 6.02574 3.95636 6.16488C3.58711 6.5993 3.20502 7.03112 2.8108 7.44264C1.9543 8.33664 1.25983 9.37082 0.433275 10.2921C0.407995 10.298 0.382198 10.3007 0.357022 10.3069C0.377535 9.85527 0.398878 9.40356 0.418977 8.95174ZM19.6698 7.41984C16.5312 10.2096 12.9463 12.6837 9.48327 15.0508C9.4641 15.064 9.45685 15.0817 9.45074 15.0992C9.43344 15.0582 9.41613 15.0172 9.39883 14.9761C9.39707 14.9696 9.39065 14.9694 9.38536 14.9676C9.50295 14.9146 9.53766 14.8166 9.49425 14.6763C11.2498 13.2665 13.2253 12.1588 14.9544 10.718C16.4177 9.49867 17.5263 7.87135 19.254 6.98533C19.2573 6.98367 19.2572 6.98004 19.2599 6.97807C19.3975 7.12436 19.5393 7.26609 19.6698 7.41984ZM19.1719 6.88328C17.7387 7.4876 16.6717 8.79074 15.5898 9.86087C13.7573 11.6735 11.4674 12.9315 9.47477 14.556C9.47654 14.3697 9.48368 14.1837 9.50026 13.9981C9.50192 13.9724 9.50731 13.947 9.50938 13.9212C12.9678 11.9781 15.6661 8.94044 18.6927 6.41923C18.8544 6.57174 19.0177 6.72279 19.1719 6.88328ZM18.6026 6.33231C15.449 8.69356 12.8633 11.6928 9.52202 13.8135C9.54046 13.6217 9.5675 13.4307 9.5963 13.24C11.1973 12.4564 12.4618 11.1761 13.7206 9.93764C15.14 8.54105 16.628 7.21046 18.1817 5.96472C18.3229 6.08594 18.4658 6.20581 18.6026 6.33231ZM18.0682 5.86567C15.2054 8.12342 12.8 11.3722 9.61174 13.1299C9.63888 12.9583 9.66914 12.7873 9.69929 12.6165C12.5795 10.5149 14.963 7.83126 17.7385 5.60034C17.8486 5.68861 17.9603 5.77492 18.0682 5.86567ZM17.6232 5.50741C14.8466 7.66404 12.4738 10.2784 9.72498 12.4685C9.7513 12.3224 9.77896 12.1748 9.80558 12.0267C9.81833 12.0395 9.83832 12.0433 9.85407 12.0253C12.0028 9.54995 15.5275 8.06457 17.1691 5.17349C17.3197 5.2857 17.4759 5.39137 17.6232 5.50741ZM17.0592 5.09299C15.0694 7.82918 11.9247 9.32907 9.81874 11.9531C9.86609 11.6845 9.90619 11.4136 9.92566 11.1428C12.1429 8.99981 14.5589 7.05744 16.7109 4.84952C16.8264 4.93137 16.9452 5.00918 17.0592 5.09299ZM16.5811 4.75897C14.3672 6.8408 12.0265 8.81177 9.93095 11.0143C9.93955 10.8201 9.93944 10.6262 9.91613 10.4336C9.91002 10.3831 9.88702 10.3491 9.85822 10.3246C11.0004 9.31352 12.1941 8.36233 13.3459 7.36214C14.318 6.51797 15.4361 5.56688 16.048 4.39895C16.226 4.51861 16.4056 4.6361 16.5811 4.75897ZM15.9023 4.30094C14.1937 6.64385 11.784 8.22485 9.7831 10.2875C9.76072 10.284 9.73772 10.2844 9.71534 10.2896C9.71773 10.2239 9.68105 10.1563 9.60418 10.165C9.41779 10.1861 9.23047 10.2021 9.04243 10.2142C11.3469 8.36503 13.4512 6.22187 15.4681 4.07114C15.4794 4.05912 15.4806 4.04607 15.4826 4.03333C15.622 4.12346 15.764 4.20914 15.9023 4.30094ZM15.3816 3.96899C15.378 3.97147 15.374 3.97002 15.3704 3.97334C13.1837 6.03766 11.147 8.23542 8.88464 10.2212C8.62915 10.2345 8.372 10.2385 8.11413 10.2389C10.5025 8.1889 12.4076 5.64935 14.8151 3.61228C15.004 3.73122 15.1938 3.84808 15.3816 3.96899ZM14.673 3.52276C12.1583 5.46162 10.3115 8.11109 7.96763 10.2391C7.79202 10.2381 7.61589 10.2342 7.43956 10.2288C8.61682 8.74277 10.0691 7.52738 11.3763 6.15535C12.0924 5.4037 12.6932 4.55321 13.4038 3.79597C13.5176 3.67475 13.6483 3.56483 13.7693 3.45117C13.8737 3.35337 13.9788 3.25598 14.0845 3.15932C14.2807 3.28106 14.4768 3.39968 14.673 3.52276ZM13.8716 3.02774C12.8149 3.64222 11.9793 5.1767 11.2361 6.01517C9.95757 7.45735 8.44898 8.65242 7.33119 10.2247C7.05788 10.2153 6.78374 10.201 6.50919 10.1851C9.32973 8.30804 11.3834 5.41313 13.3606 2.71227C13.531 2.81784 13.701 2.92238 13.8716 3.02774ZM12.895 2.42487C13.0006 2.4889 13.1064 2.55551 13.2122 2.62078C11.1418 5.28393 9.16562 8.20092 6.37585 10.1715C6.37357 10.1731 6.37388 10.1756 6.37201 10.1775C6.21536 10.1681 6.0585 10.1575 5.90165 10.1472C7.39615 8.67843 8.79005 7.11193 10.1842 5.54864C11.0241 4.60688 12.3456 3.57664 12.8649 2.4144C12.8662 2.41213 12.8646 2.41026 12.8655 2.40798C12.875 2.41327 12.8859 2.41917 12.895 2.42487ZM12.7599 2.34675C12.7584 2.34841 12.7564 2.3481 12.755 2.34996C11.8562 3.59042 10.6765 4.68572 9.66738 5.84019C8.41096 7.2778 7.12823 8.69148 5.85834 10.1171C5.85016 10.1263 5.85513 10.1356 5.85907 10.1442C5.5583 10.1244 5.25764 10.1046 4.95698 10.0859C6.50711 8.67397 7.61859 6.84805 9.15878 5.41655C9.25751 5.40764 9.35646 5.40173 9.45509 5.39199C9.50544 5.38702 9.54315 5.36392 9.57123 5.33366C9.65204 5.35273 9.74964 5.31346 9.73783 5.21504C9.72695 5.1248 9.7199 5.03456 9.71027 4.94432C10.5093 3.998 11.4261 3.05737 12.037 1.97896C12.3073 2.11022 12.5576 2.2333 12.7599 2.34675ZM11.9328 1.92819C11.515 2.53541 11.0721 3.11954 10.6017 3.68946C10.2981 4.05726 9.964 4.43096 9.6996 4.83761C9.67732 4.61444 9.66603 4.39097 9.65028 4.1678C10.4321 3.47915 11.097 2.6644 11.6939 1.81215C11.7743 1.85121 11.8548 1.89037 11.9328 1.92819ZM11.5804 1.75662C10.9652 2.56287 10.3632 3.36808 9.64427 4.08679C9.62769 3.84031 9.61443 3.59363 9.60283 3.34674C10.19 2.83089 10.6451 2.15912 11.0526 1.48932C11.2279 1.58143 11.4056 1.67073 11.5804 1.75662ZM10.9268 1.42208C10.4905 2.03656 10.14 2.69652 9.59661 3.22977C9.58781 3.02816 9.58304 2.82613 9.57817 2.62389C9.82631 2.38602 10.0704 2.14545 10.2923 1.88219C10.4376 1.70989 10.6021 1.51025 10.7003 1.29413C10.7755 1.33713 10.8494 1.38054 10.9268 1.42208ZM10.5476 1.20804C10.4117 1.43016 10.2891 1.65768 10.1233 1.86675C9.95188 2.08328 9.76373 2.28625 9.57392 2.48703C9.5733 2.45543 9.57154 2.42394 9.57102 2.39234C9.56791 2.20005 9.57579 1.99802 9.58532 1.79361C9.81926 1.55335 10.0465 1.28657 10.2294 1.00663C10.3313 1.0749 10.4368 1.14245 10.5476 1.20804ZM10.078 0.899915C9.91271 1.12163 9.75855 1.35215 9.59527 1.57656C9.61309 1.20275 9.62728 0.823455 9.58625 0.465502C9.71545 0.615935 9.88577 0.760256 10.078 0.899915Z" fill="#385469"/>
                                                            </svg>

                                                    </div>
                                                </div>
                                                <div className="acc-content">
                                                    <div className="content">
                                                        <div className="text">
                                                            A escola funciona no período matutino e vespertino, focando em atenção individual e baseando a aprendizagem através de atividades lúdicas e acadêmicas.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Testimonial Section Start  */}
                    <section className="testimonial-section section-padding">
                        <div className="container">
                            <div className="section-title-area justify-content-center justify-content-md-between">
                                <div className="section-title text-center text-md-start">
                                    <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Depoimentos</span>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                        O que os Pais Dizem <br /> Sobre Nós
                                    </h2>
                                </div>
                                <div className="swiper-dot">
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper testimonial-slider wow fadeInUp" data-wow-delay=".3s">
                                <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="tetsimonial-box-items">
                                        <div className="bg-shape">
                                            <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M77.7685 247.017L284.532 240.901C304.533 293.733 351.651 300 389.691 300C353.7 279.414 341.525 253.992 337.398 239.338L385.784 237.906C408.797 238.889 429.115 221.682 433.91 197.155L448.955 120.229C454.074 94.0514 439.935 67.9614 416.414 60.1912L256.779 7.44649C231.174 -1.01557 204.019 -2.28806 177.84 3.74434L37.5302 36.0696C12.673 41.7958 -3.59179 67.8778 0.680723 95.1489L32.9692 204.201C36.7378 228.204 55.4236 246.062 77.7685 247.017Z" fill="#FEF4DE"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="client-img">
                                                <img src="/img/home-1/client-1.png" alt="" />
                                            </div>
                                            <h3>
                                                Pai de Aluno
                                            </h3>
                                            <p>
                                                Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tetsimonial-box-items">
                                        <div className="bg-shape">
                                            <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M77.7685 247.017L284.532 240.901C304.533 293.733 351.651 300 389.691 300C353.7 279.414 341.525 253.992 337.398 239.338L385.784 237.906C408.797 238.889 429.115 221.682 433.91 197.155L448.955 120.229C454.074 94.0514 439.935 67.9614 416.414 60.1912L256.779 7.44649C231.174 -1.01557 204.019 -2.28806 177.84 3.74434L37.5302 36.0696C12.673 41.7958 -3.59179 67.8778 0.680723 95.1489L32.9692 204.201C36.7378 228.204 55.4236 246.062 77.7685 247.017Z" fill="#FEF4DE"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="client-img">
                                                <img src="/img/home-1/client-2.png" alt="" />
                                            </div>
                                            <h3>
                                                Pai de Aluno
                                            </h3>
                                            <p>
                                                Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tetsimonial-box-items">
                                        <div className="bg-shape">
                                            <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M77.7685 247.017L284.532 240.901C304.533 293.733 351.651 300 389.691 300C353.7 279.414 341.525 253.992 337.398 239.338L385.784 237.906C408.797 238.889 429.115 221.682 433.91 197.155L448.955 120.229C454.074 94.0514 439.935 67.9614 416.414 60.1912L256.779 7.44649C231.174 -1.01557 204.019 -2.28806 177.84 3.74434L37.5302 36.0696C12.673 41.7958 -3.59179 67.8778 0.680723 95.1489L32.9692 204.201C36.7378 228.204 55.4236 246.062 77.7685 247.017Z" fill="#FEF4DE"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="client-img">
                                                <img src="/img/home-1/client-3.png" alt="" />
                                            </div>
                                            <h3>
                                                Pai de Aluno
                                            </h3>
                                            <p>
                                                Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tetsimonial-box-items">
                                        <div className="bg-shape">
                                            <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M77.7685 247.017L284.532 240.901C304.533 293.733 351.651 300 389.691 300C353.7 279.414 341.525 253.992 337.398 239.338L385.784 237.906C408.797 238.889 429.115 221.682 433.91 197.155L448.955 120.229C454.074 94.0514 439.935 67.9614 416.414 60.1912L256.779 7.44649C231.174 -1.01557 204.019 -2.28806 177.84 3.74434L37.5302 36.0696C12.673 41.7958 -3.59179 67.8778 0.680723 95.1489L32.9692 204.201C36.7378 228.204 55.4236 246.062 77.7685 247.017Z" fill="#FEF4DE"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="client-img">
                                                <img src="/img/home-1/client-4.png" alt="" />
                                            </div>
                                            <h3>
                                                Pai de Aluno
                                            </h3>
                                            <p>
                                                Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="tetsimonial-box-items">
                                        <div className="bg-shape">
                                            <svg width="450" height="300" viewBox="0 0 450 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M77.7685 247.017L284.532 240.901C304.533 293.733 351.651 300 389.691 300C353.7 279.414 341.525 253.992 337.398 239.338L385.784 237.906C408.797 238.889 429.115 221.682 433.91 197.155L448.955 120.229C454.074 94.0514 439.935 67.9614 416.414 60.1912L256.779 7.44649C231.174 -1.01557 204.019 -2.28806 177.84 3.74434L37.5302 36.0696C12.673 41.7958 -3.59179 67.8778 0.680723 95.1489L32.9692 204.201C36.7378 228.204 55.4236 246.062 77.7685 247.017Z" fill="#FEF4DE"/>
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <div className="client-img">
                                                <img src="/img/home-1/client-5.png" alt="" />
                                            </div>
                                            <h3>
                                                Pai de Aluno
                                            </h3>
                                            <p>
                                                Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                       
                    </section>

                    {/*  Boletim Informativo Section Start  */}
                    <section className="newsletter-section section-padding pt-0">
                        <div className="zirap-shape float-bob-y d-none d-xl-block">
                            <img src="/img/home-1/zirap2.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="newsletter-wrapper">
                                <div className="newsletter-bg">
                                    <img src="/img/home-1/cta-newsletter-bg.jpg" alt="img" />
                                </div>
                                <div className="border-shape">
                                    <img src="/img/home-1/border-shape2.png" alt="img" />
                                </div>
                                <div className="vec-1">
                                    <img src="/img/home-1/vec2.png" alt="img" />
                                </div>
                                <div className="vec-2">
                                    <img src="/img/home-1/vec3.png" alt="img" />
                                </div>
                                <div className="vec-3 float-bob-y">
                                    <img src="/img/home-1/vec4.png" alt="img" />
                                </div>
                                <div className="content">
                                    <div className="section-title mb-0">
                                        <span className="text-white sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Boletim Informativo</span>
                                        <h2 className="text-white tx-title sec_title  tz-itm-title tz-itm-anim">
                                            Sign Up To Our Boletim Informativo
                                        </h2>
                                    </div>
                                    <form action="#" className="newsletter-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <i className="fa-light fa-envelope"></i>
                                        </div>
                                        <div className="form-clt">
                                            <input type="text" name="email" placeholder="Endereço de E-mail" />
                                        </div>
                                        <button className="subscribe-btn">
                                            Inscrever-se Agora
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  News Section Start  */}
                    <section className="news-section">
                        <div className="top-line-1">
                            <img src="/img/home-1/top-line-2.png" alt="img" />
                        </div>
                         <div className="bottom-line-1">
                            <img src="/img/home-1/bottom-line-2.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title">
                                    <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Últimas Notícias</span>
                                    <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
                                        Últimas Notícias And Blog
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/news-1.jpg" alt="img" />
                                            <img src="/img/home-1/news-1.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 22 Dec, 2026
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 25, Comments
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="news-details.html">Por que a Educação Infantil é Importante para Seu Filho</a>
                                            </h3>
                                            <div className="arrow-btn">
                                                <a href="news-details.html" className="icon">
                                                    <span className="bg"></span>
                                                    <div className="arrow-icon">
                                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/news-2.jpg" alt="img" />
                                            <img src="/img/home-1/news-2.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 22 Dec, 2026
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 25, Comments
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="news-details.html">Atividades Divertidas que Estimulam a Criatividade das Crianças</a>
                                            </h3>
                                            <div className="arrow-btn">
                                                <a href="news-details.html" className="icon">
                                                    <span className="bg"></span>
                                                    <div className="arrow-icon">
                                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="news-box-items">
                                        <div className="thumb">
                                            <img src="/img/home-1/news-3.jpg" alt="img" />
                                            <img src="/img/home-1/news-3.jpg" alt="img" />
                                        </div>
                                        <div className="content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 22 Dec, 2026
                                                </li>
                                                <li>
                                                    <i className="fa-regular fa-calendar"></i> 25, Comments
                                                </li>
                                            </ul>
                                            <h3>
                                                <a href="news-details.html">Como um Ambiente Escolar Positivo Molda Mentes Jovens</a>
                                            </h3>
                                            <div className="arrow-btn">
                                                <a href="news-details.html" className="icon">
                                                    <span className="bg"></span>
                                                    <div className="arrow-icon">
                                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.9" d="M10.4774 0.235515C10.4486 0.324309 10.3906 0.401968 10.3481 0.413358C10.3039 0.425186 10.2772 0.456482 10.2854 0.487064C10.2932 0.516037 10.3487 0.527039 10.4092 0.51083C10.5024 0.48586 10.5282 0.516891 10.5826 0.719701C10.6417 0.940217 10.6354 0.962599 10.5003 1.01432C10.4052 1.05187 10.3572 1.10788 10.3643 1.18016C10.3684 1.24118 10.334 1.34182 10.2881 1.40588C10.1502 1.59118 10.2828 1.69366 10.5608 1.61919C10.7684 1.56355 10.7947 1.5703 10.7964 1.66818C10.7973 1.73694 10.7444 1.80114 10.6604 1.83402C10.551 1.87712 10.5242 1.92744 10.5304 2.08794C10.5331 2.19592 10.5645 2.33932 10.5969 2.40137C10.6469 2.49664 10.6946 2.50456 10.9022 2.44893C11.1802 2.37446 11.2363 2.43359 11.042 2.5978C10.885 2.73129 10.8869 2.90847 11.0481 2.96708C11.1124 2.99125 11.1439 3.01731 11.1161 3.02476C10.9858 3.06142 7.91162 4.06627 6.70975 4.46594C4.75645 5.11526 0.833265 6.46321 0.706193 6.53176C0.568108 6.60499 0.554427 6.75012 0.680896 6.82319C0.755711 6.86698 0.865862 6.85299 1.09001 6.77395C1.37008 6.67475 1.36156 6.68221 0.982483 6.86314C0.458688 7.11218 0.32957 7.21233 0.386872 7.32809C0.446671 7.44663 0.61575 7.39098 2.14734 6.73734C2.85502 6.43558 3.69849 6.10434 4.02443 5.99975L4.61668 5.81001L3.82596 6.12884C3.1397 6.40588 1.19342 7.27759 0.669029 7.54404C0.534555 7.61113 0.495859 7.6629 0.517423 7.74338C0.554083 7.8802 0.574906 7.87289 2.06431 7.1926C2.7509 6.87752 3.76737 6.44644 4.31993 6.23283C5.44304 5.80078 8.64131 4.72298 9.27782 4.56106L9.68827 4.45798L9.3738 4.59227C8.90884 4.79276 5.0965 6.27317 2.94114 7.0905C1.48737 7.6422 1.01337 7.84166 0.868177 7.96683C0.658035 8.1439 0.510962 8.43863 0.605576 8.49091C0.675827 8.53074 2.90589 7.71755 6.77693 6.24039C8.52083 5.57472 9.57125 5.19838 9.73587 5.17842L9.9906 5.14812L9.69969 5.26575C9.54017 5.33092 7.88996 5.94733 6.0348 6.63592C4.17963 7.3245 2.34985 8.00973 1.97032 8.15628C1.58958 8.30488 1.13433 8.46309 0.94958 8.5126C0.601343 8.60591 0.351623 8.79876 0.553279 8.81891C0.605436 8.82391 1.91433 8.35933 3.46215 7.78587C7.37985 6.33244 8.39974 6.00568 5.65794 7.0802C4.86997 7.38967 4.01929 7.7332 3.75867 7.84616C3.50013 7.96029 2.67446 8.27296 1.92778 8.54032C-0.077117 9.25867 -0.0192129 9.2328 0.00731647 9.41029C0.0360925 9.6027 0.137387 9.60143 0.658203 9.40668C0.997382 9.27957 1.08412 9.26322 1.14148 9.32031C1.20133 9.38018 1.26543 9.35783 1.65886 9.14545C2.26815 8.81658 2.2555 8.82169 5.04582 7.84975C9.12026 6.43195 9.55635 6.31338 6.35332 7.49769C3.6095 8.51237 1.19337 9.46167 1.13017 9.55279C1.1024 9.59301 0.971624 9.66083 0.838514 9.70685C0.602494 9.78734 0.598883 9.79348 0.64805 9.97698L0.698512 10.1653L1.20068 10.0187L1.70122 9.87248L1.79541 10.0801C1.84651 10.1924 1.92575 10.2919 1.96723 10.2963C2.01035 10.3003 3.02498 9.94734 4.2178 9.51386C6.92919 8.52857 9.53322 7.61346 10.4829 7.31241C10.882 7.1865 11.3173 7.03881 11.447 6.98679C11.6257 6.91475 11.6737 6.91054 11.6404 6.96948C11.6144 7.01614 10.5803 7.42087 9.04874 7.98307C4.4149 9.68705 1.45548 10.8061 1.40225 10.8756C1.37361 10.9126 1.38273 11.0447 1.42204 11.1652C1.47895 11.3449 1.51599 11.3851 1.61263 11.373C1.67734 11.366 3.98261 10.5326 6.72815 9.52438C9.4737 8.51614 11.8504 7.65504 12.0048 7.6102C12.1953 7.55573 12.3338 7.54966 12.4414 7.59156C12.62 7.66275 12.8203 7.9265 12.8738 8.15887C12.8934 8.24505 12.9699 8.35395 13.0439 8.40139C13.118 8.44883 13.2256 8.55627 13.2842 8.64409C13.38 8.78576 13.3798 8.80478 13.2817 8.83107C13.2212 8.84728 13.1686 8.89934 13.1643 8.94879C13.1501 9.08543 13.324 9.17857 13.4551 9.10549C13.5479 9.05301 13.5863 9.07205 13.6851 9.21812C13.7964 9.38496 13.8132 9.38907 14.0025 9.31075C14.1649 9.24309 14.2129 9.24575 14.2566 9.32375C14.3254 9.44332 14.5385 9.39486 14.5539 9.25617C14.5597 9.1994 14.5225 9.14554 14.4566 9.12181C14.363 9.0865 14.3887 9.04511 14.6663 8.79302C14.8394 8.63451 15.1032 8.45513 15.2468 8.39595C15.3937 8.33589 15.5499 8.26472 15.6012 8.23373C15.6964 8.17716 15.6742 8.01577 15.561 7.95294C15.5072 7.92248 15.5325 7.87948 15.6472 7.8039C15.7367 7.74543 15.8552 7.68433 15.9124 7.669C16.0073 7.64359 16.0208 7.58303 15.9608 7.44386C15.9464 7.40976 16.0319 7.32992 16.154 7.26268C16.6041 7.01961 16.6275 6.99606 16.6023 6.82341C16.5893 6.73547 16.6192 6.61185 16.6709 6.5497C17.3886 5.67077 17.6967 5.36222 17.9656 5.25394C18.2659 5.13208 18.425 4.94108 18.331 4.81272C18.2784 4.74057 18.4645 4.45434 18.5839 4.42236C18.6133 4.41447 18.7131 4.29631 18.8004 4.16424C19.1129 3.69578 19.8074 2.82824 19.8859 2.80721C20.0592 2.76078 19.9105 2.61776 19.5482 2.48195C19.2501 2.3703 19.1583 2.30866 19.1335 2.20316C19.1056 2.07952 19.0863 2.07263 18.909 2.13048C18.7591 2.17926 18.6556 2.1656 18.4476 2.06952C17.5219 1.63611 15.0025 0.905172 12.5915 0.36946C12.1628 0.273845 11.7681 0.16742 11.7189 0.134037C11.6696 0.100653 11.5567 0.091231 11.4684 0.114887C11.3703 0.141171 11.2478 0.122234 11.1556 0.0658578C10.922 -0.0734017 10.5508 0.0191645 10.4774 0.235515ZM11.6236 0.471811C11.7039 0.496872 11.7069 0.508139 11.641 0.549949C11.4718 0.657397 11.0153 0.810782 11.0023 0.762494C10.992 0.723863 11.0868 0.665682 11.5053 0.455217C11.5191 0.448055 11.5721 0.456276 11.6236 0.471811ZM12.514 0.623116C12.6986 0.65818 12.8568 0.705519 12.8632 0.729663C12.8697 0.753807 12.7899 0.795902 12.6869 0.823501C12.5348 0.864242 12.4895 0.852221 12.4502 0.75754C12.415 0.672078 12.3593 0.647323 12.2467 0.665407C12.1628 0.679263 12.0991 0.663575 12.1085 0.63344C12.132 0.551228 12.132 0.551227 12.514 0.623116ZM13.3623 0.84609C13.3658 0.858967 13.3197 0.883377 13.2592 0.899585C13.1987 0.915794 13.1398 0.891915 13.1273 0.845237C13.1096 0.779243 13.1295 0.768719 13.2303 0.791741C13.2995 0.807725 13.3588 0.833213 13.3623 0.84609ZM13.857 0.946421C13.8601 0.957688 13.8103 0.981364 13.7515 0.997135C13.691 1.01334 13.6486 0.998838 13.6588 0.965046C13.6753 0.908872 13.8428 0.893304 13.857 0.946421ZM12.182 2.11118C12.0246 2.17753 11.7935 2.2567 11.6737 2.28707L11.4554 2.34212L11.6629 2.24683C11.7767 2.19393 12.0078 2.11475 12.1713 2.07094L12.4721 1.99034L12.182 2.11118ZM16.1386 1.52201C16.8109 1.71621 17.5822 1.9788 17.5925 2.01743C17.6132 2.09469 17.3816 2.07394 17.3359 1.99476C17.2998 1.93198 17.2121 1.90545 17.0752 1.91796C16.9605 1.928 16.8609 1.90293 16.8497 1.86108C16.8131 1.72426 16.5872 1.73131 15.869 1.88925C15.1954 2.03696 15.1509 2.05405 15.1387 2.1591C15.1224 2.32047 15.0567 2.37603 14.8101 2.43691L14.5914 2.49035L14.7607 2.38977C14.8576 2.33276 14.9303 2.24429 14.9299 2.18401C14.9305 2.10793 15.0015 2.04578 15.1744 1.97184C15.3111 1.9128 15.4421 1.83284 15.4727 1.79014C15.546 1.69112 15.4729 1.46402 15.3649 1.45328C15.3165 1.44901 15.2828 1.41491 15.293 1.38111C15.3189 1.29481 15.4164 1.31183 16.1386 1.52201ZM15.0064 1.54761C14.9787 1.59471 13.8057 2.06257 12.974 2.35959C11.688 2.81803 11.9881 2.64964 13.4105 2.11153C14.881 1.55705 15.0317 1.50461 15.0064 1.54761ZM11.98 2.71738C11.9328 2.74383 11.8318 2.7726 11.7618 2.7793C11.6917 2.78599 11.7312 2.76333 11.8518 2.72931C11.9707 2.69572 12.0289 2.69048 11.98 2.71738ZM14.2095 2.64099C14.1144 2.67854 13.9558 2.72104 13.8547 2.73605C13.7536 2.75107 13.8295 2.72038 14.0257 2.66782C14.2235 2.61481 14.3045 2.60344 14.2095 2.64099ZM13.2884 2.96371C13.07 3.04465 12.7408 3.15011 12.5622 3.19625L12.2343 3.28065L12.6082 3.14594C12.816 3.07129 13.1371 2.96802 13.3345 2.9134L13.6884 2.81512L13.2884 2.96371ZM12.016 3.40124C11.9807 3.42624 11.9104 3.44507 11.8525 3.44504C11.7947 3.44501 11.8207 3.42425 11.9139 3.39928C12.0075 3.37592 12.0514 3.37624 12.016 3.40124ZM5.02797 5.67737C4.99262 5.70237 4.92231 5.72121 4.86448 5.72118C4.80622 5.71954 4.83263 5.70039 4.92582 5.67542C5.01901 5.65045 5.0629 5.65076 5.02797 5.67737ZM9.99157 4.34738C9.95622 4.37238 9.88591 4.39122 9.82808 4.39119C9.76982 4.38955 9.79623 4.3704 9.88942 4.34543C9.98097 4.32089 10.0249 4.32121 9.99157 4.34738ZM18.3215 2.27238C18.4369 2.31736 18.4361 2.32102 18.3373 2.38373C18.2787 2.42013 18.1775 2.42827 18.1 2.40072C17.9706 2.35603 17.9694 2.3512 18.0589 2.2996C18.109 2.27066 18.1644 2.24201 18.1787 2.23646C18.193 2.23091 18.2567 2.2466 18.3215 2.27238ZM11.4969 4.13206C11.4317 4.19611 11.0722 4.33214 10.9398 4.34173C10.8279 4.34928 11.1379 4.18513 11.3496 4.12497C11.4947 4.08437 11.5439 4.08498 11.4969 4.13206ZM17.0765 2.94929C17.0488 2.99638 16.1948 3.36668 14.2754 4.16218C13.2865 4.57206 12.4624 4.91019 12.4477 4.91413C12.433 4.91808 12.4209 4.87301 12.4197 4.80951C12.4192 4.74235 12.4749 4.67567 12.559 4.64279C12.6541 4.60524 12.6887 4.558 12.667 4.49654C12.6479 4.44474 12.6551 4.39968 12.6828 4.39223C12.709 4.38522 13.2206 4.20845 13.813 3.99969C14.4059 3.79253 15.3206 3.48532 15.8378 3.3226C16.3545 3.15828 16.8503 3.00125 16.9373 2.97277C17.0227 2.94472 17.0865 2.93451 17.0765 2.94929ZM19.2198 2.59063L19.6128 2.72339L19.5079 2.85501C19.4123 2.97552 19.3992 2.97902 19.3588 2.90014C19.2843 2.75277 19.1417 2.7306 18.8927 2.82835C18.6663 2.91836 18.6589 2.91689 18.6294 2.76092C18.6087 2.65776 18.6335 2.58037 18.6978 2.539C18.7531 2.50348 18.804 2.47088 18.8129 2.46503C18.8207 2.46123 19.0002 2.51663 19.2198 2.59063ZM11.2489 4.57978C11.2357 4.60231 11.1887 4.61662 11.1472 4.61221C11.0983 4.60633 11.1067 4.592 11.1713 4.57126C11.2248 4.55519 11.2609 4.55931 11.2489 4.57978ZM7.56668 6.31688C7.51945 6.34334 7.41851 6.37211 7.3501 6.37837C7.28005 6.38506 7.31954 6.3624 7.43846 6.32881C7.55901 6.29479 7.61555 6.28999 7.56668 6.31688ZM15.525 4.18273C15.5118 4.20525 15.4648 4.21957 15.4233 4.21516C15.3749 4.21089 15.3828 4.19495 15.4474 4.1742C15.5005 4.15653 15.5383 4.16021 15.525 4.18273ZM19.1191 3.32665C19.0138 3.45666 18.9381 3.5011 18.8428 3.49212C18.697 3.47771 18.6146 3.51015 15.9069 4.62039C13.7695 5.49844 13.6834 5.53014 13.664 5.45771C13.6506 5.40781 15.828 4.48282 17.521 3.81697C19.4597 3.05425 19.3024 3.10158 19.1191 3.32665ZM15.189 4.33486C15.1537 4.35986 15.0834 4.3787 15.0255 4.37867C14.9677 4.37864 14.9937 4.35788 15.0869 4.33291C15.1789 4.30998 15.2244 4.30986 15.189 4.33486ZM14.7941 4.49589C14.744 4.52483 14.6623 4.54673 14.6028 4.54714C14.5471 4.54828 14.5882 4.52519 14.6912 4.49759C14.7958 4.46955 14.843 4.46899 14.7941 4.49589ZM14.126 4.78186C13.6828 4.98515 13.5167 5.04519 13.5544 4.98333C13.5861 4.9317 14.0752 4.72302 14.3249 4.65439C14.4295 4.62635 14.338 4.68365 14.126 4.78186ZM13.3763 5.1035C13.3631 5.12602 13.3161 5.14034 13.2746 5.13592C13.2262 5.13166 13.2342 5.11571 13.2987 5.09497C13.3518 5.0773 13.3879 5.08141 13.3763 5.1035ZM13.0034 5.28107C12.775 5.40955 12.6 5.45643 12.6212 5.38519C12.6315 5.35139 12.7546 5.29425 12.8977 5.25936C13.1279 5.20286 13.139 5.20506 13.0034 5.28107ZM11.6086 5.92219C11.5954 5.94472 11.5484 5.95903 11.5069 5.95462C11.458 5.94874 11.4664 5.93441 11.531 5.91367C11.5841 5.89599 11.6202 5.90011 11.6086 5.92219ZM11.2326 6.0885C11.1433 6.12795 11.0538 6.18643 11.024 6.22548C10.9954 6.26248 10.4959 6.45842 9.91363 6.65929C7.86346 7.36562 7.68258 7.39684 9.36651 6.75586C10.2999 6.40053 11.1367 6.09006 11.2266 6.06596L11.3901 6.02216L11.2326 6.0885ZM16.2061 4.97841C16.1928 5.00093 16.1459 5.01525 16.1044 5.01084C16.0555 5.00496 16.0639 4.99063 16.1284 4.96988C16.1815 4.95221 16.2193 4.95589 16.2061 4.97841ZM15.8161 5.145C15.7824 5.16956 15.7219 5.18577 15.6804 5.18136C15.639 5.17695 15.6649 5.15619 15.7418 5.1356C15.8174 5.11705 15.8499 5.12044 15.8161 5.145ZM15.4482 5.30223C15.4133 5.32884 15.343 5.34768 15.2847 5.34604C15.2269 5.34601 15.2529 5.32525 15.3461 5.30028C15.4376 5.27575 15.4832 5.27562 15.4482 5.30223ZM7.50044 7.48877C7.43806 7.51756 7.32362 7.54823 7.2552 7.55448C7.18352 7.56161 7.23652 7.53706 7.37221 7.5007C7.50955 7.4639 7.56609 7.4591 7.50044 7.48877ZM15.0259 5.47232C14.9906 5.49732 14.9203 5.51615 14.8625 5.51612C14.8046 5.51609 14.8306 5.49533 14.9238 5.47036C15.017 5.44539 15.0613 5.44732 15.0259 5.47232ZM6.88807 7.70806C6.84084 7.73452 6.7399 7.76329 6.66985 7.76998C6.5998 7.77668 6.63929 7.75402 6.75984 7.71999C6.87833 7.68479 6.9365 7.67956 6.88807 7.70806ZM10.8338 6.67323C10.6437 6.74833 10.1283 6.91749 9.6797 7.05493C9.23071 7.19076 8.97609 7.26071 9.10791 7.20987C9.52625 7.05119 10.6219 6.68687 10.9048 6.61108C11.1598 6.54274 11.1558 6.54728 10.8338 6.67323ZM14.6592 5.6275C14.6239 5.6525 14.5536 5.67134 14.4958 5.67131C14.4379 5.67128 14.4639 5.65052 14.5571 5.62555C14.6491 5.60263 14.693 5.60294 14.6592 5.6275ZM6.35624 7.90749C6.30901 7.93395 6.20807 7.96272 6.13966 7.96898C6.06961 7.97567 6.1091 7.95301 6.22801 7.91943C6.34857 7.8854 6.40674 7.88016 6.35624 7.90749ZM14.2643 5.78853C14.2142 5.81747 14.1325 5.83938 14.073 5.83979C14.0173 5.84093 14.0584 5.81783 14.1614 5.79023C14.266 5.7622 14.3116 5.76207 14.2643 5.78853ZM5.79911 8.11716C5.73674 8.14595 5.62229 8.17661 5.55388 8.18287C5.48219 8.19 5.53519 8.16545 5.67089 8.12909C5.80659 8.09273 5.86476 8.08749 5.79911 8.11716ZM13.5946 6.07495C13.1734 6.26888 12.9301 6.35478 12.9638 6.29744C12.9915 6.25035 13.5601 6.01172 13.7935 5.94747C13.8981 5.91943 13.8082 5.9763 13.5946 6.07495ZM5.26892 8.31615C5.20654 8.34494 5.0921 8.37561 5.02368 8.38186C4.952 8.389 5.005 8.36444 5.1407 8.32808C5.27639 8.29172 5.33293 8.28692 5.26892 8.31615ZM8.67608 7.40321C8.56466 7.44514 8.38482 7.49333 8.26735 7.51272C8.15316 7.53125 8.24213 7.49706 8.46611 7.43704C8.69009 7.37702 8.78587 7.36171 8.67608 7.40321ZM4.79148 8.50274C4.72746 8.53197 4.60321 8.56526 4.51844 8.5759C4.43041 8.58741 4.48341 8.56286 4.63546 8.52212C4.78871 8.47933 4.85669 8.47146 4.79148 8.50274ZM7.73759 7.71333C7.67521 7.74212 7.56077 7.77279 7.49235 7.77904C7.42067 7.78617 7.47367 7.76162 7.60937 7.72526C7.74463 7.68729 7.80117 7.68249 7.73759 7.71333ZM3.98725 8.82347C3.77318 8.9205 3.31604 9.0913 2.97702 9.19939L2.35698 9.39658L3.1224 9.08798C4.05018 8.71172 4.59313 8.54726 3.98725 8.82347ZM3.44944 9.37989C3.41408 9.40489 3.34378 9.42373 3.28595 9.4237C3.22812 9.42367 3.25409 9.4029 3.34728 9.37793C3.43884 9.3534 3.48316 9.35533 3.44944 9.37989ZM16.5922 6.243C16.5486 6.29609 16.4692 6.33979 16.4135 6.34093C16.3593 6.34164 16.0466 6.45647 15.7163 6.59676C15.3875 6.7366 14.778 6.9534 14.3608 7.07726L13.6029 7.30276L14.4275 6.99902C14.8785 6.83158 15.5258 6.58568 15.8604 6.45462C16.7206 6.11373 16.6928 6.12118 16.5922 6.243ZM13.2468 7.83119C13.2611 7.8843 13.1082 7.9546 13.0658 7.91419C13.0401 7.89004 13.0696 7.85626 13.1301 7.84005C13.1901 7.82223 13.2438 7.81992 13.2468 7.83119ZM15.287 7.64336C15.2369 7.67231 15.1552 7.69421 15.0957 7.69462C15.04 7.69576 15.0811 7.67266 15.1841 7.64506C15.2887 7.61703 15.3359 7.61647 15.287 7.64336ZM14.8647 7.81344C14.8146 7.84239 14.7329 7.86429 14.6734 7.8647C14.6177 7.86584 14.6588 7.84275 14.7618 7.81515C14.8664 7.78711 14.9136 7.78655 14.8647 7.81344ZM14.4171 7.99376C14.3531 8.02298 14.2289 8.05628 14.1441 8.06691C14.0577 8.07799 14.1091 8.05387 14.2611 8.01313C14.4132 7.97239 14.4811 7.96453 14.4171 7.99376ZM13.804 8.2167C13.7253 8.24987 13.5896 8.28623 13.5048 8.29687C13.42 8.30751 13.4861 8.27945 13.6496 8.23564C13.811 8.19066 13.8827 8.18353 13.804 8.2167ZM15.0073 8.11681C14.9744 8.17049 14.0473 8.56899 13.7976 8.63763C13.4237 8.73955 13.5641 8.59669 13.9862 8.44562C14.2104 8.36659 14.4442 8.27805 14.5026 8.25379C14.6938 8.16976 15.0302 8.07791 15.0073 8.11681ZM14.1323 8.95163C13.9184 9.15386 13.8248 9.17722 13.9962 8.98638C14.073 8.90024 14.1672 8.8267 14.2134 8.81604C14.2584 8.80744 14.2207 8.8693 14.1323 8.95163Z" fill="white"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*  Brand Section Start  */}
                    <div className="brand-section fix section-padding section-padding">
                        <div className="container">
                            <p className="text-center wow fadeInUp" data-wow-delay=".3s">Conheça também</p>
                            <div className="swiper brand-slider wow fadeInUp" data-wow-delay=".5s">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-1.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-1.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-2.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-2.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-3.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-3.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-4.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-4.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-5.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-5.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-6.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-6.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                     <div className="swiper-slide">
                                        <div className="brand-box-1">
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-7.png" alt="img" />
                                            </span>
                                            <span className="brand-img-1">
                                                <img src="/img/home-1/brand-hover-7.png" alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Instagram Section Start  */}
                    <div className="instagram-wrapper section-padding pt-0 wow fadeInUp" data-wow-delay=".3s">
                        <div className="instagram-section">
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <img src="/img/home-1/instagram-1.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <img src="/img/home-1/instagram-2.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <img src="/img/home-1/instagram-3.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                             <div className="instagram-image">
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <img src="/img/home-1/instagram-4.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                            <div className="instagram-image">
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <img src="/img/home-1/instagram-5.jpg" alt="img" />
                                <a href="#" className="icon">
                                    <i className="fa-brands fa-instagram"></i> 
                                    Galeria, Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*  Footer Section Start  */}
                    



          </div>
        </div>
      </div>
    </main>
  );
}
