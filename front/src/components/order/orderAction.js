export function allorder(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['orderRequesting', 'allorderRequested', 'orderRequesterror']
    }
}
export function takegoods(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['orderRequesting', 'takegoodsRequested', 'orderRequesterror']
    }
}
export function waitpay(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['orderRequesting', 'waitpayRequested', 'orderRequesterror']
    }
}
export function evaluate(_url, _params) {
    return {
        url: _url,
        params: _params,
        types: ['orderRequesting', 'evaluateRequested', 'orderRequesterror']
    }
}


