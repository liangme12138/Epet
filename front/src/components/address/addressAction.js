export function getAddress(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['addressRequesting', 'addressRequest', 'addressRequesterror']
    }
}

export function delAddress(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['addressRequesting', 'delRequest', 'addressRequesterror']
    }
}
export function editAddress(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['addressRequesting', 'editRequest', 'addressRequesterror']
    }
}
export function updataAddress(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['addressRequesting', 'updataRequest', 'addressRequesterror']
    }
}
export function addAddress(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['addressRequesting', 'addRequest', 'addressRequesterror']
    }
}