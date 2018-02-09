export function goLogin(name,psd){
    return {
        types:['beforeLogin','loginRequested','errorLogin'],
        'url':'staff.php',
        'params': {username:name,password:psd},
        method:'post'
    }
}
export function closeTips(){
    return {
        type:'close'
    }
}