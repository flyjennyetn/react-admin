/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {put,call,fork} from 'redux-saga/effects';
// import {globalMessage} from "utils/";
// import {postApi} from "utils/axios";
// import * as jsonp from "utils/jsonp";
// import {managerRoleQuery,managerRolePageQuery,managerSaveRoleMenu,managerDelRoleInfo,managerQueryCmsLines} from "service/service";

function* roleManagerRoleQuery({data}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerRoleQuery,
    //     info:{
    //         ...data
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'role/set/allList',
    //         allList: response.roleList
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* roleManagerRolePageQuery({data}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerRolePageQuery,
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
    //         type:'role/set/data',
    //         list: response.list,
    //         count:parseInt(response.count)
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* roleManagerSaveRoleMenu({data,rows,page}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerSaveRoleMenu,
    //     info:{
    //         ...data
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield call(globalMessage,"操作成功",'success');
    //     yield put({type:'role/manager/rolePageQuery',data:{rows,page}});
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* roleManagerDelRoleInfo({id,rows,page}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerDelRoleInfo,
    //     info:{
    //         id
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield call(globalMessage,"删除成功",'success');
    //     yield put({type:'role/manager/rolePageQuery',data:{rows,page}});
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* roleManagerQueryCmsLines() {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerQueryCmsLines,
    //     info:{}
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({
    //         type:'role/set/lineList',
    //         lineList: response.list
    //     });
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}


function* watchRoleManagerRoleQuery() {
    yield takeLatest('role/manager/roleQuery', roleManagerRoleQuery);
}

function* watchRoleManagerRolePageQuery() {
    yield takeLatest('role/manager/rolePageQuery', roleManagerRolePageQuery);
}

function* watchRoleManagerSaveRoleMenu() {
    yield takeLatest('role/manager/saveRoleMenu', roleManagerSaveRoleMenu);
}

function* watchRoleManagerDelRoleInfo() {
    yield takeLatest('role/manager/delRoleInfo', roleManagerDelRoleInfo);
}

function* watchRoleManagerQueryCmsLines() {
    yield takeLatest('role/manager/queryCmsLines', roleManagerQueryCmsLines);
}



export default function*() {
    yield fork(watchRoleManagerRoleQuery)
    yield fork(watchRoleManagerRolePageQuery)
    yield fork(watchRoleManagerSaveRoleMenu)
    yield fork(watchRoleManagerDelRoleInfo)
    yield fork(watchRoleManagerQueryCmsLines)
}