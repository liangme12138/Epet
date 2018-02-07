import spinner from '../spinner/spinner';
export default function IndexReducer(state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'getImgrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.imgres = newState.response;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            break;
    }
    return newState;
}