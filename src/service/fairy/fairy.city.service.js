import { Config } from '../config/env.js';
import { FairyService } from 'fairy.base.service.js';

// https://api.github.com/search/repositories?q=ff&sort=stars&page=1
export const GetCityAll = (q, page) => FairyService.HttpGet(Config.fairyCityApiUrl + '/all',
                                                          { q, sort: 'stars', page });
