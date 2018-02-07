/*
    封装注意事项
        * 避免报错
        * 兼容性
        * 单一性：功能单一化，一个函数只做一件事情
 */
/* 
* @Author: Marte
* @Date:   2017-07-31 10:29:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 17:28:30
*/

// 禁止选中文字的css样式
// div {

//       -moz-user-select:none;

//       -webkit-user-select:none;

//       user-select:none;    
// }
/**
 * [递归阶乘]
 * @param  {number} a [数字]
 * @return {返回阶乘结果}   [description]
 */
function fsum(a){
    if(a==1){
        return 1;
    }
    return a*fsum(--a);
}

/**
 * [计算立方数]
 * @param  {number} num [输入一个数值]
 * @return {number}     [返回值]
 */
function cube(num){
    var total=num*num*num;
    return total;
}
// document.write(cube(5));
// 
// 

/**
 * [找出三个数中最大值]
 * @param  {number} num1 [数值]
 * @param  {number} num2 [数值]
 * @param  {number} num3 [数值]
 * @return {number}      [返回值]
 */
function maxnumber(num1,num2,num3){
    var a=num1>=num2?num1:num2;
    var b=a>=num3?a:num3;
    var max=b;
    return max;
}


/**
 * [求平方数]
 * @param  {number} num1 [输入的数值]
 * @return {number}      [返回值]
 */
function sum(num1){
    var res=num1*num1;
    return res;
}



/**
 * [求某一范围的随机数]
 * @param  {number} min [最小值]
 * @param  {[number]} max [最大值]
 * @return {number}     [返回值]
 */
function ranN(min,max){
    var randomNumber=parseInt(Math.random()*(max-min+1))+min;
    return randomNumber;
}
// document.write(randomnumber(12,0));
// 
// 
// 
/**
 * [生成随机颜色]
 * @return {string} [返回颜色]
 */
function ranC(){
    var r = randomNumber(0,255);
    var g = randomNumber(0,255);
    var b = randomNumber(0,255);
    var res="rgb("+r+","+g+","+b+")";
    return res;
}



/**
 * [生成一个表格]
 * @param  {number} row [行数]
 * @param  {number} col [列数]
 * @return {string}     [返回值]
 */
// 页面上没有该元素，所以无法获取元素（以下代码得写在html页面中）
//  var row=document.getElementById("row");
//  var col=document.getElementById("col");
//  var produce=document.getElementById("produce");
//  var result=document.getElementById("result");
//  produce.onclick=function(){
//      var a=Number(row.value);
//      var b=Number(col.value);
//      result.innerHTML=ftable(a,b);
// }
 // 拼接表格
function ftable(row,col){
    // 拼接table和tbody
    var table="<table><tbody>";
    for(var i=1;i<=row;i++){
        // 拼接行
        table+="<tr>";
        for(var j=1;j<=col;j++){
            // 拼接列
            table+="<td>行数:"+i+"列数:"+j+"</td>";
        }
        // 合并行
        table+="</tr>";
        // console.log(typeof table);
    }
    // 合并tbody和table
    var table=table+"</tbody></table>";
    // 返回值
    return table;
}

/**
 * [tab标签切换]
 * @param  {tab按钮数组} header [tab按钮]
 * @param  {数组} img1   [内容]
 * @return {[type]}        [description]
 */
function tab(header,img1){
    // 初始化
    // 其中一个tab高亮、显示一张图片，其他隐藏
    var index = 0;
    for(var i=0;i<header.length;i++){
        if(i===index){
            // * 高亮第一个tab
            header[i].className = "active";
        }else{
            // * 隐藏除第一张以外的图片
            img1[i].style.display = "none";
        }
        var timer;
        // 绑定点击切换事件
        header[i].onmouseover = function(){
            // 清除所有延迟器
            clearTimeout(timer);
            var idx = this;
            timer = setTimeout(function(){
                for(var i=0;i<header.length;i++){
                    // 去除所有高亮和图片显示
                    header[i].className = "";
                    img1[i].style.display = "none";
                    if(header[i] === idx){
                        index = i;
                    }
                }
                // 其中一个tab高亮、显示一张图片，其他隐藏
                header[index].className = "active";
                img1[index].style.display = "block";
            },1000)
        }
        header[i].onmouseout = function(){
            clearTimeout(timer);
        }
    }
}

