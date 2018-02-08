export function getPay(userId, orderId) {
    return {
        types: ['requestingPay', 'requestedPay', 'requesterrorPay'],
        url: 'paym.php',
        params: { userId: userId, orderId: orderId }
    }
}