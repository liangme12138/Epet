import spinner from '../spinner/spinner'
export default function accountReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'imgRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'imgRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'imgRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'updataRequest':
            spinner.closeSpinner();
            newState.status =1;
            newState.updatas = action.respones;
            newState.type = action.type;
            break;
            
    }
    return newState;
}