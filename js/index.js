/**
 * Created by Administrator on 2016/3/16.
 */
window.onload = function () {

    search ();
    banner();
    banner1('jd_banner1');
    banner1('jd_banner2');
    downtime();
}

function search () {


    var searchBox = document.getElementsByClassName('jd_header_box')[0];

    var bannerBox = document.getElementsByClassName('jd_banner')[0];

    var bannerHeight = bannerBox.offsetHeight;
    var opacity = 0;
    window.onscroll = function(){
        var top  = document.body.scrollTop;
        if(top<bannerHeight){
            opacity = top/bannerHeight*0.85;
        }else {
            opacity = 0.85;

        }

        searchBox.style.background = "rgba(201,21,35,"+opacity+")";
    }

}
//轮播图
function banner() {

    /*
     * 1.自动的滚动起来
     * 2.小圆点也要跟着滚动起来
     * 3.滚动的时候需要动画
     * 4.图片盒子需要滑动
     * 5.当滑动的距离不超过 1/3 让它吸附回去
     * 6.当超过了的时候  根据滑动的方向来  是跳下一张还是上一张
     * */


    var bannerbox = document.getElementsByClassName('jd_banner')[0];

    var imageBox = bannerbox.getElementsByTagName('ul')[0];


    var pointsBox = bannerbox.getElementsByTagName('ul')[1];

    var points = pointsBox.getElementsByTagName('li');

    var width = bannerbox.offsetWidth;
    console.log("1----" + width);

    var addTransition = function () {

        imageBox.style.webkitTransition  = "all 0.2s";
        imageBox.style.transition  = "all 0.2s";
    }

    var removetransition = function () {

        imageBox.style.webkitTransition  = "none";
        imageBox.style.transition  = "none";
    }

    var setTranslateX = function (x) {

        imageBox.style.webkitTransform = 'translateX('+x+'px)';/*兼容*/
        imageBox.style.transform = 'translateX('+x+'px)';
    }

    var setPointers = function (index) {

        for(var i = 0 ; i < points.length ; i ++){
            points[i].className = " ";
        }
        /*找到当前图片对应的点*/
        points[index-1].className = "now";

    };

    var index  = 1;

    var timer = setInterval(function () {

        index ++ ;

        addTransition();

        setTranslateX(-index*width);

    },3000);



    //imageBox.addEventListener('webkitTransitionEnd', function ()
    itcast.transitionEnd(imageBox, function () {

            if(index >= 9)
            {
                /*当第9张图片动画结束的时候  让它瞬间定位到第一张的位子*/
                index = 1;
                /*删除过渡*/
                removetransition();
                /*定位*/
                setTranslateX(-index * width);
            }
            else if(index <= 0) {
                /*当第0张图片动画结束的时候  让它瞬间定位到最后一张的位子*/
                index = 8;
                /*删除过渡*/
                removetransition();
                /*定位*/
                setTranslateX(-index*width);
            }
            setPointers(index);

    });



    /*记录触摸开始的时候X的坐标*/
    var startX = 0;
    /*记录滑动的时候的X的坐标*/
    var moveX = 0;

    /*滑动的距离*/
    var distanceX = 0;

    /*记录有没有滑动过*/
    var isMove = false;

    imageBox.addEventListener('touchstart', function (e) {

        startX = e.touches[0].clientX;
        /*清除定时器*/
        clearInterval(timer);

    });

    imageBox.addEventListener('touchmove', function (e) {

        moveX = e.touches[0].clientX;

        distanceX  = moveX - startX;

        /*删除过渡*/
        removetransition();
        /*改变位子*/
        setTranslateX(-index*width+distanceX);

        isMove = true;

    });

    window.addEventListener('touchend', function (e) {

        if(Math.abs(distanceX) > (width/3) && isMove)
        {
            if(distanceX > 0){
                index--;
            }
            else {
                index++;
            }
            addTransition();
            setTranslateX(-index*width);
        }else {

            addTransition();
            setTranslateX(-index*width);
        }



         startX = 0;
        /*记录滑动的时候的X的坐标*/
         moveX = 0;

        /*滑动的距离*/
         distanceX = 0;

        /*记录有没有滑动过*/
         isMove = false;

        clearInterval(timer);

        timer = setInterval(function () {

            index ++ ;

            addTransition();

            setTranslateX(-index*width);

        },3000);
    })

}



var downtime = function () {

    var time = 5*3600;
    var timeBox =document.getElementsByClassName('sk_time')[0];
    var span = timeBox.getElementsByTagName('span');
    var sk_time = document.getElementsByClassName('sk_time')[0];
    var timer = setInterval(function () {
        time --;
        var h = Math.floor(time/3600);
        var m = Math.floor(time/60%60);
        var s  =Math.floor(time%60);
        span[0].innerHTML  = Math.floor(h/10);
        span[1].innerHTML  = h%10;

        span[3].innerHTML  = Math.floor(m/10);
        span[4].innerHTML  = m%10;

        span[6].innerHTML  = Math.floor(s/10);
        span[7].innerHTML  = s%10;

    },1000);

}

