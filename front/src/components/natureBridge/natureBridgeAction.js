export function getdata() {
    return{
        url: 'naturebridge.php',
        methods: 'get',
        types: ['requesting', 'naturerequested', 'requesterror']
    }
}