/**
 * [获取随机验证码]
 * @return {String} [返回随机验证码]
 */
function vCode(){
    var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

    var res = '';
    for(var i=0;i<4;i++){
        // 获取随机索引值
        var idx = parseInt(Math.random()*arr_char.length);

        // 根据索引值获取字符，并拼接
        res += arr_char[idx];
    }

    return res;
}


/**
 * [获取当前元素得前一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回前一个元素]
 */
function getPreviousElement(ele){
    var res = ele.previousSibling;

    // 当前一个节点不是元素时
    if(res && res.nodeType != 1){
        res = res.previousSibling;
    }

    return res;
}


/**
 * [获取当前元素得下一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回下一个元素]
 */
function getNextElement(ele){
    var res = ele.nextSibling;

    if(res && res.nodeType != 1){
        res = res.nextSibling;
    }

    return res;
}

/**
 * [获取子元素]
 * @param  {Element} ele [当前元素]
 * @return {Array} [返回元素节点]
 */
function getChildren(ele){
    var arr = ele.childNodes;

    // 过滤
    var res =  [];
    for(var i=0;i<arr.length;i++){
        if(arr[i].nodeType == 1){
            res.push(arr[i]);
        }
    }

    return res;
}

/**
 * [全选和反选效果]
 * @param  {ele} all    [全选按钮]
 * @param  {ele} insert [反选按钮]
 * @param  {array} radio  [单选按钮数组]
 * @return {[type]}        [description]
 */
function checked(all,insert,radio){
    // 绑定全选/不选事件
    all.onclick = function(){
        for(var i=0;i<radio.length;i++){
            radio[i].checked = all.checked;
        }
    }
    // 给每个radio复选框绑定点击事件
    // 判定#all复选框的勾选状态
    for(var i=0;i<radio.length;i++){
        radio[i].onclick = function(){
            all.checked = allCheck();
        }
    }
    // 绑定反选事件
    insert.onclick = function(){
        for(var i=0;i<radio.length;i++){
            radio[i].checked = !radio[i].checked;
        }
        all.checked = allCheck();
    }
    // 封装#all勾选状态函数
    // * 如果所有的radio勾选，则#all勾选
    // * 只有有一个radio未勾选，则#all取消勾选
    function allCheck(){
        var res = true;
        for(var i=0;i<radio.length;i++){
            if(!radio[i].checked){
                res = false;
                break;
            }
        }
        return res;
    }
}

/**
 * [快速排序法]
 * @param  {array} arr [数组]
 * @return {[type]}     [description]
 */
