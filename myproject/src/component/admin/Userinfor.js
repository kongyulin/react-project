import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'
import storeObj from '../../store/stores.js'

import $ from 'jquery'

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 100,
  },
  {
    title: '密码',
    dataIndex: 'password',
    width: 100,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 150
  },
  {
    title: '电话区号',
    dataIndex: 'prefix',
    width: 150
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    width: 150
  }
];

class Userinfor extends Component {
  constructor(arg) {
    super(arg)
    this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
  }
  componentDidMount() {
    let url = 'http://localhost:8081'
    $.ajax({
      url: url + '/userdata',
      type: 'POST',
      success: (data) => { 
        let action = {
          type: 'USERINFOR_DATA',
          value: data
      }
      storeObj.dispatch(action);
      }
    })

  }

  render() {
    return (
      <div>
        <Table
          style={{width:'1110px',marginLeft:'25px',marginTop:'40px'}}
          columns={columns}
          dataSource={this.state.usersData}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 400 }}
        />
      </div>
    );
  }
}

export default Userinfor;

