export function getDefail(val) {
    return {
        types: ['requestingDefail', 'requestedDefail', 'requesterrorDefail'],
        url: 'productDefail.php',
        params: { goodId: val }
    }
}