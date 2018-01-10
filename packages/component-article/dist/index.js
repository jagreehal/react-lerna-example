'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentContent = require('component-content');

var _componentContent2 = _interopRequireDefault(_componentContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function Component() {
  return _react2.default.createElement(
    'article',
    null,
    _react2.default.createElement(_componentContent2.default, { content: '0.0.5' }),
    _react2.default.createElement('hr', null)
  );
};

exports.default = Component;