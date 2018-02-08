import spinner from '../spinner/spinner';
export default function petAllianceReducer(state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'petAlliancerequested':
            spinner.closeSpinner();
            newState.status = 1;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            break;
    }
    return newState;
}


