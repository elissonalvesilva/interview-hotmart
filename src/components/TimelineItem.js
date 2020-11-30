import React from 'react';
import classnames from 'classnames';

import Card from './layout/Card';
import Strings from '../utils/strings';
import Accordion from './layout/Accordion';
import constants from '../utils/constants';

function TimelineItem({ item }) {
  const classNameStatus = (status) => {
    if (status) {
      return `item__status--${constants.AvailabledStatus[status]}`;
    }
    return 'item__status--reproved';
  };

  const EvaluationItem = () => {
    return (
      <div className="row item__evaluation">
        <div className="col-2">
          <div className="row">
            <div className="col-12">
              <div className="item__icon">
                <i className="fas fa-users" />
              </div>
            </div>
            <span className="col-12 item__date">
              {Strings.formartDate(item.cardDate)}
            </span>
          </div>
        </div>
        <div className="col-5">
          <label className="item__label">Tipo</label>
          <p className="item__description">
            Aprovação da Solicitação {item.author.name}
          </p>
        </div>
        <div className="col-3">
          <label className="item__label">Status</label>
          <span className={classnames('', classNameStatus(item.status))}>
            {Strings.capitalizeText(item.status)}
          </span>
        </div>
        <div className="col-2">
          <Accordion title="Ver aprovações" className="evaluation__accordion">
            <p>Aprovação 1</p>
          </Accordion>
        </div>
      </div>
    );
  };

  const SubmitedItem = () => {
    return (
      <div className="row item__submited-created">
        <div className="col-2">
          <div className="row">
            <div className="col-12 text-center">
              <div className="item__icon">
                <span className="icon__submited-created">*</span>
              </div>
            </div>
            <span className="col-12 item__date">
              {Strings.formartDate(item.cardDate)}
            </span>
          </div>
        </div>
        <div className="col-9">
          <label className="item__label">Tipo</label>
          <p className="item__description">
            Despesas enviadas para aprovação {item.author.name}
          </p>
        </div>
      </div>
    );
  };

  const CreatedItem = () => {
    return (
      <div className="row item__submited-created">
        <div className="col-2">
          <div className="row">
            <div className="col-12">
              <div className="item__icon">
                <span className="icon__submited-created">*</span>
              </div>
            </div>
            <span className="col-12 item__date">
              {Strings.formartDate(item.cardDate)}
            </span>
          </div>
        </div>
        <div className="col-9">
          <label className="item__label">Tipo</label>
          <p className="item__description">
            Despesas enviadas para aprovação {item.author.name}
          </p>
        </div>
      </div>
    );
  };

  const ExpenseItem = () => {
    return (
      <div className="row item__expense">
        <div className="col-2">
          <div className="row">
            <div className="col-12">
              <div className="item__icon">
                <i className="fas fa-concierge-bell" />
              </div>
            </div>
            <span className="col-12 item__date">
              {Strings.formartDate(item.cardDate)}
            </span>
          </div>
        </div>
        <div className="col-4">
          <label className="item__label">Tipo</label>
          <p className="item__description">
            {Strings.capitalizeText(item.expenseTypeCode)}
          </p>
        </div>
        <div className="col-4">
          <label className="item__label">Valor</label>
          <div className="row expense__value">
            <div className="col-12 value__item">
              <span className="value__amount-spent">
                {Strings.formatCurrency(item.amountSpent, item.currencyCode)}
              </span>
            </div>
            <div className="col-12 value__item value__total">
              <span>Valor da nota: </span>
              <span className="value__amount-total">
                {Strings.formatCurrency(item.amountTotal, item.currencyCode)}
              </span>
            </div>
          </div>
        </div>
        <div className="col-2 expense__invoice">
          <a href="/#">
            <i className="fas fa-receipt" /> Ver nota fiscal
          </a>
        </div>
      </div>
    );
  };

  const ComponentByType = () => {
    const component = {
      EVALUATION: () => <EvaluationItem />,
      ACCOUNTABILITY_SUBMITTED: () => <SubmitedItem />,
      ACCOUNTABILITY_CREATED: () => <CreatedItem />,
      EXPENSE: () => <ExpenseItem />,
    };

    return component[item.cardType]();
  };

  return (
    <>
      <Card className="col-12 timeline-app__item">{ComponentByType()}</Card>
    </>
  );
}

export default TimelineItem;
