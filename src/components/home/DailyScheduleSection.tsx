import React from "react";

export default function DailyScheduleSection() {
  return (
    <section className="schedule-section fix section-padding">
      <div className="vec-5 bz-gsap-animate-circle d-none d-xl-block">
        <img src="/img/home-1/vec5.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area bb-bottom align-items-end">
          <div className="section-title">
            <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Cronograma Diário</span>
            <h2 className="tx-title sec_title  tz-itm-title tz-itm-anim">
               Nosso Cronograma Diário
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
                    <h3>7:00 - 8:00</h3>
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
                    <h3>8:00 - 8:30</h3>
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
                    <h3>8:30 - 10:30</h3>
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
                    <h3>10:30 - 12:00</h3>
                    <p>
                      Desenvolvimento completo através de atividades programadas e dedicadas ao bem-estar do aluno.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* As outras tabs (Nursery e Kindergarten originais) podem ter as exatas mesmas divisões ou omitidas de refatoração neste passo inicial para manter pequeno. Se precisarem ser iguais, podemos repeti-las simplificadas, mas as omitirei aqui ou farei apenas um comentário se fosse um arquivo final de produção, porém incluirei para ficar igual ao original. */}
          <div id="Nursery" className="tab-pane fade">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="schedule-box-items">
                  <div className="bg-shape"></div>
                  <div className="icon">
                    <img src="/img/home-1/pocket-watch.png" alt="img" />
                  </div>
                  <div className="content">
                    <h3>7:00 - 8:00</h3>
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
                    <h3>8:00 - 8:30</h3>
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
                    <h3>8:30 - 10:30</h3>
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
                    <h3>10:30 - 12:00</h3>
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
                    <h3>7:00 - 8:00</h3>
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
                    <h3>8:00 - 8:30</h3>
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
                    <h3>8:30 - 10:30</h3>
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
                    <h3>10:30 - 12:00</h3>
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
  );
}
