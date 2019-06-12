
/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {put,call,fork} from 'redux-saga/effects';
// import {globalMessage} from "utils/";
// import {postApi} from "utils/axios";
// import * as jsonp from "utils/jsonp";
// import {managerQueryUserById,managerEditUser,managerSec2Login,managerUserPageQuery,tenantQueryTenantList,managerResetPwd,appQueryAppList,managerQueryMcomAll,managerQueryDepartmentAll} from "service/service";
// import * as cache from "utils/cache";

function getJsonTree(menuList){  
  let temp = {};  
  let ans = [];  
  for(let i in menuList){  
    temp[menuList[i].mcomId] = menuList[i];  
  }  
  for(let i in temp){  
    if(temp[temp[i].parentMcomId] != undefined) {  
      if(!temp[temp[i].parentMcomId].children) {  
        temp[temp[i].parentMcomId].children = [];  
      }  
      temp[temp[i].parentMcomId].children.push(temp[i]);
    } else {  
      ans.push(temp[i])
    }  
  }  
  return ans;  
}  


function* userManagerSec2Login({username,password}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(postApi,{
    //     params: managerSec2Login,
    //     info:{
    //         loginName:username,
    //         loginPwd:password
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});

    // if(response && response.resultCode == '10'){
    //     yield call(cache.set,'userInfo',response);
        // yield call(hashHistory.push,'/app/dashboard');
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* userManagerUserPageQuery({data}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerUserPageQuery,
    //     info:{
    //         ...data
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     let order  = (parseInt(data.page)-1) * parseInt(data.rows);
    //     response.list.map((el,key)=>{
    //         response.list[key].order = order+(key+1);
    //     })
    //     yield put({
    //         type:'user/set/list',
    //         list: response.list,
    //         count:parseInt(response.count)
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* userTenantQueryTenantList({data}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: tenantQueryTenantList,
    //     info:{
    //         ...data
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'user/set/tenantList',
    //         tenantList: response.list
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}


function* userManagerResetPwd({userId}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerResetPwd,
    //     info:{
    //         userId
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield call(globalMessage,"重置成功",'success');
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* userAppQueryAppList({tenantId}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: appQueryAppList,
    //     info:{
    //         tenantId
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'user/set/appList',
    //         appList: response.list
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* userManagerQueryMcomAll() {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerQueryMcomAll,
    //     info:{}
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // let mcomList = getJsonTree(response.rows);
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'user/set/mcomList',
    //         mcomList
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* userManagerQueryDepartmentAll({mcomId}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerQueryDepartmentAll,
    //     info:{
    //         mcomId
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'user/set/departmentList',
    //         departmentList: response.rows
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* userManagerEditUser({data}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerEditUser,
    //     info:{
    //         ...data
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield call(globalMessage,`${data.id == "" ? "添加" : "修改"}`+"成功",'success');
    //     yield call(hashHistory.push,'/app/user/list');
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* userManagerQueryUserById({id}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerQueryUserById,
    //     info:{
    //         id
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({type:'user/set/info',info: response});
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* watchUserManagerSec2Login() {
    yield takeLatest('user/manager/sec2Login', userManagerSec2Login);
}

function* watchUserManagerUserPageQuery() {
    yield takeLatest('user/manager/userPageQuery', userManagerUserPageQuery);
}

function* watchUserTenantQueryTenantList() {
    yield takeLatest('user/tenant/queryTenantList', userTenantQueryTenantList);
}

function* watchUserAppQueryAppList() {
    yield takeLatest('user/app/queryAppList', userAppQueryAppList);
}

function* watchUserManagerResetPwd() {
    yield takeLatest('user/manager/resetPwd', userManagerResetPwd);
}

function* watchUserManagerQueryMcomAll() {
    yield takeLatest('user/manager/queryMcomAll', userManagerQueryMcomAll);
}
function* watchUserManagerQueryDepartmentAll() {
    yield takeLatest('user/manager/queryDepartmentAll', userManagerQueryDepartmentAll);
}
function* watchUserManagerEditUser() {
    yield takeLatest('user/manager/editUser', userManagerEditUser);
}
function* watchUserManagerQueryUserById() {
	yield takeLatest('user/manager/queryUserById', userManagerQueryUserById);
}

export default function*() {
    yield fork(watchUserManagerSec2Login)
    yield fork(watchUserManagerUserPageQuery)
    yield fork(watchUserTenantQueryTenantList)
    yield fork(watchUserManagerResetPwd)
    yield fork(watchUserAppQueryAppList)
    yield fork(watchUserManagerQueryMcomAll)
    yield fork(watchUserManagerQueryDepartmentAll)
    yield fork(watchUserManagerEditUser)
	yield fork(watchUserManagerQueryUserById)
}