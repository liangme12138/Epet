export function getType() {
    return {
        url:'brandSale.php',
        methods:'post',
        params:{state:'type'},
        types: ['requesting', 'bsrequested','requesterror']
    }
}

export function getAll() {
    return{
        url:'brandSale.php',
        methods:'post',
        params:{state:'allBrand'},
        types: ['requesting', 'bsrequested', 'requesterror']
    }
}