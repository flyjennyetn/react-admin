/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {handleActions} from 'redux-actions';

const user = handleActions({
	['user/set/data'](state, action) {
		return {
			...state,
			userInfo: action.userInfo,
		};
	},
	['user/set/list'](state, action) {
		return {
			...state,
			list: action.list,
			count:action.count
		};
	},
	['user/set/tenantList'](state, action) {
		return {
			...state,
			tenantList: action.tenantList
		};
	},
	['user/set/appList'](state, action) {
		return {
			...state,
			appList: action.appList
		};
	},
	['user/set/mcomList'](state, action) {
		return {
			...state,
			mcomList: action.mcomList
		};
	},
	['user/set/departmentList'](state, action) {
		return {
			...state,
			departmentList: action.departmentList
		};
	},
	['user/set/info'](state, action) {
		return {
			...state,
			info: action.info
		};
	}
}, {
	list:null,
	info:null,
	count:0,
	userInfo:false,
	tenantList:[],
	appList:[],
	mcomList:[],
	departmentList:[]
});

export default user;