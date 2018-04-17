/**
 * Created by acer on 2018/3/19.
 */
import React, {PureComponent} from 'react';
import {Input} from 'antd';

export default class extends PureComponent {
    state = {
        
    }

    componentWillMount(){
    }

    //在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    // componentWillReceiveProps(nextProps){ 
    
    // }


    render() {
        const {value,onChange,placeholder} = this.props;
        return (
            <Input value={value} onChange={onChange} placeholder={placeholder}/>
        );
    }
}

