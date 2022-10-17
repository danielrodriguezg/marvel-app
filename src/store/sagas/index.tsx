import { all } from 'typed-redux-saga';
import searchCharacters from './searchCharacters';
import searchComics from './searchComics';

export default function* rootSaga() {
	yield all([
		searchCharacters(),
		searchComics()
	]);
}