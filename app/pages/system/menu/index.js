/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Card,Tooltip,Modal,Form, Row, Col, Tree ,TreeSelect ,Input,Select ,InputNumber,Button } from 'antd';
import BreadcrumbCustom from 'components/BreadcrumbCustom/';
import Link from 'components/Link/';
import Icons from './icons';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;

const getParentKey = (name, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children.length > 0) {
      if (node.children.some(item => item.name === name)) {
        parentKey = node.name;
      } else if (getParentKey(name, node.children)) {
        parentKey = getParentKey(name, node.children);
      }
    }
  }
  return parentKey;
};

const gridStyle = {
  width: '50%'
};

@connect(({menu})=>{
    return {menu}
})

@Form.create()

export default class extends PureComponent {

    state = {
        parentValue:undefined,
        menuData:{
            id: null,
            name: "",
            url: "",
            icon: "",
            iconsName:"",
            parentId:"1187",
            menuLevel:"",
            menuOrder:"",//菜单顺序
            sysModuleCode:"",
            type:"1",
            sysModuleCode:"100043",
            sysModuleName:"共享运营WEB端"
        },
        iconVisible:false,
        expandedKeys: [],
        searchValue: '',
        autoExpandParent: true,
    }


    componentWillMount(){
    }


    componentDidMount(){
        // console.log(this.props.menuManage)
        this.managerMenuQuery()
    } 

    //左侧目录是否展开
    onExpand = (expandedKeys) => {
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
    }

    //左侧目录搜索
    searchOnChange = (e) => {
        const {menuList} = this.props.menu;
        const value = e.target.value;
        const expandedKeys = menuList.map((item) => {
          if (item.name.indexOf(value) > -1) {
            return getParentKey(item.name, menuList);
          }
          return null;
        }).filter((item, i, self) =>{ 
            return item && self.indexOf(item) === i
        });
        this.setState({
          expandedKeys,
          searchValue: value,
          autoExpandParent: true,
        });
    }

    //左侧目录点击渲染右侧表单
    onSelect = (selectedKeys, info) => {
        const {menuData} = this.state;
        const { id,name,url,icons,parentId,menuLevel,menuOrder } = info.node.props.data;

        this.props.form.setFieldsValue({
          name,url,menuOrder,iconsName:""
        });
        this.setState({
            parentValue:name,
            menuData:_.assign(menuData,{id,name,url,icon:icons,parentId,menuLevel,menuOrder})
        })
    }

    //右侧菜单选择
    setParentId = (value, label, extra)=>{
        const {menuData} = this.state;
        let id = '';
        let menuLevel = '';
        if(value){
            id = extra.triggerNode.props.data.id
            menuLevel = extra.triggerNode.props.data.menuLevel
        }
        this.setState({
            parentValue:value ? value : undefined,
            menuData:_.assign(menuData,{
                parentId:value ? id : '1187',
                menuLevel:value ? parseInt(menuLevel)+1 : menuData.menuLevel
            })
        })
    }

    //渲染菜单列表
    renderTreeNode = (data,searchValue,type)=>{
        if(type == 'Tree'){
            return data.map((el,k)=>{
                const index = el.name.indexOf(searchValue);
                const beforeStr = el.name.substr(0, index);
                const afterStr = el.name.substr(index + searchValue.length);
                const name = index > -1 ? (
                    <span>
                      {beforeStr}
                      <span style={{ color: '#f50' }}>{searchValue}</span>
                      {afterStr}
                    </span>
                ) : <span>{el.name}</span>;
                if(el.children.length > 0){
                    return(
                        <Tree.TreeNode title={name} data={el} value={el.id} key={el.id}>
                            {this.renderTreeNode(el.children,searchValue,type)}
                        </Tree.TreeNode>
                    )
                }
                return(
                    <Tree.TreeNode title={name} data={el} value={el.id} key={el.id} />
                )
            })
        }else{
            return data.map((el,k)=>{
                if(el.children.length > 0){
                    return(
                        <TreeSelect.TreeNode value={el.id} title={el.name} data={el} key={el.id}>
                            {this.renderTreeNode(el.children,searchValue,type)}
                        </TreeSelect.TreeNode>
                    )
                }
                return(
                    <TreeSelect.TreeNode value={el.id} title={el.name} data={el} key={el.id} />
                )
            })
        }

    }

