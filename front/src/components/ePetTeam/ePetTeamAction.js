export function getGoodsData() {
    return{
        url:'getEpetTeamGoods.php',
        methods: 'post',
        types:['requesting','ePetTeamrequested','requesterror'],
        params:{state:'epetteamData'}
    }
}