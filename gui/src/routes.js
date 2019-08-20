import React from "react";
import { Route } from "react-router-dom";

import TransactionList from "./containers/TransactionListView";
import TransactionDetail from "./containers/TransactionDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import TransactionForm from "./containers/TransactionCreateView";
import SavingList from "./containers/TransactionSavingListView";
import CurrentAccountList from "./containers/TransactionCurrentAccountListView";



const BaseRouter = () => (
  <div>
    <Route exact path="/" component={TransactionList} />{" "}
    <Route exact path="/savings" component={SavingList} />{" "}
    <Route exact path="/currentaccount" component={CurrentAccountList} />{" "}
    <Route exact path="/transactions/:transactionID/" component={TransactionDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
    <Route exact path="/transaction/create/" component={TransactionForm} />{" "}
  </div>
);

export default BaseRouter;