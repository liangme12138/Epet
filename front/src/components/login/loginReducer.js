import spinner from '../spinner/spinner'
export default function LoginReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'loginRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'loginRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'loginRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'phoneRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
      
       
    }
    return newState;
}