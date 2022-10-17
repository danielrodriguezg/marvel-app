import { put, call, takeLatest } from 'typed-redux-saga';
import axios from "axios";
import { apiCall } from '../../utils/CommonFunctions';
import { GET_COMIC, GET_COMIC_COMPLETE, GET_COMIC_ERROR } from '../actions/ComicsActions';

export function* search(action : any){
    try {
        const { data } = yield* call(apiCall, `characters/${action.payload}/comics`, "GET");
        yield put({ type: GET_COMIC_COMPLETE, payload: data});
    } catch (error) {
        if (axios.isAxiosError(error)) {
            yield put({ type: GET_COMIC_ERROR, payload: error.response?.data.message});
          } else {
            throw new Error('different error than axios');
          }
    }
}

export default function* searchComics(){
    yield* takeLatest(GET_COMIC, search);
}