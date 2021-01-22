
import {RequestPromiseAPI,RequestPromiseOptions} from 'request-promise';
import * as requestPromise from 'request-promise';

export class RequestService{
    async getMethod<T=any>(uri:string,options?:RequestPromiseOptions):Promise<T>{
        return await requestPromise.get(uri,options).promise()
    }
    async postMethod<T=any>(uri:string,options?:RequestPromiseOptions):Promise<T>{
        return await requestPromise.post(uri,options).promise();
    } 
}