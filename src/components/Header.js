import React from 'react';
import { Form } from 'react-bootstrap';

import Card from './layout/Card';

function Header() {
  return (
    <Card className="header-app" title="Reembolso - Confraternização">
      <div className="row">
        <a className="header-app__edit" href="/#">
          <i className="fas fa-edit" />
        </a>
        <article className="col-7 pl-0 header-app__article">
          <div className="article__item row">
            <span className="col-3 item__label text-right">Nome</span>
            <span className="col-9 item__value">Backoffice Team</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">E-mail</span>
            <span className="col-9 item__value">backoffice@hotmail.com</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">
              Justificativa
            </span>
            <span className="col-9 item__value">1212</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">
              Finalidade
            </span>
            <span className="col-9 item__value">Confraternização</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">Projetos</span>
            <span className="col-9 item__value">Afiliados Brasil</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">Data</span>
            <span className="col-9 item__value">19/06/2020</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">
              Quantidade
            </span>
            <span className="col-9 item__value">2</span>
          </div>
          <div className="article__item row">
            <span className="col-3 pl-0 item__label text-right">
              Inclui Cafe da manhã
            </span>
            <span className="col-9 item__value">Não</span>
          </div>
        </article>
        <aside className="col-5 header-app__aside">
          <div className="row aside__content">
            <Form className="col-12 aside__attribution">
              <Form.Group controlId="form.attributionAnalyst">
                <Form.Label className="attribution__label">
                  Atribuir Analista
                </Form.Label>
                <Form.Control as="select">
                  <option value="" disabled>
                    Atribuir Analista
                  </option>
                  <option>Analist 1</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <div className="col-12 aside__cost-center">
              <span className="cost-center__label">Centro de custo</span>
              <span className="cost-center__value">
                100% - Approval CC Test
              </span>
            </div>
          </div>
        </aside>
      </div>
    </Card>
  );
}

export default Header;
