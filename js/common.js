/**
 * Created by Administrator on 2016/3/17.
 */
//����һ��ȫ�ֵı���

//��window��������һ������

window.litao = {};

//��ȫ�ֶ�������Զ��巽�����÷�����Ҫ�����ж���ָ�Ƿ�������Ļ
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
//�÷���������¼������Ļ��ʱ�䣬��ʱ�䴥����Ļ��ʼ������֮��ʱ���Ƿ����150����ʱ��
//��Ϊ������Ļ
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