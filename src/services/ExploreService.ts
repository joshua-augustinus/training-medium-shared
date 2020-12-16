const MOBILE_CONFIG_URL = 'https://hellodriven-mobile-config.azurewebsites.net/assets/';

const titles = ["About Resilience", "Vision - Finding Meaning & Purpose", "Composure & managing emotion skills",
    "Reasoning & Preventative skills", "Body & Health boost", "tenacity & persistence", "Collaboration, connection & relationships",
    "Sleeping better", "Rewire - Tougher Challenges & Obstacles", "Financial resilience", "Mind & mental Health",
    "Work & Employment", "Testing/Experimental Activity", "High Advertisity Resilience Training"
]
let data = [];
for (let i = 0; i <= 13; i++) {

    data.push({
        index: i,
        imageUrl: MOBILE_CONFIG_URL + (i + 1) + '.jpg',
        title: titles[i]
    });
}


export const getExploreData = () => {
    return data;
}