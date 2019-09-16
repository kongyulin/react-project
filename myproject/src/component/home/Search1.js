import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'
import storeObj from "../../store/stores.js"

const { Search } = Input;

class Search1 extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            searchData:storeObj.getState().searchData 
        }
        storeObj.subscribe(()=>{
            this.setState({searchData:storeObj.getState().searchData })
        })

    }

    changeSearch(value) {
        let action={
            type:'KEYWORD_DATA',
            value:{data:value,code:1}
        }
        storeObj.dispatch(action);
        this.props.history.push({ pathname: '/detial'})
    }

    render() {
        return (
            <div style={{width:'840px',margin:"0 auto"}}>
                <Search
                    style={{ marginTop: '20px' }}
                    placeholder="请输入搜索内容"
                    onSearch={value => {this.changeSearch(value)}}
                    enterButton
                />
            </div>
        );
    }
}

export default withRouter(Search1);