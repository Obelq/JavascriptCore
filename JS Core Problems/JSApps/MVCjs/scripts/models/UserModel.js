class UserModel {
    constructor(baseURL, appKey, requester, authorizationService) {
        this._baseURL = baseURL;
        this._appKey = appKey;
        this._requester = requester;
        this._authorizationService = authorizationService;
    }

    login() {
        let requestURL = this._baseURL+'user/' + this._appKey + '/login';
        let requestHeaders = this._authorizationService.getHeaders();
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        return this._requester.post(requestURL, requestHeaders, userData);
    }
    register() {
        let requestURL = this._baseURL+'user/' + this._appKey + '/';
        let requestHeaders = this._authorizationService.getHeaders();
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        return this._requester.post(requestURL, requestHeaders, userData);
    }


}