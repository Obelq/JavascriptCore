class AdsView {
    constructor() {

    }

    viewWoman(data) {
        let womanDiv = $('<div class="woman-detailer"></div>');
        womanDiv.append('<div> Name: ' + data.name + '</div>');
        womanDiv.append('<div> Age: ' + data.age + '</div>');
        womanDiv.append('<div> Weight: ' + data.weight + '</div>');
        womanDiv.append('<div> Mantalitet: ' + data.mantalitet + '</div>');
        $('.wrapper').empty();
        $('.wrapper').append(womanDiv);
    }

    listAds(ads) {
        $('.wrapper').empty();
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
            $('.wrapper').append(adsTable);
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
        // Sammy(function () {
        //     let _self = this;
        //
        //     $('.detailed-button').click(function (ev) {
        //         _self.trigger('viewDetailed', {id: $(ev.target).attr('id')});
        //     })
        // })

    }

}