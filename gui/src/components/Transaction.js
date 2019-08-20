import React from "react";
import { List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Transactions = (props) => {

        return (
              <div>
              <div>
            
             props.data.credits.transaction_credits

              </div>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={props.data.objects}
                
                renderItem={item => (
     
                  <List.Item
                    key={item.title}>

                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={`/transactions/${item.id}`}>{item.transaction_type} : Kshs{item.transaction_amount} Transaction Method({item.transaction_method})</a>}
                      description={item.bank_type}  
                    />
                    {item.transaction_description}
                  </List.Item>

                )}
              />
            </div>
      )
}

export default Transactions;