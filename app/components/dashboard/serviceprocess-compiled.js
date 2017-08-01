'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _antd = require('antd');

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by kingwubin on 2017/7/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ServiceProcess = function (_React$Component) {
    _inherits(ServiceProcess, _React$Component);

    function ServiceProcess(props, context) {
        _classCallCheck(this, ServiceProcess);

        var _this = _possibleConstructorReturn(this, (ServiceProcess.__proto__ || Object.getPrototypeOf(ServiceProcess)).call(this, props, context));

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(ServiceProcess, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'title1' },
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    this.props.data.data.map(function (item, index) {
                        var keyF = '0' + index;
                        return _react2.default.createElement(
                            _antd.Col,
                            { span: 6, key: keyF },
                            _react2.default.createElement(
                                'p',
                                { className: 'title2', key: index },
                                item.ServiceName
                            ),
                            item.list.map(function (name, ind) {
                                var keyNub = (index + 1) * 10 + ind;
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'title3', key: keyNub },
                                    name
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return ServiceProcess;
}(_react2.default.Component);

exports.default = ServiceProcess;

//# sourceMappingURL=serviceprocess-compiled.js.map