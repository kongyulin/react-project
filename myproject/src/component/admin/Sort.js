import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css'
import $ from 'jquery'
import storeObj from '../../store/stores.js'

class Sort extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }

    collection(){
        $.post('http://localhost:8081/collection1',(response) => {
            let action = {
                type: 'SORT_DATA',
                value: response
            }
            storeObj.dispatch(action);
            
          })
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>{this.collection()}}>降序排列</Button>
            </div>
        );
    }
}

export default Sort;