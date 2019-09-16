import React, { Component } from 'react';
import $ from 'jquery'

import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import '../css/login.css'
import storeObj from '../store/stores.js'

class NormalLoginForm extends Component {
    constructor(arg) {
        super(arg)
        this.state = storeObj.getState()
        storeObj.subscribe(() => {
            this.setState(storeObj.getState())
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let value = JSON.stringify(values)
                // 登录信息提交
                $.post('http://localhost:8081/login', { value }, (response) => {
                    let history = this.props.history
                    if(response.code === 2){
                        history.push('/admin/userinfor')
                    }
                    else if (response.code === 1) {
                        alert('登录成功')
                        let action = {
                            type: 'USER_DATA',
                            value: response.username
                        }
                        storeObj.dispatch(action);
                        history.push('/home')
                    } else if (response.code === -1) {
                        alert(response.msg)
                        history.push('/register')
                    }else if(response.code === 0){
                        alert(response.msg)
                    }
                })
            }

        });

    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit} className="login-form" method='post'>
                    <h1 style={{ textAlign: 'center' }}>用户名登录</h1>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>

                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '378px' }}>
                            登录
          </Button>
                        <br />
                        Or <a href="#/register">没有账号，去注册</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login