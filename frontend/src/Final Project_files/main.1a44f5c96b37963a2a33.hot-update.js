webpackHotUpdate("main",{

/***/ "./src/containers/GroupShowPage.js":
/*!*****************************************!*\
  !*** ./src/containers/GroupShowPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _components_ImageBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ImageBox */ "./src/components/ImageBox.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/Image.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_GroupShowSubPages_SubPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GroupShowSubPages/SubPage */ "./src/components/GroupShowSubPages/SubPage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_locations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/locations */ "./src/actions/locations.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/GroupShowPage.js";





 //sub page component






class GroupShowPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      group: null,
      members: [],
      founder: null,
      disableJoin: false,
      currentSubPage: 'description',
      upcomingEvents: []
    };

    this.handleJoin = () => {
      // If: the user has logged in, send apply to the organizer.
      // esle: store the current page in store, then redirect user to login page
      fetch(_urls__WEBPACK_IMPORTED_MODULE_9__["joinGroup"], {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          group_id: this.state.group.id
        })
      }).then(res => res.json()).then(data => {
        if (!!data.error) {
          this.props.storeViewingPage("/groups/".concat(this.state.group.id));
          this.props.history.push('/login');
        } else if (!!data.apply_error) {
          console.log('apply error: ', data);
          this.setState({
            disableJoin: true
          });
        } else if (!!data.founder_error) {
          console.log('founder err: ', data.founder_error);
          this.setState({
            disableJoin: true
          });
        } else {
          console.log('success', data);
        }
      }).catch(err => {
        console.log(err);
      });
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_9__["baseURL"] + "groups/".concat(this.props.match.params.id)).then(res => res.json()).then(data => {
      this.setState({
        group: data.group,
        members: data.members,
        founder: data.founder,
        events: data.events,
        upcomingEvents: data.upcoming_events
      });
    });
  }

  render() {
    console.log(this.state);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, !!this.state.group ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        maxWidth: '80%',
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        margin: '30px auto'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: '60%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5___default.a, {
      src: this.state.group.img_url,
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, this.state.group.city, ", ", this.state.group.state), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, this.state.members.length, " member(s)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Created by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, this.state.founder.username)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      disabled: this.state.disableJoin,
      onClick: this.handleJoin,
      variant: "outline-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Join"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GroupShowSubPages_SubPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      group: this.state.group,
      upcomingEvents: this.state.upcomingEvents,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(state => ({
  loggedIn: state.loggedIn
}), {
  storeViewingPage: _actions_locations__WEBPACK_IMPORTED_MODULE_8__["storeViewingPage"]
})(GroupShowPage));

/***/ })

})
//# sourceMappingURL=main.1a44f5c96b37963a2a33.hot-update.js.map