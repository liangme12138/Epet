export function getDisUp() {
    return {
        url: 'epetmark1.php',
        methods: 'post',
        params:{state:'type'},
        types: ['requesting', 'getDisUprequested','requesterror']
    }
}

export function getDisDown() {
    return {
        url: 'epetmark2.php',
        methods: 'post',
        params: { state: 'type' },
        types: ['requesting', 'getDisDownrequested','requesterror']
    }
}

export function getPriceUp() {
    return {
        url: 'epetmark3.php',
        methods: 'post',
        params: { state: 'type' },
        types: ['requesting', 'getPriceUprequested','requesterror']
    }
}

export function getPriceDown() {
    return {
        url: 'epetmark4.php',
        methods: 'post',
        params: { state: 'type' },
        types: ['requesting', 'getPriceDownrequested','requesterror']
    }
}