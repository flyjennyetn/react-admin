/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {handleActions} from 'redux-actions';

const role = handleActions({
	['role/set/data'](state, action) {
		return {
			...state,
			list: action.list,
			count:action.count
		};
	},
	['role/set/allList'](state, action) {
		return {
			...state,
			allList: action.allList
		};
	},
	['role/set/lineList'](state, action) {
		return {
			...state,
			lineList: action.lineList
		};
	}
}, {
	list:null,
	allList:[],
	count:0,
	lineList:[]
});

export default role;