export function getCloth() {
    return {
        url:'getCloth.php',
        methods:'post',
        params:{state:'thing'},
        types: ['requesting', 'clothcityrequested', 'requesterror']
    }
}