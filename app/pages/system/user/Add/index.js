/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Card,Icon,Tooltip,Modal,Form, Row, Col,TreeSelect ,Input,Select ,InputNumber,Button } from 'antd';
import BreadcrumbCustom from 'components/BreadcrumbCustom/';
import Link from 'components/Link/';
import styles from './style.scss';
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = TreeSelect.TreeNode;
const Search = Input.Search;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 10,
            offset: 6,
        },
    },
};

@connect(({user,role})=>{
    return {user,role}
})

@Form.create()

export default class extends PureComponent {

    state = {
        "id":"",
        "loginName":"",
        "loginPwd":"",
        "nickname":"",
        "roleIds":[],
        "roleNames":"",
        "email":"",
        "mobile":"",
        "mcomId":"",
        "deptId":"",
        "status":"",
        "isSuperAdmin":"",
        "isAdmin2":"",
        "operatorId":"",
        "userType":"1",
        "applicationIds":[],
        "tenantId":"",
        "userLineCodes":[]
    }


    componentWillMount(){
        let data = this.props.router.location.query;
        if(data.id){
  
            this.props.dispatch({
                type:"user/manager/queryUserById",
                id:data.id
            })

            if(data.tenantId){
                this.handleTenant(data.tenantId)
            }
            if(data.mcomId){
                this.queryDepartment(data.mcomId)
            }
        }

    }


