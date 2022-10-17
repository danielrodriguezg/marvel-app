import { IActionInterface, IResultCharacters } from "../../utils/ResponsesInterfaces";

export const GET_ALL: string = "GET_ALL";
export const GET_ALL_COMPLETE: string = "GET_ALL_COMPLETE";
export const GET_ALL_ERROR: string = "GET_ALL_ERROR";
export const GET_BY_ID: string = "GET_BY_ID";
export const GET_BY_ID_COMPLETE: string = "GET_BY_ID_COMPLETE";
export const GET_BY_ID_ERROR: string = "GET_BY_ID_ERROR";
export const CLEAR_SEARCH: string = "CLEAR_SEARCH";
export const SELECT_CHARACTER: string = "SELECT_CHARACTER";

export const getAll = () : IActionInterface =>({
    type: GET_ALL,
    payload: undefined
});

export const getByName = (payload: string) : IActionInterface =>({
    type: GET_BY_ID,
    payload
});

export const clearSearch = () : IActionInterface =>({
    type: CLEAR_SEARCH,
    payload: undefined
});

export const selectCharacter = (payload: IResultCharacters) : IActionInterface =>({
    type: SELECT_CHARACTER,
    payload
})