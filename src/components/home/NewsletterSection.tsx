import React from 'react';

const NewsletterSection = () => {
    return (
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
                                Inscreva-se em Nosso Boletim Informativo
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
    );
};

export default NewsletterSection;
