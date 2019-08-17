import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) => {
  
        return (
                <Layout className="layout">
                  <Header>
                    <div className="logo" />
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{ lineHeight: '64px' }}
                    >
                      <Menu.Item key="1">Profile </Menu.Item>
                      <Menu.Item key="2">Transactions </Menu.Item>
                      <Menu.Item key="3">Logout </Menu.Item>
                    </Menu>
                  </Header>
                  <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                      <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>The Busara Center for Behavioral Economics API
 Created by Brendah Khalifwa</Footer>
                </Layout>
          );

    
}

export default CustomLayout;