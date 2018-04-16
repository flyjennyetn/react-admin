/**
 * Created by acer on 2018/3/19.
 */
import React, {PureComponent} from 'react';
import { DatePicker } from 'antd';

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
            <DatePicker defaultValue={moment(value)}  onChange={onChange} />
        );
    }
}

