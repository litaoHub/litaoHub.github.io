
window.onload=function(){

  provingCode();
}
/* 验证码 */
function provingCode(){
    
    /* 生成验证码 */
    var randomNum, // 生成的数字
        arrNum=[], // 存放数字
        inputNu=[]; //输入数字

    var userName =document.getElementById('userName'); //用户名
    var password1=document.getElementById('password1');  //密码1
    var password2=document.getElementById('password2');  //密码2

    var inputCode =document.getElementById('checkcode'); //输入的验证码

    var registerBtn=document.getElementById('registerBtn'); //登录按钮

    var registerCheck=document.getElementById('registerCheck');
    var checkSpans=registerCheck.getElementsByTagName('span'); // 验证的span


      for(var i = 0 ;i<4 ;i++){
        randomNum=Math.floor(Math.random()*10);
        arrNum.push(randomNum);
        checkSpans[i].innerHTML=randomNum;
      }
   // 输入完毕验证 输入的验证码
      registerBtn.onclick=function(){
          checkcode=inputCode.value;
          for(var i = 0 ;i <arrNum.length ; i++){
              inputNu[i]=checkcode.charAt(i);
          }
          var isCheck=(checkcode[0] ==arrNum[0])&&(checkcode[1] ==arrNum[1])&&
            (checkcode[2] ==arrNum[2])&&(checkcode[3] ==arrNum[3]);
          var isPass=password1.value == password2.value;

          if(!isCheck){
            alert("验证码错误!");
            }else {
             if(!isPass){
              alert("密码不一致！");
             }else {

                 //  请求数据库
                 window.location.href="./login.html";
               //$.ajax({
               //   type:'post',
               //   url:'js/user.php',
               //   data:{
               //     act:'add',
               //     username:$("#userName").val(),
               //     password:$("#password1").val()
               //   },
               //   success:function(data){
               //     window.location.href="./login.html";
               //   }
               //});
           

             }
            }

           

            inputCode.value="";
            password1.value="";
            password2.value="";
      }
 
}