/**
 * Created by flyjennyetn on 2016-10-26.
 */
import {
	handleActions
} from 'redux-actions';
import {
	combineReducer
} from 'redux';

const front = handleActions({
	['front/set/spin'](state, action) {
		return {
			...state,
			spinState: action.spinState,
		};
	},
	['front/set/isMobile'](state, action) {
		return {
			...state,
			isMobile: action.isMobile,
		};
	}
}, {
	spinState:false,
	isMobile:false
});

export default front;