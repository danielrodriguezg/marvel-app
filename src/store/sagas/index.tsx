import { all } from 'typed-redux-saga';
import search from './search';

export default function* rootSaga() {
	yield all([
		search(),
	]);
}