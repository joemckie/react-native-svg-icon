'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validSvgIcon = exports.complexSvg = exports.simpleSvg = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleSvg = exports.simpleSvg = _react2.default.createElement('div', null);
var complexSvg = exports.complexSvg = {
    svg: simpleSvg,
    viewBox: '1 2 3 4'
};
var validSvgIcon = exports.validSvgIcon = {
    name: 'test',
    svgs: {
        test: simpleSvg
    }
};