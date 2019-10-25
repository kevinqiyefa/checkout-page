import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PaymentForm.scss';
import OrderSummary from './OrderSummary';
import {
  formatCreditCardNumber,
  formatExpirationDate
} from './utils/formatCChelper';

function PaymentForm({ state, discount }) {
  const [CCN, setCCN] = useState('');
  const [name, setName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [CVC, setCVC] = useState('');

  const handleNameChange = e => {
    //remove all the non-alphabetic characters and spaces
    const name = e.target.value.replace(/[^(.a-zA-Z)|( )]/g, '');
    setName(name);
  };

  const handleCVCchange = e => {
    //remove all the non-number
    const formattedCVC = e.target.value.replace(/[^(0-9)]/g, '');
    setCVC(formattedCVC);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const cardInfo = {
      CCN,
      name,
      expDate,
      CVC
    };
    alert(cardInfo);
  };

  return (
    <form className="paymentform" onSubmit={handleSubmit}>
      <div className="payment-info">
        <h1>Order</h1>
        <p>payment information</p>
        <hr />

        <div className="credit-card-number">
          <label>
            <div>Credit card number</div>
            <input
              type="text"
              name="credit-card-num"
              value={CCN}
              onChange={e => setCCN(formatCreditCardNumber(e.target.value))}
              maxLength="19"
            />
          </label>
        </div>

        <div className="name-on-card">
          <label>
            <div>Name on card</div>
            <input
              type="text"
              name="name-on-card"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>

        <div className="exp-cvc">
          <div className="expiration-date">
            <label>
              <div>Exp. date</div>
              <input
                type="text"
                name="expiration-date"
                value={expDate}
                onChange={e => setExpDate(formatExpirationDate(e.target.value))}
                maxLength="5"
              />
            </label>
          </div>

          <div className="cvc">
            <label>
              <div>CVC</div>
              <input
                type="text"
                name="cvc"
                value={CVC}
                onChange={handleCVCchange}
                maxLength="3"
              />
            </label>
          </div>
        </div>
      </div>
      <OrderSummary
        CCN={CCN}
        name={name}
        expDate={expDate}
        CVC={CVC}
        state={state}
        discount={discount}
      />
    </form>
  );
}

PaymentForm.propTypes = {
  state: PropTypes.string,
  discount: PropTypes.bool
};

export default PaymentForm;
