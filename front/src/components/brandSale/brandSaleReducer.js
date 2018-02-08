import spinner from '../spinner/spinner';
export default function BrandSaleReducer(state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'bsrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res = action.response;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.res = action.response;
            break;
        case 'getTyperequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res1 = newState.response;
            break;
        case 'getAllrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res2 = newState.response;
            break;
    }
    return newState;
}