const MOBILE_CONFIG_URL = 'https://hellodriven-mobile-config.azurewebsites.net/assets/';

let data = [];
for (let i = 0; i < 13; i++) {

    data.push({
        index: i,
        imageUrl: MOBILE_CONFIG_URL + (i + 1) + '.jpg'
    });
}


export const getExploreData = () => {
    return data;
}