
export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { state: 'dogFoodMenu', tabItem: 5 },
        types: ['requesting', 'tabrequested', 'requesterror']
    }
}
export function getBigImg() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getProduct', category: 5 },
        types: ['requesting', 'getPrdrequested', 'requesterror']
    }
}

export function gooutMenu() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getDogFoodMenu', category: 6 },
        types: ['requesting', 'gooutMenurequested', 'requesterror']
    }
}