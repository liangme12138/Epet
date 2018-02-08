export default function cartReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingCart':
            newState.status = 0;
            break;
        case 'requestedCart':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requestedCart2':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requestedCart6':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requestedCart1':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requesterrorCart':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}