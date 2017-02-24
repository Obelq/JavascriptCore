class AdsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    getWoman(id) {
        let _self = this;

        this.model.getWoman(id).then(
            function (successData) {
                _self.view.viewWoman(successData)
            }
        ).catch(function (errorData) {
            console.log(errorData)
        });
    }

    getAds() {
        let _self = this;

        this.model.getAds().then(
            function (successData) {
                _self.view.listAds(successData);
            }
        ).catch(function (errorData) {
            console.log(errorData)
        });
    }
    createWoman(data) {
        this.model.postWoman(data).then(
            function (successData) {
                console.log("Success!");
            }
        ).catch(
            function (errorData) {
                console.log(errorData)
            })
    }
}