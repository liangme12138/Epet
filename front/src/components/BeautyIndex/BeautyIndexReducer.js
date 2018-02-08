// import * as ajaxConstants from '../../constants/ajaxConstants'
import spinner from '../spinner/spinner'
export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'tabrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result1 = action.respones;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'getPrdrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result2 = action.respones;
            break;
        case 'BeautyMenurequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result3 = action.respones;
            break;
        case 'indexMenusrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result6 = action.respones;
            break;
    }
    return newState;
}