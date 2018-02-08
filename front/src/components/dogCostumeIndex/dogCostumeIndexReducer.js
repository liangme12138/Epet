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
        case 'costumetabrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result1 = action.respones;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'dogCostumeBigImgrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.result2 = action.respones;
            break;
    }
    return newState;
}