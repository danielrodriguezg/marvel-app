import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import { reducer as characterReducer} from './reducers/CharacterReducer';
import { ICharacterState } from './reducers/CharacterReducer';
import rootSaga from './sagas';

export interface IStore {
	characterReducer: ICharacterState;
}
const rootReducer= combineReducers({
	characterReducer
});

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;