//接口配置文件

//名字  1.根据后台接口名   2.根据接口含义去取  3.根据项目名加接口名
import {KFPT180124} from './config'

export const vcodeGetImgVCode = {
    requestUrl: 'http://test.jklife.com:8888/api/micro-serv-share-app/vcode/getImgVCode',
    transCode: 'SC-VC-001',
    appid: 'SHARE-PC-CLIENT',
    appkey: 'u4y8qxg18v',
}


export const uploadPic = {
	requestUrl:'/interface/uploadPic'
}

//登录接口
export const managerSec2Login = {
    requestUrl:'manager/sec2/login',
    transCode:'P00083'
}

//菜单管理
export const managerMenuQueryAll = {
    requestUrl:'manager/menuQueryAll',
    transCode:'P00009'
}

//系统管理 
export const managerMenuQuery = {
    requestUrl:'manager/menuQuery',
    transCode:'P00008'
}


//保存菜单
export const managerMenuSave = {
    requestUrl:'manager/menuSave',
    transCode:'P00007'
}

//菜单删除
export const managerMenuDelete = {
    requestUrl:'manager/menuDelete',
    transCode:'P00006'
}

//查询所有角色
export const managerRoleQuery = {
    requestUrl:'manager/roleQuery',
    transCode:'P00000'
}

//分页查询角色
export const managerRolePageQuery = {
    requestUrl:'manager/rolePageQuery',
    transCode:'P00001'
}

//角色信息维护及菜单权限修改
export const managerSaveRoleMenu = {
    requestUrl:'manager/saveRoleMenu',
    transCode:'P00002'
}

//删除角色
export const managerDelRoleInfo = {
    requestUrl:'manager/delRoleInfo',
    transCode:'P00004'
}

//查询事业线列表
export const managerQueryCmsLines = {
    requestUrl:'manager/queryCmsLines',
    transCode:'P00077'
}

//用户列表查询
export const managerUserPageQuery = {
    requestUrl:'manager/userPageQuery',
    transCode:'P00014'
}

//根据用户ID查询用户信息
export const managerQueryUserById = {
    requestUrl:'manager/queryUserById',
    transCode:'P00017'
}


//用户重置密码
export const managerResetPwd = {
    requestUrl:'manager/resetPwd',
    transCode:'P00013'
}

//添加|修改 用户信息
export const managerEditUser = {
    requestUrl:'manager/editUser',
    transCode:'P00015'
}

//商户查询
export const tenantQueryTenantList = {
    requestUrl:KFPT180124.API_HOST+'tenant/queryTenantList',
    transCode:'O00009'
}

//商户下应用查询
export const appQueryAppList = {
    requestUrl:KFPT180124.API_HOST+'app/queryAppList',
    transCode:'O00013'
}

//查询所有机构信息
export const managerQueryMcomAll = {
    requestUrl:'manager/queryMcomAll',
    transCode:'P00042'
}

//根据机构查询全部部门
export const managerQueryDepartmentAll = {
    requestUrl:'manager/queryDepartmentAll',
    transCode:'P00062'
}



// users={
//     userPageQuery :{//用户列表查询
//         code:'P00014',
//         url:'manager/userPageQuery'
//     },
//     queryUserById :{//根据id查询用户信息
//         code:'P00017',
//         url:'manager/queryUserById'
//     },
//     editUser :{//添加|修改 用户信息
//         code:'P00015',
//         url:'manager/editUser'
//     },
//     deleteUser :{//删除用户
//         code:'P00016',
//         url:'manager/deleteUser'
//     },
//     resetPwd :{//重置密码
//         code:'P00013',
//         url:'manager/resetPwd'
//     },
//     queryRoleByAdmin2 :{//管理员用户角色查询
//         code:'P00019',
//         url:'manager/queryRoleByAdmin2'
//     },
//     queryAdmin2User :{//管理员映射列表查询
//         code:'P00018',
//         url:'manager/queryAdmin2User'
//     },
//     roleQuery :{//查询所有角色
//         code:'P00000',
//         url:'manager/roleQuery'
//     },
//     rolePageQuery :{//分页查询角色
//         code:'P00001',
//         url:'manager/rolePageQuery'
//     },
//     modifyRole :{//角色信息修改
//         code:'P00003',
//         url:'manager/modifyRole'
//     },
//     menuQuery :{//查询菜单
//         code:'P00008',
//         url:'manager/menuQuery'
//     },
//     saveRoleMenu :{//角色信息维护及菜单权限修改
//         code:'P00002',
//         url:'manager/saveRoleMenu'
//     },
//     delRoleInfo :{//删除角色
//         code:'P00004',
//         url:'manager/delRoleInfo'
//     },
//     queryMcomAll :{//查询所有机构信息-下拉列表
//         code:'P00042',
//         url:'manager/queryMcomAll'
//     },
//     querySysList :{//查询所有系统配置
//         code:'P00069',
//         url:'manager/querySysList'
//     },
//     syncOrgan :{//部门数据同步
//         code:'P00064',
//         url:'manager/syncOrgan'
//     },
//     saveMangeCom :{//保存机构
//         code:'P00057',
//         url:'manager/saveMangeCom'
//     },
//     deleteMangeCom :{//删除机构
//         code:'P00056',
//         url:'manager/deleteMangeCom'
//     },
//     queryDepartmentAll :{//查询全部部门
//         code:'P00062',
//         url:'manager/queryDepartmentAll'
//     },
//     saveDepartment :{//部门保存
//         code:'P00060',
//         url:'manager/saveDepartment'
//     },
//     deleteDepartment :{//部门删除
//         code:'P00059',
//         url:'manager/deleteDepartment'
//     },
//     queryDepartment :{//查询单个部门
//         code:'P00061',
//         url:'manager/queryDepartment'
//     },
//     querySysModule :{//portal系统模块查询
//         code:'P00020',
//         url:'manager/querySysModule'
//     },
//     menuSave :{//保存菜单
//         code:'P00007',
//         url:'manager/menuSave'
//     },
//     menuDelete :{//菜单删除
//         code:'P00006',
//         url:'manager/menuDelete'
//     },
//     changePwd :{//修改密码
//         code:'P00010',
//         url:'manager/changePwd'
//     },
//     queryReport :{//报表查询
//         code:'P00035',
//         url:'manager/queryReport'
//     },
//     exportValidate :{//导出校验
//         code:'P00068',
//         url:'manager/exportValidate'
//     },
//     exportReport :{//报表导出
//         code:'P00036',
//         url:'manager/exportReport'
//     },
//     exportReportOffline :{//报表离线导出
//         code:'P00037',
//         url:'manager/exportReportOffline'
//     },
//     exportReportOffline2 :{//报表离线导出
//         code:'P00070',
//         url:'manager/exportReportOffline2'
//     },
//     loadReport :{//报表加载
//         code:'P00034',
//         url:'manager/loadReport'
//     },
//     deleteBatchJob :{//删除定时调度配置接口
//         code:'P00074',
//         url:'batchJob/deleteBatchJob'
//     },
//     queryBatchJobList :{//查询定时任务列表
//         code:'P00072',
//         url:'batchJob/queryBatchJobList'
//     },
//     updateBatchJob :{//更新/新增定时调度配置接口
//         code:'P00073',
//         url:'batchJob/updateBatchJob'
//     },
//     menuAccessRecord :{//调用帆软之前调用
//         code:'P00076',
//         url:'menu/menuAccessRecord'
//     }
// };