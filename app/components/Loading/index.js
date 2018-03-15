/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React from "react";
import { Spin } from 'antd';

export default ({tip,spinning}) => {
    return spinning && 
    	    <div className="mask flex-wrp flex-center">
		        <Spin spinning={spinning} tip={tip || '正在加载'}/>
		    </div>
}