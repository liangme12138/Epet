export default function payReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingPay':
            newState.status = 0;
            break;
        case 'requestedPay':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requesterrorPay':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}