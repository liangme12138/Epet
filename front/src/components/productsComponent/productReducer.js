export default function productReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingProduct':
            newState.status = 0;
            break;
        case 'requestedProduct':
            newState.status = 1;
            newState.result = action.respones;
            newState.productId = action.respones[0].classify2Id;
            break;
        case 'requesterrorProduct':
            newState.status = -1;
            // newState.result = action.respones;
            break;
    }
    return newState;
}