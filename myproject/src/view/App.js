import React, { Component } from 'react';
import '../css/app.css'
import { Link } from "react-router-dom";
import storeObj from '../store/stores.js'

class App extends Component {
  constructor(arg) {
    super(arg)
    this.state = storeObj.getState()
    storeObj.subscribe(() => {
      this.setState(storeObj.getState())
    })
  }
  render() {
    return (
      <div className='infor-name'>

        <Link to="/home" style={{marginLeft:'40px',fontSize:'18px'}}>首页</Link> 
        <Link to="/detial" style={{marginLeft:'40px',fontSize:'18px'}}>分类搜索</Link>
        <Link to="/users" style={{marginLeft:'40px',fontSize:'18px'}}>个人中心</Link>

        <span style={{ float: 'right', marginRight: '40px' }}>
          <h3>欢迎，{this.state.userData}</h3>
        </span>
      </div>
    );
  }
}

export default App;
