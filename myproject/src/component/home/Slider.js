import React, { Component } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'
import storeObj from '../../store/stores.js'

class Slider extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }
    componentDidMount() {
        let url = 'http://localhost:8081'
        // 轮播图
        axios.post(url + '/slider')
            .then((response) => {
                let action = {
                    type: 'IMG_DATA',
                    value: response.data
                }
                storeObj.dispatch(action);
            })
    }
    render() {
        return (
            <div>
                <Carousel autoplay>
                    {
                        this.state.imgData.map((el) => {
                            return (
                                <div key={el.id} className='slider'>
                                    <img src={el.img} alt="" />
                                    <h3>{el.title}</h3>
                                </div>)
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default Slider;