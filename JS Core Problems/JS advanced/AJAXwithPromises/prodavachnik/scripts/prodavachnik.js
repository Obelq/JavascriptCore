function startApp() {
    sessionStorage.clear(); // Clear user auth data

    showHideMenuLinks();
    showView('viewHome');
    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);
    
    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);

    // Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });
// Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_rJ3_4WjMl";
    const kinveyAppSecret =
        "709d8291add04ad5bdf060f1beda7adf";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppKey + ":" + kinveyAppSecret)
    };


    $("form").submit(function(e) { e.preventDefault() });

    function showHideMenuLinks() {
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
    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }
    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');

    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');

    }

    function listAds() {
        $("#ads").empty();
        showView('viewAds');
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });
        function loadAdsSuccess(ads) {
            showInfo('Ads loaded.');
            if (ads.length == 0) {
                $('#ads').text('No ads in the library.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th><th>Publisher</th>',
                        '<th>Description</th><th>Price</th>',
                    '<th>Date Published</th><th>Actions</th>'));
                for (let ad of ads)
                    appendAdRow(ad, adsTable);
                $('#ads').append(adsTable);
            }
        }

    }
    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " +
            sessionStorage.getItem('authToken')
        };
    }
    function appendAdRow(ad,adsTable) {
        let links = [];
        let detailLink = $(`<a data-id="${ad._id}" href="#">[Read More]</a>`)
            .click(function () {
                displayAdvert($(this).attr("data-id"))
            });
        if (ad._acl.creator == sessionStorage['userId']) {
            let deleteLink = $('<a href="#">[Delete]</a>')
                .click(deleteAd.bind(this, ad));
            let editLink = $('<a href="#">[Edit]</a>')
                .click(loadAdForEdit.bind(this, ad));
            links = [detailLink, ' ' ,deleteLink, ' ', editLink];

        }
        adsTable.append($('<tr>').append(
            $('<td>').text(ad.title),
            $('<td>').text(ad.publisher),
            $('<td>').text(ad.description),
            $('<td>').text(ad.price),
            $('<td>').text(ad.date),
            $('<td>').append(links)
        ));
    }
    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: kinveyAdUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });
        function deleteAdSuccess(response) {
            listAds();
            showInfo('Ad deleted.');
        }
    }

    function loadAdForEdit(ad) {
        $.ajax({
            method: "GET",
            url: kinveyAdUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });
        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd input[name=publisher]')
                .val(ad.publisher);
            $('#formEditAd textarea[name=description]')
                .val(ad.description);
            $('#formEditAd input[name=datePublished]')
                .val(ad.date);
            $('#formEditAd input[name=image]')
                .val(ad.image);
            $('#formEditAd input[name=price]')
                .val(ad.price);
            showView('viewEditAd');
        }
    }
    
    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd'); 
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }



    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });
        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }

    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });
        function registerSuccess(userInfo) {

            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }
    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text(
            "Welcome, " + username + "!");
    }
    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }
    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }
    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }


    function createAd() {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/"+sessionStorage.getItem("userId"),
            headers: getKinveyUserAuthHeaders(),
            success: takeNameSuccess,
            error: handleAjaxError
        });

        function takeNameSuccess(publisher) {
            let adData = {
                title: $('#formCreateAd input[name=title]').val(),
                description: $('#formCreateAd textarea[name=description]').val(),
                publisher: publisher.username,
                date: $('#formCreateAd input[name=datePublished]').val(),
                price: $('#formCreateAd input[name=price]').val(),
                image: $('#formCreateAd input[name=image]').val()
            };
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
                headers: getKinveyUserAuthHeaders(),
                data: adData,
                success: createAdSuccess,
                error: handleAjaxError
            });
            function createAdSuccess(response) {
                listAds();
                showInfo('Ad created.');
            }
        }



    }

    function editAd() {

        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            price: $('#formEditAd input[name=price]').val(),
            image: $('#formEditAd input[name=image]').val(),
            date: $('#formEditAd input[name=datePublished]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + $('#formEditAd input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });

        function editAdSuccess(response) {
            listAds();
            showInfo('Ad edited.');
        }
    }
    function displayAdvert(advertId) {
        $('#viewDetailsAd').empty();
        $.ajax({
            method: "GET",
            url: kinveyAdUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppKey + "/ads/" + advertId,
            headers: getKinveyUserAuthHeaders(),
            success: displayAdvertSuccess,
            error: handleAjaxError
        });
        function displayAdvertSuccess(ad) {
            let html = $('<div>');
            html.append(
                $('<img>').attr('src', ad.image),
                $('<br>'),
                $('<label>').text('Price:'),
                $('<div>').text(ad.price),
                $('<label>').text('Title:'),
                $('<h1>').text(ad.title),
                $('<label>').text('Description:'),
                $('<p>').text(ad.description),
                $('<label>').text('Publisher:'),
                $('<div>').text(ad.publisher),
                $('<label>').text('Date:'),
                $('<div>').text(ad.date)
            )
            html.appendTo($('#viewDetailsAd'))
            showView('viewDetailsAd');
        }
    }

}