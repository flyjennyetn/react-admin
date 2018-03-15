/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Row,Col,Card,Table,Popconfirm, Button,Icon,Spin,Form,Input,Select} from 'antd';
import BreadcrumbCustom from 'components/BreadcrumbCustom/';
import * as cache from "utils/cache";
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    }
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 8,
        },
    }
};

@connect(({role,user})=>{
    return {role,user}
})

@Form.create()

export default class extends PureComponent {

    state = {
        tableParameter:{ //表格参数
            bordered: true,  //是否显示边框线
            pagination: {   //翻页参数
                showSizeChanger:true,  //显示翻页
                showQuickJumper:true,  //显示指定跳转
                pageSizeOptions:[       //每页显示条数
                    '10', 
                    '20', 
                    '30', 
                    '40',
                    '50',
                    '100'
                ]
            },
            size: 'middle', //default middle small
            rowKey:'id'

        },
        dataSource:[],
        columns:[ 
            {
              title: '序号',
              dataIndex: 'order',
              key: 'order',
            }, 
            {
              title: '商户名称',
              dataIndex: 'tenantName',
              key: 'tenantName',
            }, 
            {
              title: '用户名',
              dataIndex: 'loginName',
              key: 'loginName',
            },
            {
              title: '姓名',
              dataIndex: 'nickname',
              key: 'nickname',
            }, 
            {
              title: '角色',
              dataIndex: 'roleNames',
              key: 'roleNames',
              width: '30%',
            },
            {
              title: '用户状态',
              dataIndex: 'statusName',
              key: 'statusName',
            }, 
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <div>
                    <Button size='small' onClick={()=>this.onUserAddEdit(record)}>修改</Button>
                    <Popconfirm title="您确定要重置密码吗?" cancelText="取消" okText="确定" onConfirm={() => this.onResetPwd(record.id)}>
                        <Button size='small' type="danger">重置密码</Button>
                    </Popconfirm>
                </div>
              )
            }
        ],
        "rows":10,
        "page":1,

        "seekInfo":{
            "name":"",
            "tenantId":"",
            "roleIds":""
        }
    }

    componentWillMount(){
    }


    componentDidMount(){
        const {rows,page} = this.state;
        this.userPageQuery(rows,page)

        this.props.dispatch({
            type:"user/tenant/queryTenantList",
            data:{
                "page":1,
                "rows":9999
            }
        })        

        this.props.dispatch({
            type:"role/manager/roleQuery"
        })

    } 

    onUserAddEdit = (record)=>{
        this.props.router.push({
            pathname:'app/system/user/add',
            query:record
        })
    }

    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps){ 
        if(this.props.user.list !== nextProps.user.list){
            const { list,count} = nextProps.user
            this.setState({
                tableParameter:_.assign(this.state.tableParameter,{
                    pagination:{
                        total:count,
                        itemRender:this.itemRender,
                        showTotal:this.showTotal,
                        onChange:this.onChange,
                        onShowSizeChange:this.onShowSizeChange
                    }
                }),
                dataSource:list,
            })
        }        
    }

    // 获取数据
    userPageQuery = (rows,page)=>{
        this.setState({
            rows,page
        },()=>{
            this.props.dispatch({
                type:"user/manager/userPageQuery",
                data:{
                    rows,page,
                    ...this.state.seekInfo
                }
            })
        })
    }

    onResetPwd = (userId)=>{
        this.props.dispatch({
            type:"user/manager/resetPwd",
            userId
        })
    }

    expandedRowRender = (record) =>{ 
        return(
            <div>
                <Row><Col span={4}>所属机构:</Col><Col>{record.mcomFname}</Col></Row>
                <Row><Col span={4}>所属部门:</Col><Col>{record.deptFname}</Col></Row>
                <Row><Col span={4}>邮箱:</Col><Col>{record.email}</Col></Row>
                <Row><Col span={4}>手机号:</Col><Col>{record.mobile}</Col></Row>
            </div>
        )
    }

    //绑定搜索信息
    handleSeekInfo = (e,type)=>{
        let seekInfo = this.state.seekInfo;
        if(type != 'tenantId' && type != 'roleIds'){
            seekInfo[type] = e.target.value
        }else{
            seekInfo[type] = e
        }
        this.setState({
            seekInfo
        },()=>{
            this.forceUpdate()
        })
    }

    //自定义页码的结构
    itemRender = (current, type, originalElement)=> {
        return originalElement;
    }

    //用于显示数据总量和当前数据顺序
    showTotal = (total)=>{
        return "总记录: "+total+"  条";
    }

    //页码改变的回调，参数是改变后的页码及每页条数
    onChange = (page, pageSize)=>{
        this.userPageQuery(pageSize,page)
       
    }
    //pageSize 变化的回调
    onShowSizeChange = (current, size)=>{
        this.userPageQuery(size,current)
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { tenantList } = this.props.user;
        const {allList} = this.props.role;
        const {rows,page,tableParameter,columns,dataSource,seekInfo} = this.state
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="用户" second="用户管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="用户管理"  
                                    bordered={false} 
                                    extra={<Button type="primary" onClick={()=>this.onUserAddEdit()}>添加</Button>}>

                                    <div className="pb-m">
                                        <Form layout="inline" onSubmit={()=>this.userPageQuery(rows,page)}>

                                            <FormItem
                                                label="商户名称"
                                                hasFeedback
                                            >
                                                <Select
                                                    style={{ width:180}}
                                                    value={seekInfo.tenantId}
                                                    onChange={(e)=>this.handleSeekInfo(e,'tenantId')} 
                                                >
                                                    {tenantList.map((el,key)=>
                                                        <Option key={key} value={el.tenantId}>{el.tenantName}</Option>
                                                    )}
                                                </Select>
                                            </FormItem>

                                            <FormItem
                                                label="用户名"
                                                hasFeedback
                                            >
                                                <Input value={seekInfo.loginName} onChange={(e)=>this.handleSeekInfo(e,'loginName')} />
                                            </FormItem>                                            

                                            <FormItem
                                                label="姓名"
                                                hasFeedback
                                            >
                                                <Input value={seekInfo.nickname} onChange={(e)=>this.handleSeekInfo(e,'nickname')} />
                                            </FormItem>

                                            <FormItem
                                                label="邮箱"
                                                hasFeedback
                                            >
                                                <Input value={seekInfo.email} onChange={(e)=>this.handleSeekInfo(e,'email')} />
                                            </FormItem>

                                            <FormItem
                                                label="手机号"
                                                hasFeedback
                                            >
                                                <Input value={seekInfo.mobile} onChange={(e)=>this.handleSeekInfo(e,'mobile')} />
                                            </FormItem>

                                            <FormItem
                                                label="角色"
                                                hasFeedback
                                            >
                                                <Select
                                                    style={{ width:180}}
                                                    value={seekInfo.roleIds}
                                                    onChange={(e)=>this.handleSeekInfo(e,'roleIds')} 
                                                >
                                                    {allList.map((el,key)=>
                                                        <Option key={key} value={el.id}>{el.name}</Option>
                                                    )}
                                                </Select>
                                            </FormItem>




                                            <FormItem>
                                                <Button type="primary" htmlType="submit" >
                                                    查询
                                                </Button>
                                            </FormItem>
                                        </Form>
                                    </div>

                                <Table {...tableParameter} expandedRowRender={this.expandedRowRender} dataSource={dataSource} columns={columns} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
