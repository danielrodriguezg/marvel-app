export interface IActionInterface{
    type: string,
    payload: any
}

export const GET_ALL: string = "GET_ALL";
export const GET_ALL_COMPLETE: string = "GET_ALL_COMPLETE";
export const GET_ALL_ERROR: string = "GET_ALL_ERROR";
export const GET_BY_ID: string = "GET_BY_ID";
export const GET_BY_ID_COMPLETE: string = "GET_BY_ID_COMPLETE";
export const GET_BY_ID_ERROR: string = "GET_BY_ID_ERROR";

export const getAll = () : IActionInterface =>({
    type: GET_ALL,
    payload: undefined
});

export const getByName = (payload: string) : IActionInterface =>({
    type: GET_BY_ID,
    payload
});