import spinner from '../spinner/spinner'
export default function collectReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'collectRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'collectRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'collectRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'delIdRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res = action.respones;
            newState.type = action.type;
            break;
    }
    return newState;
}    