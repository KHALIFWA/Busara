import React from "react";
import { Route } from "react-router-dom";

import TransactionList from "./containers/TransactionListView";
import TransactionDetail from "./containers/TransactionDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={TransactionList} />{" "}
    <Route exact path="/transactions/:transactionID/" component={TransactionDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </div>
);

export default BaseRouter;