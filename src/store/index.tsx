import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import { reducer as characterReducer} from './reducers/CharacterReducer';
import { IComicState, reducer as comicReducer } from './reducers/ComicsReducer';
import { ICharacterState } from './reducers/CharacterReducer';
import rootSaga from './sagas';

export interface IStore {
	characterReducer: ICharacterState;
	comicReducer: IComicState;
}
const rootReducer= combineReducers({
	characterReducer,
	comicReducer
});

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;