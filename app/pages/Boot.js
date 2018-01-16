import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd';
import * as cache from "utils/cache";
import SiderCustom from 'components/SiderCustom';
import HeaderCustom from 'components/HeaderCustom';

// import "assets/scss/fonts.scss";
// import "assets/scss/antd.scss";
// import "assets/scss/app.scss";
import 'assets/scss/index.scss';
import 'assets/scss/lib/animate.css';

const { Content, Footer } = Layout;

@connect(({gstates})=>{
    return {gstates}
})

export default class extends PureComponent {

    state = {
        collapsed: false, //控制菜单进出
    };
    componentWillMount() {
        if(cache.get('userInfo') == false){
            this.props.router.push('/login');
        }
        window.onresize = () => {
            this.getClientWidth();
        }
    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        this.props.dispatch({
            type:"gstates/set/isMobile",
            gstates:document.body.clientWidth <= 992
        })
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {router,gstates } = this.props;
        return (
            <Layout className="ant-layout-has-sider">
                {!gstates.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
              <Layout>
                <HeaderCustom gstates={gstates} toggle={this.toggle} collapsed={this.state.collapsed} router={router} path={this.props.location.pathname} />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  React-Admin ©2018 Created by flyjennyetn
                </Footer>
              </Layout>
                {
                    gstates.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                }
            </Layout>
        );
    }
}