'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panelPropertiesEditor = require('./panel-properties-editor');

var _panelPropertiesEditor2 = _interopRequireDefault(_panelPropertiesEditor);

var _panelLayers = require('./panel-layers');

var _panelLayers2 = _interopRequireDefault(_panelLayers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(_ref) {
  var width = _ref.width;
  var height = _ref.height;
  var state = _ref.state;

  return _react2.default.createElement(
    'aside',
    { style: { backgroundColor: "#28292D", display: "block", overflow: "scroll", width: width, height: height } },
    _react2.default.createElement(_panelPropertiesEditor2.default, { scene: state.scene, mode: state.mode }),
    _react2.default.createElement(_panelLayers2.default, { scene: state.scene, mode: state.mode })
  );
}

Sidebar.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  state: _react.PropTypes.object.isRequired
};