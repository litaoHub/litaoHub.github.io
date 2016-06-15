/**
 * Created by Administrator on 2016/3/21.
 */
window.onload = function () {
    animateFun();

}
function animateFun()  {


var mask = document.querySelector('.mask');
var submit = document.querySelector('.submit');
var deleteBtn = document.querySelectorAll('.delete_box');
var maskContent = document.querySelector('.mask_content');
var cancel = document.querySelector('.cancel');
var deleteBox;

    for(var i=0;i<deleteBtn.length;i++)
    {
        var j = 0;
        deleteBtn[i].onclick = function () {
                j++;
                var _this = this;
                var deleteHtml = $(_this).parent().parent().parent().parent('.jd_product');
                var deleteProduct = $(_this).parent().parent().
                    parent().parent().parent('.jd_shop');
                mask.style.display = 'block';
                maskContent.className = 'mask_content bounceInDown';
                deleteBox = this;
                var deleteUp = deleteBox.querySelector('span:first-child');

                deleteUp.style.transition = 'all 0.2s';
                deleteUp.style.webkitTransition = 'all 0.2s';

                deleteUp.style.webkitTransform='rotate(-30deg) translateY(2px)';
                deleteUp.style.transform='rotate(-30deg) translateY(2px)';

                deleteUp.style.transformOrigin = '0px 5px';
                deleteUp.style.webkitTransformOrigin = '0px 5px';

                submit.onclick = function () {


                    console.log(1);
                    mask.style.display = 'none';
                    deleteUp.style.transition = 'all 0.2s';
                    deleteUp.style.webkitTransition = 'all 0.2s';

                    deleteUp.style.webkitTransform='none';
                    deleteUp.style.transform='none';

                    deleteUp.style.transformOrigin = '0px 5px';
                    deleteUp.style.webkitTransformOrigin = '0px 5px';

                    deleteHtml.remove();
                    if(j==3)
                    {
                        deleteProduct.remove();
                        j=0;
                    }
                }
                cancel.onclick = function () {



                    mask.style.display = 'none';
                    deleteUp.style.transition = 'all 0.2s';
                    deleteUp.style.webkitTransition = 'all 0.2s';

                    deleteUp.style.webkitTransform='none';
                    deleteUp.style.transform='none';

                    deleteUp.style.transformOrigin = '0px 5px';
                    deleteUp.style.webkitTransformOrigin = '0px 5px';
                }
            }
    }
}



