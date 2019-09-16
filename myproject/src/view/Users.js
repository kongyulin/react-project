import React, { Component } from 'react';
import { Layout, Avatar, Icon, Collapse } from 'antd';
import 'antd/dist/antd.css'
import '../css/users.css'
import storeObj from '../store/stores.js'

import Collection1 from '../component/users/Collection1'
import Changepasword from '../component/users/Changepasword'

const { Header } = Layout;
const { Panel } = Collapse;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    fontSize:'20px'
};


class Users extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }

    render() {

        return (
            <div className='user' style={{ marginTop: '20px' }}>
                <Layout>
                    <Header
                        style={{
                            height: "260px",
                            backgroundColor: 'yellow',
                            backgroundImage: "url(http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg) ",
                            backgroundSize: "100% 100%"
                        }}
                    >
                        <Avatar
                            size={64}
                            icon="user"
                            src='http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg'
                            style={{ marginTop: '100px' }}
                        />

                        <div style={{ marginLeft: '20px' }}><h2 style={{ color: 'red' }}>{this.state.userData}</h2></div>

                    </Header>

                    <div style={{marginTop:'20px'}}>
                        <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            
                            <Panel header="修改密码" key="1" style={customPanelStyle}>
                                <Changepasword />
                            </Panel>

                            <Panel header="收藏列表" key="2" style={customPanelStyle}>
                                <Collection1 />
                            </Panel>
                        </Collapse>
                    </div>


                </Layout>
            </div>
        );
    }
}

export default Users;