"use strict";

var IssueFilter = function IssueFilter(props) {
  console.log(props.countries);
  return /*#__PURE__*/React.createElement("div", null, props.countries.map(function (countr) {
    return /*#__PURE__*/React.createElement("p", {
      key: countr
    }, "hello ", countr);
  }));
};

var ClickButton = function ClickButton() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Clicked"));
};

var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, {
  countries: ["a", "b", "c"]
}), /*#__PURE__*/React.createElement(ClickButton, null));
ReactDOM.render( /*#__PURE__*/React.createElement(IssueFilter, {
  countries: ["a", "b", "c"]
}), document.getElementById('content'));