/**
 * Created by hao.cheng on 2017/4/16.
 */
import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';

const FormItem = Form.Item;

@connect(({front})=>{
    return {front}
})

@Form.create()

export default class extends PureComponent {

    state = {
        loading:false
    }

    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        const { spinState } = nextProps.front;
        const { loading } = this.state;
        if(spinState != null && loading == true){
            this.setState({loading:false})
        }
        // return false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading:true
                })
                this.props.dispatch({
                    type:"user/login",
                    ...values
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            {/*
                                或 <a href="">现在就去注册!</a>
                           
                            <p>
                                <Icon type="github" onClick={this.gitHub} />(第三方登录)
                            </p>
                             */}
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}


