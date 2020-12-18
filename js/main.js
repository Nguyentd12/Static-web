function LogInFunction(){
    var userName = document.getElementById("inputName").value;
    var passWork = document.getElementById("inputPass").value;
    if(userName === 'admin' && passWork === '12345678@') 
    {
        alert('Bạn đã đăng nhập thành công');
        document.getElementById("inputName").value = "";
        document.getElementById("inputPass").value = "";
    }
    else
    {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác');
        document.getElementById("inputName").focus();
    }
};