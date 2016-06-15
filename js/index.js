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
//�ֲ�ͼ
function banner() {

    /*
     * 1.�Զ��Ĺ�������
     * 2.СԲ��ҲҪ���Ź�������
     * 3.������ʱ����Ҫ����
     * 4.ͼƬ������Ҫ����
     * 5.�������ľ��벻���� 1/3 ����������ȥ
     * 6.�������˵�ʱ��  ���ݻ����ķ�����  ������һ�Ż�����һ��
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

        imageBox.style.webkitTransform = 'translateX('+x+'px)';/*����*/
        imageBox.style.transform = 'translateX('+x+'px)';
    }

    var setPointers = function (index) {

        for(var i = 0 ; i < points.length ; i ++){
            points[i].className = " ";
        }
        /*�ҵ���ǰͼƬ��Ӧ�ĵ�*/
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
                /*����9��ͼƬ����������ʱ��  ����˲�䶨λ����һ�ŵ�λ��*/
                index = 1;
                /*ɾ������*/
                removetransition();
                /*��λ*/
                setTranslateX(-index * width);
            }
            else if(index <= 0) {
                /*����0��ͼƬ����������ʱ��  ����˲�䶨λ�����һ�ŵ�λ��*/
                index = 8;
                /*ɾ������*/
                removetransition();
                /*��λ*/
                setTranslateX(-index*width);
            }
            setPointers(index);

    });



    /*��¼������ʼ��ʱ��X������*/
    var startX = 0;
    /*��¼������ʱ���X������*/
    var moveX = 0;

    /*�����ľ���*/
    var distanceX = 0;

    /*��¼��û�л�����*/
    var isMove = false;

    imageBox.addEventListener('touchstart', function (e) {

        startX = e.touches[0].clientX;
        /*�����ʱ��*/
        clearInterval(timer);

    });

    imageBox.addEventListener('touchmove', function (e) {

        moveX = e.touches[0].clientX;

        distanceX  = moveX - startX;

        /*ɾ������*/
        removetransition();
        /*�ı�λ��*/
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
        /*��¼������ʱ���X������*/
         moveX = 0;

        /*�����ľ���*/
         distanceX = 0;

        /*��¼��û�л�����*/
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

