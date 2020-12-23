import React from 'react';

import StringsFormat from '../utils/strings';

import useFetch from '../hooks/useFetchData';

import Card from './layout/Card';
import Conditional from './layout/Conditional';
import Loading from './layout/Loading';

function Header() {
  const { status, response } = useFetch(
    'https://api-front-end-challenge.buildstaging.com/api/header'
  );

  let managerData = '';
  let reviseData = '';
  let talentPartnerData = '';

  if (response.costCenters?.[0].manager?.name) {
    const { manager, percentage } = response.costCenters?.[0];

    managerData = `${percentage} % - ${manager?.name}`;
  }

  if (response.costCenters?.[0].reviser?.name) {
    const { reviser, percentage } = response.costCenters?.[0];

    reviseData = `${percentage} % - ${reviser?.name}`;
  }

  if (response.costCenters?.[0].talentPartner?.name) {
    const { talentPartner, percentage } = response.costCenters?.[0];

    talentPartnerData = `${percentage}% - ${talentPartner?.name}`;
  }

  if (!status) {
    return <Loading className="header-loading" />;
  }

  return (
    <Card className="header-app" title="Reembolso - Confraternização">
      <div className="row">
        <a className="header-app__edit" href="/#">
          <i className="fas fa-edit" />
        </a>
        <section className="col-12 col-sm-12 col-md-5 pl-0 header-app__section">
          <div className="section__content">
            <div className="details__item row">
              <span className="col-4 item__label text-right">Nome</span>
              <span className="col-8 item__value">
                {response.collaborator?.name}
              </span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">E-mail</span>
              <span className="col-8 item__value">
                {response.collaborator?.email}
              </span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">
                Justificativa
              </span>
              <span className="col-8 item__value">
                {response.justification}
              </span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">
                Finalidade
              </span>
              <span className="col-8 item__value">{response.purpose}</span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">
                Projetos
              </span>
              <span className="col-8 item__value">
                {response.project?.title}
              </span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">Data</span>
              <span className="col-8 item__value">
                {StringsFormat.formartDate(
                  response.accountabilityExtraInfo?.eventDate
                )}
              </span>
            </div>
            <div className="details__item row">
              <span className="col-4 pl-0 item__label text-right">
                Quantidade
              </span>
              <span className="col-8 item__value">
                {response.accountabilityExtraInfo?.amountOfPeople}
              </span>
            </div>
          </div>
        </section>
        <section className="col-12 col-sm-12 col-md-5 header-app__section">
          <div className="col-sm section__content section__cost-center">
            <div className="cost-center__details">
              <span className="cost-center__label">Centro de custo</span>
              <span className="cost-center__value">
                <Conditional condition={managerData}>{managerData}</Conditional>
              </span>
              <span className="cost-center__value">
                <Conditional condition={reviseData}>{reviseData}</Conditional>
              </span>
              <span className="cost-center__value">
                <Conditional condition={talentPartnerData}>
                  {talentPartnerData}
                </Conditional>
              </span>
            </div>
          </div>
        </section>
        <Conditional condition={response.fraternizationEducationBudget}>
          <section className="col-12 col-sm-12 col-md-2 header-app__section">
            <div className="row section__content education-budget__section">
              <div className="education-budget__details">
                <i className="fas fa-graduation-cap" />
                <p>
                  Esta solicitação será paga com o Budget de educação /
                  confraternização.
                </p>
              </div>
            </div>
          </section>
        </Conditional>
      </div>
    </Card>
  );
}

export default Header;