function show(arr){
    // 判断条件
    if(arr.length<=1) return arr;
    // 获取数组长度的一半长度
    var w = arr.length/2;
    // 获取基准
    var num = arr.splice(w,1)[0];
    console.log(num)
    // 创建两个数组
    var left = [];
    var right =[];
    // 遍历数组
    for(var i=0;i<arr.length;i++){
        if(arr[i]<num){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    // time++;
    return show(left).concat([num],show(right));
}

/**
 * [通过类名获取元素]
 * @param  {String} className [类名]
 * @param  {[Element]} ele [获取这个元素下代className类名元素]
 * @return {[type]}           [description]
 */
function getElementsByClassName(className,ele){
    // 判断是否支持getElementsByClassName()
    var res;

    // 判断是否传入ele
    if(!ele){
        ele = document;
    }

    // 支持
    if(ele.getElementsByClassName){
        res = ele.getElementsByClassName(className)
        return res;
    }

    /*
        如果当前浏览器不支持getElementsByClassName
        思路：
            1、通过标签名获取所有元素
                getElementsByTagName()
            2、过滤不包含className的元素
    */
    var arr = ele.getElementsByTagName('*');
    res = [];
    for(var i=0;i<arr.length;i++){
        // 判断当前元素是否包含className这个类名
        if(arr[i].className.indexOf(className) >= 0){
            res.push(arr[i]);
        }
    }

    return res;
}

/**
 * [删除非元素节点]
 * @param  {非元素节点} fele [node]
 * @return {[type]}      [description]
 */
function del(fele){
    if(fele.nodeType !== 1){
        return fele.parentNode.removeChild(fele);
    }else{
        alert("此节点是元素节点");
    }
}


/**
 * [获取元素css样式，兼容ie8-]
 * @param  {Element} ele  [获取样式的元素]
 * @param  {String} attr [css属性名]
 * @return {String}      [css属性值]
 */
function getCss(ele,attr){
    // 判断浏览器是否支持getComputedStyle
    if(window.getComputedStyle){
        return getComputedStyle(ele)[attr];
    }

    // ie8-
    else if(ele.currentStyle){
        return ele.currentStyle[attr];
    }

    // 返回内联样式
    else{
        return ele.style[attr];
    }

}


/**
 * [给元素添加事件的方法，支持事件捕获，兼容ie8-]
 * @param {Element} ele     [绑定事件的元素]
 * @param {String} type    [事件类型]
 * @param {Function} handler [事件处理函数]
 * @param {[Boolean]} capture [是否捕获]
 */
function addEvent(ele,type,handler,capture){
    // 判断当前浏览器是否支持addEventListener()
    if(ele.addEventListener){
        ele.addEventListener(type,handler,capture);
    }

    // ie8-
    else if(ele.attachEvent){
        ele.attachEvent('on' + type,handler);
    }

    // 其他浏览器
    else{
        ele['on' + type] = handler;
    }
}
// addEvent(box,'click',function(){},true);
// 给div添加一个点击事件



/*
    封装Cookie的增删查改
        * 添加 setCookie()
        * 删除 removeCookie()
        * 读取 getCookie()
        * 修改 利用setCookie()
    利用对象封装
        Cookie
            * set()
            * get()
            * remove()
 */

// 利用对象封装
var Cookie = {
    /**
     * [设置cookie]
     * @param {String} name    [cookie名]
     * @param {String} val     [cookie值]
     * @param {[Date]} expires [有效期]
     * @param {[String]} path    [cookie路径]
     */
    set:function(name,val,expires,path){
        // document.cookie = 'cartlist=1234;expires=' + now
        var cookieStr = name + '=' + val;

        // 有效期
        if(expires){
            cookieStr += ';expires=' + expires.toUTCString();
        }

        // 设置路径
        if(path){
            cookieStr += ';path=' + path;
        }

        // 写入
        document.cookie = cookieStr;
    },
    get:function(name){
        // 先获取所有cookie
        var cookie = document.cookie;
        if(cookie.length === 0){
            return '';
        }

        // 拆分成数组
        cookie = cookie.split('; ');

        // 遍历cookie，找到想要的cookie值
        var res = '';
        cookie.forEach(function(item){
            var arr = item.split('=');

            if(arr[0] === name){
                res = arr[1];
            }
        });

        return  res;
    },
    remove:function(name){
        // 利用设置过期时间达到删除的效果。
        var now = new Date();
        now.setDate(now.getDate()-100);

        // document.cookie = name +'=xxx;expires=' + now.toUTCString();
        Cookie.set(name,null,now);
    }
}




/**
 * [动画函数]
 * @param  {Element} ele    [动画元素]
 * @param  {Object} opt   [动画属性集合]
 * @param  {Function} callback   [回调函数]
 */
function animate(ele,opt,callback){
    //如何确定哪个属性是最后完成的动画

    // 动画数量
    var timerQty = 0;

    //遍历属性
    for(var attr in opt){
        createTimer(attr);
        timerQty++;
    }
    
    function createTimer(attr){
        // 根据属性定义定时器名字
        var timerName = attr + 'timer';

        // 获取目标值
        var target = opt[attr];

        clearInterval(ele[timerName]);
        ele[timerName] = setInterval(function(){
            // 获取当前值
            var current = getCss(ele,attr);//10px,0.5,20em,2.4rem,40deg

            // 提取单位
            var unit = current.match(/[a-z]+$/);
            unit = unit ? unit[0] : '';

            // 提取值
            current = parseFloat(current);


            // 计算速度（最小变化值：1/-1）
            // 避免速度变成0
            var speed = (target-current)/10;
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            // 针对opacity属性计算速度
            if(attr === 'opacity'){
                speed = speed>0 ? 0.05 : -0.05;
            }

            // 到达目标值后清除动画定时器
            if(current === target || speed === 0){
                clearInterval(ele[timerName]);

                // 重置目标值
                current = target - speed;

                // 动画完成数量减一
                timerQty--;


                // 执行回调函数
                if(timerQty===0 && typeof callback === 'function'){
                    callback();
                }
            }

            ele.style[attr] = current + speed + unit;
        },30);
    }
}

/**
 * [判断数据类型]
 * @param  {数据类型} data [description]
 * @return {数据类型}      [description]
 */
function type(data){
    // data.toString()
    // [object Array]
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * [ajax请求]
 * @param  {object} options  [参数]
 *  调用如下：
    // ajax.requests({
    //     type:"get",
    //     url:"http://wthrcdn.etouch.cn/weather_mini",
    //     data:{id:1,pageNo:2},
    //     async:true,
    //     jsonpcbName:"callback",
    //     success:function(res){
    //         // 待执行的代码
    //     }
    // })
 */
var ajax = {
    request(options){
        // 默认参数
        var defaults = {
            type:"get",
            async:true,
            jsonpcbName:"callback"
        }
        // 将默认参数和传入参数合并
        var opt = Object.assign({},defaults,options);
        // 方法2
        // for(var attr in options){
        //     defaults[attr] = options[attr];
        // }
        // var opt = defaults;

        // type参数忽略大小写
        opt.type = opt.type.toLowerCase();
        // data参数处理
        // opt.data=>{}
        // params = 'page=1&title=xxx'
        var params = "";
        if(opt.data){
            for(var attr in opt.data){
                params += attr + "=" + opt.data[attr] + "&";
            }
            params = params.slice(0,-1);
        }
        // type为jsonp
        if(opt.type === "jsonp"){
            var cbName = "getData" + new Date().getTime();
            // 创建全局函数
            window[cbName] = function(res){
                if(typeof opt.success === 'function'){
                    opt.success(res);
                }
                // 删除script标签
                script.parentNode.removeChild(script);
            }
            // 创建script标签，并写入页面
            var script = document.createElement("script");
            // 判断url中是否有？
            opt.url += opt.url.indexOf("?")>=0 ? "&" : "?";
            
            script.src = opt.url + params + "&" + opt.jsonpcbName + "=" + cbName;
            document.body.appendChild(script);
            // 终止函数
            return;
        }
        // 创建异步请求对象
        var xhr = null;
        try{
            // 标准浏览器
            xhr = new XMLHttpRequest();
        }catch(error){
            // IE浏览
            try{
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            }catch(err){
                try{
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){
                    alert('你的浏览器太low了，赶紧换吧');
                    return;
                }
            }
        }
        // xhr.onreadystatechange = function(){
        //     if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 300)){

        //     }
        // }
        // 或者
        var status = [200,304,201,300];
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && status.indexOf(xhr.status)>=0){
                var res = xhr.responseText;
                try{
                    // 标准浏览器
                    res = JSON.parse(xhr.responseText);
                }catch(e){
                    try{
                        // 如果浏览器不支持JSON.parse
                        res = eval("(" + xhr.responseText + ")");
                    }catch(err){
                        res = xhr.responseText;
                    }
                }
                if(typeof opt.success === "function"){
                    opt.success(res);
                }
            }
        }
        // type为get
        if(opt.type === "get"){
            // 判断url中是否有？
            opt.url += opt.url.indexOf("?")>=0 ? "&" : "?";
            opt.url += params;
            params = null;
        }
        xhr.open(opt.type,opt.url,opt.async);
        // 如果为post，则添加content-type请求头
        if(opt.type === 'post'){
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        }
        // 发送请求
        xhr.send(params);
    }
}

/**
 * [轮播图动画]
 * @param {obj} options [description]
 */

 // ----css样式----
 // <style>
 //     ul{list-style: none;padding:0;margin:0;}
 //     .carousel{position:relative;width:810px;height:320px;margin:0 auto;border:2px solid #f00;overflow: hidden;}
 //     .carousel ul{position:absolute;top:0;left:0;}
 //     .carousel img{display: block;}
 //     .carousel .next,.carousel .prev{position:absolute;left:0;top:50%;transform: translate(0,-50%);padding:10px 5px;width:30px;height:50px;line-height:50px;background-color: rgba(0,0,0,.3);text-align:center;color:#fff;cursor:pointer;}
 //     .carousel .next{left:auto;right:0;}
 //     .page{position: absolute;right:15px;bottom:15px;}
 //     .page span{display:inline-block;margin:0 5px;width:30px;height:30px;line-height:30px;text-align:center;background-color:#efefef;border-radius:50%;cursor:pointer;}
 //     .page span.active{background-color:#f60;color:#fff;}
 // </style>

// 以div为对象
function Carousel(options){
    // 默认参数
    var defaults = {
        width:810,
        height:320,
        imgs:[],
        type:"horizontal",//horizontal、fade
        // 图片切换间隔时间
        duration:1500,
        ele:".carousel",
        // 是否自动轮播
        autoPlay:true,
        // 默认index
        index:0,
        // 是否显示前后按钮
        button:true,
        // 是否显示页码
        page:true,
        // 是否无缝滚动
        marquee:true
    }
    // 覆盖默认参数
    // var opt = Object.assign({},defaults,options);//es6
    for(var attr in options){
        defaults[attr] = options[attr];
    }
    var opt = defaults;
    this.init(opt);
}
Carousel.prototype = {
    // constructor:Carousel,
    init(opt){
        this.ele = document.querySelector(opt.ele);
        this.ele.classList.add("carousel");
        var lastIndex = 0;
        this.opt = opt;
        var ul = document.createElement("ul");
        ul.style.height = opt.height + "px";
        
        ul.innerHTML = opt.imgs.map(function(item){
                return `<li><img src="${item}"/></li>`;
            }).join("");
        this.ele.appendChild(ul);
        
        // 判断是否无缝
        if(opt.marquee){
            // 复制第一张图片并写到ul最后
            var copyLi = ul.children[0].cloneNode(true);
            ul.appendChild(copyLi);
        }
        var li = ul.children;
        // 是否显示前后按钮
        var prev = document.createElement("span");
        var next = document.createElement("span");
        if(opt.button){
            prev.className = "prev";
            prev.innerHTML = "&lt;";
            prev.style.fontSize = "30px";
            next.className = "next";
            next.innerHTML = "&gt;";
            next.style.fontSize = "30px";
            this.ele.appendChild(prev);
            this.ele.appendChild(next);
        }
        var page1;
        // 是否显示页码
        if(opt.page){
            page1 = document.createElement("div");
            page1.className = "page";
            this.ele.appendChild(page1);
            for(var i=0;i<opt.imgs.length;i++){
                var span = document.createElement("span");
                span.innerHTML = i+1;
                if(i === this.opt.index){
                    span.className = "active";
                }
                page1.appendChild(span);
            }
            this.ele.appendChild(page1);
        }
        var span1 = document.querySelectorAll(".page span");
        this.span = span1;
        // 判断是否自动轮播
        if(opt.autoPlay){
            this.start();
        }
        // 判断滚动的方向
        if(opt.type === "horizontal"){
            // 改变ul的宽度
            ul.style.width = opt.width*ul.children.length + "px";
            ul.style.left = opt.width*(-opt.index) + "px";
            // 将li设为float:left;
            for(var i=0;i<li.length;i++){
                li[i].style.float = "left";
            }
        }else if(opt.type === "vertical"){
            ul.style.top = -opt.index*opt.height + "px";
        }else if(opt.type === "fade"){
            // 将li定位
            for(var i=0;i<li.length;i++){
                li[i].style.position = "absolute";
                li[i].style.left = 0;
                li[i].style.top = 0;
                li[i].style.opacity = 0;
            }
            li[opt.index].style.opacity = 1;
        }
        // 移入
        this.ele.onmouseenter = function(){
            this.stop();
        }.bind(this);
        // 移出
        this.ele.onmouseleave = function(){
            this.start();
        }.bind(this);
        // 上一张图片
        prev.onclick = function(){
            this.prev();
        }.bind(this);
        // 下一张图片
        next.onclick = function(){
            this.next();
        }.bind(this);
        // 点击页码跳转
        page1.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName.toLowerCase() === "span"){
                for(var i=0;i<this.span.length;i++){
                    if(this.span[i] === target){
                        this.opt.index = i;
                        this.move();
                    }else{
                        this.span[i].className = "";
                    }
                }
            }
        }.bind(this);
        this.ul = ul;
        this.li = li;
        
        this.len = opt.imgs.length;
        this.lastIndex = lastIndex;
    },
    move(){
        // 判断是否无缝滚动
        if(this.opt.marquee){
            if(this.opt.index > this.len){
                if(this.opt.type === 'vertical' || this.opt.type === 'horizontal'){
                    this.opt.index = 1;
                    this.ul.style.top = 0;
                    this.ul.style.left = 0;
                }else if(this.opt.type === 'fade'){
                    this.opt.index = 1;
                }
            }else if(this.opt.index < 0){
                this.opt.index = this.len;
                if(this.opt.type === 'vertical'){
                    this.ul.style.top = -this.opt.index*this.opt.height + "px";
                }else if(this.opt.type === 'horizontal'){
                    this.ul.style.left = -this.opt.index*this.opt.width + "px";
                }else if(this.opt.type === 'fade'){
                    this.opt.index = this.len;
                    animate(this.li[this.opt.index],{opacity:1});
                    animate(this.li[this.lastIndex],{opacity:0});
                    this.lastIndex = this.opt.index;
                }
                this.opt.index--;
                // this.ul.style.left = 0;
            }
            let target = {};
            if(this.opt.type === 'vertical'){
                target.top = -this.opt.index*this.opt.height;
                animate(this.ul,target);
            }else if(this.opt.type === 'horizontal'){
                target.left = -this.opt.index*this.opt.width;
                animate(this.ul,target);
            }else if(this.opt.type === 'fade'){
                console.log(this.lastIndex,this.opt.index)
                animate(this.li[this.opt.index],{opacity:1});
                animate(this.li[this.lastIndex],{opacity:0});
                this.lastIndex = this.opt.index;
            }
        }else{
            if(this.opt.index>=this.len){
                this.opt.index = 0;
            }else if(this.opt.index < 0){
                this.opt.index = this.len-1;
            }
            let target = {};
            if(this.opt.type === 'vertical'){
                target.top = -this.opt.index*this.opt.height;
            }else if(this.opt.type === 'horizontal'){
                target.left = -this.opt.index*this.opt.width;
            }else if(this.opt.type === 'fade'){
                target.opacity = 1;
                animate(this.li[this.opt.index],target);
                animate(this.li[this.lastIndex],{opacity:0});
                this.lastIndex = this.opt.index;
            }
            animate(this.ul,target);
        }
        
        for(var i=0;i<this.span.length;i++){
            if(this.opt.index === i){
                this.span[i].className = "active";
            }else{
                this.span[i].className = "";
            }
            if(this.opt.index === this.span.length){
                this.span[0].className = "active";
            }
        }
        return this;
    },
    start(){
        this.timer = setInterval(()=>{
            
            this.opt.index++;
            this.move();
        },this.opt.duration);
        return this;
    },
    stop(){
       clearInterval(this.timer);
    },
    prev(){
        this.opt.index--;
        this.move();
    },
    next(){
        this.opt.index++;
        this.move();
    }
}
//enumerable:false,//把constructor属性的可枚举性设置false(不可遍历)
Object.defineProperty(Carousel.prototype,"constructor",{value:Carousel})
// 调用如下：
// var lbt = new Carousel({
//     width:810,
        // height:320,
        // type:"horizontal",//horizontal、fade
        // 图片切换间隔时间
        // duration:1500,
        // ele:".carousel",
        // 是否自动轮播
        // autoPlay:true,
        // 默认index
        // index:0,
        // 是否显示前后按钮
        // button:true,
        // 是否显示页码
        // page:true,
        // 是否无缝滚动
        // marquee:true
