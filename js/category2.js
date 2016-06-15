/**
 * Created by Administrator on 2016/4/19.
 */

$(function () {
    readHtml();
})

/*数据缓存*/
var myData = '';
var getData = function(callback){
    /*如果数据已经存在 咱们就不是做请求*/
    if(myData){
        /*返回已经存在的数据*/
        callback && callback(myData);
        /*不往下执行了*/
        return false;
    }
    $.ajax({
        /*404  未找到资源
         * 当前的目录是在index。html下  相对json的路径  js/index.json
         * */
        /*看作一个接口*/
        url:'json/remen.json',
        type:'get',
        data:{},
        dataType:'json',
        success:function(data){

            /*函数当中 data  指向的是
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
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
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
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
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
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
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
            /*404  未找到资源
             * 当前的目录是在index。html下  相对json的路径  js/index.json
             * */
            /*看作一个接口*/
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