import { IActionInterface, IResponseCharacters, IResultCharacters } from "../../utils/ResponsesInterfaces";
import { 
    CLEAR_SEARCH,
    GET_ALL, 
    GET_ALL_COMPLETE, 
    GET_ALL_ERROR, 
    GET_BY_ID, 
    GET_BY_ID_COMPLETE, 
    GET_BY_ID_ERROR, 
    SELECT_CHARACTER
} from "../actions/CharactersActions";

export interface ICharacterState{
    characters:  IResponseCharacters | undefined;   
    selected: IResultCharacters | undefined;
    errors: string | undefined;
    isLoading: boolean
}

const initialState : ICharacterState= {
    characters: undefined, 
    selected: undefined,
    errors: undefined,
    isLoading: true
}

export const reducer = (state = initialState, action: IActionInterface) : ICharacterState => {
    switch (action.type) {
        case GET_ALL:
           return {
                ...state,
                isLoading: true,
                errors: undefined
           } 
        case GET_ALL_COMPLETE:
           const { payload: payloadAll }: {payload:IResponseCharacters} = action;
           return{
                ...state,
                isLoading: false,
                characters: payloadAll,
                errors: undefined
           } 

        case GET_ALL_ERROR:
           return{
                ...state,
                isLoading: false,
                characters: undefined,
                errors: action.payload
           }
        case GET_BY_ID:
            return {
                 ...state,
                 isLoading: true,
                 errors: undefined
            } 
         case GET_BY_ID_COMPLETE:
            const { payload: payloadId } : {payload: IResponseCharacters}= action;
            return{
                 ...state,
                 isLoading: false,
                 characters: payloadId,
                 errors: undefined
            }
         case GET_BY_ID_ERROR:
            return{
                 ...state,
                 isLoading: false,
                 characters: undefined,
                 errors: action.payload
            }
        case CLEAR_SEARCH:
            return{
                ...state,
                isLoading: false,
                characters: undefined,
                errors: undefined
            }
        case SELECT_CHARACTER:
            const { payload: payloadSelected } : {payload: IResultCharacters}= action;
            return{
                ...state,
                isLoading: false,
                selected: payloadSelected,
                errors: undefined
            }
        default:
            return state;
    }
}