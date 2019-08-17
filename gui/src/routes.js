import React from "react";
import { Route } from "react-router-dom";

import TransactionList from "./containers/TransactionListView";
import TransactionDetail from "./containers/TransactionDetailView";


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={TransactionList} />
    <Route exact path="/:transactionID/" component={TransactionDetail} />
  </div>
);

export default BaseRouter;