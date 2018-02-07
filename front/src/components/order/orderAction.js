export function allorder(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['orderRequesting', 'allorderRequested', 'orderRequesterror']
    }
}

