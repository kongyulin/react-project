import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import $ from 'jquery'
import storeObj from '../../store/stores.js'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
  constructor(arg) {
    super(arg)
    this.state = storeObj.getState()
    storeObj.subscribe(() => {
        this.setState(storeObj.getState())
    })
}
  componentDidMount() {

    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 输入修改的内容和id==>修改标题
        let value = JSON.stringify(values)
        $.post('http://localhost:8081/change1', { value }, (response) => {
          if (response.affectedRows) {
            alert('修改成功')
            $.ajax({
              url: 'http://localhost:8081/news',
              type: 'POST',
              success: (data) => {
                let action = {
                  type: 'ADMINNEWS_DATA',
                  value: data
                }
                storeObj.dispatch(action);
              }
            })
          } else {
            alert('修改失败')
          }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;


    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('value1')(
            <Input
              style={{ color: 'rgba(0,0,0,.25)' }}
              placeholder="请输入修改好的标题"
            />,
          )}
        </Form.Item>

        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('value2')(
            <Input
              style={{ color: 'rgba(0,0,0,.25)' }}
              placeholder="请输入修改对应的id"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            修改
            </Button>
        </Form.Item>
      </Form>
    );
  }
}
const Change = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);



export default Change;