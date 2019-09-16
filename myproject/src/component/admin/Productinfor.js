import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import '../../css/admin/productinfor.css'
import $ from 'jquery'
import News from './News'

class NormalLoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let value = JSON.stringify(values)
                let url = 'http://localhost:8081'
                $.ajax({
                    url: url + '/newsdata',
                    data:{value},
                    type: 'POST',
                    success: (data) => {
                        if(data.code===1){
                            alert(data.msg)
                        }
                    }
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{marginLeft:'10px',marginTop:'10px'}}>
                {/* 输入信息 */}
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'1110px',height:'100px',display: 'flex',flexFlow: 'wrap'}}>
                    <div style={{ display: 'flex' }}>
                        新闻标题：
                    <Form.Item>
                            {getFieldDecorator('title')(
                                <Input
                                    type="title" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex',marginLeft:'10px' }}>
                        新闻图片：
                    <Form.Item>
                            {getFieldDecorator('img')(
                                <Input
                                    type="img" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex',marginLeft:'10px' }}>
                        新闻分类：
                    <Form.Item>
                            {getFieldDecorator('classify')(
                                <Input
                                    type="classify" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex',marginLeft:'10px' }}>
                        关键词一：
                    <Form.Item>
                            {getFieldDecorator('keyword1')(
                                <Input
                                    type="keyword1" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex' }}>
                        关键词二：
                    <Form.Item>
                            {getFieldDecorator('keyword2')(
                                <Input
                                    type="keyword2" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex',marginLeft:'10px' }}>
                        关键词三：
                    <Form.Item>
                            {getFieldDecorator('keyword3')(
                                <Input
                                    type="keyword3" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>

                    <div style={{ display: 'flex',marginLeft:'10px'}}>
                        发表时间：
                    <Form.Item>
                            {getFieldDecorator('time')(
                                <Input
                                    type="time1" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                   
                    <div style={{ display: 'flex',marginLeft:'10px' }}>
                        收藏数量：
                    <Form.Item>
                            {getFieldDecorator('collection')(
                                <Input
                                    type="collection" style={{ color: 'rgba(0,0,0,.25)' }} />
                            )}
                        </Form.Item>
                    </div>
                    <Form.Item style={{marginLeft:'10px'}}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            提交
          </Button>

                    </Form.Item>
                </Form>

                {/* 列表信息 */}
                <News />
            </div>
        );
    }
}
const Productinfor = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Productinfor;