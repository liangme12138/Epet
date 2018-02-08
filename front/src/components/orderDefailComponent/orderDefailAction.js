export function getOrder(userId, orderId) {
    return {
        types: ['requestingOrderm', 'requestedOrderm', 'requesterrorOrderm'],
        url: 'orderDefail.php',
        params: { userId: userId, orderId: orderId }
    }
}