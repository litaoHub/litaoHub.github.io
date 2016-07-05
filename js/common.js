/**
 * Created by Administrator on 2016/3/17.
 */
//声明一个全局的变量

//在window下声明了一个对象

window.litao = {};

//给全局对象添加自定义方法，该方法主要用来判断手指是否俩开屏幕
 litao.transitionEnd = function (obj,callback) {

     if(typeof obj == 'object'){
         obj.addEventListener('webkitTransitionEnd', function () {
             callback && callback();
         });
         obj.addEventListener('transitionEnd', function () {
             callback && callback();
         })
     }


 };
//该方法用来记录触碰屏幕的时间，当时间触碰屏幕开始到结束之间时间是否大于150毫秒时，
//视为滑动屏幕
litao.tap = function (obj,callback) {
    if(typeof obj == 'object'){
        var isMove = false;
        var time =0;
        obj.addEventListener('touchstart', function (e) {
            time = Date.now();
        });
        obj.addEventListener(function (e) {
            isMove = ture;
        });
        window.addEventListener('touchend', function (e) {
            if(!isMove && (Date.now()-time)<150){
                callback && callback(e);
            }
            isMove = false;

            timer = 0;
        });

    }
}