const fairyApiBaseUrl = 'http://api.fairy.market/v1';
const fairyUserApiUrl = fairyApiBaseUrl + '/user';
const fairyCityApiUrl = fairyApiBaseUrl + '/city';

if (process.env.NODE_ENV == '') {

} else if (process.env.NODE_ENV == 'production') {
}

export {
    fairyApiBaseUrl,
    fairyUserApiUrl,
    fairyCityApiUrl
};

// export default{
//     fairyMainApiUrl,
//     fairyUserApiUrl
// };

// export default async () => {
// };

// export default async (url='', data = {}, type = 'GET', method = 'fetch') => {
// };

