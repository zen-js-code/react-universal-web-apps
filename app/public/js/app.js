/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _history = __webpack_require__(3);
	
	var _reactDom = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _componentsCommonContextWrapper = __webpack_require__(15);
	
	var _componentsCommonContextWrapper2 = _interopRequireDefault(_componentsCommonContextWrapper);
	
	(0, _reactDom.render)(_react2['default'].createElement(
	    _componentsCommonContextWrapper2['default'],
	    { data: window.APP_STATE || {} },
	    _react2['default'].createElement(
	        _reactRouter.Router,
	        { history: (0, _history.createHistory)() },
	        _routes2['default']
	    )
	), document.querySelectorAll('[data-ui-role="content"]')[0]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = History;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _componentsApp = __webpack_require__(6);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var _componentsCommonNoMatch = __webpack_require__(8);
	
	var _componentsCommonNoMatch2 = _interopRequireDefault(_componentsCommonNoMatch);
	
	var _componentsDashboardDashboard = __webpack_require__(9);
	
	var _componentsDashboardDashboard2 = _interopRequireDefault(_componentsDashboardDashboard);
	
	var _componentsBillLatestBills = __webpack_require__(10);
	
	var _componentsBillLatestBills2 = _interopRequireDefault(_componentsBillLatestBills);
	
	var _componentsBillDetailedBill = __webpack_require__(14);
	
	var _componentsBillDetailedBill2 = _interopRequireDefault(_componentsBillDetailedBill);
	
	exports['default'] = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: _componentsApp2['default'] },
	    _react2['default'].createElement(
	        _reactRouter.Route,
	        { component: _componentsDashboardDashboard2['default'] },
	        _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsBillLatestBills2['default'] }),
	        _react2['default'].createElement(_reactRouter.Route, { path: 'bill/:id', component: _componentsBillDetailedBill2['default'] })
	    ),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsCommonNoMatch2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mainHeader = __webpack_require__(7);
	
	var _mainHeader2 = _interopRequireDefault(_mainHeader);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_mainHeader2['default'], { root: this.props.route.path }),
	                this.props.children
	            );
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                { className: 'app-header' },
	                _react2['default'].createElement(
	                    'h1',
	                    { className: 'title' },
	                    _react2['default'].createElement(
	                        _reactRouter.IndexLink,
	                        { to: this.props.root },
	                        'App'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NoMatch = (function (_React$Component) {
	    _inherits(NoMatch, _React$Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        _get(Object.getPrototypeOf(NoMatch.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "section",
	                { className: "app-content" },
	                _react2["default"].createElement(
	                    "header",
	                    { className: "section-header" },
	                    _react2["default"].createElement(
	                        "h3",
	                        { className: "title" },
	                        "Not Found"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NoMatch;
	})(_react2["default"].Component);
	
	exports["default"] = NoMatch;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);
	
	    function Dashboard() {
	        _classCallCheck(this, Dashboard);
	
	        _get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Dashboard, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "main",
	                { className: "app-content dashboard" },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Dashboard;
	})(_react2["default"].Component);
	
	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(11);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _commonList = __webpack_require__(12);
	
	var _commonList2 = _interopRequireDefault(_commonList);
	
	var _CompactBill = __webpack_require__(13);
	
	var _CompactBill2 = _interopRequireDefault(_CompactBill);
	
	var LatestBills = (function (_React$Component) {
	    _inherits(LatestBills, _React$Component);
	
	    _createClass(LatestBills, null, [{
	        key: 'requestData',
	        value: function requestData(params) {
	            var domain = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	            return _axios2['default'].get(domain + '/api/latest-bills');
	        }
	    }, {
	        key: 'NAME',
	        get: function get() {
	            return 'LatestBills';
	        }
	    }, {
	        key: 'contextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    function LatestBills(props, context) {
	        _classCallCheck(this, LatestBills);
	
	        _get(Object.getPrototypeOf(LatestBills.prototype), 'constructor', this).call(this, props, context);
	        this.state = context.data[LatestBills.NAME] || { items: [] };
	    }
	
	    _createClass(LatestBills, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'section',
	                { className: 'latest-bills' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Latest Bills'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(_commonList2['default'], { items: this.state.items, itemType: _CompactBill2['default'] })
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            this.constructor.requestData().then(function (response) {
	                _this.setState(response.data);
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	        }
	    }]);
	
	    return LatestBills;
	})(_react2['default'].Component);
	
	exports['default'] = LatestBills;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = axios;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var List = (function (_React$Component) {
	    _inherits(List, _React$Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        _get(Object.getPrototypeOf(List.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(List, [{
	        key: "render",
	        value: function render() {
	            var ItemType = this.props.itemType;
	            var items = this.props.items || [];
	            var markupItems = this.createItemsMarkup(items, ItemType);
	
	            return _react2["default"].createElement(
	                "ul",
	                { className: "ui-list" },
	                markupItems
	            );
	        }
	    }, {
	        key: "createItemsMarkup",
	        value: function createItemsMarkup(items, Type) {
	            var markupItems = items.map(function (item) {
	                return _react2["default"].createElement(
	                    "li",
	                    { className: "ui-list-item", key: item.id },
	                    _react2["default"].createElement(Type, { data: item })
	                );
	            });
	
	            return markupItems;
	        }
	    }]);
	
	    return List;
	})(_react2["default"].Component);
	
	exports["default"] = List;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var CompactBill = (function (_React$Component) {
	    _inherits(CompactBill, _React$Component);
	
	    function CompactBill() {
	        _classCallCheck(this, CompactBill);
	
	        _get(Object.getPrototypeOf(CompactBill.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(CompactBill, [{
	        key: 'render',
	        value: function render() {
	            var data = this.props.data;
	            var amount = '$' + data.amount;
	            var link = this.calculateLink(data);
	
	            return _react2['default'].createElement(
	                'div',
	                { className: 'bill compact-bill' },
	                _react2['default'].createElement('img', { className: 'icon', src: data.icon }),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'info-container' },
	                    _react2['default'].createElement(
	                        'h4',
	                        { className: 'title' },
	                        data.vendor
	                    ),
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'period' },
	                        data.period
	                    ),
	                    _react2['default'].createElement(
	                        _reactRouter.Link,
	                        { className: 'link', to: link },
	                        'More Details »'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    { className: 'amount' },
	                    amount
	                )
	            );
	        }
	    }, {
	        key: 'calculateLink',
	        value: function calculateLink(data) {
	            return '/bill/' + data.id;
	        }
	    }]);
	
	    return CompactBill;
	})(_react2['default'].Component);
	
	exports['default'] = CompactBill;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _axios = __webpack_require__(11);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var DetailedBill = (function (_React$Component) {
	    _inherits(DetailedBill, _React$Component);
	
	    _createClass(DetailedBill, null, [{
	        key: 'requestData',
	        value: function requestData(params) {
	            var domain = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	            return _axios2['default'].get(domain + '/api/bill/' + params.id);
	        }
	    }, {
	        key: 'NAME',
	        get: function get() {
	            return 'DetailedBill';
	        }
	    }, {
	        key: 'contextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    function DetailedBill(props, context) {
	        _classCallCheck(this, DetailedBill);
	
	        _get(Object.getPrototypeOf(DetailedBill.prototype), 'constructor', this).call(this, props, context);
	        this.state = context.data[DetailedBill.NAME] || {};
	    }
	
	    _createClass(DetailedBill, [{
	        key: 'render',
	        value: function render() {
	            var amount = '$' + this.state.amount;
	
	            return _react2['default'].createElement(
	                'section',
	                { className: 'latest-bills' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        'Bill Details'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'bill detailed-bill' },
	                        _react2['default'].createElement('img', { className: 'icon', src: this.state.icon }),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'info-container' },
	                            _react2['default'].createElement(
	                                'h4',
	                                { className: 'title' },
	                                this.state.vendor
	                            ),
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'period' },
	                                this.state.period
	                            ),
	                            _react2['default'].createElement('hr', null),
	                            _react2['default'].createElement(
	                                'span',
	                                null,
	                                _react2['default'].createElement(
	                                    'span',
	                                    { className: 'period' },
	                                    'Paid using: '
	                                ),
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    this.state.paymeans
	                                )
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'amount' },
	                            amount
	                        )
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            this.constructor.requestData(this.props.params).then(function (response) {
	                _this.setState(response.data);
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	        }
	    }]);
	
	    return DetailedBill;
	})(_react2['default'].Component);
	
	exports['default'] = DetailedBill;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var ContextWrapper = (function (_React$Component) {
	    _inherits(ContextWrapper, _React$Component);
	
	    function ContextWrapper() {
	        _classCallCheck(this, ContextWrapper);
	
	        _get(Object.getPrototypeOf(ContextWrapper.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ContextWrapper, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                data: this.props.data
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return this.props.children;
	        }
	    }], [{
	        key: 'childContextTypes',
	        get: function get() {
	            return {
	                data: _react2['default'].PropTypes.object
	            };
	        }
	    }]);
	
	    return ContextWrapper;
	})(_react2['default'].Component);
	
	exports['default'] = ContextWrapper;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDI1M2RkZTRiZDNiOTJhYTc3NDUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY2xpZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJIaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9tYWluL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9jb21wb25lbnRzL2NvbW1vbi9MaXN0LmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvYmlsbC9Db21wYWN0QmlsbC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9jb21wb25lbnRzL2JpbGwvRGV0YWlsZWRCaWxsLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztrQ0N0Q2tCLENBQU87Ozs7d0NBQ0osQ0FBYzs7b0NBQ1AsQ0FBUzs7cUNBQ2hCLENBQVc7O21DQUViLENBQVU7Ozs7MkRBRUYsRUFBb0M7Ozs7QUFFL0QsdUJBQ0k7O09BQWdCLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUc7S0FDekM7O1dBQVEsT0FBTyxFQUFFLDZCQUFnQjs7TUFFeEI7RUFDSSxFQUNsQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsMEJBQTBCLENBQUMsQ0FB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TSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUN4QixDQUFDLENBQUM7VUFDTjs7O1lBckRnQixZQUFZO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXBDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0hmLENBQU87Ozs7S0FFSixjQUFjO2VBQWQsY0FBYzs7Y0FBZCxjQUFjOytCQUFkLGNBQWM7O29DQUFkLGNBQWM7OztrQkFBZCxjQUFjOztnQkFNaEIsMkJBQUc7QUFDZCxvQkFBTztBQUNILHFCQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2NBQ3hCLENBQUM7VUFDTDs7O2dCQUVLLGtCQUFHO0FBQ0wsb0JBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7VUFDOUI7OztjQWIyQixlQUFHO0FBQzNCLG9CQUFPO0FBQ0gscUJBQUksRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtjQUMvQixDQUFDO1VBQ0w7OztZQUxnQixjQUFjO0lBQVMsbUJBQU0sU0FBUzs7c0JBQXRDLGNBQWMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZDI1M2RkZTRiZDNiOTJhYTc3NDVcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHtjcmVhdGVIaXN0b3J5fSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmltcG9ydCBDb250ZXh0V3JhcHBlciBmcm9tICcuL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyJztcclxuXHJcbnJlbmRlcigoXHJcbiAgICA8Q29udGV4dFdyYXBwZXIgZGF0YT17d2luZG93LkFQUF9TVEFURSB8fCB7fX0+XHJcbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtjcmVhdGVIaXN0b3J5KCl9PlxyXG4gICAgICAgICAgICB7cm91dGVzfVxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgPC9Db250ZXh0V3JhcHBlcj5cclxuKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdWktcm9sZT1cImNvbnRlbnRcIl0nKVswXSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY2xpZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSb3V0ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0Um91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkhpc3RvcnlcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0luZGV4Um91dGUsIFJvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuaW1wb3J0IE5vTWF0Y2ggZnJvbSAnLi9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoJztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgTGF0ZXN0QmlsbHMgZnJvbSAnLi9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMnO1xyXG5pbXBvcnQgRGV0YWlsZWRCaWxsIGZyb20gJy4vY29tcG9uZW50cy9iaWxsL0RldGFpbGVkQmlsbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17RGFzaGJvYXJkfT5cclxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMYXRlc3RCaWxsc30vPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImJpbGwvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxlZEJpbGx9Lz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxyXG4gICAgPC9Sb3V0ZT5cclxuKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9yb3V0ZXMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL21haW4vSGVhZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgcm9vdD17dGhpcy5wcm9wcy5yb3V0ZS5wYXRofS8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtJbmRleExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYXBwLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZGV4TGluayB0bz17dGhpcy5wcm9wcy5yb290fT5BcHA8L0luZGV4TGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDE+ICBcclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvbWFpbi9IZWFkZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9NYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Ob3QgRm91bmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9jb21tb24vTm9NYXRjaC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImFwcC1jb250ZW50IGRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbW1vbi9MaXN0JztcclxuaW1wb3J0IENvbXBhY3RCaWxsIGZyb20gJy4vQ29tcGFjdEJpbGwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF0ZXN0QmlsbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBOQU1FKCkge1xyXG4gICAgICAgIHJldHVybiAnTGF0ZXN0QmlsbHMnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29udGV4dFR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXF1ZXN0RGF0YShwYXJhbXMsIGRvbWFpbiA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtkb21haW59L2FwaS9sYXRlc3QtYmlsbHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gY29udGV4dC5kYXRhW0xhdGVzdEJpbGxzLk5BTUVdIHx8IHtpdGVtczogW119O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsYXRlc3QtYmlsbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5MYXRlc3QgQmlsbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBpdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gaXRlbVR5cGU9e0NvbXBhY3RCaWxsfS8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IucmVxdWVzdERhdGEoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovVXNlcnMvT1dORVIvTXkgUHJvamVjdHMvUGVyc29uYWwvcmVhY3QtdW5pdmVyc2FsLXdlYi1hcHBzL2FwcC9jb21wb25lbnRzL2JpbGwvTGF0ZXN0QmlsbHMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJheGlvc1wiXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBJdGVtVHlwZSA9IHRoaXMucHJvcHMuaXRlbVR5cGU7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLml0ZW1zIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IG1hcmt1cEl0ZW1zID0gdGhpcy5jcmVhdGVJdGVtc01hcmt1cChpdGVtcywgSXRlbVR5cGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKDx1bCBjbGFzc05hbWU9XCJ1aS1saXN0XCI+e21hcmt1cEl0ZW1zfTwvdWw+KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJdGVtc01hcmt1cChpdGVtcywgVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IG1hcmt1cEl0ZW1zID0gaXRlbXMubWFwKChpdGVtKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWktbGlzdC1pdGVtXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwZSBkYXRhPXtpdGVtfS8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFya3VwSXRlbXM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9jb21tb24vTGlzdC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBhY3RCaWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xyXG4gICAgICAgIGNvbnN0IGFtb3VudCA9IGAkJHtkYXRhLmFtb3VudH1gO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNhbGN1bGF0ZUxpbmsoZGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbCBjb21wYWN0LWJpbGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17ZGF0YS5pY29ufS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudmVuZG9yfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGVyaW9kXCI+e2RhdGEucGVyaW9kfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rXCIgdG89e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3JlIERldGFpbHMgJiMxODc7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbW91bnRcIj57YW1vdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVMaW5rKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gYC9iaWxsLyR7ZGF0YS5pZH1gO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L1VzZXJzL09XTkVSL015IFByb2plY3RzL1BlcnNvbmFsL3JlYWN0LXVuaXZlcnNhbC13ZWItYXBwcy9hcHAvY29tcG9uZW50cy9iaWxsL0NvbXBhY3RCaWxsLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbGVkQmlsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZ2V0IE5BTUUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdEZXRhaWxlZEJpbGwnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29udGV4dFR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QgICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXF1ZXN0RGF0YShwYXJhbXMsIGRvbWFpbiA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtkb21haW59L2FwaS9iaWxsLyR7cGFyYW1zLmlkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBjb250ZXh0LmRhdGFbRGV0YWlsZWRCaWxsLk5BTUVdIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBhbW91bnQgPSBgJCR7dGhpcy5zdGF0ZS5hbW91bnR9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGF0ZXN0LWJpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbCBEZXRhaWxzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsIGRldGFpbGVkLWJpbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXt0aGlzLnN0YXRlLmljb259Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMuc3RhdGUudmVuZG9yfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwZXJpb2RcIj57dGhpcy5zdGF0ZS5wZXJpb2R9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBlcmlvZFwiPlBhaWQgdXNpbmc6IDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUucGF5bWVhbnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW1vdW50XCI+e2Ftb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IucmVxdWVzdERhdGEodGhpcy5wcm9wcy5wYXJhbXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvYmlsbC9EZXRhaWxlZEJpbGwuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBjaGlsZENvbnRleHRUeXBlcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0ICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldENoaWxkQ29udGV4dCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnByb3BzLmRhdGFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9Vc2Vycy9PV05FUi9NeSBQcm9qZWN0cy9QZXJzb25hbC9yZWFjdC11bml2ZXJzYWwtd2ViLWFwcHMvYXBwL2NvbXBvbmVudHMvY29tbW9uL0NvbnRleHRXcmFwcGVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==