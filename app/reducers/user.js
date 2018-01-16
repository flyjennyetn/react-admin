/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {handleActions} from 'redux-actions';

const user = handleActions({
	['user/set/data'](state, action) {
		return {
			...state,
			userData: action.userData,
		};
	}
}, {
	userData:false
});

export default user;