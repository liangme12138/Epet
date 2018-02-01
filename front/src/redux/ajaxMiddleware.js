import http from '../utils/reqAjax'

 // types:['beforeRequest','Requested','RequestedError'],
export function ajaxMiddleWare(MiddleWareAPI){
    return function(dispatch){
        return function(action){
            const {types, url, method = 'get', params} = action;        
            if(!url){
                return dispatch(action);
            }
            MiddleWareAPI.dispatch({
                type: types[0],
            })

            if(method =='post'){
                http[method]({url:url,params}).then(res => {
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
            }else if(method == 'get'){
                http[method]({url:url,params}).then(res => {
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
            }
        }
    }
}

                     