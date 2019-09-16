import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'
import $ from 'jquery'
import storeObj from '../../store/stores.js'

const columns = [
    {
        title: 'id号',
        dataIndex: 'id',
        width: 100,
    },
    {
        title: '标题',
        dataIndex: '',
        width: 100,
        key:'title',
        render:(record)=>{
            return <div style={{overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis',width:'100px'}}>{record.title}</div>
        }
    },
    {
        title: '图片',
        dataIndex:'' ,
        width: 100,
        key:'img',
        render:(record)=>{
            return <img src={record.img} style={{width:'50px',height:'30px'}}/>
        }
    },
    {
        title: '分类',
        dataIndex: 'classify',
        width: 100
    },
    {
        title: '关键词1',
        dataIndex: 'keyword1',
        width: 100
    },
    {
        title: '关键词2',
        dataIndex: 'keyword2',
        width: 100
    },
    {
        title: '关键词3',
        dataIndex: 'keyword3',
        width: 100
    },
    {
        title: '时间',
        dataIndex: 'time',
        width: 100
    },
    {
        title: '收藏数量',
        dataIndex: 'collection',
        width: 100
    }
];

class News extends Component {
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
            url: url + '/news',
            type: 'POST',
            success: (data) => {
                let action = {
                    type: 'ADMINNEWS_DATA',
                    value: data
                }
                storeObj.dispatch(action);
            }
        })

    }
    render() {
        return (
            <div>
                <div>
                    <Table
                        style={{ width: '1000px', marginLeft: '25px', marginTop: '15px' }}
                        columns={columns}
                        dataSource={this.state.adminData}
                        pagination={{ pageSize: 20 }}
                        scroll={{ y: 400 }}
                    />
                </div>
            </div>
        );
    }
}

export default News;