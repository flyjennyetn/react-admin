/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {put,call,fork} from 'redux-saga/effects';
// import {hashHistory} from 'react-router';
// import {globalMessage} from "utils/";
// import {postApi} from "utils/axios";
// import * as jsonp from "utils/jsonp";
// import {managerMenuQueryAll,managerMenuQuery,managerMenuSave,managerMenuDelete} from "utils/service";
// import * as cache from "utils/cache";


// const renderTreeNode = (data,checkedKeys)=>{
//     data.map((el,k)=>{
//         if(el.checked == 'true'){
//             checkedKeys.push(el.id)
//         }
//         if(el.children.length > 0){
//             renderTreeNode(el.children,checkedKeys)
//         }
//     })
// }


function* menuManageManagerMenuQueryAll({roleIds,sysCode}) {
    // yield put({type:'gstates/set/loading',isLoading: true});
    // const response = yield call(jsonp.postApi,{
    //     params: managerMenuQueryAll,
    //     info:{
    //         roleIds,
    //         sysCode
    //     }
    // });
    // yield put({type:'gstates/set/loading',isLoading: false});
    // if(response && response.resultCode == '10'){
    //     yield put({type:'menuManage/set/leftMenuList',leftMenuList: response.menuList[0].children[0].children});
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}

function* menuManageManagerMenuQuery({data}) {
    yield put({type:'gstates/set/loading',isLoading: true});
    const response = yield call(jsonp.postApi,{
        params: managerMenuQuery,
        info:{
            // id:"1187"
            ...data
        }
    });
    yield put({type:'gstates/set/loading',isLoading: false});
    if(response && response.resultCode == '10'){
        let checkedKeys = [];
        renderTreeNode(response.menuList,checkedKeys);
        yield put({type:'menuManage/set/menuList',menuList: response.menuList,checkedKeys});
    }else{
        yield call(globalMessage,response.resultMsg);
    }
}

function* menuManageManagerMenuSave({data}) {
    yield put({type:'gstates/set/loading',isLoading: true});
    const response = yield call(jsonp.postApi,{
        params: managerMenuSave,
        info:{
            ...data
        }
    });
    yield put({type:'gstates/set/loading',isLoading: false});
    if(response && response.resultCode == '10'){
        yield put({type:'menuManage/manager/MenuQuery'});
        yield call(globalMessage,'操作成功','success');
    }else{
        yield call(globalMessage,response.resultMsg);
    }
}

function* menuManageManagerMenuDelete({id}) {
    yield put({type:'gstates/set/loading',isLoading: true});
    const response = yield call(jsonp.postApi,{
        params: managerMenuDelete,
        info:{
            id
        }
    });
    yield put({type:'gstates/set/loading',isLoading: false});
    if(response && response.resultCode == '10'){
        yield call(globalMessage,'删除成功','success');
        yield put({type:'menuManage/manager/MenuQuery'});
    }else{
        yield call(globalMessage,response.resultMsg);
    }
}



function* watchMenuManageManagerMenuQueryAll() {
    yield takeLatest('menuManage/manager/MenuQueryAll', menuManageManagerMenuQueryAll);
}
function* watchMenuManageManagerMenuQuery() {
    yield takeLatest('menuManage/manager/MenuQuery', menuManageManagerMenuQuery);
}
function* watchMenuManageManagerMenuSave() {
    yield takeLatest('menuManage/manager/menuSave', menuManageManagerMenuSave);
}
function* watchMenuManageManagerMenuDelete() {
    yield takeLatest('menuManage/manager/menuDelete', menuManageManagerMenuDelete);
}


export default function*() {
    yield fork(watchMenuManageManagerMenuQueryAll)
    yield fork(watchMenuManageManagerMenuQuery)
    yield fork(watchMenuManageManagerMenuSave)
	yield fork(watchMenuManageManagerMenuDelete)
}