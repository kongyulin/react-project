import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import $ from 'jquery'
import storeObj from "../../store/stores.js"

const { Search } = Input;

class Search2 extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            classData:storeObj.getState().classData 
        }
        storeObj.subscribe(()=>{
            this.setState({classData:storeObj.getState().classData })
        })
    }

    changeSearch(value) {
        let url = 'http://localhost:8081';
        $.post(url + '/newsearch', { value }, (response) => {
            let action={
                type:'CLASS_DATA',
                value:response
            }
            storeObj.dispatch(action);
        })
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

export default Search2;