//     imgs:["img/001.jpg","img/002.jpg","img/003.jpg","img/004.jpg"]
// });


  // ● 日期格式化方法
if(!Date.prototype.format){
    Date.prototype.format = function(fmt){
        // 预订字符对应时间
        var o = {
            "M+":this.getMonth()+1,
            "D+":this.getDate(),
            "h+":this.getHours(),
            "m+":this.getMinutes(),
            "s+":this.getSeconds(),
            "q+":Math.floor((this.getMonth()+3)/3),//季度
            "S":this.getMilliseconds()//毫秒
        }
        // 匹配年份
        // 年份比较特殊，所以单独处理
        // test方法如果返回true，RegExp.$1得到匹配的字符
        // 
        if(/(Y+)/.test(fmt)){
            // 得到fmt字符串中Y字符对应的时间
            // YYYY => 2017
            // YY => 17
            // res:'2017'.substr(4-2)=>17
            // res:'2017'.substr(4-4)=>2017
            // RegExp.$1:YYYY
            var res = String(this.getFullYear()).substr(4 - RegExp.$1.length);
            // 替换年份
            fmt = fmt.replace(RegExp.$1,res);//'2017/MM/DD'
        }
        // 遍历其他所有属性
        for(var attr in o){
            // 创建正则时设定分组，以便获取匹配到的字符
            // RegExp.$1
            var reg = new RegExp("("+attr+")");
            // 如果有匹配则把fmt中匹配到的字符替换成o中对应的时间，根据fmt中的字符决定是否补0
            // YYYYDDMM => 20170813
            // YYYY-DD-MM hh:mm:ss => 2017-08-13 20:12:30
            if(reg.test(fmt)){
                // 得到匹配字符对应的时间
                // MM(11月)                    ('0011').substr(2)=>11
                // MM(8月)                     ('008').substr(1)=>08
                var res = RegExp.$1.length>1 ? ('00' + o[attr]).substr(String(o[attr]).length) : o[attr];
                fmt = fmt.replace(RegExp.$1,res);//'2017/MM/DD'.replace('MM',11)=>'2017/11/DD'=>'2017/11/03'
            }
        }
        return fmt;
    }
}

