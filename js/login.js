/**
 * Created by Administrator on 2016/4/7.
 */


$(function () {

    var username;
    var passwd;
    var btnlogin = $('.btn-login');

    /* 生成验证码 */
    var randomNum, // 生成的数字
        arrNum=[], // 存放数字
        inputNu=[]; //输入数字
    //var inputCode =document.getElementById('checkcode'); //输入的验证码
    var inputCode = $('#checkMa');
    var registerCheck=document.getElementById('captcha-img');
    var checkSpans=registerCheck.getElementsByTagName('span'); // 验证的span

    for(var i = 0 ;i<4 ;i++){
        randomNum=Math.floor(Math.random()*10);
        arrNum.push(randomNum);
        checkSpans[i].innerHTML=randomNum;
        console.log(1);
    }

    $('.txt-password').on('blur', function () {
        btnlogin.removeClass('btn-disabled');
    })

    $('.btn-login').on('click', function () {

        var checkcode = inputCode[0].value;

        for(var i = 0 ;i <arrNum.length ; i++){
            inputNu[i]=checkcode.charAt(i);
        }

        var isCheck=(checkcode[0] ==arrNum[0])&&(checkcode[1] ==arrNum[1])&&
            (checkcode[2] ==arrNum[2])&&(checkcode[3] ==arrNum[3]);



        username = $.trim($('.txt-username').val());
        passwd = $.trim($('.txt-password').val());

        if(!isCheck) {
            $('.item-tips').show();
            $('.err-msg').text("验证码错误！");
        } else {


        $.ajax({
            url:'./php/register.php',
            type:'post',
            data: {username: username,passwd:passwd},
            timeout: 2000,
            beforeSend: function (data) {

            },
            success: function (data) {
                console.log(typeof data);

                if(data.substr(0,3) === "<!D"){
                    window.location.href = '/jdM/index.html';
                } else {
                    $('.item-tips').show();
                    $('.err-msg').text("用户名或密码错误！");
                }

            },
            error: function () {
                $('.item-tips').show();
                $('.err-msg').text("用户名或密码错误！");

            },
            complete: function () {
                console.log('complete');
            }

        });
        }
        inputCode.value="";
    }

    );
//}

})