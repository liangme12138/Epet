export default function(state={},action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.shade = "shade";
            newState.loading = "loading";
            newState.iCurPage = action.page;
            newState.moreData = "";
            newState.err = "";
            break;
        case 'datagridRequest':
            let data = disposeData(action.res.data);
            newState.dataList = data.dataList;
            newState.total = data.total;
            newState.shade = "shade hide";
            newState.loading = "loading hide";
            newState.iCurUrl = action.iCurUrl;
            break;    
        case 'error':
            newState.err = action.error;
            newState.shade = "shade hide";
            newState.loading = "loading hide";
            break;
        case 'datagridSingle':
            newState.moreData = dispatchSingle(action.res.data);
            newState.shade = "shade hide";
            newState.loading = "loading hide";
            newState.iCurUrl = action.iCurUrl;
            break;
        case 'datagridSearch':
            let data1;
            if (action.res.data == "fail"){
                newState.err = "fail";
            }else{
                data1 = disposeData(action.res.data);
                newState.dataList = data1.dataList;
                newState.total = data1.total;
            }
            newState.shade = "shade hide";
            newState.loading = "loading hide";
            newState.keyWord = action.keyWord;
            break;
    }
    return newState;
}

function disposeData(result){
    var reg = /([0]{2}\:){2}[0]{2}$/;
    let res;
    let limit;

    if (result.data1){
        res = result.data1;
        limit = result.data2[0];
    }else{
        res = result;
    }
    res = res.map((item)=>{
        if(item.keepDate && reg.test(item.keepDate)){
            item.keepDate = item.keepDate.replace(reg,'');
        }
        if (item.birth && reg.test(item.birth)){
            item.birth = item.birth.replace(reg, '');
        }
        return item;
    });
    if(res[0].orderId){
        res.forEach((item)=>{
            item.qty = 1;
        })
        res = filterOrder(res);
        res.forEach(item=>{
            if(!(/\.[\d]{2}$/.test(item.price))){
                item.price+='.00';
            }
        })
        function filterOrder(arr) {
            for (var i = 0; i < arr.length; i++) {
                if(arr[i].status == "1"){
                    arr[i].status = "待支付";
                } else if (arr[i].status == "2"){
                    arr[i].status = "已支付";
                } else if (arr[i].status == "3"){
                    arr[i].status == "退款";
                }
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i].orderId == arr[j].orderId) {
                        arr[i].qty++;
                        limit.rowsCount--;
                        arr[i].price = arr[i].price - 0;
                        arr[i].price += Number(arr[j].price);
                        arr.splice(j, 1);
                        filterOrder(arr);
                    }
                }
            }
            return arr;
        }
    }
    return{
        dataList: res,
        total: limit.rowsCount
    }
}
function dispatchSingle(res){
    if(res == "ok"){
        return "ok";
    }else if(res == "fail"){
        return 'fail';
    }
    if(res[0].orderId){
        for(var i = 1;i < res.length;i++){
            res[0].name += ',' + res[i].name;
            res[0].goodsId += ',' + res[i].goodsId;
            res[0].price = res[0].price - 0;
            res[0].price += Number(res[i].price);
        }
        return res;
    }
    if(res[0].goodsImg){
        var newData = getNewData(res);
        function getNewData(arr) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (arr[i].goodsId == arr[j].goodsId) {
                        arr[i].goodsImg += ',' + arr[j].goodsImg;
                        arr.splice(j, 1);
                        getNewData(arr);
                    }
                }
            }
            return arr;
        }
        return newData;
    }else{
        return res;
    }
}
