export function login(_url,_params){
    return{
        url:_url,
        params: _params,
        types: ['loginRequesting', 'loginRequested', 'loginRequesterror']
    }
}
export function checkPhone(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['lRequesting', 'lRequested', 'lRequesterror']
    }
}