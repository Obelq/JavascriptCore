class UserView {
    constructor() {

    }

    loginView() {
        let loginForm = $(`<section id="viewLogin" class="viewLogin">
        <h1 class="titleForm">Please login</h1>
        <form id="formLogin" class="form">
            <div>Username:</div>
            <div><input type="text" name="username" required /></div>
            <div>Password:</div>
            <div><input type="password" name="passwd" required /></div>
            <div><input type="button" id="buttonLoginUser" value="Login" /></div>
        </form>
    </section>`);

        $('.wrapper').find('section').empty();
        $('.wrapper').append(loginForm);
    }

    registerView() {
        let registerForm = $(`<section id="viewRegister" class="viewRegister">
        <h1 class="titleForm">Please register here</h1>
        <form id="formRegister" class="form">
            <div>Username:</div>
            <div><input type="text" name="username" required /></div>
            <div>Password:</div>
            <div><input type="password" name="passwd" required /></div>
            <div><input type="button" id="buttonRegisterUser" value="Register" /></div>
        </form>
    </section>`);

        $('.wrapper').find('section').empty();
        $('.wrapper').append(registerForm);
    }
        // Sammy(function () {
        //     let _self = this;
        //
        //     $('.detailed-button').click(function (ev) {
        //         _self.trigger('viewDetailed', {id: $(ev.target).attr('id')});
        //     })
        // })



}