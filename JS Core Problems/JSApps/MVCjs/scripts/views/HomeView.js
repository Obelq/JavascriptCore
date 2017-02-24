class HomeView {
    constructor() {

    }

    renderHome() {
        let home = $(`<section id="viewHome" class="viewHome">
        <h1 class="title">Welcome</h1>
        <p class="body-text">Welcome to our advertisement site.</p>
    </section>`);
        $('.wrapper').find('section').empty();
        $('.wrapper').append(home);
    }
}