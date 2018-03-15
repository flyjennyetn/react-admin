/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {handleActions} from 'redux-actions';

const menuManage = handleActions({
	['menuManage/set/menuList'](state, action) {
		return {
			...state,
			menuList: action.menuList,
			checkedKeys:action.checkedKeys
		};
	},
	['menuManage/set/leftMenuList'](state, action) {
		return {
			...state,
			leftMenuList: action.leftMenuList
		};
	}
}, {
	menuList:null,
	leftMenuList:[],
	checkedKeys:[]
});

export default menuManage;