import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'
import storeObj from "../../store/stores.js"
import $ from 'jquery'

class Newlist extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }
    componentDidMount() {
        let url = 'http://localhost:8081'

        if (this.state.searchData.code === 1) {
            // 首页传过来的关键词进行网络请求
            let value = this.state.searchData.data
            $.post(url + '/newsearch', { value }, (response) => {
                let action = {
                    type: 'CLASS_DATA',
                    value: response
                }
                storeObj.dispatch(action);
            })
        } else {
            // 新闻列表
            axios.post(url + '/newslist')
                .then((response) => {
                    let action = {
                        type: 'NEWS_DATA',
                        value: response.data
                    }
                    storeObj.dispatch(action);
                })
        }
    }
    render() {
        return (
            <div>
                <div className='newslist'>
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 8,
                        }}
                        dataSource={this.state.newslistData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <span>
                                        <span style={{ marginRight: 20, color: 'red', border: '1px solid red' }}>{item.classify}</span>
                                        <span style={{ marginRight: 8 }}>{item.keyword1}</span>
                                        <span style={{ marginRight: 8 }}>{item.keyword2}</span>
                                        <span style={{ marginRight: 20 }}>{item.keyword3}</span>
                                        <span style={{ marginRight: 8 }}>{item.time}</span>
                                    </span>
                                ]}
                                extra={
                                    <img
                                        width={200}
                                        height={108}
                                        alt="logo"
                                        src={item.img}
                                    />
                                }
                            >
                                <List.Item.Meta
                                    title={<a href={item.href}>{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default Newlist;