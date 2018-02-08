export function register(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['registerRequesting', 'registerRequested', 'registerRequesterror']
    }
}

export function checkPhone(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['registerRequesting', 'phoneRequested', 'registerRequesterror']
    }
}