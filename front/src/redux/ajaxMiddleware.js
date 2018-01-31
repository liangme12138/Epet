import http from '../utils/reqAjax'

export function ajaxMiddleware(api) {
    return function (dispatch) {
        return function (action) {
            //   if(action){ 
                const { types, url, method = 'get', params = {} } = action
                // console.log(action,6666)
                if (!url) {
                    return dispatch(action)
                }
                api.dispatch({
                    type: 'beforeRequest'
                })
                if (url) {
                    const [a,b,c] = types
                    http[method](url, params).then(res => {
                    // console.log(res)
                        
                        api.dispatch({
                            type:b,
                            response: res
                        })
                    }).catch(error => {
                    api.dispatch({
                        type: 'requestError',
                        error
                    })
                })
              }
        }
    }
}


// export function userMiddleWare(middlewareAPI){
//     return function(dispatch){
//         return function(action){
//             const {types,yes,url, method = 'get', params} = action;
//             console.log(action)
//             if(yes == 1){
//                 console.log('未登录')
//                 return dispatch({
//                     type:'login'
//                 });
//             }
//             if(yes==2){
//                 console.log('已登录')
//                 http[method](url, params).then(res => {
//                     middlewareAPI.dispatch({
//                         type: 'logined',
//                         repsonse: res,
//                     })
//                 }).catch(error => {
//                     middlewareAPI.dispatch({
//                         type: 'requestError',
//                         error
//                     })
//                 })
//             }
//         }
//     }
// }
