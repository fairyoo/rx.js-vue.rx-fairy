let fairyMainApiUrl = 'http://api.fairy.market';
let fairyUserApiUrl = fairyMainApiUrl;

if (process.env.NODE_ENV == '') {

} else if (process.env.NODE_ENV == 'production') {
}

export {
    fairyMainApiUrl,
    fairyUserApiUrl
};

// export default{
//     fairyMainApiUrl,
//     fairyUserApiUrl
// };

// export default async () => {
// };

// export default async (url='', data = {}, type = 'GET', method = 'fetch') => {
// };

