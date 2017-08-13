import axios from 'axios';
import { Observable } from 'rxjs';
import { Config } from '../../config/env.js';

var instanceAxios = axios.create({
  baseURL: Config.superApiBaseUrl
});

export const HttpGet = (nextUrl, params) => Observable
  .fromPromise(() => {
    return instanceAxios.get(nextUrl, { params: params });
  })
  .map(resp => resp.data)
  .catch(err => Observable.throw(err.response.data));

export const HttpPost = () => Observable.fromPromise()
  .map();

