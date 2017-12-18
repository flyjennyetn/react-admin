/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {takeLatest} from 'redux-saga';
import {
	take,
	put,
	call,
	fork,
	select
} from 'redux-saga/effects';

import * as axios from "utils/axios";

function* frontLogin({mobile,name,agentCode,smsCode,openId}) {
    yield put({
        type: 'gstates/isModalVisible',
        isModalVisible: true,
    });
    const userInfo = yield call(axios.get,'/jdUser/agentThirdLogin',{
        header:{
            "salesChannel":"dy-04"
        },
        info:{
        	"platForm":"dy-04",
        	"mobile":mobile,
        	"name":name,
            "agentCode":agentCode,
        	 smsCode:smsCode,
            "thirdId":openId ? openId : 'acavadsv',
		    "limitApp":"1",
		    "limitUser":"1",
		    "limitType":"3",
		    "transCode": "1000036",
        }
    });
    yield put({
        type: 'gstates/isModalVisible',
        isModalVisible: false,
    });

}

function* watchFrontLogin() {
	yield takeLatest('front/login', frontLogin);
}

export default function*() {
	yield fork(watchFrontLogin)
}