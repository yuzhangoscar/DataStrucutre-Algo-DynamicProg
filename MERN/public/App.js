"use strict";

var IssueFilter = function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue filter");
};

var IssueTable = function IssueTable() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue table");
};

var IssueAdd = function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue add");
};

var Element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
ReactDOM.render(Element, document.getElementById('content'));