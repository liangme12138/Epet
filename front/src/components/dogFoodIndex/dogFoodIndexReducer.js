// import * as ajaxConstants from '../../constants/ajaxConstants'

export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'tabrequested':
            newState.status = 1;
            newState.result1 = action.respones;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'getBigImgrequested':
            newState.status = 1;
            newState.result2 = action.respones;
            break;
        case 'getPrdrequested':
            newState.status = 1;
            newState.result2 = action.respones;
            break;
        case 'getDogFoodMenurequested':
            newState.status = 1;
            newState.result4 = action.respones;
            break;
    }
    return newState;
}