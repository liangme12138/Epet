// import * as ajaxConstants from '../../constants/ajaxConstants'

export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
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
        case 'getPrdrequested':
            newState.status = 1;
            newState.result2 = action.respones;
            break;
        case 'BeautyMenurequested':
            newState.status = 1;
            newState.result3 = action.respones;
            break;
    }
    return newState;
}