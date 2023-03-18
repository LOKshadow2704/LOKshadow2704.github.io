$(document).ready(function(){
    function kiemtraTen(){
        var ten = /^[a-z0-9_A-Z]{6,20}$/;
        if($('#user_name').val()==''){
            $('#tbten').html('\n*Không được để trống!\n');
            $('#tbten').addClass('maudo');
            return false;
        }
        if(!ten.test($('#user_name').val())){
            $('#tbten').html('\n*Sai cú pháp!\n');
            $('#tbten').addClass('maudo');
            return false;
        }
        $('#tbten').html('\n*');
        $('#tbten').addClass('mauden');
        return true;
    }
    $('#user_name').blur(kiemtraTen);
    function kiemtrapass(){
        var pass = /^[0-9a-zA-z]{6,20}$/
        if($('#pass').val()==''){
            $('#tbpass').html('\n*Không được để trống!\n');
            $('#tbpass').addClass('maudo');
            return false;
        }
        if(!pass.test($('#pass').val())){
            $('#tbpass').html('\n*Mật khẩu có độ dài từ 6-20 ký tự!');
            $('#tbpass').addClass('maudo');
            return false;
        }
        $('#tbpass').html('\n*');
        $('#tbpass').addClass('mauden');
        return true;
    }
    $('#pass').blur(kiemtrapass);
    $('#confirm').click(function(){
        if(!kiemtraTen()||!kiemtrapass()){
            return false;
        }
        history.back();
        return true;
    
    
    })
})
     