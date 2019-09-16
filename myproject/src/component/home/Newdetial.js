import React, { Component } from 'react';
import { Typography } from 'antd';
import 'antd/dist/antd.css'
import $ from 'jquery'
import storeObj from '../../store/stores.js'
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

class Newdetial extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }
    componentDidMount() {
        let detial_id = this.state.news_id
        let url = 'http://localhost:8081'
        $.post(url + '/newsdetial', { detial_id }, (response) => {
            let action = {
                type: 'DETIAL_DATA',
                value: response
            }
            storeObj.dispatch(action);
        })

    }

    collections(title, img, id) {
        let url = 'http://localhost:8081'
        if (this.state.flag) {
            this.state.flag = 0
            let action = {
                type: 'FLAG_DATA',
                value: this.state.flag
            }
            storeObj.dispatch(action);
            $.post(url + '/deteleCollection1', { id })

        } else if (!this.state.flag) {
            this.state.flag = 1;
            let action = {
                type: 'FLAG_DATA',
                value: this.state.flag
            }
            storeObj.dispatch(action);
            $.post(url + '/userlist', { id, title, img })
        }
    }


    render() {
        return (
            <div style={{ width: '840px', margin: '10px auto' }}>
                {this.state.detialData.map((el) => {
                    return (
                        <Typography>
                            <Title>{el.title1}</Title>
                            <div
                                onClick={() => { this.collections(el.title1, el.img1, el.id) }}
                                style={{ color: 'red', fontSize: '16px' ,marginBottom:'5px'}}
                            >
                                {this.state.flag ? '取消收藏' : '收藏'}
                            </div>
                            <Paragraph>{el.contain1}</Paragraph>
                            <Title level={2}>{el.title2}</Title>
                            <Paragraph>{el.contain2}</Paragraph>
                            <img src={el.img1} alt="" style={{ width: '500px', height: '300px' }} />
                            <Paragraph>{el.contain3}</Paragraph>
                            <img src={el.img2} alt="" style={{ width: '500px', height: '300px' }} />
                            <br />
                            <h3><Link to='/home'>返回首页</Link></h3>
                        </Typography>
                    )
                })}
            </div>
        );
    }
}

export default Newdetial;