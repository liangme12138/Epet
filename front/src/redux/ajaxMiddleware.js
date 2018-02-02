import http from '../utils/reqAjax'

 // types:['beforeRequest','Requested','RequestedError'],
export function ajaxMiddleware(MiddleWareAPI){
    return function(dispatch){
        return function(action){
            const {types, url, method = 'get', params} = action;        
            if(!url){
                return dispatch(action);
            }
            MiddleWareAPI.dispatch({
                type: types[0],
            })

            if(url){
                return new Promise ((resolve,reject) => {
                    http[method]({ url: url, 'params': params}).then(res => {
                        MiddleWareAPI.dispatch({
                            type:types[1],
                            respones:res.data
                        })
                    }).catch(error => {
                        MiddleWareAPI.dispatch({
                            type: types[2],
                            error,
                        })
                    })
                })
            }
        }
    }
}

                     