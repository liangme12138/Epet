export default function goodListReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    console.log(action)
    switch(action.type){
        case 'beforeRequest':
            newState.type = action.type;
            break;
        case 'goodslistRequested':
            newState.type = action.type;
            newState.body = action.response
         case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    console.log(newState)
    return newState;
}