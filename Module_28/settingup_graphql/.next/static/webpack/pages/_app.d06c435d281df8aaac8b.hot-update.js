webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\sarah\\MIT_xpro\\Module_28\\settingup_graphql\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;

  setUser = function setUser(user) {
    setState({
      user: user
    });
  };

  console.log("app user: ", state.user);

  addItem = function addItem(item) {
    var items = state.cart.items; //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++

    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem))); // if item is not new, add to cart, set quantity to 1

    if (!foundItem) {
      //set quantity property to 1
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      // we already have it so just increase quantity ++
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    }); // problem is this is not updated yet

    console.log("state reset to cart:".concat(JSON.stringify(state)));
  };

  removeItem = function removeItem(item) {
    var items = state.cart.items; //check for item already in cart

    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      }; //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  };

  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: user,
      setUser: function setUser() {}
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }))));
}

_s(MyApp, "qHQMttOq1zPRCjIIZxRYE6VYkS4=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiaXRlbXMiLCJmb3VuZEl0ZW0iLCJsZW5ndGgiLCJmaW5kIiwiaSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFxQjtBQUFBOztBQUFBLG9CQUM0QkMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEdEM7QUFBQSxNQUNkQyxJQURjLGVBQ2RBLElBRGM7QUFBQSxNQUNUQyxPQURTLGVBQ1RBLE9BRFM7QUFBQSxNQUNEQyxVQURDLGVBQ0RBLFVBREM7QUFBQSxNQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxNQUNpQkMsT0FEakIsZUFDaUJBLE9BRGpCOztBQUFBLGtCQUVNQyxzREFBUSxDQUFDO0FBQUNMLFFBQUksRUFBQ0E7QUFBTixHQUFELENBRmQ7QUFBQSxNQUVaTSxLQUZZO0FBQUEsTUFFTkMsUUFGTTs7QUFBQSxNQUdYQyxTQUhXLEdBR2NYLEtBSGQsQ0FHWFcsU0FIVztBQUFBLE1BR0FDLFNBSEEsR0FHY1osS0FIZCxDQUdBWSxTQUhBOztBQU1uQkwsU0FBTyxHQUFHLGlCQUFDRCxJ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QUFBcUIsU0FBSyxFQUFFO0FBQUN4QixVQUFJLEVBQUVNLEtBQUssQ0FBQ04sSUFBYjtBQUFtQkMsYUFBTyxFQUFFQSxPQUE1QjtBQUFxQ0MsZ0JBQVUsRUFBRUEsVUFBakQ7QUFBNEQrQixxQkFBZSxFQUFDLEtBQTVFO0FBQWtGOUIsVUFBSSxFQUFDQSxJQUF2RjtBQUE0RkMsYUFBTyxFQUFDLG1CQUFJLENBQUU7QUFBMUcsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsdUVBRlA7QUFHRSxhQUFTLEVBQUMseUVBSFo7QUFJRSxlQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsU0FBRCx5RkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FWRixDQURGO0FBa0JEOztHQS9GUWIsSzs7S0FBQUEsSztBQWtHTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMDZjNDM1ZDI4MWRmOGFhYWM4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiXG5cblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpe1xuICB2YXIge2NhcnQsYWRkSXRlbSxyZW1vdmVJdGVtLCB1c2VyLCBzZXRVc2VyfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlKHtjYXJ0OmNhcnR9KTtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIFxuXG4gIHNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coXCJhcHAgdXNlcjogXCIsIHN0YXRlLnVzZXIpXG4gIGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgLy9pZiBub3QgaW4gY2FydCwgYWRkIGl0ZW0gaWYgaXRlbSBpcyBmb3VuZCBpbmNyZWFzZSBxdWFuaXR5ICsrXG4gICAgbGV0IGZvdW5kSXRlbSA9IHRydWU7XG4gICAgaWYoaXRlbXMubGVuZ3RoID4gMCl7XG4gICAgICBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICAgXG4gICAgICBpZighZm91bmRJdGVtKSBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgLy8gaWYgaXRlbSBpcyBub3QgbmV3LCBhZGQgdG8gY2FydCwgc2V0IHF1YW50aXR5IHRvIDFcbiAgICBpZiAoIWZvdW5kSXRlbSkge1xuICAgICAgLy9zZXQgcXVhbnRpdHkgcHJvcGVydHkgdG8gMVxuICAgIFxuICAgICAgbGV0IHRlbXAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgIHRlbXAucXVhbnRpdHkgPSAxO1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgICAgaXRlbXM6IFsuLi5zdGF0ZS5jYXJ0Lml0ZW1zLHRlbXBdLFxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KVxuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBpdCBzbyBqdXN0IGluY3JlYXNlIHF1YW50aXR5ICsrXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApXG4gICAgICBuZXdDYXJ0PSB7XG4gICAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XG4gICAgICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSArIDEgfSlcbiAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH19KSxcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U3RhdGUoe2NhcnQ6IG5ld0NhcnR9KTsgIC8vIHByb2JsZW0gaXMgdGhpcyBpcyBub3QgdXBkYXRlZCB5ZXRcbiAgICBjb25zb2xlLmxvZyhgc3RhdGUgcmVzZXQgdG8gY2FydDoke0pTT04uc3RyaW5naWZ5KHN0YXRlKX1gKVxuICAgICBcbiAgfTtcbiAgcmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICBpZiAoZm91bmRJdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgdmFyIG5ld0NhcnQgPSB7XG4gICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xuICAgICAgICBpZihpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpe1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9KVxuICAgICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfX0pLFxuICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyhgTmV3Q2FydCBhZnRlciByZW1vdmU6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2UgeyAvLyBvbmx5IDEgaW4gdGhlIGNhcnQgc28gcmVtb3ZlIHRoZSB3aG9sZSBpdGVtXG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxuICAgICAgY29uc3QgaW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT09IGZvdW5kSXRlbS5pZCk7XG4gICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdmFyIG5ld0NhcnQ9IHsgaXRlbXM6IGl0ZW1zLCB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UgfSBcbiAgICB9XG4gICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnQ6IHN0YXRlLmNhcnQsIGFkZEl0ZW06IGFkZEl0ZW0sIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0saXNBdXRoZW50aWNhdGVkOmZhbHNlLHVzZXI6dXNlcixzZXRVc2VyOigpPT57fX19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUduNTM4NHhxUTFhb1dYQSswNThSWFB4UGc2Znk0SVd2VE5oMEUyNjNYbUZjSmxTQXdpR2dGQVcvZEFpUzZKWG1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICBcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG4gIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==