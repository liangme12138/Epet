export function getData() {
    return{
        url:'getEpetTop.php',
        methods:'post',
        params:{state:'data'},
        types: ['requesting', 'etopbarrequested','requesterror']
    }
}