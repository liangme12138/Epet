export function getCart(userId) {
    return {
        types: ['requestingCart', 'requestedCart', 'requesterrorCart'],
        url: 'carts.php',
        params: { userId: userId}
    }
}

export function addCart(userId,goodId,count,state) {
    return {
        types: ['requestingCart1', 'requestedCart1', 'requesterrorCart1'],
        url: 'carts.php',
        params: { userId: userId, goodId: goodId, count: count, state: state  }
    }
}
// 改变勾选状态
export function checkCart(userId, goodId) {
    return {
        types: ['requestingCart2', 'requestedCart2', 'requesterrorCart2'],
        url: 'carts.php',
        params: { userId: userId, goodId: goodId}
    }
}
// 全选状态
export function checkallCart(userId,status,state) {
    return {
        types: ['requestingCart6', 'requestedCart6', 'requesterrorCart6'],
        url: 'carts.php',
        params: { userId: userId, status: status, state: state}
    }
}

// 将订单写进数据库
export function orderCart(userId, goodsid,orderId) {
    return {
        types: ['requestingCart7', 'requestedCart7', 'requesterrorCart7'],
        url: 'carts.php',
        params: { userId: userId, goodsid: goodsid, orderId: orderId}
    }
}
// 查询是否已有地址
export function getAddress(userId, state) {
    return {
        types: ['requestingCart8', 'requestedCart8', 'requesterrorCart8'],
        url: 'carts.php',
        params: { userId: userId, state: state }
    }
}