// import * as ajaxConstants from '../../constants/ajaxConstants'

export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'menurequested':
            newState.status = 1;
            newState.result = action.respones;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}