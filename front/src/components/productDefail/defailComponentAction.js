export function getDefail(val, state) {
    return {
        types: ['requestingDefail', 'requestedDefail', 'requesterrorDefail'],
        url: 'productDefail.php',
        params: { goodId: val}
    }
}

export function Defail(userId,val, state) {
    return {
        types: ['requestingDefail1', 'requestedDefail1', 'requesterrorDefail1'],
        url: 'productDefail.php',
        params: {userId:userId, goodId: val, state: state }
    }
}
// 判断是否收藏
export function collectDefail(userId, val, state) {
    return {
        types: ['requestingDefail2', 'requestedDefail2', 'requesterrorDefail2'],
        url: 'productDefail.php',
        params: { userId: userId, goodId: val, state: state }
    }
}
// 获取商品数量
export function cartDefail(userId, state) {
    return {
        types: ['requestingDefail3', 'requestedDefail3', 'requesterrorDefail3'],
        url: 'productDefail.php',
        params: { userId: userId, state: state }
    }
}
// 添加到购物车
export function addcartDefail(userId, val, count, status, state) {
    return {
        types: ['requestingDefail4', 'requestedDefail4', 'requesterrorDefail4'],
        url: 'productDefail.php',
        params: { userId: userId, goodId: val,count:count,status:status, state: state }
    }
}