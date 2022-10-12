import axios from "axios";
import { getUrl } from "./GlobalConstants";

export interface IResult{
  id: number,
  name: string,
  description: string,
  modified: string,
  thumbnail:{
    path: string,
    extension: string
  },
  resourceURI: string,
  comics: IItems,
  series: IItems,
  stories: IItems,
  events: IItems
}
export interface IItem{
  resourceURI: string,
  name: string
}
export interface IItems{
  available: number,
  collectionURI: string,
  items: IItem[]
  returned:number,
}

export interface IResponse{
      data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: IResult[]
      }
}

export const apiCall = (url: string, method: string) => axios({
        method,
        url: getUrl(url)
    });
