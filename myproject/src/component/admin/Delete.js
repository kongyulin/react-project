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
        //根据关键词1删除
        let value = JSON.stringify(values)
        $.post('http://localhost:8081/delete1', { value }, (response) => {
          if (response.affectedRows) {
            alert('删除成功')
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
            alert('没有找到对应的关键词1')
          }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;


    const usernameError = isFieldTouched('username') && getFieldError('username');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('delete')(
            <Input style={{ color: 'rgba(0,0,0,.25)' }} />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            删除
            </Button>
        </Form.Item>
      </Form>
    );
  }
}
const Delete = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);



export default Delete;