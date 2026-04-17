import React from "react";

const team = [
  {
    id: 1,
    name: "Nadia Lestary",
    hoverName: "Mr. Mark baba",
    role: "KG Teacher",
    delay: ".2s",
    smallImg: "/img/home-2/team-small.png",
    hoverImg: "/img/home-2/team-01.png",
    active: true,
  },
  {
    id: 2,
    name: "Nadia Lestary",
    hoverName: "Nadia Lestary",
    role: "KG Teacher",
    delay: ".4s",
    smallImg: "/img/home-2/team-small-2.png",
    hoverImg: "/img/home-2/team-02.png",
    bgClass: "bg-2",
    hasStars: true,
  },
  {
    id: 3,
    name: "Evan Caster Lee",
    hoverName: "Evan Caster Lee",
    role: "KG Teacher",
    delay: ".6s",
    smallImg: "/img/home-2/team-small-3.png",
    hoverImg: "/img/home-2/team-03.png",
    bgClass: "bg-3",
    hasShape34: true,
  },
  {
    id: 4,
    name: "Stefy Catlyna",
    hoverName: "Stefy Catlyna",
    role: "KG Teacher",
    delay: ".8s",
    smallImg: "/img/home-2/team-small-4.png",
    hoverImg: "/img/home-2/team-04.png",
    bgClass: "bg-4",
    hasShape5: true,
  },
];

export default function TeamSection() {
  return (
    <section className="team-section-2 fix section-padding">
      <div className="pencil float-bob-y">
        <img src="/img/home-2/pencil.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Our Expert Teacher’s</span>
            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">Our Expert Instructors</h2>
          </div>
          <a href="#" className="link-btn wow fadeInUp">
            view all expert
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4364 7.42645C16.3381 6.53058 16.1111 5.64906 15.775 4.81355C15.4542 4.01604 15.0635 3.2147 14.4018 2.64599C13.465 1.84079 12.4199 1.13412 11.2294 0.771891C9.98805 0.394204 8.62081 0.51004 7.36874 0.783878C5.5021 1.19211 3.96336 2.23558 2.80527 3.76456C1.39288 5.62929 0.236545 8.28518 0.598172 10.6699C0.78781 11.9205 1.26726 13.1271 1.99179 14.163C2.76089 15.2626 3.73904 15.7949 5.02222 16.131C7.53346 16.7889 10.4314 16.5146 12.6216 15.0521C13.8369 14.2406 14.71 13.0964 15.3634 11.8005C16.0615 10.4159 16.6099 9.00644 16.4364 7.42645ZM14.7019 8.36096C14.6605 9.52849 14.3146 10.6807 13.6228 11.7184C12.5681 13.3002 10.8624 14.4284 8.96139 14.6336C7.006 14.8447 4.44567 14.9001 3.18185 13.0564C2.70836 12.3656 2.43683 11.5338 2.27729 10.7169C2.08426 9.7283 2.17304 8.68568 2.53098 7.7444C2.90041 6.77301 3.32529 5.76642 3.8616 4.8754C4.52424 3.77453 5.49248 2.85274 6.77773 2.58897C8.10846 2.31586 9.52072 2.08802 10.871 2.43916C12.0328 2.74132 13.2039 3.49468 13.7832 4.57438C14.4227 5.76652 14.7476 7.07307 14.7019 8.36096ZM12.8134 7.28668C12.3338 7.00498 11.1316 6.02672 10.6938 5.68331C10.2754 5.35505 8.92606 4.02909 7.94461 4.30094C7.31688 4.47496 7.24197 5.06725 7.51574 5.57966C7.72303 5.96764 8.14679 6.32724 8.51952 6.54959C8.69098 6.65189 9.53241 7.22215 9.90198 7.37771C8.98691 7.37771 7.55279 7.52333 6.65317 7.68962C5.84051 7.83983 4.82564 8.01068 4.08905 8.40197C3.60558 8.6588 3.40995 9.50006 3.97969 9.79345C4.65496 10.1411 5.57635 9.84737 6.44779 9.67547C7.56589 9.45489 9.29967 9.23527 10.1667 9.19063C9.55882 9.4785 8.92454 10.2086 8.47941 10.7067C8.21301 11.0047 7.89587 11.4746 8.07609 11.8865C8.22092 12.2175 8.89817 12.5844 9.50574 12.1784C9.94142 11.8872 10.3158 11.5195 10.7152 11.1787C11.2747 10.7013 11.8466 10.2376 12.3851 9.73583C12.6415 9.49689 12.9622 9.20417 13.1816 8.92828C13.6798 8.30195 13.4517 7.66139 12.8134 7.28668Z" fill="#F39F5F" />
            </svg>
          </a>
        </div>
        <div className="team-wrapper-2">
          {team.map((item) => (
            <div key={item.id} className={`team-main-items ${item.active ? "active" : ""} ${item.bgClass || ""} wow fadeInUp`} data-wow-delay={item.delay}>
              <div className="team-items">
                <div className="content">
                  <h3 className="title">
                    <a href="#">{item.name.split(" ").map((n, i) => <React.Fragment key={i}>{n} <br /></React.Fragment>)}</a>
                  </h3>
                </div>
                {item.hasStars && (
                  <>
                    <div className="star">
                      <img src="/img/home-2/star.png" alt="img" />
                    </div>
                    <div className="star2">
                      <img src="/img/home-2/star2.png" alt="img" />
                    </div>
                  </>
                )}
                <div className="team-image">
                  <img src={item.smallImg} alt="" />
                </div>
                {item.id === 1 && (
                  <div className="team-shape">
                    <img src="/img/home-2/team-shape.png" alt="img" />
                  </div>
                )}
                {item.hasShape34 && (
                  <>
                    <div className="shape-3">
                      <img src="/img/home-2/team-shape2.png" alt="img" />
                    </div>
                    <div className="shape-4">
                      <img src="/img/home-2/team-shape3.png" alt="img" />
                    </div>
                  </>
                )}
                {item.hasShape5 && (
                  <div className="shape-5">
                    <img src="/img/home-2/team-shape4.png" alt="img" />
                  </div>
                )}
              </div>
              <div className="team-hover-items">
                <div className="content">
                  <h3 className="title">
                    <a href="#">{item.hoverName.split(" ").map((n, i) => <React.Fragment key={i}>{n} <br /></React.Fragment>)}</a>
                  </h3>
                  <span>{item.role}</span>
                </div>
                {item.id === 1 && (
                  <div className="team-shape">
                    <img src="/img/home-2/team-shape.png" alt="img" />
                  </div>
                )}
                <div className="team-image">
                  <img src={item.hoverImg} alt="img" />
                </div>
                {item.hasStars && (
                  <>
                    <div className="star">
                      <img src="/img/home-2/star.png" alt="img" />
                    </div>
                    <div className="star2">
                      <img src="/img/home-2/star2.png" alt="img" />
                    </div>
                  </>
                )}
                {item.hasShape34 && (
                  <>
                    <div className="shape-3">
                      <img src="/img/home-2/team-shape2.png" alt="img" />
                    </div>
                    <div className="shape-4">
                      <img src="/img/home-2/team-shape3.png" alt="img" />
                    </div>
                  </>
                )}
                {item.hasShape5 && (
                  <div className="shape-5">
                    <img src="/img/home-2/team-shape4.png" alt="img" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
