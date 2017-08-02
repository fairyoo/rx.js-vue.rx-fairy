import axios from 'axios';
import { Observable } from 'rxjs';

export const HttpGet = (baseUrl, nextUrl, params) => Observable
  .fromPromise(() => {
    var http = axios.create({baseURL: baseUrl});
    return http.get(nextUrl, { params: params });
  })
  .map(resp => resp.data)
  .catch(err => Observable.throw(err.response.data));

