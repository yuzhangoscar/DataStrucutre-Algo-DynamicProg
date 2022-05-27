"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _super.apply(this, arguments);
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "Placeholder for IssueFilter");
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueTable, _React$Component2);

  var _super2 = _createSuper(IssueTable);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _super2.apply(this, arguments);
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var rowStyle = {
        border: "1px solid silver",
        padding: 4
      };
      return /*#__PURE__*/React.createElement("table", {
        style: {
          borderCollapse: "collapse"
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "ID"), /*#__PURE__*/React.createElement("th", {
        style: rowStyle
      }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
        rowStyle: rowStyle,
        issue_id: 1,
        issue_title: "Error in console when clicking Add"
      }), /*#__PURE__*/React.createElement(IssueRow, {
        rowStyle: rowStyle,
        issue_id: 2,
        issue_title: "Missing bottom border on panel"
      })));
    }
  }]);

  return IssueTable;
}(React.Component);

var IssueRow = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueRow, _React$Component3);

  var _super3 = _createSuper(IssueRow);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _super3.apply(this, arguments);
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var style = this.props.rowStyle;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        style: style
      }, this.props.issue_id), /*#__PURE__*/React.createElement("td", {
        style: style
      }, this.props.issue_title));
    }
  }]);

  return IssueRow;
}(React.Component);

var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);

  var _super4 = _createSuper(IssueAdd);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    return _super4.apply(this, arguments);
  }

  _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "Placeholder for IssueAdd");
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList = /*#__PURE__*/function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  var _super5 = _createSuper(IssueList);

  function IssueList() {
    _classCallCheck(this, IssueList);

    return _super5.apply(this, arguments);
  }

  _createClass(IssueList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker ", JSON.stringify(new Date())), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement(IssueAdd, null));
    }
  }]);

  return IssueList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(IssueList, null);
var sillyJSX = /*#__PURE__*/React.createElement("h1", null, "h1", /*#__PURE__*/React.createElement("h2", null, "h2"));
var issues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom boarder on'
}]; //ReactDOM.render(sillyJSX, document.getElementById('content'));

document.getElementById('content').append(JSON.stringify(sillyJSX));