    componentDidMount(){
        //商户列表
        this.props.dispatch({
            type:"user/tenant/queryTenantList",
            data:{
                "page":1,"rows":9999
            }
        })
        //事业线列表
        this.props.dispatch({
            type:"role/manager/queryCmsLines"
        })        
        //获取角色列表
        this.props.dispatch({
            type:"role/manager/roleQuery"
        })        
        //机构列表
        this.props.dispatch({
            type:"user/manager/queryMcomAll"
        })
 
    } 

    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps){ 
        if(this.props.user.info !== nextProps.user.info){
            let info = nextProps.user.info
            info.roleIds = info.roleIds.split(',')
            info.applicationIds = info.applicationIds.split(',')
            info.userLineCodes = info.userLineCodes.split(',')
            this.setState({
                ...info
            })
        }        
    }


    //添加或者修改
    userAddOfEdit = (e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            values.mcomId = this.state.mcomId;
            values.roleIds = this.state.roleIds.toString();
            values.applicationIds = this.state.applicationIds.toString();
            values.userLineCodes = this.state.userLineCodes.toString();
            if (!err) {
                this.setState({
                    ...values
                },()=>{
                    this.props.dispatch({
                        type:"user/manager/editUser",
                        data:{
                            ...this.state,
                        }
                    })
                })
            }
        });
    }

    handleTreeSelect = (type,value, label, extra)=>{
        if(value.length > 0){
            this.props.form.setFieldsValue({
                [type]:value
            });
            this.setState({
                [type]:value
            })
        }else{
            this.props.form.setFieldsValue({
                [type]:[]
            });
            this.setState({
                [type]:[]
            })
        }

    }

    //获取商户下的应用列表
    handleTenant = (tenantId)=>{
        this.props.dispatch({
            type:"user/app/queryAppList",
            tenantId
        })
    }

    //通过机构id 获取所属部门
    handleMcomId = (value, label, extra)=>{
        this.props.form.setFieldsValue({
            mcomId:value,
            deptId:"",
        });

        this.setState({
            mcomId:value,
            deptId:"",
        })
        this.queryDepartment(value);
    }

    //获取部门列表
    queryDepartment = (mcomId)=>{
        this.props.dispatch({
            type:"user/manager/queryDepartmentAll",
            mcomId
        })
    }

    //渲染菜单列表
    renderTreeNode = (data)=>{
        return data.map((el,k)=>{
            if(el.children){
                return(
                    <TreeNode value={el.mcomId} title={el.mcomFname} data={el} key={el.mcomId}>
                        {this.renderTreeNode(el.children)}
                    </TreeNode>
                )
            }
            return(
                <TreeNode value={el.mcomId} title={el.mcomFname} data={el} key={el.mcomId} />
            )
        })
    }


    render(){
        const {getFieldDecorator } = this.props.form;
        const {tenantList,appList,mcomList,departmentList} = this.props.user;
        const {lineList,allList} = this.props.role;
        const {id,loginName,loginPwd,nickname,roleIds,roleNames,email,mobile,mcomId,deptId,status,isSuperAdmin,isAdmin2,operatorId,userType,applicationIds,tenantId,userLineCodes} = this.state;

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="用户" second="用户管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="用户管理"  bordered={false}>

                                <Form onSubmit={this.userAddOfEdit}>
                    
                                    <FormItem
                                        {...formItemLayout}
                                        label="用户账号"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('loginName', {
                                            initialValue: loginName,
                                            rules: [{ required: true, message: '请输入用户账号!', whitespace: true }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>
                                    {id == "" &&
                                    <FormItem
                                        {...formItemLayout}
                                        label="账号密码"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('loginPwd', {
                                            initialValue: loginPwd,
                                            rules: [{ required: true, message: '请输入账号密码!', whitespace: true }]
                                        })(
                                            <Input type="password" />
                                        )}
                                    </FormItem>    
                                    }                                        
                                    <FormItem
                                        {...formItemLayout}
                                        label="用户姓名"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('nickname', {
                                            initialValue: nickname,
                                            rules: [{ required: true, message: '请输入用户姓名!', whitespace: true }]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>                                                                                       

                                    <FormItem
                                        {...formItemLayout}
                                        label="用户角色"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('roleIds',{
                                            initialValue: roleIds,
                                            rules: [{ required: true, message: '请选择用户角色!'}]
                                        })(
                                        <TreeSelect
                                            allowClear
                                            multiple
                                            showSearch={true}
                                            treeCheckable={true}
                                            placeholder="用户角色"
                                            onChange={(value, label, extra)=>this.handleTreeSelect('roleIds',value, label, extra)}
                                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                        >
                                            {allList.map((el,key)=>
                                                <TreeNode value={el.id} title={el.name} data={el} key={el.id} />
                                            )}
                                        </TreeSelect>
                                        )}
                                    </FormItem>                                        

                                    <FormItem
                                        {...formItemLayout}
                                        label="内外勤"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('userType', {
                                            initialValue: userType,
                                            rules: [{ whitespace: true }],
                                        })(
                                            <Select>
                                              <Option value="1">内勤</Option>
                                              <Option value="2">外勤</Option>
                                            </Select>
                                        )}
                                    </FormItem>                                    

                                    <FormItem
                                        {...formItemLayout}
                                        label="所属商户"
                                        placeholder="请选择"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('tenantId', {
                                            initialValue: tenantId,
                                            rules: [{ required: true, message: '请选择所属商户!', whitespace: true }],
                                        })(
                                            <Select
                                              onChange={this.handleTenant}
                                            >
                                                <Option  value="">请选择</Option>
                                              {tenantList.map((el,key)=>
                                                <Option key={key} value={el.tenantId}>{el.tenantName}</Option>
                                              )}
                                            </Select>
                                        )}
                                    </FormItem>

                                    <FormItem
                                        {...formItemLayout}
                                        label="所属应用"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('applicationIds',{
                                            initialValue: applicationIds,
                                        })(
                                            <TreeSelect
                                                allowClear
                                                multiple
                                                showSearch={true}
                                                treeCheckable={true}
                                                placeholder="请先选择商户"
                                                onChange={(value, label, extra)=>this.handleTreeSelect('applicationIds',value, label, extra)}
                                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                            >
                                                {appList.map((el,key)=>
                                                    <TreeNode value={el.applicationId} title={el.applicationName} data={el} key={el.applicationId} />
                                                )}
                                            </TreeSelect>
                                        )}
                                    </FormItem>  

                                    <FormItem
                                        {...formItemLayout}
                                        label="事业线"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('userLineCodes', {
                                            initialValue: userLineCodes
                                        })(
                                            <TreeSelect
                                                allowClear
                                                multiple
                                                showSearch={true}
                                                treeCheckable={true}
                                                placeholder="请选择"
                                                onChange={(value, label, extra)=>this.handleTreeSelect('userLineCodes',value, label, extra)}
                                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                            >
                                                {lineList.map((el,key)=>
                                                    <TreeNode value={el.lineCode} title={el.lineName} data={el} key={el.lineCode} />
                                                )}
                                            </TreeSelect>
                                        )}
                                    </FormItem>

                                    <FormItem
                                        {...formItemLayout}
                                        label="邮箱"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('email', {
                                            initialValue: email,
                                            rules: [{ type:"email" ,message: '请输入邮箱!', whitespace: true }],
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>  

                                    <FormItem
                                        {...formItemLayout}
                                        label="手机号码"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('mobile', {
                                            initialValue: mobile,
                                            rules: [
                                                {pattern:/^[0-9]{11}$/,message: '手机号必须为11数字!', whitespace: true },
                                                {validator: (rule, value, callback)=>{
                                                    if(value.indexOf('1') == 0){
                                                        callback()
                                                    }else{
                                                        callback("手机号格式错误！")
                                                    }
                                                }}
                                            ]
                                        })(
                                            <Input />
                                        )}
                                    </FormItem>  

                                    <FormItem
                                        {...formItemLayout}
                                        label="所属机构"
                                    >
                                        {getFieldDecorator('mcomId', {
                                            initialValue: mcomId,
                                            rules: [{ required: true,message: '请选择所属机构!', whitespace: true }],
                                        })(
                                            <TreeSelect
                                                allowClear
                                                placeholder="所属机构"
                                                onChange={this.handleMcomId}
                                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                            >
                                                {this.renderTreeNode(mcomList)}
                                            </TreeSelect>
                                        )}
                                    </FormItem>

                                    <FormItem
                                        {...formItemLayout}
                                        label="所属部门"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('deptId', {
                                            initialValue: deptId,
                                            rules: [{ required: true, message: '请选择所属机构!', whitespace: true }],
                                        })(
                                            <Select
                                               placeholder="请先选择所属机构"
                                               onChange={this.handleType}
                                            >   
                                              {departmentList && departmentList.map((el,key)=>
                                              <Option key={key} value={el.deptId}>{el.deptFname}</Option>
                                              )}
                                            </Select>
                                        )}
                                    </FormItem>
                                    
                                    <FormItem
                                        {...formItemLayout}
                                        label="用户状态"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('status', {
                                            initialValue: status,
                                            rules: [{ required: true, message: '请选择用户状态!', whitespace: true }],
                                        })(
                                            <Select
                                              onChange={this.handleType}
                                            >
                                              <Option value="1">有效</Option>
                                              <Option value="0">无效</Option>
                                            </Select>
                                        )}
                                    </FormItem>                                    
                                    <FormItem
                                        {...formItemLayout}
                                        label="系统管理员"
                                        hasFeedback
                                    >
                                        {getFieldDecorator('isSuperAdmin', {
                                            initialValue: isSuperAdmin,
                                            rules: [{ required: true, message: '请选择系统管理员!', whitespace: true }],
                                        })(
                                            <Select
                                              onChange={this.handleType}
                                            >
                                              <Option value="Y">是</Option>
                                              <Option value="N">否</Option>
                                            </Select>
                                        )}
                                    </FormItem>

                                    <FormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" size="large">
                                            {id ? "修改" : "添加"}
                                        </Button>
                                    </FormItem>
                                </Form>

                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

