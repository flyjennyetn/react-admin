/**
 * Created by hao.cheng on 2017/4/16.
 */
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd'

@connect(({front})=>{
    return {front}
})

export default class extends PureComponent {

    componentWillMount() {
        if(process.env.NODE_ENV == 'production'){
            console.log('生产')
        }else{
            console.log('测试')
        }
    }

    render() {
    	const {spinState} = this.props.front
        return (
            <div style={{height: '100%'}}>
            	{spinState && 
	            	<div className="mask flex-wrp flex-center">
				    	<Spin />
				  	</div>
			  	}
                {this.props.children}
            </div>
        )
    }
}

