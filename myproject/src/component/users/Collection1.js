import React, { Component } from 'react';
import {  Card, Icon} from 'antd';
import 'antd/dist/antd.css'
import storeObj from '../../store/stores.js'
import $ from 'jquery'
const { Meta } = Card;

class Collection1 extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }

    componentDidMount() {
        let url = 'http://localhost:8081'
        $.post(url + '/userss', (response) => {
            let action = {
                type: 'COLLECTION_DATA',
                value: response
            }
            storeObj.dispatch(action);
        })
    }

    // 点击取消收藏
    deleteChange(id) {
        let url = 'http://localhost:8081'
        $.post(url + '/deteleCollection', { id }, (response) => {
            if (response.affectedRows) {
                alert('取消收藏')
                $.post(url + '/userss', (response) => {
                    let action = {
                        type: 'COLLECTION_DATA',
                        value: response
                    }
                    storeObj.dispatch(action);
                })
            } else {
                alert('取消失败')
            }
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'wrap' }}>
                {
                    this.state.collectionData.map((el) => {
                        return (
                            <div style={{ position: 'relative' }}>
                                <Card
                                    hoverable
                                    style={{ width: 240, margin: '10px 6px' }}
                                    cover={<img alt="example" src={el.img} style={{ width: '240px', height: '210px' }} />}
                                >
                                    <Meta title={el.title} />
                                    <Icon
                                        type="close-circle"
                                        style={{ fontSize: '18px', color: 'red', position: 'absolute', right: '-8px', top: '-8px' }}
                                        onClick={() => { this.deleteChange(el.id) }}
                                    />
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Collection1;