// var now = new Date();
//now.format('YY/MM/DD');//17/11/3


/**
 [生成弹窗]
 * @param {element} ele [生成弹窗的按钮DOM节点]
 */
// 
function popup(ele){
    // 点击弹出弹窗
    $(ele).on("click",function(){
        var $div = $("<div/>").attr("id","box");
        $("<h3/>").html("弹窗").appendTo($div);
        $("<span/>").html("&times;").appendTo($div);
        $("<textarea/>").appendTo($div);
        $("body").prepend($div);
        $div.css({
            "position":"relative",
            "left":$(window).width()/2 - $("#box").outerWidth()/2,
            "top":$(window).scrollTop() + $(window).height()/2 - $("#box").outerHeight()/2
        });
        // 点击删除弹窗
        $("#box").on("click","span",function(){
            $(this).closest("div").remove();
        });
        // 移动弹窗
        $("#box h3").on("mousedown",function(evt){
            let x = evt.clientX - $("#box").offset().left;
            let y = evt.clientY - $("#box").offset().top;
            $("html,body").mousemove(function(e){console.log(444)
                e = e || window.event;
                $("#box").css({"left":e.clientX-x,"top":e.clientY-y});
                e.preventDefault();
            })
        })
        // 清除移动事件
        $("#box h3").on("mouseup",function(event){
            $("html,body").off();
        });
        // 滚动时弹窗自动居中,改变可视窗口大小时，改变弹窗位置
        $(window).on("scroll resize",function(){
            var top1 = $(window).scrollTop() + $(window).height()/2 - $("#box").outerHeight()/2;
            $("#box").stop().animate({"top":top1,"left":$(window).width()/2 - $("#box").outerWidth()/2},200);
        });
    })
}

