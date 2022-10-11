import { put, call, takeLatest } from 'typed-redux-saga';
import axios from "axios";
import { apiCall } from '../../utils/CommonFunctions';
import { 
    GET_ALL, 
    GET_ALL_COMPLETE, 
    GET_ALL_ERROR, 
    GET_BY_ID, 
    GET_BY_ID_COMPLETE, 
    GET_BY_ID_ERROR 
} from '../actions/CharactersActions';

export function* searchAllCharacters(){
    try {
        const { data } = yield* call(apiCall, `characters`, "GET");
        yield put({ type: GET_ALL_COMPLETE, payload: data});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            yield put({ type: GET_ALL_ERROR, payload: error.response?.data.message});
        } else {
            throw new Error('different error than axios');
        }
    }
}
export function* searchByName(action : any){
    try {
        const { data } = yield* call(apiCall, `characters?nameStartsWith=${action.payload}&limit=7`, "GET");
        yield put({ type: GET_BY_ID_COMPLETE, payload: data});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            yield put({ type: GET_BY_ID_ERROR, payload: error.response?.data.message});
          } else {
            throw new Error('different error than axios');
          }
    }
}

export default function* search(){
    yield* takeLatest(GET_ALL, searchAllCharacters);
    yield* takeLatest(GET_BY_ID, searchByName);
}