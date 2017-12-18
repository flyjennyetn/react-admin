/**
 * Created by 叶子 on 2017/7/31.
 */
import { Component } from 'react';
import { connect } from 'react-redux';

@connect(({front})=>{
    return {front}
})

class AuthWidget extends Component {
    render() {
        return this.props.children(this.props.front.auth || {});
    }
}

