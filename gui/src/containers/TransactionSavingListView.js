import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import Transactions from "../components/Transaction";


class SavingList extends React.Component {
	  state = {
		    transactions: []
		  };

		  componentWillReceiveProps(newProps) {
		    if (newProps.token) {
		      axios.defaults.headers = {
		      "Content-Type" : "application/json",
		      Authorization : newProps.token
		    }
		    	axios.get(`http://127.0.0.1:8000/bank/api/savings/${newProps.user}`).then(res => {
			      this.setState({
			        transactions: res.data
			      });
			      
			    });    
		    }
		  }
	  render() {
	    return (
          <Transactions data={this.state.transactions}/>
	    );
	  }
	
}

const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user
  }
}
export default connect(mapStateToProps) (SavingList);