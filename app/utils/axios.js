import axios from 'axios'
import Qs from 'qs'

let config = {
    baseURL: 'http://127.0.0.1:3030',
    transformRequest: [(data) =>{
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
        
    }],
    transformResponse: [(data)=> {
        // 这里提前处理返回的数据
        return data
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
};

axios.interceptors.response.use(function(res){
    //相应拦截器
    return res.data;
});

export function get(url, data) {
    // let fullUrl = url+'?header=' + JSON.stringify(data.header) + '&' + 'info=' + JSON.stringify(data.info);
    return axios.get(fullUrl, config)
}

export function post(url, data) {
    return axios.post(url, data, config)
}