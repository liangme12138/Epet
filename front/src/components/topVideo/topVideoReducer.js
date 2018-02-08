import spinner from '../spinner/spinner';
export default function topReducer(state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'topVideorequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res = action.response;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            break;
    }
    return newState;
}