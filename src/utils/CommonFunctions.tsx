import axios, {AxiosResponse} from "axios";
import { getUrl } from "./GlobalConstants";

export interface IResponse{
  data:{
      code: number,
      status: string,
      data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: [
          {
            id: number,
            name: string,
            description: string,
          }
        ]
      }
    }
  }

export const apiCall = (url: string, method: string) => axios({
        method,
        url: getUrl(url)
    });
