; (function ($) {
  // $.prototype.lxCarousel = function(){
  // 	// this => $('.box')
  // 	// 这里的this为jquery对象（实例）
  // }

  $.fn.lxCarousel = function (options) {
    // 默认属性
    var defaults = {
      width: 750,
      height: 300,
      imgs: [],

      ele: '.carousel',

      // 图片切换间隔时间
      duration: 3000,

      // 滚动类型
      type: 'horizontal',//horizontal,fade

      // 自动轮播
      autoPlay: true,

      // 默认索引值
      index: 0,

      // 是否显示前后按钮
      buttons: true,

      // 是否显示页码
      page: true,

      // 是否无缝滚动
      wufeng: false
    }
    return this.each(function () {
      var $self = $(this);

      // 覆盖默认参数
      var opt = jQuery.extend({}, defaults, options);



      var Car = {
        //创建节点
        //绑定事件
        init(opt) {
          $self.addClass('carousel');

          this.index = opt.index;
          this.opt = opt;

          let ul = document.createElement('ul');
          ul.innerHTML = opt.imgs.map(item => {
            return `<li><img src="${item}"></li>`
          }).join('');

          $self.append(ul);

          this.move();

          // 是否自动轮播
          if (opt.autoPlay) {
            this.start();

            // 鼠标移入移除
            $self.on('mouseenter', function () {
              this.stop();
            }.bind(this)).on('mouseleave', function () {
              this.start();
            }.bind(this))
          }

          // 分页
          // 前后按钮



          // 给this添加属性，以便传递参数
          this.len = opt.imgs.length;
          this.ul = ul;


        },
        move() {
          if (this.index > this.len - 1) {
            this.index = 0;
          } else if (this.index < 0) {
            this.index = this.len - 1;
          }

          let target = {};
          if (this.opt.type === 'vertical') {
            target.top = -this.index * this.opt.height;
          } else if (this.opt.type === 'horizontal') {
            target.left = -this.index * this.opt.width;
          }
          $self.find('ul').animate(target);
        },
        stop() {
          clearInterval(this.timer);
        },
        start() {
          this.timer = setInterval(() => {
            this.index++;
            this.move();
          }, this.opt.duration);
        },
        next() {
          this.index++;
          this.move();
        },
        prev() {
          this.index--;
          this.move();
        }
      }

      Car.init(opt);
    })

  }

  $.fn.lxTab = function () {

  }

  // 写系列插件
  // $.fn.extend({
  // 	lxCarousel(){

  // 	},
  // 	lxTab(){

  // 	}
  // })
})(jQuery);

