import spinner from '../spinner/spinner'
export default function addressReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'addressRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'addressRequest':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'addressRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            // newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'delRequest':
            spinner.closeSpinner();
            newState.status = 1;
            newState.deldate = action.respones;
            newState.type = action.type;
            break;
        case 'editRequest':
            spinner.closeSpinner();
            newState.status = 1;
            newState.editdate = action.respones;
            newState.type = action.type;
            break;
        case 'updataRequest':
            spinner.closeSpinner();
            newState.status = 1;
            newState.updataDate = action.respones;
            newState.type = action.type;
            break;

        case 'addRequest':
            spinner.closeSpinner();
            newState.status = 1;
            newState.addDate = action.respones;
            newState.type = action.type;
            break;
    }
    return newState;
}