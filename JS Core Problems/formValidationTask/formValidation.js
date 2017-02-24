function solve() {
    return function(){
        event.preventDefault();
        let username = $('#username');
        let password = $('#password');
        let confirmPassword = $('#confirm-password');
        let email=$('#email');
        let firmChecker = $('#company');
        let firmField = $('');
        let submit=$('#submit');
        let valid=$('#valid');
        submit.on('click',function (event) {
            event.preventDefault();
            let checker=true;
            let name=username.val();
            let pass1=password.val();
            let pass2=confirmPassword.val();

            if(name.length==name.match(/[A-Za-z0-9]/g).length&&name.length>=3&&name.length<=20) {
                username.css('border-color', '');
            } else{
                username.css('border-color', 'red');
                checker=false;
            }
            if(pass1.length==pass1.match(/[A-Za-z0-9_]/g).length&&pass1.length>=5&&pass1.length<=15) {
                password.css('border-color', '');
            } else{
                password.css('border-color', 'red');
                checker=false;
            }
            if(pass2.length==pass2.match(/[A-Za-z0-9_]/g).length&&pass2.length>=5&&pass2.length<=15) {
                confirmPassword.css('border-color', '');
            } else{
                confirmPassword.css('border-color', 'red');
                checker=false;
            }
            if(pass1==pass2){
                password.css('border-color', '');
                confirmPassword.css('border-color', '');
            } else{
                password.css('border-color', 'red');
                confirmPassword.css('border-color', 'red');
                checker=false;

            }
            if(checker){
                valid.css("display","inline");
            }
            checker=true;
            

        });

    }
}
