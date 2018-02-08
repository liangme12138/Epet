import spinner from '../spinner/spinner'
export default function orderReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'orderRequesting':
            spinner.loadSpinner();
            newState.status = 0;
            newState.type = action.type;
            break;
        case 'orderRequesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            newState.type = action.type;
            break;
        case 'allorderRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.info = action.respones;
            newState.type = action.type;
            break;
        case 'takegoodsRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.takegoods= action.respones;
            newState.type = action.type;
            break;
        case 'waitpayRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.pay = action.respones;
            newState.type = action.type;
            break;
        case 'evaluateRequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.evaluate= action.respones;
            newState.type = action.type;
            break;    
    }
    return newState;
}    