
import React, {PureComponent} from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';

import Particles from 'react-particles-js';

const FormItem = Form.Item;

@connect(({gstates})=>{
    return {gstates}
})

@Form.create()

export default class extends PureComponent {

    state = {
        loading:false
    }

    componentWillMount() {
        this.props.dispatch({
            type:"gstates/manager/MenuQueryAll"
        })
        
    }
    componentWillReceiveProps(nextProps) {
        const { spinState } = nextProps.gstates;
        const { loading } = this.state;
        if(spinState != null && loading == true){
            this.setState({loading:false})
        }
        // return false
    }
    handleSubmit = (e) => {
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.setState({
        //             loading:true
        //         })
                this.props.dispatch({
                    type:"user/manager/sec2Login",
                    ...values
                })
        //     }
        // });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Particles
                    params={{
                        particles: {
                            "number": {
                              "value": 80,
                              "density": {
                                "enable": true,
                                "value_area": 800
                              }
                            },
                            "color": {
                              "value": "#fff"
                            },
                            line_linked: {
                                "color": "#fb405f"
                            }
                        },
                        "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                  "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                  },
                                  "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                  },
                                  "resize": true
                                },
                                "modes": {
                                  "grab": {
                                    "distance": 140,
                                    "line_linked": {
                                      "opacity": 1
                                    }
                                  },
                                  "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                  },
                                  "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                  },
                                  "push": {
                                    "particles_nb": 4
                                  },
                                  "remove": {
                                    "particles_nb": 2
                                  }
                                }
                            }
                    }}
                    style={{
                        position:"fixed",
                        background:"#000",
                        top:'0',
                        left:'0',
                        width: '100%',
                    }}
                 />

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
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}


