
export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { state: 'dogFoodMenu', tabItem: 4 },
        types: ['requesting', 'tabrequested', 'requesterror']
    }
}
export function getBigImg() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getProduct', category: 4 },
        types: ['requesting', 'getPrdrequested', 'requesterror']
    }
}

export function SnackToysMenu() {
    return {
        url: 'activite.php',
        method: 'post',
        params: { state: 'getDogFoodMenu', category: 3 },
        types: ['requesting', 'SnackToysMenurequested', 'requesterror']
    }
}

export function getProduct(id) {
    if (id == 'all') {
        return {
            url: 'indexGetProduct.php',
            method: 'post',
            params: { state: 'getAllProduct', category: 4 },
            types: ['requesting', 'getAllProductrequested', 'requesterror']
        }
    } else {
        return {
            url: 'indexGetProduct.php',
            method: 'post',
            params: { state: 'getItemProduct', category: id },
            types: ['requesting', 'getItemProductrequested', 'requesterror']
        }
    }

}