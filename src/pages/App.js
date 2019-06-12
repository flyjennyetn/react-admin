import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { Layout } from 'antd';
import * as cache from "utils/cache";
import SiderCustom from 'components/HeaderCustom/SiderCustom/';
import HeaderCustom from 'components/HeaderCustom/';

import 'assets/scss/lib/animate.css';
import 'assets/scss/antd/index.less';
import "assets/scss/index.scss";

const { Content, Footer } = Layout;

@connect(({gstates,menu})=>{
    return {gstates,menu}
})

export default class extends PureComponent {

    state = {
        collapsed: false, //控制菜单进出
    };
    componentWillMount() {
        cache.set('userInfo',{"resultCode":"10","resultMsg":"交易成功","id":"200245","loginName":"zhangbaojun","loginPwd":null,"nickname":"张保军","status":"1","mobile":"","email":"","roleIds":"1","roleNames":"系统管理员","mcomId":"1000438","mcomCode":"86","deptId":"1000438","mcomFname":"君康人寿保险股份有限公司","deptFname":"君康人寿保险股份有限公司","tokenId":"1C0A9065C47B8D580B33C1CEC71C7F9B","sec":"1e60jqb5g8aqgx6","operatorId":null,"isSuperAdmin":"N","isAdmin2":"","userType":"0","applicationIds":null,"userLineCodes":null,"applicationList":[],"cmsLineList":[]})
        if(cache.get('userInfo') == false){
            this.props.router.push('/');
        }
        window.onresize = () => {
            this.getClientWidth();
        }
    }

    componentDidMount(){
        const {roleIds} = cache.get('userInfo');
        // const sysCode = cache.get('sysCode');
        // this.props.dispatch({
        //     type:"menuManage/manager/MenuQueryAll",
        //     roleIds:roleIds,
        //     sysCode:'100043'
        // })
    } 


    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        this.props.dispatch({
            type:"gstates/set/isMobile",
            isMobile:document.body.clientWidth <= 992
        })
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {router,gstates,menu} = this.props;
        return (
            <Layout className="ant-layout-has-sider">
                {!gstates.isMobile && <SiderCustom leftMenuList={menu.leftMenuList} path={this.props.location.pathname} collapsed={this.state.collapsed} />}
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
