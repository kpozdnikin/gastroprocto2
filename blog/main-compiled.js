'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./App.jsx');

var _App2 = _interopRequireDefault(_App);

var _NotMatch = require('./NotMatch.jsx');

var _NotMatch2 = _interopRequireDefault(_NotMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    { history: browserHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/blog/', component: _App2.default },
        _react2.default.createElement(_reactRouter.Route, { path: 'articles', component: Articles }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: 'article', component: Article },
            _react2.default.createElement(_reactRouter.Route, { path: '/articles/:articleId', component: Article })
        ),
        _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotMatch2.default })
    )
), document.getElementById('blog-content'));

//# sourceMappingURL=main-compiled.js.map