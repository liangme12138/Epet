export default function defailReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingDefail':
            newState.status = 0;
            break;
        case 'requestedDefail':
            newState.status = 1;
            newState.result = action.respones;
            newState.goodId = action.respones[0].goodId;
            break;
        case 'requesterrorDefail':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}