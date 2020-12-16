const MOBILE_CONFIG_URL = 'https://hellodriven-mobile-config.azurewebsites.net/assets/';

const titles = ["About Resilience", "Vision - Finding Meaning & Purpose", "Composure & managing emotion skills",
    "Reasoning & Preventative skills", "Body & Health boost", "tenacity & persistence", "Collaboration, connection & relationships",
    "Sleeping better", "Rewire - Tougher Challenges & Obstacles", "Financial resilience", "Mind & mental Health",
    "Work & Employment", "Testing/Experimental Activity", "High Advertisity Resilience Training"
]

const bgColors = [
    '#00bfd8',
    '#f2384f',
    '#ff7d37',
    '#f2ba0f',
    '#54b554',
    '#4abaca',
    '#407fe8',
    '#54b554',
    '#00bfd8',
    '#00bfd8',
    '#00bfd8',
    '#00bfd8',
    '#00bfd8',
    '#00bfd8',
]

const iconMap = {};
iconMap['#00bfd8'] = require('../assets/icons/iconPrimary.png');
iconMap['#f2384f'] = require('../assets/icons/iconRed.png');
iconMap['#ff7d37'] = require('../assets/icons/iconOrange.png');
iconMap['#f2ba0f'] = require('../assets/icons/iconYellow.png');
iconMap['#54b554'] = require('../assets/icons/iconGreen.png');
iconMap['#4abaca'] = require('../assets/icons/iconPrimary.png');
iconMap['#407fe8'] = require('../assets/icons/iconBlue.png');


let data = [];
for (let i = 0; i <= 13; i++) {

    data.push({
        index: i,
        imageUrl: MOBILE_CONFIG_URL + (i + 1) + '.jpg',
        title: titles[i],
        backgroundColor: bgColors[i],
        icon: iconMap[bgColors[i]]
    });
}


export const getExploreData = () => {
    return data;
}