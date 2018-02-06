export default function ePetTopBarReducer(state = {} ,action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'etopbarrequested':
            newState.status = 1;
            newState.res = action.response;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.res = action.response;
            break;
    }
    return newState;
}