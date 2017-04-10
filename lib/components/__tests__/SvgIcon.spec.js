'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _SvgIcon3 = require('./SvgIcon.fixture');

var fixtures = _interopRequireWildcard(_SvgIcon3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

jest.mock('react-native-svg', function () {
    return {
        Svg: jest.fn()
    };
});

describe('<SvgIcon />', function () {
    it('should render correctly', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, fixtures.validSvgIcon));

        expect(wrapper).toHaveLength(1);
    });
    it('should return null if a property with the given name is not found', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, { svgs: {} })));

        expect(wrapper.type()).toBeNull();
    });
    it('should render only one child', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, fixtures.validSvgIcon));

        expect(wrapper.children()).toHaveLength(1);
    });
    ['height', 'width', 'viewBox'].forEach(function (prop) {
        it('should render an Svg with the given ' + prop, function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, _defineProperty({}, prop, '1234'))));

            expect(wrapper.find({ testID: 'svg-icon' }).prop(prop)).toEqual('1234');
        });
    });
    it('should render the cloned svg element as a child of the svg', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, fixtures.validSvgIcon));

        expect(wrapper.children().is({ testID: 'svg-icon__cloned-element' })).toBe(true);
    });
    it('should clone the correct svg markup for the given name', function () {
        var cloneElementSpy = jest.spyOn(_react2.default, 'cloneElement');

        (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, fixtures.validSvgIcon));
        expect(cloneElementSpy.mock.calls[0][0]).toEqual(fixtures.simpleSvg);
        cloneElementSpy.mockRestore();
    });
    ['fill', 'stroke', 'strokeWidth'].forEach(function (prop) {
        it('should render the svg element with the given ' + prop, function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, _defineProperty({}, prop, '1234'))));

            expect(wrapper.find({ testID: 'svg-icon__cloned-element' }).prop(prop)).toEqual('1234');
        });
    });
    it('should use the viewBox from the svg config if set', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, { svgs: { test: fixtures.complexSvg } })));

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual(fixtures.complexSvg.viewBox);
    });
    it('should give priority to the svg config viewBox over the defaultProps viewBox', function () {
        _SvgIcon2.default.defaultProps.viewBox = '0 0 0 1';

        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, { svgs: { test: fixtures.complexSvg } })));

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual(fixtures.complexSvg.viewBox);
    });
    it('should give priority to the viewBox prop over the svg config viewBox', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SvgIcon2.default, _extends({}, fixtures.validSvgIcon, { svgs: { test: fixtures.complexSvg }, viewBox: '4 3 2 1' })));

        expect(wrapper.find({ testID: 'svg-icon' }).prop('viewBox')).toEqual('4 3 2 1');
    });
});