import React from 'react';

const TestimonialSection = () => {
    return (
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
                                <h3>Pai de Aluno</h3>
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
                                <h3>Pai de Aluno</h3>
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
                                <h3>Pai de Aluno</h3>
                                <p>
                                    Esta escola proporcionou um ambiente seguro, carinhoso e alegre para o meu filho. Os professores são muito atenciosos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
