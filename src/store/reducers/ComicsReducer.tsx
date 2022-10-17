import { IActionInterface, IResponseComic, IResultComicData } from "../../utils/ResponsesInterfaces";
import { GET_COMIC, GET_COMIC_COMPLETE, GET_COMIC_ERROR } from "../actions/ComicsActions";

export interface IComicState {
    comics: IResponseComic | undefined,
    selectedComic: IResultComicData | undefined,
    errors: string | undefined
    isLoading: boolean
}

const initialState : IComicState =  {
    comics: undefined,
    selectedComic: undefined,
    errors: undefined,
    isLoading: true
}

export const reducer = (state = initialState, action: IActionInterface) : IComicState => {
    switch(action.type){
        case GET_COMIC:
           return {
                ...state,
                isLoading: true,
                errors: undefined
           } 
        case GET_COMIC_COMPLETE:
           const { payload: payloadAll }: {payload:IResponseComic} = action;
           return{
                ...state,
                isLoading: false,
                comics: payloadAll,
                errors: undefined
           } 

        case GET_COMIC_ERROR:
           return{
                ...state,
                isLoading: false,
                comics: undefined,
                errors: action.payload
           }        
        default:
            return state;
    }
}
