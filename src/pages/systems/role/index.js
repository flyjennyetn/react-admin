/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Row,Col,Card,Table,Popconfirm, Button,Icon,Tree,Modal,Spin,Form,TreeSelect,Input,Select} from 'antd';
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

@connect(({role,menu})=>{
    return {role,menu}
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
            size: 'small', //Default Middle Small
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
              title: '角色代码',
              dataIndex: 'id',
              key: 'id',
            }, 
            {
              title: '角色名称',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '事业线',
              dataIndex: 'lineCodeNames',
              key: 'lineCodeNames',
            }, 
            {
              title: '备注',
              dataIndex: 'roleDesc',
              key: 'roleDesc',
            }, 
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <div>
                    <Button onClick={()=>this.onPrivilege('1',record.id)}>查看权限</Button>
                    <Button onClick={()=>this.onPrivilege('2',record.id)}>分配权限</Button>
                    <Button onClick={()=>this.onRoleVisible(record)}>修改</Button>
                    <Popconfirm title="确定要删除吗?" cancelText="取消" okText="确定" onConfirm={() => this.onDelRole(record.id)}>
                        <Button type="danger">删除</Button>
                    </Popconfirm>
                </div>
              )
            }
        ],
        "rows":10,
        "page":1,

        "roleVisible":false,
        "roleType":"",
        "roleInfo":{
            "id":"",
            "name":"",
            "roleDesc":"",
            "roleLineCodes":[]
        },

        "seekInfo":{
            "name":"",
            "lineCode":""
        },

        "roleIds":"",
        "menuVisible":false,
        "menuList":[],
        "checkable":false,
        "checkedKeys":[]
    }

    componentWillMount(){
    }


    componentDidMount(){
        const {rows,page} = this.state;
        this.rolePageQuery(rows,page)
        this.props.dispatch({
            type:"role/manager/queryCmsLines"
        })
    } 

    //显示权限
    onPrivilege = (queryStyle,roleIds)=>{
        this.setState({roleIds})
        this.props.dispatch({
            type:"menuManage/manager/MenuQuery",
            data:{
                queryStyle,
                roleIds
            }
        })
        this.setState({menuVisible:true,checkable:queryStyle == '1' ? false : true})
    }    

    //修改权限
    onEditPrivilege = ()=>{
        const {roleIds,checkedKeys} = this.state;
        this.setState({
            menuVisible:false,
            menuList:[]
        })
        this.props.dispatch({
            type:"role/manager/saveRoleMenu",
            data:{
               id: roleIds,
               menus:checkedKeys.toString()
            }
        })
    }  

    //渲染菜单列表
    renderTreeNode = (data)=>{
        const {checkable} = this.state;
        return data.map((el,k)=>{
            if(el.children.length > 0){
                return(
                    <Tree.TreeNode title={el.name} key={el.id} >
                        {this.renderTreeNode(el.children)}
                    </Tree.TreeNode>
                )
            }
            return(
                <Tree.TreeNode title={el.name} key={el.id} />
            )
        })
    }

    //设置复选框
    oncheckedCheckbox = (checkedKeys,e)=>{
        this.setState({checkedKeys:checkedKeys.checked})
    }

    //显示角色信息弹框
    onRoleVisible = (data)=>{
        console.log(data)
        let info = {
            roleVisible:true,
            roleType:data == '' ? 'add' : 'edit',
        }
        if(data){
            info.roleType = 'edit';
            info.roleInfo = {
                "id":data.id,
                "name":data.name,
                "roleDesc":data.roleDesc,
                "roleLineCodes":data.lineCodes.split(',')
            };
        }else{
            info.roleType = 'add';
            info.roleInfo = {
                "id":"",
                "name":"",
                "roleDesc":"",
                "roleLineCodes":[]
            };
        }
        this.setState({
            ...info
        })
    }

    //添加和修改角色信息
    onAddOrEditRole = (e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            values.userLineCodes = this.state.roleInfo.userLineCodes.toString();
            if (!err) {
                this.setState({
                    roleVisible:false,
                    roleInfo:_.assign(this.state.roleInfo,values)
                },()=>{
                    const {rows,page} = this.state;
                    this.props.dispatch({
                        type:"role/manager/saveRoleMenu",
                        rows,page,
                        data:{
                            ...this.state.roleInfo
                        }
                    })
                })
            }
        });
    }


    //事业线下拉框修改
    handleLineCodes = (value, label, extra)=>{
        if(value.length > 0){
            this.props.form.setFieldsValue({
                roleLineCodes:value
            });
            this.setState({
                roleInfo:_.assign(this.state.roleInfo,{roleLineCodes:value})
            })
        }else{
            this.props.form.setFieldsValue({
                roleLineCodes:[]
            });
            this.setState({
                roleInfo:_.assign(this.state.roleInfo,{roleLineCodes:[]})
            })
        }

    }

    //删除角色信息
    onDelRole = (id)=>{
        const {rows,page} = this.state;
        this.props.dispatch({
            type:"role/manager/delRoleInfo",
            rows,page,
            id
        })
    }


    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps){ 
        if(this.props.role.list !== nextProps.role.list){
            const { list,count} = nextProps.role
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

        if(this.props.menu.menuList !== nextProps.menu.menuList){
            const {menuList,checkedKeys} = nextProps.menu
            this.setState({
                menuList,
                checkedKeys
            })
        }

    }

    // 获取数据
    rolePageQuery = (rows,page)=>{
        const {name,lineCode} = this.state.seekInfo
        this.setState({
            rows,page
        },()=>{
            this.props.dispatch({
                type:"role/manager/rolePageQuery",
                data:{
                    rows,page,name,lineCode
                }
            })
        })
    }

    handleSeekInfo = (e,type)=>{
        let seekInfo = this.state.seekInfo;
        if(type == 'name'){
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
        this.rolePageQuery(pageSize,page)
       
    }
    //pageSize 变化的回调
    onShowSizeChange = (current, size)=>{
        this.rolePageQuery(size,current)
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const {rows,page,tableParameter,columns,dataSource,menuVisible,roleVisible,menuList,checkable,checkedKeys,roleInfo,roleType,seekInfo} = this.state
        const {lineList} = this.props.role;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="角色" second="角色管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="角色管理"  
                                    bordered={false} 
                                    extra={<Button type="primary" onClick={()=>this.onRoleVisible()}>添加</Button>}>

                                    <div className="pb-m">
                                        <Form layout="inline" onSubmit={()=>this.rolePageQuery()}>
                                            <FormItem
                                                label="角色名称"
                                                hasFeedback
                                            >
                                                <Input value={seekInfo.name} onChange={(e)=>this.handleSeekInfo(e,'name')} />
                                            </FormItem>

                                            <FormItem
                                                label="事业类型"

                                                hasFeedback
                                            >
                                                <Select
                                                    style={{ width:180}}
                                                    value={seekInfo.lineCode}
                                                    onChange={(e)=>this.handleSeekInfo(e,'lineCode')} 
                                                >
                                                    {lineList.map((el,key)=>
                                                        <Option key={key} value={el.lineCode}>{el.lineName}</Option>
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

                                <Table {...tableParameter} dataSource={dataSource} columns={columns} />
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Modal
                    visible={menuVisible}
                    okText="确定"
                    cancelText="取消"
                    onCancel={()=>this.setState({menuVisible:false,menuList:[]})}
                    onOk={this.onEditPrivilege} 
                    onCancel={()=>this.setState({menuVisible:false,menuList:[]})}
                    title="查看权限"
                >
                    <div className={`block ${menuList.length == 0 && 'pa-m'}`}>
                        <Spin delay="500" spinning={!menuList.length > 0} tip="Loading...">
                            <Tree
                                showLine
                                checkable={checkable}
                                defaultExpandAll
                                checkStrictly={true}
                                onCheck={this.oncheckedCheckbox}
                                checkedKeys={checkedKeys}
                              >
                                { this.renderTreeNode(menuList)}
                            </Tree>
                        </Spin>
                    </div>
                </Modal>


                <Modal
                    visible={roleVisible}
                    okText="确定"
                    cancelText="取消"
                    onCancel={()=>this.setState({roleVisible:false})}
                    footer={null}
                    title={`${roleType == 'add' ? "添加" : "修改"}角色信息`}
                >
                   <Form onSubmit={this.onAddOrEditRole}>

                        <FormItem
                            {...formItemLayout}
                            label="角色名称"
                            hasFeedback
                        >
                            {getFieldDecorator('name', {
                                initialValue: roleInfo.name,
                                rules: [{ required: true, message: '请输入角色名称!', whitespace: true }]
                            })(
                                <Input />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="事业线"
                            hasFeedback
                        >
                            {getFieldDecorator('roleLineCodes', {
                                initialValue: roleInfo.roleLineCodes
                            })(
                                <TreeSelect
                                    allowClear
                                    multiple
                                    showSearch={true}
                                    treeCheckable={true}
                                    placeholder="请选择"
                                    onChange={(value, label, extra)=>this.handleLineCodes(value, label, extra)}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                >
                                    {lineList.map((el,key)=>
                                        <TreeSelect.TreeNode value={el.lineCode} title={el.lineName} data={el} key={el.lineCode} />
                                    )}
                                </TreeSelect>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="备注"
                            hasFeedback
                        >
                            {getFieldDecorator('roleDesc', {
                                initialValue: roleInfo.roleDesc,
                                rules: [{  whitespace: true }],
                            })(
                                <Input type="textarea" rows={4} />
                            )}
                        </FormItem>    

                        <FormItem {...tailFormItemLayout}>
                            <Button size="large"  onClick={()=>this.setState({roleVisible:false})}>取消</Button>
                            <Button type="primary" htmlType="submit" size="large">
                                {roleType == 'add' ? "添加" : "修改"}
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>

            </div>
        )
    }
}

