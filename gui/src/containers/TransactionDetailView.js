import React from "react";
import axios from "axios";
import { Card } from "antd";
class TransactionDetail extends React.Component {
  state = {
    transaction: {}
  };

    componentWillReceiveProps(newProps) {
      if (newProps.token) {
        axios.defaults.headers = {
        "Content-Type" : "application/json",
        Authorization : newProps.token
      }
       const transactionID = this.props.match.params.transactionID;
       
       axios.get(`http://127.0.0.1:8000/bank/api/${transactionID}`).then(res => {
        this.setState({
          article: res.data
        });
      });    
      }
    }
  render() {
    return (
      <div>
      
        <Card title="Transaction History">
          <p> Transaction Type : {this.state.transaction.transaction_type} </p>
          <p> Transaction Description : {this.state.transaction.transaction_description} </p>
          <p> Transaction Amount : {this.state.transaction.transaction_amount} </p>
          <p> Transaction Date : {this.state.transaction.date_time} </p>
          
        </Card>

      </div>
    );
  }
}



export default TransactionDetail;