export function getdata() {
    return {
        url: 'qc.php',
        methods: 'get',
        types: ['requesting', 'qcrequested', 'requesterror']
    }
}