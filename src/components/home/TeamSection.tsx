import React from 'react';

const TeamSection = () => {
    return (
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
                                            <p>Professor de Educação Física</p>
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
                                            <p>Diretora</p>
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
                                            <p>Professora Titular</p>
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
                                            <p>Professora Titular</p>
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
    );
};

export default TeamSection;
