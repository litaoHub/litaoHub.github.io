/**
 * Created by Administrator on 2016/4/19.
 */

$(function () {
    readHtml();
})

/*���ݻ���*/
var myData = '';
var getData = function(callback){
    /*��������Ѿ����� ���ǾͲ���������*/
    if(myData){
        /*�����Ѿ����ڵ�����*/
        callback && callback(myData);
        /*������ִ����*/
        return false;
    }
    $.ajax({
        /*404  δ�ҵ���Դ
         * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
         * */
        /*����һ���ӿ�*/
        url:'json/remen.json',
        type:'get',
        data:{},
        dataType:'json',
        success:function(data){

            /*�������� data  ָ�����
             * function a(b){
             *   b
             * }
             *
             * */


            myData = data;
            callback &&callback(myData);
        }
    })
    $('#nvzhuang').click(function () {
        $.ajax({
            /*404  δ�ҵ���Դ
             * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
             * */
            /*����һ���ӿ�*/
            url:'json/nvzhuang.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){
                myData = data;
                callback &&callback(myData);
            }
        });
    });
    $('#nanzhuang').click(function () {
        $.ajax({
            /*404  δ�ҵ���Դ
             * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
             * */
            /*����һ���ӿ�*/
            url:'json/nanzhuang.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){


                myData = data;
                callback &&callback(myData);
            }
        });
    });
    $('#remen').click(function () {
        $.ajax({
            /*404  δ�ҵ���Դ
             * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
             * */
            /*����һ���ӿ�*/
            url:'json/remen.json',
            type:'get',
            data:{},
            dataType:'json',
            success:function(data){


                myData = data;
                callback &&callback(myData);
            }
        });
    });
    $('#huazhuang').click(function () {
        $.ajax({
            /*404  δ�ҵ���Դ
             * ��ǰ��Ŀ¼����index��html��  ���json��·��  js/index.json
             * */
            /*����һ���ӿ�*/
            url:'json/huazhuang.json',
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
        var templateImage = _.template($('#template_image').html());
        var templateTiltleImg = _.template($('#template_titleimg').html());

        var imageHtml = templateImage({model:data});

        var imageHtmltile = templateTiltleImg({model:data});

        $('.close').html(imageHtml);
        $('.banner_a').html(imageHtmltile);

    })
}