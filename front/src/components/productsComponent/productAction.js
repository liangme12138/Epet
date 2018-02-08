export function getProduct(val, name, state, value) {
    return {
        types: ['requestingProduct', 'requestedProduct', 'requesterrorProduct'],
        url: 'productsList.php',
        params: { classify2Id: val, name: name, state: state, value: value}
    }
}

// 添加到购物车
export function addcart1(userId, val, count, status, state) {
    return {
        types: ['requestingProduct1', 'requestedProduct1', 'requesterrorProduct1'],
        url: 'productDefail.php',
        params: { userId: userId, goodId: val, count: count, status: status, state: state }
    }
}
