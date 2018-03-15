import fetch from 'fetch-jsonp'
import moment from 'moment'
import * as cache from "utils/cache";
import {PTGL180116} from './config'
import {globalMessage} from './index'

export const callApi = (fullUrl, data = null) => {

  let opt = {
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
  }
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
  fullUrl+= '?info=' + JSON.stringify(datum);

  return fetch(encodeURI(fullUrl), opt)
    .then(response => response.json()
    .then(json => ({json,response})))
    .then(({json, response}) => {
        if (json.resultCode == '10') {
            return json.t
        } else {
            globalMessage(json.resultMsg);
            return false
        }
    })
    .catch((err)=>{
        globalMessage("网络请求异常，请检查网络");
        return false;
    })
}
export const postApi = (data) => {
  let fullUrl = (data.params.requestUrl.indexOf('http') === -1) ? PTGL180116.API_HOST + data.params.requestUrl : data.params.requestUrl;
  return callApi(fullUrl,data)
}
