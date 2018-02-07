import spinner from '../spinner/spinner'

export default function GoodslistReducer(state={}, action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'ePetTeamrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.respones = action.respones;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.respones = action.respones;
            break;
    }
    return newState;
}