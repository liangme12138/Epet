import spinner from '../spinner/spinner'
export default function mineReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
    case 'mineRequesting':
    spinner.loadSpinner();
    newState.status = 0;
    newState.type = action.type;
    break;
    case 'mineRequesterror':
    spinner.closeSpinner();
    newState.status = -1;
    newState.result = action.respones;
    newState.type = action.type;
    break;
    case 'mineRequest':
    spinner.closeSpinner();
    newState.status = 1;
    newState.info = action.respones;
    newState.type = action.type;
    break;
    }
    return newState;
}    