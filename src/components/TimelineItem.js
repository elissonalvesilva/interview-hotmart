import React from 'react';

import Card from './layout/Card';
import Strings from '../utils/strings';

function TimelineItem({ item }) {
  const EvaluationItem = () => {
    return (
      <div className="row item__evaluation">
        <div className="col-3">
          <div className="row">
            <div className="col-12 item__icon">
              <span className="icon__evaluation">*</span>
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

  const SubmitedItem = () => {
    return (
      <div className="row item__submited-created">
        <div className="col-3">
          <div className="row">
            <div className="col-12 item__icon">
              <span className="icon__submited-created">*</span>
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
        <div className="col-3">
          <div className="row">
            <div className="col-12 item__icon">
              <span className="icon__submited-created">*</span>
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
        <div className="col-3">
          <div className="row">
            <div className="col-12 item__icon">
              <span className="icon__expense">*</span>
            </div>
            <span className="col-12 item__date">
              {Strings.formartDate(item.cardDate)}
            </span>
          </div>
        </div>
        <div className="col-9">
          <label className="item__label">Tipo</label>
          <p className="item__description">Despesas enviadas para aprovação</p>
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
