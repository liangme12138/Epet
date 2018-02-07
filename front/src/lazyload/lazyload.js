export default {
    lazyloaded:function(){
        var num = document.getElementsByTagName('img').length;
        var img = document.getElementsByTagName('img');
        var n = 0;
        lazyload();
        window.onscroll = lazyload;
        function lazyload() {
            var seeHeight = document.documentElement.clientHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(seeHeight);
            for (var i = 0; i < num; i++) {
                if (img[i].offsetTop < seeHeight + scrollTop) {
                    if (img[i].getAttribute("src") == "../src/components/lazyload.gif") {
                        img[i].src = img[i].getAttribute("data-src");
                    }
                    n = i + 1;
                }
            }
        }
    } 
}