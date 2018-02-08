export default function ordermReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingOrderm':
            newState.status = 0;
            break;
        case 'requestedOrderm':
            newState.status = 1;
            newState.result = action.respones;
            newState.orderId = action.respones[0].orderId;
            break;
        case 'requesterrorOrderm':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}