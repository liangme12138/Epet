// import * as ajaxConstants from '../../constants/ajaxConstants'

export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'AtvProductrequested':
            newState.status = 1;
            newState.result1 = action.respones.data1[0];
            newState.result2 = action.respones.data2;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}