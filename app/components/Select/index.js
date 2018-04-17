/**
 * Created by acer on 2018/3/19.
 */
import React, {PureComponent} from 'react';
import { Select} from 'antd';

const Option = Select.Option;

export default class extends PureComponent {
    state = {
    }

    componentWillMount(){
      
    }

    componentWillReceiveProps(nextProps){ 
      
    }

    render() {
        const {value,onChange,options,placeholder} = this.props;
        console.log(options)
        return (
            <Select
                style={{ width:180}}
                value={value}
                onChange={onChange} 
                placeholder={placeholder}
            >   
                {options && options.map((el,i)=>
                    <Option key={i} value={el.value}>{el.title}</Option>
                )}
            </Select>
        );
    }
}

