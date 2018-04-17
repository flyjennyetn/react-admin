//接口配置文件

//名字  1.根据后台接口名   2.根据接口含义去取  3.根据项目名加接口名

import {PTGL180116} from './config'

export const uploadPic = {
	requestUrl:'/interface/uploadPic'
}

//登录接口
export const managerSec2Login = {
    requestUrl:'manager/sec2/login',
    transCode:'P00083'
}

//注销
export const managerLogout = {
    requestUrl:'manager/logout',
    transCode:'P00012'
}


//菜单管理
export const managerMenuQueryAll = {
    appid:PTGL180116.APPID,
    appkey:PTGL180116.APPKEY,
    requestUrl:PTGL180116.API_HOST+'manager/menuQueryAll',
    transCode:'P00009'
}

//获取数据源 
export const genGetDataSource = {
    requestUrl:'gen/getDataSource',
    transCode:'TOOL001'
}
//获取表信息 
export const genGetTableData = {
    requestUrl:'gen/getTableData',
    transCode:'TOOL002'
}
//获取列信息 
export const genGetColumnData = {
    requestUrl:'gen/getColumnData',
    transCode:'TOOL003'
}

//生成 
export const genGen = {
    requestUrl:'gen/gen',
    transCode:'TOOL004'
}

//模板组列表
export const templateGroupList = {
    requestUrl:'template/group/list',
    transCode:'TOOL005'
}

//模板组增加/修改
export const templateGroupSave = {
    requestUrl:'template/group/save',
    transCode:'TOOL006'
}

//模板组删除
export const templateGroupDelete = {
    requestUrl:'template/group/delete',
    transCode:'TOOL007'
}

//模板列表
export const templateList = {
    requestUrl:'template/list',
    transCode:'TOOL008'
}

//模板文件修改/增加
export const templateSave = {
    requestUrl:'template/save',
    transCode:'TOOL009'
}

//模板删除
export const templateDelete = {
    requestUrl:'template/delete',
    transCode:'TOOL010'
}

//存档列表 
export const logList = {
    requestUrl:'log/list',
    transCode:'TOOL011'
}

//存档详情
export const logDetail = {
    requestUrl:'log/detail',
    transCode:'TOOL012'
}
