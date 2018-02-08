export function getInfo(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['mineRequesting', 'mineRequest', 'mineRequesterror']
    }
}