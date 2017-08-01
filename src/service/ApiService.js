import axios from 'axios';
import { Observable } from 'rxjs';

const API_URL = 'https://api.github.com';

const axiosHttpService = axios.create({
  baseURL: API_URL
});

const axiosGet = (url, config) => Observable
  .fromPromise(axiosHttpService.get(url, config))
  .map((resp) => resp.data)
  .catch((err) => Observable.throw(err.response.data));

export const HttpGet = (fulUrl, params) => axiosGet(fulUrl, { params: params });

