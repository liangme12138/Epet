export default function GoodslistReducer(state={}, action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'ePetTeamrequested':
            newState.status = 1;
            newState.respones = action.respones;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.respones = action.respones;
            break;
    }
    return newState;
}