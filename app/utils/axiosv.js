/**
 * Created by flyjennyetn on 2016-10-26.
 */
import axios from 'assets/js/axios'
import moment from 'moment'
import * as cache from "utils/cache";
import {PTGL180116} from './config'
import {randomNum,globalMessage} from './index'

let config = {
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
    timeout: 10000,
    responseType: 'json',
    withCredentials: true,
    transformRequest: [(data) => {
        let datum = {
            ...data.info,
            head:{
                "appid": PTGL180116.APPID,
                "openId":cache.get('userInfo') ? cache.get('userInfo').id : '',
                "transDate": moment().format('YYYYMMDD'),
                "transTime": moment().format('HHmmss'),
                "appkey": PTGL180116.APPKEY,
                "sign": "",
                ...data.params
            }
        }
        delete datum.head.requestUrl
        return JSON.stringify(datum)

    }],
    transformResponse: [(json)=> {
        // 这里提前处理返回的数据
        if (json.resultCode == '10') {
            return json.t
        } else {
            globalMessage(json.resultMsg);
            return false
        }

    }]
};


// axios.interceptors.response.use(function (res) {
//     //相应拦截器
//     return res;
// });

export function postApi(data) {
    let fullUrl = (data.params.requestUrl.indexOf('http') === -1) ? PTGL180116.API_HOST + data.params.requestUrl : data.params.requestUrl;
    return axios.post(fullUrl,data, config)
    .then(function(res){
        if(res.data){
            return res.data;
        }
        return res;
    }).catch(function(err){
        globalMessage("网络请求异常，请检查网络");
        return false;
    })
}