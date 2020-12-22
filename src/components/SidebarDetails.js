import React from 'react';

import Strings from '../utils/strings';

function SidebarDetails({ data }) {
  return (
    <section className="sidebar-app__details">
      <div className="details__content">
        <div className="details__balance">
          <label className="details__title">Saldo</label>
          <p className="details__balance-value">
            {Strings.formatCurrency(data.balance, data.currency?.code)}
          </p>
          <div className="divider details__divider" />
          <div className="row details__spent-received">
            <div className="col-6 details__spent">
              <div className="d-flex">
                <div className="spent__icon">
                  <i className="fas fa-arrow-up" />
                </div>
                <div className="d-flex flex-column spent__content">
                  <label className="spent__label m-0">Gastou</label>
                  <p className="spent__value">
                    {Strings.formatCurrency(
                      data.spend || 0.0,
                      data.currency?.code
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="divider spent-received__divider" />
            <div className="col-6 pl-0 details__received">
              <div className="d-flex">
                <div className="received__icon">
                  <i className="fas fa-arrow-down" />
                </div>
                <div className="d-flex flex-column received__content">
                  <label className="received__label m-0">Recebeu</label>
                  <p className="received__value">
                    {Strings.formatCurrency(data.received, data.currency?.code)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details__statement">
          <h3 className="statement__title">Extrato</h3>
          <div className="statement__table-value">
            <table>
              <thead>
                <tr>
                  <th className="table-value__title">Descrição</th>
                  <th className="table-value__title">Valor</th>
                </tr>
              </thead>
              <tbody className="table-value__statement-data">
                <tr className="statement-data__content">
                  <td className="statement-data__type">Despesas declaradas</td>
                  <td className="statement-data__value">
                    {Strings.formatCurrency(data.declared, data.currency?.code)}
                  </td>
                </tr>
                <tr>
                  <td className="statement-data__description">
                    Despesas declaradas pelo trooper
                  </td>
                </tr>
                <tr className="statement-data__content">
                  <td className="statement-data__type">Despesas aprovadas</td>
                  <td className="statement-data__value">
                    {' '}
                    {Strings.formatCurrency(data.approved, data.currency?.code)}
                  </td>
                </tr>
                <tr>
                  <td className="statement-data__description">
                    Despesas aprovadas pelo financeiro
                  </td>
                </tr>
                <tr className="statement-data__content">
                  <td className="statement-data__type">Pagamento realizado</td>
                  <td className="statement-data__value payment-made">
                    {Strings.formatCurrency(
                      data.made || 0.0,
                      data.currency?.code
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="statement-data__description">
                    Pagamento realizado pelo financeiro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarDetails;
