export function getImg() {
    return {
        url: 'getIndexImg.php',
        methods:'get',
        types: ['requesting', 'getImgrequested','requesterror']
    }
}
