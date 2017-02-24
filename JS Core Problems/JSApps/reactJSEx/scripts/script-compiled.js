let HelloMessage = require('./HelloMessage-compiled.js');
class Home extends React.Component {
    render() {
        return React.createElement(
            'div',
            { className: 'hello-wrapper' },
            React.createElement(
                'div',
                null,
                'This is the home page.'
            ),
            React.createElement(HelloMessage, null)
        );
    }
}

ReactDOM.render(React.createElement(Home, null), $('#app')[0]);
module.exports = Home;

//# sourceMappingURL=script-compiled.js.map