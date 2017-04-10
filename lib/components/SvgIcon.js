'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require('react-native-svg');

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function SvgIcon(props) {
    if (!props.svgs[props.name]) {
        return null;
    }

    var height = props.height && props.height.toString();
    var width = props.width && props.width.toString();
    var strokeWidth = props.strokeWidth && props.strokeWidth.toString();

    var isSimple = _react2.default.isValidElement(props.svgs[props.name]);
    var svgEl = isSimple ? props.svgs[props.name] : props.svgs[props.name].svg;

    /**
     * ViewBox inheritance order:
     *
     * 1. <Icon viewBox />
     * 2. Icon.defaultProps.viewBox
     * 3. { Name: { viewBox: '' } }
     * 4. SvgIcon.defaultProps.viewBox
     */

    var viewBox = void 0;

    if (props.viewBox && props.viewBox !== SvgIcon.defaultProps.viewBox) {
        viewBox = props.viewBox;
    } else if (!isSimple && props.svgs[props.name].viewBox) {
        viewBox = props.svgs[props.name].viewBox;
    } else {
        viewBox = SvgIcon.defaultProps.viewBox;
    }

    return _react2.default.createElement(
        _reactNativeSvg2.default,
        { height: height, testID: 'svg-icon', width: width, viewBox: viewBox, style: props.style },
        _react2.default.cloneElement(svgEl, {
            fill: props.fill,
            stroke: props.stroke,
            strokeWidth: strokeWidth,
            testID: 'svg-icon__cloned-element'
        })
    );
};

SvgIcon.defaultProps = {
    fill: '#000',
    height: '44',
    width: '44',
    viewBox: '0 0 100 100'
};

SvgIcon.propTypes = {
    fill: _react.PropTypes.string.isRequired,
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    name: _react.PropTypes.string.isRequired,
    stroke: _react.PropTypes.string,
    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    style: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.array]),
    svgs: _react.PropTypes.object.isRequired,
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
    viewBox: _react.PropTypes.string
};

exports.default = SvgIcon;