import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import NormalLoginForm from './Login';
import RegistrationForm from './Signup';
const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
            var content;
            
      if (this.props.isAuthenticated) {     content = 
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link to="/">All Transactions</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/savings">Savings</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/currentaccount">Current Account</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/transaction/create/">New Transaction</Link>
                    </Menu.Item>

                    {
                    this.props.isAuthenticated ?

                    <Menu.Item key="5" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>
    
                    :
    
                    <Menu.Item key="5">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                The Busara Center for Behavioral Economics Bank App ©2019 Created by Brendah Khalifwa
                </Footer>
            </Layout>;
      } else {
        const path = window.location.pathname;
        if(path == '/login' || path == '/login/'){
        content = <div><NormalLoginForm /></div>;
        }else{
         content = <div><RegistrationForm /></div>;
        }
      }
        return (
        content
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));