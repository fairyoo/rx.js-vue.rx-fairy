import { Config } from '../config/env.js';
import { ApiService } from 'ApiService';

export const GetCityAll = (q, page) => ApiService.HttpGet(Config.fairyCityApiUrl + '/all',
                                                          { q, sort: 'stars', page });
