class NavbarView {
    constructor() {

    }

    renderNavBar() {
        let navBar = $(`<header id="menu" class="menu">
    <a href="#" id="linkHome" class="menu-item" >Home</a>
    <a href="#" id="linkLogin" class="menu-item">Login</a>
    <a href="#" id="linkRegister" class="menu-item">Register</a>
    <a href="#" id="linkListAds" class="menu-item">List Advertisements</a>
    <a href="#" id="linkCreateAd" class="menu-item">Create Advertisement</a>
    <a href="#" id="linkLogout" class="menu-item">Logout</a>
    <span id="loggedInUser" class="menu-item"></span>
</header>`);
        $('.wrapper').append(navBar);
    }
    static showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken')) {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        } else {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        }
    }
}