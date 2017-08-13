import { Config } from '../config/env.js';
import { HttpBaseService } from 'http.base.service.js';



// https://api.github.com/search/repositories?q=ff&sort=stars&page=1
export const GetOrderList = (state, page) => HttpBaseService.HttpGet(
    Config.superApiBaseUrl + '/TakeOut/GetOrderList', {State: state, Page: page});
