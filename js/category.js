/**
 * Created by Administrator on 2016/3/17.
 */
window.onload = function () {
    leftSwipe();
    //swipeRight();
    swipeRight();
}

function leftSwipe() {

    var parentDom = document.querySelector('.jd_category_left');
    var childDom = parentDom.querySelector('ul');
    var parentH = parentDom.offsetHeight;
    var childH = childDom.offsetHeight;
    var minPosition = parentH - childH;
    var maxPosition = 0;
    //�����ľ���
    var distance = 100;
    //��ȡ����ʱ��Ķ�λ
    var minSwipe = minPosition - distance;
    var maxSwipe = maxPosition + distance;
    var currY = 0;
    var startY = 0;  //��ʼY����
    var moveY = 0;  //����Y������
    var displayY = 0; //�ı�ľ���
    var isMove = false; //�Ƿ񻬶���
    /*�ӹ���*/
    var addTransition = function(){
        childDom.style.webkitTransition = 'all 0.2s';/*����*/
        childDom.style.transition = 'all 0.2s';
    };
    /*ɾ������*/
    var removeTransition = function(){
        childDom.style.webkitTransition = 'none';/*����*/
        childDom.style.transition = 'none';
    };
    /*��λ*/
    /*��ǰ�Ķ�λ*/
    var setTranslateY = function(y){
        childDom.style.webkitTransform = 'translateY('+y+'px)';/*����*/
        childDom.style.transform = 'translateY('+y+'px)';
    };

    
    
    childDom.addEventListener('touchstart', function (e) {
        
        startY = e.touches[0].clientY;
    });
    
    childDom.addEventListener('touchmove', function (e) {
        moveY = e.touches[0].clientY;
        
        displayY = moveY - startY;
        
        removeTransition();
        
        
        if((currY + displayY) > minSwipe && (currY + displayY) < maxSwipe)
        {
            setTranslateY(currY + displayY);
        }
    });
    
    
    window.addEventListener('touchend', function (e) {

        if((currY + displayY) > maxPosition){
            currY = maxPosition;
            addTransition();
            setTranslateY(currY);
        }else if((currY+displayY) < minPosition) {
            currY = minPosition;
            addTransition();
            setTranslateY(currY);
        }else {
            currY = currY + displayY;
        }

        startY = 0;
        displayY =0;
        isMove = false;
    });


    var lis = document.querySelectorAll('li');

    itcast.tap(childDom,function (e) {

        var li = e.target.parentNode;
        for(var i=0;i<lis.length;i++) {
            lis[i].className = ' ';
            lis[i].index = i;
        }
        li.className = 'now';
        var translateY = -li.index*50;

        if(translateY > minPosition) {
            currY = translateY;
            addTransition();
            setTranslateY(currY);
        }else {
            currY = minPosition;
            setTranslateY(currY);
        }
    });

    
}


function swipeRight(){
    itcast.iScroll({
        swipeDom:document.querySelector('.jd_category_right'),
        swipeType:'y',
        swipeDistance:50
    });
}