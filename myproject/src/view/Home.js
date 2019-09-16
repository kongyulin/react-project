import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css'
import '../css/Home.css'
import axios from 'axios'

import Slider from '../component/home/Slider'
import Search from '../component/home/Search1'
import storeObj from '../store/stores.js'


class Home extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }
    componentDidMount() {
        let url = 'http://localhost:8081'

        // 新闻列表
        axios.post(url + '/newslist')
            .then((response) => {
                let action = {
                    type: 'NEWSLIST_DATA',
                    value: response.data
                }
                storeObj.dispatch(action);
            })
    }

    // 点击标题跳转到详情页面
    newChange(id){
        let action = {
            type: 'NEWDETIAL_DATA',
            value: id
        }
        storeObj.dispatch(action);
    }


    render() {

        return (
            <div>
                {/* 搜索栏 */}
                <Search />
                {/* 轮播图 */}
                <Slider />

                {/* 新闻列表 */}
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
                        dataSource={this.state.indexlistData}
                        renderItem={item => (
                            <List.Item
                                
                                key={item.title}
                                actions={[
                                    <span>
                                        <span style={{ marginRight: 20, color: 'red', border: '1px solid red' }}>{item.classify}</span>
                                        <span style={{ marginRight: 8 }}>{item.keyword1}</span>
                                        <span style={{ marginRight: 8 }}>{item.keyword2}</span>
                                        <span style={{ marginRight: 20 }}>{item.keyword3}</span>
                                        <span style={{ marginRight: 20 }}>{item.time}</span>

                                        {/* 收藏 */}
                                        <span>收藏人数：{item.collection}</span>
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
                                    title={<a href='#/newdetial' onClick={()=>{this.newChange(item.id)}}>{item.title}</a>}
                                />
                            </List.Item>
                        )}
                    />
                </div>

            </div>
        );
    }
}

export default Home;