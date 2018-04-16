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
        const {value,onChange} = this.state;
        return (
            <Select
                style={{ width:180}}
                value={value}
                onChange={onChange} 
            >
                <Option value="1">是</Option>
                <Option value="2">否</Option>
            </Select>
        );
    }
}

