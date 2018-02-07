import spinner from '../spinner/spinner'
export default function LoginReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'registerRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'registerRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'registerRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'registerRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type; 
            break;
    }
    return newState;
}
