export function getImg() {
    return {
        url: 'getIndexImg.php',
        methods:'post',
        types: ['requesting', 'getImgrequested','requesterror']
    }
}
