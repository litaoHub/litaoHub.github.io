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
     * 1.�Զ��Ĺ�������
     * 2.СԲ��ҲҪ���Ź�������
     * 3.������ʱ����Ҫ����
     * 4.ͼƬ������Ҫ����
     * 5.�������ľ��벻���� 1/3 ����������ȥ
     * 6.�������˵�ʱ��  ���ݻ����ķ�����  ������һ�Ż�����һ��
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

        imageBox1.style.webkitTransform = 'translateX('+x+'px)';/*����*/
        imageBox1.style.transform = 'translateX('+x+'px)';
    }

    var setPointers1 = function (index1) {

        for(var i = 0 ; i < points1.length ; i ++){
            points1[i].className = " ";
        }
        /*�ҵ���ǰͼƬ��Ӧ�ĵ�*/
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
            /*����9��ͼƬ����������ʱ��  ����˲�䶨λ����һ�ŵ�λ��*/
            index1 = 1;
            /*ɾ������*/
            removetransition1();
            /*��λ*/
            setTranslateX1(-index1 * width1);
        }
        else if(index1 <= 0) {
            /*����0��ͼƬ����������ʱ��  ����˲�䶨λ�����һ�ŵ�λ��*/
            index1 = 2;
            /*ɾ������*/
            removetransition1();
            /*��λ*/
            setTranslateX1(-index1*width1);
        }
        setPointers1(index1);

    });



    /*��¼������ʼ��ʱ��X������*/
    var startX1 = 0;
    /*��¼������ʱ���X������*/
    var moveX1 = 0;

    /*�����ľ���*/
    var distanceX1 = 0;

    /*��¼��û�л�����*/
    var isMove1 = false;

    imageBox1.addEventListener('touchstart', function (e) {

        startX1 = e.touches[0].clientX;
        /*�����ʱ��*/
        clearInterval(timer1);
    });

    imageBox1.addEventListener('touchmove', function (e) {

        moveX1 = e.touches[0].clientX;

        distanceX1  = moveX1 - startX1;

        /*ɾ������*/
        removetransition1();
        /*�ı�λ��*/
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
        /*��¼������ʱ���X������*/
        moveX1 = 0;

        /*�����ľ���*/
        distanceX1 = 0;

        /*��¼��û�л�����*/
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
        /*�����Ѿ����ڵ�����*/
        callback && callback(myData);
        /*������ִ����*/
        return false;
    }
    $('#uploadpro').click(function () {
        $('#recommend').show();

        $.ajax({
            /*404  δ�ҵ���Դ
             * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
             * */
            /*����һ���ӿ�*/
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
