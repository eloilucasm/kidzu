import React from "react";

const faqs = [
  {
    id: 1,
    question: "What age can my child enroll?",
    answer: "School runs from morning to early afternoon, Sunday to Thursday. and focus on personal attention. through play-based and academic learning.",
  },
  {
    id: 2,
    question: "What is the school timing?",
    answer: "School runs from morning to early afternoon, Sunday to Thursday. and focus on personal attention. through play-based and academic learning.",
  },
  {
    id: 3,
    question: "Is transportation service available?",
    answer: "School runs from morning to early afternoon, Sunday to Thursday. and focus on personal attention. through play-based and academic learning.",
  },
  {
    id: 4,
    question: "How can I apply for admission?",
    answer: "School runs from morning to early afternoon, Sunday to Thursday. and focus on personal attention. through play-based and academic learning.",
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section faq-section-2">
      <div className="top-shape">
        <img src="/img/home-1/faq-top.png" alt="img" />
      </div>
      <div className="bottom-shape">
        <img src="/img/home-2/faq-bottom.png" alt="img" />
      </div>
      <div className="plane-shape">
        <img src="/img/home-1/plane.png" alt="img" />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="faq-image style-2 wow fadeInUp" data-wow-delay=".3s">
              <div className="faq-shape2">
                <img src="/img/home-2/faq-shape.png" alt="img" />
              </div>
              <img src="/img/home-2/faq-image.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content-1">
              <div className="section-title mb-0">
                <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Faq</span>
                <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Frequently Ask Question</h2>
              </div>
              <p className="faq-text wow fadeInUp" data-wow-delay=".3s">
                Qualified teachers who understand children’s needs and focus on personal attention. through play-based and academic learning.
              </p>
              <ul className="accordion-box">
                {faqs.map((faq, idx) => (
                  <li key={faq.id} className={`accordion block ${idx === 0 ? "active-block" : ""} wow fadeInUp`} data-wow-delay={`.${idx * 2}s`}>
                    <div className={`acc-btn ${idx === 0 ? "active" : ""}`}>
                      {faq.question}
                      <div className="icon">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.23648 0.105787... (SVG omitido por brevidade, manter original em produção)" fill="#385469" />
                        </svg>
                      </div>
                    </div>
                    <div className={`acc-content ${idx === 0 ? "current" : ""}`}>
                      <div className="content">
                        <div className="text">{faq.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
