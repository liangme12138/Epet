
export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { tabItem: 1 },
        types: ['requesting', 'tabrequested','requesterror']
    }
}
export function getBigImg(){
     return {
        url: 'activite.php',
        method: 'post',
         params: { state: 'getProduct'},
         types: ['requesting', 'getPrdrequested', 'requesterror']
     }
}

export function getDogFoodMenu() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getDogFoodMenu', category:2},
        types: ['requesting', 'getDogFoodMenurequested', 'requesterror']
    }
}