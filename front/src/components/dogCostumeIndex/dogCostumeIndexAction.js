export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { state:'dogCostumeMenu',tabItem: 2 },
        types: ['requesting', 'costumetabrequested', 'requesterror']
    }
}

export function getBigImg() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getProduct', category: 2 },
        types: ['requesting', 'dogCostumeBigImgrequested', 'requesterror']
    }
}
