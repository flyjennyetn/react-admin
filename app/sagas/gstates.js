
/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {put,call,fork} from 'redux-saga/effects';
import {hashHistory} from 'react-router';
import {globalMessage} from "utils/";
import {postApi} from "utils/axiosv";
import {vcodeGetImgVCode} from "utils/service";
import * as cache from "utils/cache";

function* gstatesManagerMenuQueryAll({appid,roleIds,sysCode}) {
    yield put({type:'gstates/set/loading',isLoading: true});
    const response = yield call(postApi,{
        params: vcodeGetImgVCode,
        info:{
        }
    });
    yield put({type:'gstates/set/loading',isLoading: false});
    console.log(response)
    // if(response && response.resultCode == '10'){
   
    // }else{
    //     yield call(globalMessage,response.resultMsg);
    // }
}



function* watchGstatesManagerMenuQueryAll() {
    yield takeLatest('gstates/manager/MenuQueryAll', gstatesManagerMenuQueryAll);
}


export default function*() {
    yield fork(watchGstatesManagerMenuQueryAll)
}