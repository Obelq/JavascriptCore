sessionStorage.setItem('authtoken', btoa('guest:guest'));

(function () {


    let router = $.sammy(function () {
        let baseURL = 'https://baas.kinvey.com/';
        let appKey = 'kid_BksivTIme';
        let appSecret = 'ed119037848944a590022c5dd503d6e4';

        let requester = new Requester();
        let authenticationService = new AuthenticationService(appKey, appSecret);

        let womanView = new WomanView();
        let womanModel = new WomanModel(baseURL, appKey, requester, authenticationService);
        let womanController = new WomanController(womanModel, womanView);

        this.get('#/home', function () {
            let _self = this;
            $('.wrapper').empty();
            $('.wrapper').append('<button id="list-women">List all Women</button>');


            $('#list-women').click(function () {
                _self.redirect('#/list')
            });

        });
        this.get('#/list', function () {
            womanController.getWomen();
        });
        this.get('#/woman/:id', function () {
            womanController.getWoman(this.params['id']);
        });

        this.bind('viewDetailed', function (event, data) {
            this.redirect('#/woman/' + data.id);
        });
    });

    router.run('#/home')
}());