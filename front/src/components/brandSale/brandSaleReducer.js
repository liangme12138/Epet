export default function BrandSaleReducer(state = {},action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'bsrequested':
            newState.status = 1;
            newState.res = action.response;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.res = action.response;
            break;
        case 'getTyperequested':
            newState.status = 1;
            newState.res1 = newState.response;
            break;
        case 'getAllrequested':
            newState.status = 1;
            newState.res2 = newState.response;
            break;
    }
    return newState;
}