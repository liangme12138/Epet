import spinner from '../spinner/spinner'
export default function LoginReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'loginRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'loginRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'loginRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'lRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'lRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'lRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}