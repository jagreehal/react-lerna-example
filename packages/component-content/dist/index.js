'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component(_ref) {
  var _ref$content = _ref.content,
      content = _ref$content === undefined ? 'content' : _ref$content;
  return _react2.default.createElement(
    'div',
    null,
    content
  );
};

exports.default = Component;