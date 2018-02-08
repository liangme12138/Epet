export default function cartReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingCart':
            newState.status = 0;
            break;
        case 'requestedCart':
            newState.status = 1;
            newState.result = action.respones.data;
            break;
        case 'requesterrorCart':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}