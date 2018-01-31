    import http from '../utils/reqAjax'

export function ajaxMiddleware(api) {
    return function (dispatch) {
        return function (action) {
            if(action){
                   const { types, url, method = 'get', params = {} , a = ''} = action 
                    if (!url) {
                        return dispatch(action)
                    }

                    api.dispatch({
                        type: 'beforeRequest' + a
                    })
                    if (url) {
                        if(method == 'post'){
                            http.post(url, params).then(res => {
                                api.dispatch({
                                    type: 'Requested' + a,
                                    response: res
                                })
                            }).catch(error => {
                                api.dispatch({
                                    type: 'requestError' + a,
                                    error
                                })
                            })
                        }else{
                            http.get(url, params).then(res => {
                                console.log(res);
                                api.dispatch({
                                    type: 'Requested' + a,
                                    response: res
                                })
                            }).catch(error => {
                                api.dispatch({
                                    type: 'requestError' + a,
                                    error
                                })
                            })
                        }
                        
                    }
              }
        }
    }
}