    //目录icon切换
    handleGetIcon= (e,className,icon,iconsName)=>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        let  node = e.currentTarget || e.srcElement||e.target||e.toElement;
        const {menuData} = this.state;
        // console.log(text)
        this.props.form.setFieldsValue({
          icon:text,
          iconsName
        });
        this.setState({
            iconVisible:false,
            menuData:_.assign(menuData,{icon:text,iconsName})
        })
    }
    //目录类型切换
    handleType = (type)=>{
        const {menuData} = this.state;
        this.props.form.setFieldsValue({
          type
        });
        this.setState({
            menuData:_.assign(menuData,{type})
        })
    }

    //查询目录
    managerMenuQuery =()=>{
        this.props.dispatch({
            type:"menuManage/manager/MenuQuery"
        })
    }
    //修改和添加目录
    munuAdd = (e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.setState({
                    menuData:_.assign(this.state.menuData,values)
                },()=>{
                    this.props.dispatch({
                        type:"menuManage/manager/menuSave",
                        data:{
                            ...this.state.menuData
                        }
                    })
                })
            }
        });
    }
    //删除目录
    munuDelete = ()=>{
        this.props.dispatch({
            type:"menuManage/manager/menuDelete",
            id:this.state.menuData.id
        })
    }    
    //重置
    munuReset = ()=>{
        this.props.form.resetFields();
        this.setState({
            parentValue:undefined,
            menuData:{
                id: null,
                name: "",
                url: "",
                icon: "",
                iconsName:"",
                parentId:"1187",
                menuLevel:"",
                menuOrder:"",//菜单顺序
                sysModuleCode:"",
                type:"1",
                sysModuleCode:"100043",
                sysModuleName:"共享运营WEB端"
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const {menuList} = this.props.menu;
        const {autoExpandParent,expandedKeys,searchValue,iconVisible,menuData,parentValue} = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
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
            },
        };

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="菜单" second="菜单管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="菜单管理"  bordered={false}>

                                <Card.Grid style={gridStyle}>
                                {/*
                                    <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.searchOnChange} />

                                */}
                                    {
                                        menuList && 
                                        <Tree
                                            showLine
                                            onExpand={this.onExpand}
                                            expandedKeys={expandedKeys}
                                            autoExpandParent={autoExpandParent}
                                            onSelect={this.onSelect}
                                          >
                                            { this.renderTreeNode(menuList,searchValue,'Tree')}
                                        </Tree>
                                    }
                                </Card.Grid>                                

                                <Card.Grid style={gridStyle}>
                                    <Form onSubmit={this.munuAdd}>
                                        {!menuData.id && menuList && 
                                        <FormItem
                                            {...formItemLayout}
                                            label="目录列表"
                                        >
                                            <TreeSelect
                                                showSearch
                                                allowClear
                                                placeholder="顶级目录"
                                                value={parentValue}
                                                onChange={this.setParentId}
                                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                
                                            >
                                                { this.renderTreeNode(menuList,searchValue,'TreeSelect')}
                                            </TreeSelect>
                                        </FormItem>
                                        }
                                        <FormItem
                                            {...formItemLayout}
                                            label="菜单名称"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('name', {
                                                initialValue: menuData.name,
                                                rules: [{ required: true, message: '请输入菜单名称!', whitespace: true }]
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>

                                        <FormItem
                                            {...formItemLayout}
                                            label="菜单图标"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('iconsName', {
                                                initialValue: menuData.iconsName,
                                                rules: [{ required: true, message: '请选择菜单图标!' }],
                                            })(
                                                <Input 
                                                    onClick={()=>this.setState({iconVisible:true})}
                                                    prefix={<i className={`Hui-iconfont`}>{menuData.icon}</i>} 
                                                    placeholder={menuData.iconsName} 
                                                    readOnly="readOnly" />
                                            )}
                                        </FormItem>

                                        <FormItem
                                            {...formItemLayout}
                                            label="菜单顺序"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('menuOrder', {
                                                initialValue: menuData.menuOrder,
                                                rules: [{ required: true, message: '请选择菜单图标!' }],
                                            })(
                                                <Input 
                                                    type='number'
                                                    min={1} 
                                                    max={999}
                                                    />
                                                     
                                            )}
                                        </FormItem>

                                        <FormItem
                                            {...formItemLayout}
                                            label="菜单地址"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('url', {
                                                initialValue: menuData.url,
                                                rules: [{ required: true,message: '请输入菜单地址!', whitespace: true }],
                                            })(
                                                <Input />
                                            )}
                                        </FormItem>                                        

                                        <FormItem
                                            {...formItemLayout}
                                            label="菜单类型"
                                            hasFeedback
                                        >
                                            {getFieldDecorator('type', {
                                                initialValue: menuData.type,
                                                rules: [{ required: true, message: '请选择菜单类型!', whitespace: true }],
                                            })(
                                                <Select
                                                  onChange={this.handleType}
                                                >
                                                  <Option value="1">系统内</Option>
                                                  <Option value="2">系统外</Option>
                                                </Select>
                                            )}
                                        </FormItem>

                                        <FormItem {...tailFormItemLayout}>
                                            {menuData.id && 
                                                <Button type="danger" onClick={this.munuDelete} size="large">删除</Button>
                                            }
                                            <Button type="dashed" onClick={this.munuReset} size="large">重置</Button>
                                            <Button type="primary" htmlType="submit" size="large">
                                                {menuData.id ? "修改" : "添加"}
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </Card.Grid>

                            </Card>
                        </div>
                    </Col>

                </Row>

                <Icons
                    visible={iconVisible}
                    onCancel={()=>this.setState({iconVisible:false})}
                    onClick={(e,className,icon,iconsName)=>this.handleGetIcon(e,className,icon,iconsName)}
                    footer={null}
                    title="图标"
                />

            </div>
        )
    }
}

