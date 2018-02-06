import http from '../utils/reqAjax'
import * as ajaxContants from '../constants/ajaxConstants'

 // types:['beforeRequest','Requested','RequestedError'],
export function ajaxMiddleware(MiddleWareAPI){
    return function(dispatch){
        return function(action){
            const {type,types, url, method = 'get', params = {}} = action;        
            if(!url){
                return dispatch(action);
            }

            let defaultConstants = [ajaxContants.AJAX_REQUESTING, ajaxContants.AJAX_REQUESTED, ajaxContants.AJAX_REQUESTERROR];
            let [requesting, requested, requesterror] = types ? types : defaultConstants;

            MiddleWareAPI.dispatch({
                type: requesting
            })

            if(url){
                return new Promise ((resolve,reject) => {
                    http[method]({ 'url': url, 'params': params}).then(res => {
                        MiddleWareAPI.dispatch({
                            type: requested,
                            respones:res.data
                        })
                        resolve(res.data)
                    }).catch(error => {
                        MiddleWareAPI.dispatch({
                            type: requesterror,
                            respones:error,
                        })
                        reject(error);
                    })
                })
            }
        }
    }
}

                     