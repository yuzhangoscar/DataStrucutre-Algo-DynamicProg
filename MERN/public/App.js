"use strict";

var IssueFilter = function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, "Placeholder for IssueFilter");
};

var ClickButton = function ClickButton() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Clicked"));
};

var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement(ClickButton, null));
ReactDOM.render(element, document.getElementById('content'));