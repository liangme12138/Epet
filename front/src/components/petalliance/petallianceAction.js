export function getDataAll() {
    return {
        url: 'petalliance.php',
        methods: 'get',
        types: ['requesting', 'petAlliancerequested', 'requesterror']
    }
}