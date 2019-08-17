import React from "react";
import axios from "axios";
import { Button, Card } from "antd";
class TransactionDetail extends React.Component {
  state = {
    transaction: {}
  };



  componentDidMount() {
       const transactionID = this.props.match.params.transactionID;
       
      axios.get(`http://127.0.0.1:8000/bank/api/${transactionID}`).then(res => {
      this.setState({
        transaction: res.data
      });
      
    });
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