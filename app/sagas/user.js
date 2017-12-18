
/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {put,call,fork} from 'redux-saga/effects';
import {hashHistory} from 'react-router';
import * as utils from "utils/";
import * as axios from "utils/axios";
import * as cache from "utils/cache";

function* userLogin({username,password}) {
    yield put({type:'front/set/spin',spinState:true});
    const user = yield call(axios.post,'/user/login',{username,password});
    yield put({type:'front/set/spin',spinState:false});
    if(user.code != 0){
        yield call(utils.modalTis,user.message);
    }else{
        yield call(cache.set,'userInfo',user.data);
        yield call(hashHistory.push,'/');
    }
}

function* watchUserLogin() {
	yield takeLatest('user/login', userLogin);
}

export default function*() {
	yield fork(watchUserLogin)
}