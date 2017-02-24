(function () {



    let baseURL = 'https://baas.kinvey.com/';
    let appKey = 'kid_rJ3_4WjMl';
    let appSecret = '709d8291add04ad5bdf060f1beda7adf';
    let requester = new Requester();
    let authenticationService = new AuthenticationService(appKey, appSecret);
    let adsView = new AdsView();
    let adsModel = new AdsModel(baseURL, appKey, requester, authenticationService);
    let adsController = new AdsController(adsModel, adsView);
    let userView = new UserView();
    let userModel = new UserModel(baseURL, appKey, requester, authenticationService);
    let userController = new UserController(userModel,userView);
    let navbarView = new NavbarView();
    let homeView = new HomeView();
    navbarView.renderNavBar();
    NavbarView.showHideMenuLinks();
    homeView.renderHome();
    $("#linkHome").click(homeView.renderHome);
    $("#linkLogin").click(function () {
        userView.loginView();
        $("#buttonLoginUser").click(function () {
            userController.login();
            homeView.renderHome();
        });
    });
    $("#linkRegister").click(function () {
        userView.registerView();
        $("#buttonRegisterUser").click(function () {
            userController.register();
            homeView.renderHome();
        });
    });
    // $("#linkListAds").click(listAds);
    // $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(function () {
        userController.logout();
        homeView.renderHome();
    });

    // Bind the form submit buttons

    // $("#buttonCreateAd").click(createAd);
    // $("#buttonEditAd").click(editAd);


}());