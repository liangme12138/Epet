import spinner from '../spinner/spinner';
export default function EpetMarkReducer (state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState. status = 0;
            break;
        case 'getDisUprequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res1 = action.response;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            break;
        case 'getDisDownrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res2 = action.response;
            break;
        case 'getPriceUprequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res3 = action.response;
            break;
        case 'getPriceDownrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res4 = action.response;
            break;
    }
    return newState;
}