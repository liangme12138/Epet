import * as ajaxConstants from '../../constants/ajaxConstants'

export default function categoryReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'requestingCate':
            newState.status = 0;
            break;
        case 'requestedCate':
            newState.status = 1;
            newState.result1 = action.respones.data1;
            newState.result2 = action.respones.data2;
            newState.result3 = action.respones.data3;
            newState.result4 = action.respones.data4;
            break;
        case 'requesterrorCate':
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}