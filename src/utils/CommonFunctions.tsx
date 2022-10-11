import axios from "axios";
import { getUrl } from "./GlobalConstants";

export interface IResult{
  id: number,
  name: string,
  description: string,
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
