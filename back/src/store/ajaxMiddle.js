import http from '../utils/requestAjax';
export default function(api){
    return function(dispatch){
        return function(action){
            const {url,types,params,method="get"} = action;
            if(!url){
                return dispatch(action);
            }
            if(params.page){
                api.dispatch({
                    type: types[0],
                    page: params.page
                })
            }else{
                api.dispatch({
                    type: types[0]
                }) 
            }
            if(url && method == "get"){
               http.get({'url':url,'params':params}).then((res)=>{
                    api.dispatch({
                        type: types[1],
                        res: res,
                        iCurUrl:url,
                        keyWord:params.keyWord
                    })
               }).catch((error)=>{
                   api.dispatch({
                       type: types[2],
                       error:error
                   })
               })
            } else if(url && method == "post"){
                http.post({ 'url': url, 'params': params }).then((res) => {
                    api.dispatch({
                        type: types[1],
                        res: res,
                        iCurUrl: url,
                        keyWord: params.keyWord
                    })
                }).catch((error) => {
                    api.dispatch({
                        type: types[2],
                        error: error
                    })
                })
            }
        }
    }
}