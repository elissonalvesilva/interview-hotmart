import React from 'react';

import Card from './layout/Card';

function Header() {
  return (
    <Card className="header-app" title="Reembolso - Confraternização">
      <div className="row">
        <a className="header-app__edit" href="/#">
          <i className="fas fa-edit" />
        </a>
        <section className="col-sm pl-0 header-app__details">
          <div className="details__item row">
            <span className="col-4 item__label text-right">Nome</span>
            <span className="col-8 item__value">Backoffice Team</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">E-mail</span>
            <span className="col-8 item__value">backoffice@hotmail.com</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">
              Justificativa
            </span>
            <span className="col-8 item__value">1212</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">
              Finalidade
            </span>
            <span className="col-8 item__value">Confraternização</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">Projetos</span>
            <span className="col-8 item__value">Afiliados Brasil</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">Data</span>
            <span className="col-8 item__value">19/06/2020</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">
              Quantidade
            </span>
            <span className="col-8 item__value">2</span>
          </div>
          <div className="details__item row">
            <span className="col-4 pl-0 item__label text-right">
              Inclui Cafe da manhã
            </span>
            <span className="col-8 item__value">Não</span>
          </div>
        </section>
        <section className="col-sm header-app__section">
          <div className="row section__content">
            <div className="col-12 section__cost-center">
              <span className="cost-center__label">Centro de custo</span>
              <span className="cost-center__value">
                100% - Approval CC Test
              </span>
            </div>
          </div>
        </section>
        <section className="col-sm header-app__section">
          <div className="row section__content">
            <i className="fas fa-graduation-cap" />
            <p>
              Esta solicitação será paga com o Budget de educação /
              confraternização.
            </p>
          </div>
        </section>
      </div>
    </Card>
  );
}

export default Header;
