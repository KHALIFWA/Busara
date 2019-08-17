import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; 

import CustomLayout from './containers/Layout';
import TransactionList from './containers/TransactionListView';
function App() {
  return (
    <div className="App">
        <CustomLayout>
          <TransactionList/>
        </CustomLayout>
    </div>
  );
}

export default App;
