export function getCart(userId) {
    return {
        types: ['requestingCart', 'requestedCart', 'requesterrorCart'],
        url: 'carts.php',
        params: { userId: userId}
    }
}