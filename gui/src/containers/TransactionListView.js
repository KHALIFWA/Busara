import React from "react";
import axios from "axios";
import Transactions from "../components/Transaction";

class TransactionList extends React.Component {
	  state = {
		    transactions: []
		  };

		  componentDidMount() {
	
			 axios.get("http://127.0.0.1:8000/bank/api/").then(res => {
			      this.setState({
			        transactions: res.data
			      });
			      
			    });
			  }
	  render() {
	    return (
          <Transactions data={this.state.transactions}/>
	    );
	  }
	
}

export default TransactionList;