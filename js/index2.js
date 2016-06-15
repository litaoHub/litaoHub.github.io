/**
 * Created by Administrator on 2016/4/22.
 */
$(function () {

    $.ajax({
        url: './php/zhuye.php',
        type: 'get',
        data: {nav: 'nav'},
        success: function (data) {



            console.log(data);
            var html = template('tpl', {opts: data});


            // console.log(html)

            $('#nav_ul').append(html);
        }
    });




    readHtml();

});




function banner1(target) {

    /*
     * 1.自动的滚动起来
     * 2.小圆点也要跟着滚动起来
     * 3.滚动的时候需要动画
     * 4.图片盒子需要滑动
     * 5.当滑动的距离不超过 1/3 让它吸附回去
     * 6.当超过了的时候  根据滑动的方向来  是跳下一张还是上一张
     * */


    var bannerbox1 = document.getElementById(target);

    var imageBox1 = bannerbox1.getElementsByTagName('ul')[0];


    var pointsBox1 = bannerbox1.getElementsByTagName('ul')[1];

    var points1 = pointsBox1.getElementsByTagName('li');

    var width1 = bannerbox1.offsetWidth;
    console.log(width1);

    var addTransition1 = function () {

        imageBox1.style.webkitTransition  = "all 0.2s";
        imageBox1.style.transition  = "all 0.2s";
    }

    var removetransition1 = function () {

        imageBox1.style.webkitTransition  = "none";
        imageBox1.style.transition  = "none";
    }

    var setTranslateX1 = function (x) {

        imageBox1.style.webkitTransform = 'translateX('+x+'px)';/*兼容*/
        imageBox1.style.transform = 'translateX('+x+'px)';
    }

    var setPointers1 = function (index1) {

        for(var i = 0 ; i < points1.length ; i ++){
            points1[i].className = " ";
        }
        /*找到当前图片对应的点*/
        points1[index1-1].className = "now";

    };

    var index1  = 1;

    var timer1 = setInterval(function () {

        index1 ++ ;

        addTransition1();

        setTranslateX1(-index1*width1);

    },3000);



    //imageBox1.addEventListener('webkitTransitionEnd', function ()
    itcast.transitionEnd(imageBox1, function () {

        if(index1 >= 3)
        {
            /*当第9张图片动画结束的时候  让它瞬间定位到第一张的位子*/
            index1 = 1;
            /*删除过渡*/
            removetransition1();
            /*定位*/
            setTranslateX1(-index1 * width1);
        }
        else if(index1 <= 0) {
            /*当第0张图片动画结束的时候  让它瞬间定位到最后一张的位子*/
            index1 = 2;
            /*删除过渡*/
            removetransition1();
            /*定位*/
            setTranslateX1(-index1*width1);
        }
        setPointers1(index1);

    });



    /*记录触摸开始的时候X的坐标*/
    var startX1 = 0;
    /*记录滑动的时候的X的坐标*/
    var moveX1 = 0;

    /*滑动的距离*/
    var distanceX1 = 0;

    /*记录有没有滑动过*/
    var isMove1 = false;

    imageBox1.addEventListener('touchstart', function (e) {

        startX1 = e.touches[0].clientX;
        /*清除定时器*/
        clearInterval(timer1);
    });

    imageBox1.addEventListener('touchmove', function (e) {

        moveX1 = e.touches[0].clientX;

        distanceX1  = moveX1 - startX1;

        /*删除过渡*/
        removetransition1();
        /*改变位子*/
        setTranslateX1(-index1*width1+distanceX1);

        isMove1 = true;

    });

    window.addEventListener('touchend', function (e) {

        if(Math.abs(distanceX1) > (width1/3) && isMove1)
        {
            if(distanceX1> 0){
                index1--;
            }
            else {
                index1++;
            }
            addTransition1();
            setTranslateX1(-index1*width1);
        }else {

            addTransition1();
            setTranslateX1(-index1*width1);
        }



        startX1 = 0;
        /*记录滑动的时候的X的坐标*/
        moveX1 = 0;

        /*滑动的距离*/
        distanceX1 = 0;

        /*记录有没有滑动过*/
        isMove1 = false;

        clearInterval(timer1);

        timer1 = setInterval(function () {

            index1 ++ ;

            addTransition1();

            setTranslateX1(-index1*width1);

        },3000);
    })

}

var myData = '';
var getData = function(callback){

    if(myData){
        /*返回已经存在的数据*/
        callback && callback(myData);
        /*不往下执行了*/
        return false;
    }
    $('#uploadpro').click(function () {
        $('#recommend').show();

        $.ajax({
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
            url:'json/upload.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){


                myData = data;
                callback &&callback(myData);
            }
        });
    });
}



var readHtml = function () {
    getData(function (data) {

        //console.log(data);
        var templateUpload = _.template($('#upload').html());


        var uploadHtml = templateUpload({model:data});


        $('.love-list').html(uploadHtml);


    })
}
