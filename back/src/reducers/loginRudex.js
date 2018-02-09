export default function LoginRudex(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeLogin':
            newState = {
                class:'float',
                err: 'hide'
            }
            break;
        case 'loginRequested':
            newState = testRes(action.res);
            break;
        case 'errorLogin':
            newState = {
                class: 'float hide',
                status:false,
                err: ''
            }
            break;
        case 'close':
            newState = {
                err : 'hide',
                class: 'float hide',
            }
            break;
    }
    return newState;
}
function testRes(res){
    if (res.data != "fail"){
        return {
            status: true,
            class: 'float hide',
            position:res.data,
            err:'hide'
        }
    }else{
        return {
            status: false,
            class: 'float hide',
            err:''
        }
    }
}