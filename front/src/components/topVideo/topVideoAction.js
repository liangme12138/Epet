export function getTop() {
    return{
        url: 'getTopVideo.php',
        methods: 'get',
        types: ['requesting', 'topVideorequested', 'requesterror']
    }
}