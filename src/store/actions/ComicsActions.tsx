export const GET_COMIC : string = "GET_COMIC";
export const GET_COMIC_COMPLETE : string = "GET_COMIC_COMPLETE";
export const GET_COMIC_ERROR : string = "GET_COMIC_ERROR";

export const getComic = (payload : number) => ({
    type: GET_COMIC,
    payload
});

