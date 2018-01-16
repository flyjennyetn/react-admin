/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {handleActions} from 'redux-actions';

const gstates = handleActions({
	['gstates/set/spin'](state, action) {
		return {
			...state,
			spinState: action.spinState,
		};
	},
	['gstates/set/isMobile'](state, action) {
		return {
			...state,
			isMobile: action.isMobile,
		};
	}
}, {
	spinState:false,
	isMobile:false
});

export default gstates;