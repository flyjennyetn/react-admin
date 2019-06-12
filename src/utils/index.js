/**
 * Created by flyjennyetn on 2016-10-26.
 */
import moment from "moment";
import {message} from 'antd'

export const  globalMessage = (info,state = 'error') => {
  switch(state){
    case 'success':
      message.success(info);
      break;
    case 'warning':
      message.warning(info);
      break;
    default:
      message.error(info);
  }
}


export const randomNum = (n)=>{ 
    var t=''; 
    for(var i=0;i<n;i++){ 
        t+=Math.floor(Math.random()*10); 
    } 
    return t; 
}