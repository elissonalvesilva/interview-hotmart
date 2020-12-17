import React, { useState } from 'react';
import Conditional from './layout/Conditional';

function Expense() {
  const [shownExpeseForm, setShowExpenseForm] = useState(false);

  const showForm = () => {
    setShowExpenseForm(true);
  };

  return (
    <div className="expense-app">
      <div className="expense__actions">
        <button type="button">Inserir notas em lote</button>
        <button type="button" onClick={showForm}>
          Adicionar despensas
        </button>
      </div>
      <Conditional condition={shownExpeseForm}>
        <div className="expense__container">
          <div className="row expense__content">
            <h2>Nova despesa</h2>
            <div className="col-6 expense__upload">
              <input type="file" />
            </div>
            <div className="col-6 expense__data">
              <form>
                <div className="mb-3">
                  <label htmlFor="selectType" className="form-label">
                    Tipo*
                  </label>
                  <select
                    className="form-select form-control"
                    id="selectType"
                    aria-label="Default select example"
                  >
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="expenseTitle" className="form-label">
                    Tipo de despesa*
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="expenseTitle"
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label htmlFor="expenseTitle" className="form-label">
                    Valor da nota / cupom*
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="expenseTitle"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expenseTitle" className="form-label">
                    Valor a ser considerado*
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="expenseTitle"
                  />
                </div>
                <div className="expense-form__actions">
                  <button type="button">Cancelar</button>
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Conditional>
    </div>
  );
}

export default Expense;
