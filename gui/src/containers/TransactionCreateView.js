import React from 'react';
import axios from 'axios';
import { Form, Input, Icon, Button ,Select} from 'antd';
import { connect } from "react-redux";

const FormItem = Form.Item;
const { Option } = Select;
class TransactionForm extends React.Component {
  state = {
    confirmDirty: false,
    bank_types: []
  };


      componentWillReceiveProps(newProps) {
        if (newProps.token) {
          axios.defaults.headers = {
          "Content-Type" : "application/json",
          Authorization : newProps.token
        }
          axios.get("http://127.0.0.1:8000/bank/api/bank-type/").then(res => {
            this.setState({
              bank_types: res.data
            });

          });    
        }
      }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
          const user =this.props.user;
          const postObj = {
            transaction_amount:values.amount,
            transaction_description:values.description,
            transaction_method:values.method,
            bank_type:values.account,
            transaction_type:values.transaction_type,
            user:user
          }
          axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
          axios.defaults.xsrfCookieName = "csrftoken";
          axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
          };
        axios.post("http://127.0.0.1:8000/bank/api/create/", postObj)
        .then(res => {
          if (res.status === 201) {
            this.props.history.push(`/`);
          }
        })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Transaction Account">
            {getFieldDecorator('account', {
              rules: [{ required: true, message: 'Please select your transaction account!' }],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="Savings">Savings</Option>
                <Option value="Current Account">Current Account</Option>
    
              </Select>,
            )}
          </Form.Item>

        <FormItem>
            {getFieldDecorator('amount', {
                rules: [{ required: true, message: 'Please input your transaction amount!' }],
            })(
                <Input prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Transaction Amount" />
            )}
        </FormItem>
          <FormItem>
            {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input your transaction description!' }],
            })(
                <Input prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Transaction Description" />
            )}
        </FormItem>
          <Form.Item label="Transaction Method">
            {getFieldDecorator('method', {
              rules: [{ required: true, message: 'Please select your transaction method!' }],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="Mpesa">Mpesa</Option>
                <Option value="Paypal">Paypal</Option>
                <Option value="Stripe">Stripe</Option>
              </Select>,
            )}
          </Form.Item>
        <Form.Item label="Transaction Type">
          {getFieldDecorator('transaction_type', {
            rules: [{ required: true, message: 'Please select your transaction type!' }],
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="credit">Credit</Option>
              <Option value="debit">Debit</Option>
            </Select>,
          )}
        </Form.Item>


        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Transact
        </Button>

        </FormItem>

      </Form>
    );
  }
}

const WrappedTransactionForm = Form.create()(TransactionForm);


const mapStateToProps = state => {
  return {
    token: state.token,
    user: state.user
  };
};

export default connect(mapStateToProps)(WrappedTransactionForm);