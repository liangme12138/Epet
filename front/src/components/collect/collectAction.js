export function getCollect(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['collectRequesting', 'collectRequested', 'collectRequesterror']
    }
}
export function deleteId(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['collectRequesting', 'delIdRequested', 'collectRequesterror']
    }
}