// [jq懒加载get请求]
;(function($){
    $.fn.lazyLoad = function(options){
        var defaults = {
            qty:10,
            pageNo:1,
            url:"",
            type:"get"
        };
        var $self = this;
        // 合并数据
        var opt = $.extend({},defaults,options);
        var load = {
            _init(){
                this.ul = document.createElement("ul");;
                this.body = document.querySelector("body");
                this.last = opt.pageNo;
                this.send();
                // 滚动事件
                $(window).on("scroll",function(){
                    if($(window).scrollTop() >= $("html").outerHeight() - $(window).height()-40 && opt.pageNo != this.last){
                        this.send();
                    }
                }.bind(this));
                
            },
            send(){
                $.get(opt.url,{
                    pageNo:opt.pageNo,
                    qty:opt.qty
                },function(data){
                    var res = JSON.parse(data);
                    // 数据写入
                    
                    this.ul.innerHTML += res.data.map(item=>{
                        return `<li>
                            <h4>${item.name}</h4>
                            <p>${item.content}</p>
                        </li>`
                    }).join('');
                    this.body.appendChild(this.ul);
                    this.last = opt.pageNo;
                    if(opt.pageNo < Math.ceil(res.total/opt.pageNo)){
                        opt.pageNo++;
                    }
                }.bind(this));
            }
        }
        load._init();
    }
})(jQuery);

