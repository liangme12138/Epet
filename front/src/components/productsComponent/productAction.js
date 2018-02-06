export function getProduct(val, name, state, value) {
    return {
        types: ['requestingProduct', 'requestedProduct', 'requesterrorProduct'],
        url: 'productsList.php',
        params: { classify2Id: val, name: name, state: state, value: value}
    }
}
