import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import './App.scss';
import PaymentForm from './PaymentForm';

function App({ location }) {
  const { state, discount } = queryString.parse(location.search);

  return (
    <div className="App">
      <div className="App-title">
        <h1>hyke</h1>
      </div>

      <PaymentForm state={state} discount={discount === 'ok'} />
    </div>
  );
}

export default withRouter(App);
