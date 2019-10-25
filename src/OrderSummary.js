import React, { useState } from 'react';
import PropTypes from 'prop-types';

function OrderSummary({ CCN, name, expDate, CVC, state, discount }) {
  const [isAgree, setIsAgree] = useState(false);

  const stateObj = {
    ca: 'California',
    wa: 'Washington',
    fl: 'Florida',
    tx: 'Texas'
  };

  const servicesFee = 249;
  const discountFee = 70;
  const statefilingFee = 70;

  const totalServicesFee = discount ? servicesFee - discountFee : servicesFee;
  const totalFilingFee = discount
    ? statefilingFee - discountFee
    : statefilingFee;

  //if total fee < $0, then set it to $0
  const total =
    totalServicesFee + totalFilingFee < 0
      ? 0
      : totalServicesFee + totalFilingFee;

  const formattedServicesFee = `$${servicesFee.toFixed(2)}`;
  const formattedfilingFee = `$${statefilingFee.toFixed(2)}`;

  //if total fee < $0, then set it to $0
  const formattedTotalServicesFee = `$${(totalServicesFee < 0
    ? 0
    : totalServicesFee
  ).toFixed(2)}`;
  const formattedtotalFilingFee = `$${(totalFilingFee < 0
    ? 0
    : totalFilingFee
  ).toFixed(2)}`;

  const agree = !!CCN && !!name && !!expDate && !!CVC && isAgree;

  return (
    <div className="order-summary">
      <div className="order-summary-info">
        <p>Order summary</p>
        <hr />
        <div className="service-fee">
          <div>
            <p>
              Business managment services <a href="/">(details)</a>
            </p>
            <div>
              <span>{`${discount ? formattedServicesFee : ''}`}</span>
              <span>{formattedTotalServicesFee}</span>
            </div>
          </div>
          <div>
            <p>Provided by CFOAndrew APC</p>
            <p>/month</p>
          </div>
        </div>

        <div className="filing-fee">
          <div>
            <p>{stateObj[state] ? stateObj[state] : 'California'} filing fee</p>
            <div>
              <span>{`${discount ? formattedfilingFee : ''}`}</span>
              <span>{formattedtotalFilingFee}</span>
            </div>
          </div>
          <div>
            <p className="filing-fee-desc">
              This is a one time fee charged by the state and fully goes to
              them.
            </p>
          </div>
        </div>

        <hr />

        <div className="discount">
          Discount code <a href="/">(add)</a>
        </div>

        <hr />

        <div className="total">
          <div>
            <p>Total due today</p>
            <p>{`$${total.toFixed(2)}`}</p>
          </div>
          <p>{`After that $${total}/month`}</p>
        </div>
      </div>

      <div className="terms-and-submit">
        <div className="terms">
          <input
            type="checkbox"
            id="accept-term"
            className="checkBox"
            checked={isAgree}
            onChange={e => setIsAgree(e.target.checked)}
          />
          <label htmlFor="accept-term">
            <small>
              I read & agree Hyke <a href="/">Terms of Service</a> and{' '}
              <a href="/">Privacy Policy</a> and CFOAndrew{' '}
              <a href="/">Engagement Agreement</a>
            </small>
          </label>
        </div>
        <button type="submit" disabled={!agree}>
          Submit &#8594;
        </button>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  CCN: PropTypes.string,
  name: PropTypes.string,
  expDate: PropTypes.string,
  CVC: PropTypes.string,
  state: PropTypes.string,
  discount: PropTypes.bool
};

export default OrderSummary;
