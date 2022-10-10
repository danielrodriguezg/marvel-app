import {Md5} from 'ts-md5';

export const PUBLIC_KEY : string  = "d2038517ca8ee1155eabb0a7e252e0c2";
export const PRIVATE_KEY : string = "767ac9478f248ad908e31af69c7ad9d1143458bd";

export const getUrl = (url: string) =>{
    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts+PRIVATE_KEY+PUBLIC_KEY);
    if(url.includes('?')){
        return "http://gateway.marvel.com/v1/public/"+url+"&ts="+ts+"&apikey="+PUBLIC_KEY+"&hash="+hash;
    }
    return "http://gateway.marvel.com/v1/public/"+url+"?ts="+ts+"&apikey="+PUBLIC_KEY+"&hash="+hash;
}