import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from './layout/Button';
import Card from './layout/Card';
import Conditional from './layout/Conditional';
import Input from './layout/Input';
import InputFile from './layout/InputFile';
import Select from './layout/Select';

import usePost from '../hooks/usePost';

import Schema from '../models/expense';

function Expense() {
  const formRef = useRef(null);
  const { send } = usePost(
    'https://api-front-end-challenge.buildstaging.com/api/expense/add'
  );
  // trocar antes de commitar
  const [shownExpeseForm, setShowExpenseForm] = useState(false);

  const showForm = () => {
    setShowExpenseForm(!shownExpeseForm);
  };

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Schema;
      await schema.validate(data, {
        abortEarly: false,
      });

      const result = await send(data);

      if (result) {
        console.log('success');
        window.location.reload();
      }
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          console.log(error);
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

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
            <Form onSubmit={handleSubmit} ref={formRef}>
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
                    <InputFile
                      type="file"
                      name="resourceUrl"
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
                      <label htmlFor="expenseTypeCode" className="form-label">
                        Tipo*
                      </label>
                      <Select
                        name="expenseTypeCode"
                        className="form-select form-control"
                        id="expenseTypeCode"
                        aria-label="Default select example"
                        options={[
                          { defaultValue: true, label: 'Selecione' },
                          { value: 'hotel-fee', label: 'Hotel Fee' },
                          { value: 'food', label: 'Food' },
                          { value: 'transport', label: 'Transport' },
                        ]}
                      />
                    </div>
                    <div className="col-6 pr-0 mb-3">
                      <label htmlFor="selectCurrency" className="form-label">
                        Moeda*
                      </label>
                      <Select
                        name="currencyCode"
                        className="form-select form-control"
                        id="selectCurrency"
                        aria-label="select currency"
                        options={[
                          { defaultValue: true, label: 'Selecione' },
                          { value: 'BRL', label: 'BRL' },
                          { value: 'USD', label: 'USD' },
                          { value: 'MXN', label: 'MXN' },
                        ]}
                      />
                    </div>
                    <div className="col-12 p-0 mb-3">
                      <label htmlFor="expenseTitle" className="form-label">
                        Titulo da despesa*
                      </label>
                      <Input
                        name="notes"
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
                        <Input
                          type="text"
                          name="cardDate"
                          className="form-control"
                          placeholder="00/00/00"
                        />
                      </div>
                    </div>
                    <div className="col-6 pl-0 mb-3">
                      <label htmlFor="amountTotal" className="form-label">
                        Valor da nota / cupom*
                      </label>
                      <Input
                        type="text"
                        name="amountTotal"
                        className="form-control"
                        id="amountTotal"
                      />
                    </div>
                    <div className="col-6 pr-0 mb-3">
                      <label htmlFor="amountSpent" className="form-label">
                        Valor a ser considerado*
                      </label>
                      <Input
                        name="amountSpent"
                        className="form-control"
                        type="text"
                        id="amountSpent"
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
            </Form>
          </div>
        </Card>
      </Conditional>
    </div>
  );
}

export default Expense;
