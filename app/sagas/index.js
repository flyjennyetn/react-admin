import front from './front'
import user from './user'

export default function* rootSaga() {
	yield* front();
	yield* user();
}