import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "antd";
class TransactionDetail extends React.Component {
  state = {
    transaction: {}
  };

    componentWillReceiveProps(newProps) {
      console.log(newProps)
      if (newProps.token) {
        axios.defaults.headers = {
        "Content-Type" : "application/json",
        Authorization : newProps.token
      }
       const transactionID = this.props.match.params.transactionID;
       
       axios.get(`http://127.0.0.1:8000/bank/api/${transactionID}`).then(res => {
        this.setState({
          transaction: res.data
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
          <p> Bank Account Type : {this.state.transaction.bank_type} </p>
          <p> Transaction Method : {this.state.transaction.transaction_method} </p>
          <p> Transaction Date : {this.state.transaction.date_time} </p>
          
        </Card>

      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(TransactionDetail);