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
	leftMenuList:[
        {
            url: '/systems', name: '管理员', icon: 'setting',
            children: [
                { url: '/systems/userList', name: '用户列表', component: 'user'},
                { url: '/systems/userAdd', name: '用户添加', component: 'add'},
                { url: '/systems/menu', name: '菜单列表', component: 'menu'},
                { url: '/systems/role', name: '角色管理', component: 'role'},
            ]
        }
	],
	checkedKeys:[]
});

export default menuManage;