import gstates from './gstates'
import user from './user'
import role from './role'
import menu from './menu'

export default function* rootSaga() {
	yield* gstates();
	yield* user();
	yield* role();
	yield* menu();
}