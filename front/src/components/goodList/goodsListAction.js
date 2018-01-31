import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
export function normalSearch(params){
    if(params=='全部商品'){
          return {
        types: ['beforeRequest', 'goodslistRequested', 'requestError'],
        url: 'goodslist.php',
        params:{brandAllname: params }
    }  
        }
    return {
        types: ['beforeRequest', 'goodslistRequested', 'requestError'],
        url: 'goodslist.php',
        params:{brandname: params }
    }
}

export function newSearch(){
    console.log('新品搜索');
    return {
        type: 'newSearch'
    }
}

export function countSearch(){
    console.log('销量搜索');
    return {
        type: 'countSearch'
    }
}
export function priceSearch(){
    console.log('价格搜索');
    return {
        type: 'priceSearch'
    }
}
export function someSearch(){
    console.log('筛选搜索');
    var $someSearch =$('.someSearch');
    $('.ant-layout-content>ul>li').css({backgroundColor:'#ddd'});
    $someSearch.animate({right:0});

    return {
        type: 'someSearch'
    }
}
export function some_close(){
    var $someSearch =$('.someSearch');
     $('.ant-layout-content>ul>li').css({backgroundColor:'#fff'});
    $someSearch.animate({right:'-10rem'});
}
export function fenlei(text){
    var $someDetail =$('.someDetail');
    $someDetail.animate({right:0});
    let fenlei =['女士单鞋','女士靴子','女士凉鞋'];
    let price = ['101-200元','201-300元','301-500元','501-700元','701-1000元','1000以上'];
    let size =[33,34,35,36,37,38,39,40];
    let color =['黑色','白色','红色','棕色','绿色','灰色','金银色','拼色','蓝色','黄色','粉色','银色','紫色','啡色','米黄色','金色','驼杏色','其他色','橙色','栗色'];
    let kuanshi =['凉鞋','短靴','单鞋','浅口鞋','低靴','深口鞋','拖鞋','时装鞋','中靴','乐福鞋','玛丽珍鞋','休闲鞋','长靴','小白鞋','鱼嘴','手套鞋/奶奶鞋','穆勒鞋','骑士靴','绑带鞋','雪地靴','高靴','凉靴','布洛克鞋','渔夫鞋','帆布鞋','凉拖鞋','及踝鞋','马丁鞋','豆豆鞋','系带鞋','懒人鞋','松糕鞋',
    '休闲皮鞋','低帮','运动(斯凯奇)'];
    let style = ['简约','休闲','时尚休闲','ol通勤','甜美','城市休闲','复古','舒适','时尚','英伦','性感','优雅','活力','韩版','欧美','淑女','文艺','百搭','帅气','生活','知性','运动风','瑞丽','新潮','清新','性感妩媚','奢华高贵','可爱','东方典雅','商务休闲','日韩','学院风','经典上班','商务正装','穆勒鞋','英伦风','玛丽珍','波西米亚风情'];
    let jijie =['冬季','秋季','夏季','春季'];
    let small =$('.someSmall')[0];
    small.innerHTML='<li>全部</li>';
    if(text == "分类"){
        small.innerHTML +=fenlei.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
       
    }else if(text == "价格"){
       small.innerHTML +=price.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }else if(text == "尺码"){
        small.innerHTML +=size.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }else if(text == "颜色"){
        small.innerHTML +=color.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }else if(text == "款式"){
        small.innerHTML +=kuanshi.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }else if(text == "风格"){
        small.innerHTML +=style.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }else if(text == "季节"){
        small.innerHTML +=jijie.map(function(item){
            return '<li>'+item+'</li>'
        }).join('');
    }
   
}
export function some_left(){
    var $someDetail =$('.someDetail');
    $someDetail.animate({right:"-10rem"});
}

export function toDetail(aa){
    var d = new Date();
    d.setHours(d.getHours() + 72);
    var cookies=document.cookie;
     // var res='';
     //  if(cookies.length){
     //        cookies = cookies.split('; ');
     //        for(var i=0;i<cookies.length;i++){
     //            var arr=cookies[i].split('=');
     //            if(arr[0]==='his'){
     //                return res=arr[1];
     //                break;
     //            }
     //            return res;
     //        }
     //        console.log(res)
     //        res=JSON.parse(res); 
     //        for (var i=0; i < res.length; i++) {  
     //            aa.push( res[i] );  
     //        } 
     //    } 
        
        var str='his='+JSON.stringify(aa)+';expires='+d.toGMTString()+';path=/'; 
        //写入cookie
    document.cookie=str;
    hashHistory.push('/detail/'+aa[4].goodid)
}
