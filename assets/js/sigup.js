$(document).ready(function(){
    function kiemtraTen(){
        var ten = /^[a-z0-9A-Z]{6,20}$/;
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
        $('#tbten').html('*');
        $('#tbten').addClass('mauden');
        return true;
    }
    $('#user_name').blur(kiemtraTen);
    function kiemtrasdt(){
        var sdt =/^[0]{1}[0-9]{9}$/;
        if($('#phone-number').val()==''){
            $('#tbsdt').html('\n*Không được để trống!');
            $('#tbsdt').addClass('maudo');
            return false;
        }
        if(!sdt.test($('#phone-number').val())){
            $('#tbsdt').html('\n*Sai cú pháp!');
            $('#tbsdt').addClass('maudo');
            return false;
        }
        $('#tbsdt').html('*');
        $('#tbsdt').addClass('mauden');
        return true;
    }
    $('#phone-number').blur(kiemtrasdt);
    function kiemtrapass(){
        var pass= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
        if($('#pass').val()==''){
            $('#tbpass').html('\n*Không được để trống!\n');
            $('#tbpass').addClass('maudo');
            return false;
        }
        if(!pass.test($('#pass').val())){
            $('#tbpass').html('\n*Sai cú pháp!\n');
            $('#tbpass').addClass('maudo');
            return false;
        }
        $('#tbpass').html('\n*');
        $('#tbpass').addClass('mauden');
        return true;
    }
    $('#pass').blur(kiemtrapass);
    function kiemtrarpass(){
        var rpass = $('#pass').val();
        if($('#rpass').val()==''){
            $('#tbrpass').html('\n*Không được để trống!\n');
            $('#tbrpass').addClass('maudo');
            return false;
        }
        if(rpass != $('#rpass').val()){
            $('#tbrpass').html('\n*Sai cú pháp!');
            $('#tbrpass').addClass('maudo');
            return false;
        }
        $('#tbrpass').html('\n*');
        $('#tbrpass').addClass('mauden');
        return true;
    }
    $('#rpass').blur(kiemtrarpass);
    function kiemtraaddr(){
        if($('#address').val()==''){
            $('#tbaddr').html('\n*Không được để trống!\n');
            $('#tbaddr').addClass('maudo');
            return false;
        }
        $('#tbaddr').html('\n*');
        $('#tbaddr').addClass('mauden');
        return true;
    }
    $('#address').blur(kiemtraaddr);
    $('#confirm').click(function(){
        if(!kiemtraTen()||!kiemtraaddr()||!kiemtrapass()||!kiemtrarpass()||!kiemtrasdt()){
            return false;
        }
        alert('Thành công! Quay lại đăng nhập đi nào');
        history.go(-2);
        return true;
    
    
    })

})
     