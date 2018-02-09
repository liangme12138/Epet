// import * as ajaxConstants from '../../constants/ajaxConstants'
// import spinner from '../spinner/spinner'
export default function TabsReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'requesting':
            newState.status = 0;
            break;
        case 'productrequested':
            newState.status = 1;
            newState.result1 = action.respones.data1;
            newState.result2 = action.respones.data2;
            break;
        case 'requesterror':
            newState.status = -1;
            newState.result = action.respones;
            break;
        case 'productItemrequested':
            newState.status = 1;
            newState.result3 = action.respones;
            break;
        case 'editProductItemrequested':
            newState.status = 1;
            newState.result4 = action.respones;
            break;
        case 'deleteProductItemrequested':
            newState.status = 1;
            newState.result5 = action.respones;
            break;
    }
    return newState;
} 