// [放大镜]

;(function($){
    $.fn.gdsZoom = function(options){
        //默认值
        var defaults = {
            // 大图显示位置
            position:'right',

            // 大图与小图的距离
            gap:15,

            //大图显示区域宽高
            width:300,
            height:300
        }

        //this:jquery对象（实例）
        this.each(function(){
            //this：节点
            var $small = $(this);

            // 扩展默认值
            var opt = $.extend({},defaults,options);

            // 添加插件特定类名
            $small.addClass('gds-zoom');

            var zoom = {

                _init:function(){
                    // 小图
                    this.$smallImg = $small.children('img');

                    // 生成大图/容器
                    this.$big = $('<div/>').addClass('gds-big');
                    this.$big.css({
                        width:opt.width,
                        height:opt.height,

                    });

                    // 定位大图显示区域
                    if(opt.position === "right"){
                        this.$big.css({
                            left:this.$smallImg.offset().left + this.$smallImg.outerWidth(),
                            top:this.$smallImg.offset().top,
                            marginLeft:opt.gap
                        });
                    }else if(opt.position === "top"){
                        this.$big.css({
                            left:this.$smallImg.offset().left,
                            top:this.$smallImg.offset().top - opt.height - opt.gap,
                            marginBottom:opt.gap
                        });
                    }else if(opt.position === "left"){
                        this.$big.css({
                            left:this.$smallImg.offset().left - opt.width - opt.gap,
                            top:this.$smallImg.offset().top,
                            marginRight:opt.gap
                        });
                    }else if(opt.position === "bottom"){
                        this.$big.css({
                            left:this.$smallImg.offset().left,
                            top:this.$smallImg.offset().top + this.$smallImg.outerWidth + opt.gap,
                            marginTop:opt.gap
                        });
                    }

                    this.$bigImg = $('<img/>');

                    // 生成放大镜
                    this.$minzoom = $('<span/>').addClass('minzoom');

                    $small.on('mouseenter',function(){
                        this.show();
                    }.bind(this)).on('mouseleave',function(){
                        this.hide();
                    }.bind(this)).on('mousemove',function(e){
                        this.move(e.clientX,e.clientY);
                    }.bind(this));
                },
                show:function(){
                    // 写入图片地址
                    this.$bigImg.attr('src',this.$smallImg.attr('data-big'));
                    this.$big.append(this.$bigImg);
                    this.$big.appendTo('body');
                    this.$minzoom.appendTo($small);

                    console.log(this.$bigImg[0].complete)

                    // 要获取图片的高度，必须先显示到页面
                    // 并且图片加载完成才可以获取图片实际高度
                    this.$bigImg[0].onload = function(){
                        // 计算大图与小图比率
                        this.ratio = this.$bigImg.outerWidth()/this.$smallImg.outerWidth();

                        // 设置放大镜的尺寸
                        // 与大图显示区域等比例
                        this.$minzoom.css({
                            width:opt.width/this.ratio,
                            height:opt.height/this.ratio
                        });

                    }.bind(this);
                },
                hide:function(){
                    this.$big.remove();
                    this.$minzoom.remove();
                },
                move:function(x,y){
                    // 计算放大镜移动过的距离
                    var left = x - $small.offset().left -  this.$minzoom.outerWidth()/2;
                    var top = y - $small.offset().top -  this.$minzoom.outerHeight()/2;

                    // 限定left,top值
                    if(left<0){
                        left = 0;
                    }else if(left > this.$smallImg.outerWidth()-this.$minzoom.outerWidth()){
                        left = this.$smallImg.outerWidth()-this.$minzoom.outerWidth()
                    }

                    if(top<0){
                        top = 0;
                    }else if(top > this.$smallImg.outerHeight()-this.$minzoom.outerHeight()){
                        top = this.$smallImg.outerHeight()-this.$minzoom.outerHeight()
                    }

                    this.$minzoom.css({
                        left:left,
                        top:top
                    });

                    // 大图移动
                    this.$bigImg.css({
                        left:-left*this.ratio,
                        top:-top*this.ratio
                    })
                }
            }
            zoom._init();
        });
    }
})(jQuery);

