function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    $('#loggedInUser').text(
        "Welcome, " + username + "!");
}

class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    login() {
        let _self = this;

        this.model.login().then(
            function (successData) {
                saveAuthInSession(successData);
                NavbarView.showHideMenuLinks();

            }
        ).catch(function (errorData) {
            console.log(errorData)
        });
    }

    register() {
        let _self = this;

        this.model.register().then(
            function (successData) {
                saveAuthInSession(successData);
                NavbarView.showHideMenuLinks();

            }
        ).catch(function (errorData) {
            console.log(errorData)
        });
    }

    logout() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        NavbarView.showHideMenuLinks();
    }
}