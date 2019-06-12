/**
 * Created by acer on 2018/3/19.
 */
import React, {PureComponent} from 'react';
import {Table} from 'antd';

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
                ],
                itemRender:this.itemRender,
                showTotal:this.showTotal,
                onChange:this.onChange,
                onShowSizeChange:this.onShowSizeChange
            },
            size: 'small', //Default Middle Small
            rowKey:'id'
        },
        dataSource:[],
        columns:[],
        "rows":10,
        "page":1,
    }

    componentWillMount(){
        this.setData(this.props)
    }

    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(nextProps){ 
        if(this.props !== nextProps){
            this.setData(nextProps)
        }        
    }

    setData = (data)=>{
        const {tableParameter,dataSource,columns,rows,page} = data
        this.setState({
            tableParameter:_.assign(this.state.tableParameter,tableParameter),
            dataSource,
            columns,
            rows:rows ? rows : this.state.rows,
            page:page ? page : this.state.page
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
        if(this.props.onPageQuery){
            this.props.onPageQuery(pageSize,page)
        }
       
    }
    //pageSize 变化的回调
    onShowSizeChange = (current, size)=>{
        if(this.props.onPageQuery){
            this.props.onPageQuery(size,current)
        }
    }

    render() {
        const {tableParameter,dataSource,columns} = this.state;
        return (
            <Table {...tableParameter} dataSource={dataSource} columns={columns} />
        );
    }
}

