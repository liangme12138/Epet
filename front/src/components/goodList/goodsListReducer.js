import * as ajaxConstants from '../../constants/ajaxConstants'

export default function goodListReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action)
    switch (action.type) {
        case ajaxConstants.AJAX_REQUESTING:
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.respones;
            break;
        case ajaxConstants.AJAX_REQUESTERROR:
            newState.status = -1;
            newState.result = action.respones;
            break;
    }
    return newState;
}