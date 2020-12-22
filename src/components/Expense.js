import React, { useState } from 'react';
import Button from './layout/Button';
import Card from './layout/Card';

import Conditional from './layout/Conditional';

function Expense() {
  // trocar antes de commitar
  const [shownExpeseForm, setShowExpenseForm] = useState(true);

  const showForm = () => {
    setShowExpenseForm(true);
  };

  return (
    <div className="expense-app">
      <div className="expense__actions">
        <button type="button" className="add-receipt-button" onClick={showForm}>
          <i className="fas fa-receipt mr-2" />
          Adicionar despensas
        </button>
      </div>
      <Conditional condition={shownExpeseForm}>
        <Card className="expense__container" title="Nova despesa">
          <div className="expense__content">
            <form>
              <div className="row form__data">
                <div className="col-6 expense__upload">
                  <span className="upload__label-title">
                    Recibo, cupom ou nota fiscal*
                  </span>
                  <i className="fas fa-question-circle upload__icon-info" />
                  <div className="upload__form-control">
                    <label htmlFor="formFile" className="upload__label">
                      Selecione um arquivo do seu computador
                    </label>
                    <input
                      type="file"
                      className="form-control upload__input-file"
                      id="formFile"
                    />
                  </div>
                  <small className="upload__caption">
                    A imagem deve estar no formato JPG ou PNG.
                  </small>
                </div>
                <div className="col-5 expense__data">
                  <div className="row m-0">
                    <div className="col-6 p-0">
                      <label htmlFor="selectType" className="form-label">
                        Tipo*
                      </label>
                      <select
                        className="form-select form-control"
                        id="selectType"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Selecione</option>
                        <option value="hotel-fee">Hotel Fee</option>
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                      </select>
                    </div>
                    <div className="col-6 pr-0 mb-3">
                      <label htmlFor="selectType" className="form-label">
                        Moeda*
                      </label>
                      <select
                        className="form-select form-control"
                        id="selectType"
                        aria-label="select currency"
                      >
                        <option defaultValue>Selecione</option>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="MXN">MXN</option>
                      </select>
                    </div>
                    <div className="col-12 p-0 mb-3">
                      <label htmlFor="expenseTitle" className="form-label">
                        Titulo da despesa*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="expenseTitle"
                      />
                    </div>
                    <div className="col-12 p-0 mb-3">
                      <label htmlFor="basic-url" className="form-label">
                        Data do comprovante*
                      </label>
                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="far fa-calendar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="col-6 pl-0 mb-3">
                      <label htmlFor="expenseTitle" className="form-label">
                        Valor da nota / cupom*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="expenseTitle"
                      />
                    </div>
                    <div className="col-6 pr-0 mb-3">
                      <label htmlFor="expenseTitle" className="form-label">
                        Valor a ser considerado*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="expenseTitle"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="expense-form__actions">
                <Button type="button" className="cancel">
                  Cancelar
                </Button>
                <Button type="submit" className="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </Conditional>
    </div>
  );
}

export default Expense;
