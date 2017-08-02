import { Config } from '../config/env.js';
import { ApiService } from 'ApiService';

// https://api.github.com/search/repositories?q=ff&sort=stars&page=1
export const GetCityAll = (q, page) => ApiService.HttpGet(Config.fairyCityApiUrl + '/all',
                                                          { q, sort: 'stars', page });
