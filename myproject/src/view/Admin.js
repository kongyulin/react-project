import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Avatar } from 'antd';
import 'antd/dist/antd.css'
import '../css/admin/admin.css'
import Userinfor from '../component/admin/Userinfor'
import Productinfor from '../component/admin/Productinfor'
import Delete from '../component/admin/Delete'
import Change from '../component/admin/Change'
import Sort from '../component/admin/Sort'
import storeObj from '../store/stores.js'


class Admin extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }

    render() {

        return (
            <div className='admin'>

                <div className='layout'>
                    <div style={{ width: '100%', height: '10%', backgroundColor: 'gainsboro', display: 'flex', flexFlow: 'wrap', lineHeight: '57px' }}>
                        <Avatar
                            size="large"
                            icon="user"
                            style={{ marginTop: '4px', marginLeft: '4px' }}
                            src=''
                        />
                        <span>管理员</span>
                        {/* 删除 */}
                        <span style={{ marginLeft: '100px', marginTop: '10px' }} className='1'>
                            <Delete />
                        </span>

                        {/* 修改 */}
                        <span style={{ marginLeft: '80px', marginTop: '10px' }}>
                            <Change />
                        </span>

                        {/* 排序 */}
                        <span style={{ marginLeft: '80px' }}>
                            <Sort />
                        </span>
                    </div>
                    <div style={{ width: '100%', height: '100%' }} className='infor'>
                        <div style={{ width: '10%', height: '100%', backgroundColor: 'rgb(194, 189, 189)' }}>
                            <Link to='/admin/userinfor' style={{ width: '100%', height: '30px', textAlign: 'center' }}>
                                <h3>用户信息</h3>
                            </Link>
                            <br />
                            <Link to='/admin/productinfor' style={{ width: '100%', height: '30px', textAlign: 'center' }}>
                                <h3>新闻列表</h3>
                            </Link>
                        </div>
                        <div>
                            <Route path='/admin/userinfor' component={Userinfor}></Route>
                            <Route path='/admin/productinfor' component={Productinfor}></Route>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}

export default Admin;