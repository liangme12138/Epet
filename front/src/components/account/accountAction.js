export function changeImg(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['imgRequesting', 'imgRequested', 'imgRequesterror']
    }
}
export function upData(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['imgRequesting', 'updataRequest', 'imgRequesterror'] 
    }
}
