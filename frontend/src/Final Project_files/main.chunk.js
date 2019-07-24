(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/profile.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n* {\n    list-style: none;\n    text-decoration: none;\n}\n\n.profile-page {\n    margin: 30px auto;\n    max-width: 1600px;\n    width: 100%;\n    /* height: 100vh; */\n    display: flex;\n}\n\n.profile-content {\n    position: relative;\n    margin: 30px; \n    max-width: 930px;\n    width: 100%;\n    /* float: right; */\n    /* border: 1px solid #101D2E; */\n    /* border-radius: 8px; */\n}\n\n/* .middle:before{\n    \n} */\n\n.middle {\n    position: relative;\n    z-index: 999;\n    /* top: 30%;\n    left: 15%; */\n    /* transform: translate(-50%, -50%); */\n    margin: 30px;\n    background: #101D2E;\n    border-radius: 8px;\n    \n}\n\n.menu {\n    width: 300px;\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n.menu-item {\n    border-top: 1px solid #101D2E;\n    overflow: hidden;\n}\n.menu-item a{\n    text-decoration: none;\n}\n\n.menu-btn {\n    display: block;\n    padding: 20px 24px;\n    background: #101D2E;\n    color: white;\n    position: relative;\n    font-size: 18px;\n}\n\n.menu-btn:hover {\n    color: white;\n}\n\n.menu-btn:before {\n    content: '';\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background: #101D2E;\n    left: 20px;\n    bottom: -7px;\n    transform: rotate(45deg);\n}\n\n/* .bnt */\n.menu-btn i{\n    margin-right: 20px;\n}\n\n.smenu {\n    background: #333;\n    overflow: hidden;\n    transition: max-height 0.3s;\n    max-height: 0;\n}\n\n.smenu a {\n    display: block;\n    padding: 16px 26px;\n    color: white;\n    font-size: 14px;\n    margin: 4px 0;\n    position: relative;\n    text-decoration: none;\n}\n\n.smenu a:before {\n    content: '';\n    position: absolute;\n    width: 6px;\n    height: 100%;\n    background: #fff;\n    left: 0;\n    top: 0;\n    transition: 0.3s;\n    opacity: 0 ; \n}\n\n.smenu a:hover:before {\n    opacity: 1;\n}\n\n.menu-item:target .smenu {\n    max-height: 20em;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/games.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/containers/games.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#header-container {\n    position: relative;\n    height: 32vh;\n    background-color: #4b6584;\n    margin-bottom: 40px;\n}\n\n#index-header {\n    padding: 52px 0 48px;\n    max-width: 950px;\n    margin: 0 auto;\n    text-align: center;\n}\n\n#index-header h1{\n    font-weight: 1000;\n    font-size: 4rem;\n    line-height: 3;\n    color: #fff;\n\n}\n\n#search-container {\n    background-color: #343a40;\n    border-radius: 6px;\n    z-index: 2;\n    height: 90px;\n    max-width: 1100px;\n    width: 100%;\n    margin: 0 auto;\n    top: auto;\n    bottom: -10px;\n    display: 'flex';\n    flex-direction: row;\n}\n\n/* #filter-buttons button:focus {\n    background-color: #f7b731\n} */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    font-family: \"montserrat\", sans-serif;\n}\n\n.landing-page {\n    width: 100%;\n    height: 100vh;\n    background: #000;\n    position: relative;\n    overflow: hidden;\n    margin-bottom: 50px;\n    /* background-size: cover; */\n}\n\n.landing-page::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: url('https://chainimage.com/images/extreme-rock-climbing-sport-hd-desktop-mobile-wallpaper-background.jpg') no-repeat;\n    background-size: cover;\n    opacity: .5;\n    animation: anim 25s linear infinite;\n}\n\n@keyframes anim {\n    60% {\n        transform: scale(1.25);\n    }\n\n    100% {\n        transform: scale(1);\n    }\n}\n\n.page-content {\n    position: absolute;\n    top: 45%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n    width: 100%;\n    max-width: 800px;\n    text-align: center;\n    padding: 0 40px;\n    box-sizing: border-box;\n}\n\n.page-content h1{\n    color: #0984e3;\n    text-transform: uppercase;\n    font-size: 65px;\n    font-weight: 900;\n    margin-bottom: 20px;\n}\n\n.page-content p {\n    color: #fff;\n    margin-bottom: 20px;\n    font-size: 20px;\n}\n\n.page-buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n\n}\n\n.page-buttons a{\n    text-decoration: none;\n}\n\n.map {\n    height: 100%;\n  }\n\n.landingBtn {\n    display: inline-block;\n    position: relative;\n    font-size: 20px;\n    color: #0984e3;\n    border: 2px solid #0984e3;\n    text-transform: uppercase;\n    padding: 20px 10px;\n    max-width: 270px;\n    width: 100%;\n    margin-right: 50px;\n    overflow: hidden;\n    transition: 1s all ease;\n    border-radius: 6px;\n}\n\n.landingBtn:hover {\n    color: #fff;\n}\n\n.landingBtn::before{\n    background: #0984e3;\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n    transition: all 0.6s ease;\n}\n\n\n\n.btnMtoS::before{\n    width: 0;\n    height: 100%;\n}\n\n.btnMtoS:hover::before {\n    width: 100%\n}\n\n.landingBtn:hover::before {\n    width: 100%;\n}\n\n\n.page-buttons a:last-child{\n    margin-right: 0px;\n}\n\n@media only screen and (max-width: 935px) {\n    .page-buttons {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n    }\n    .landingBtn{\n        margin-right: 0px;\n        margin-bottom: 20px;\n    }\n\n    .landingBtn :last-child{\n        margin-bottom: 0px;\n    }\n}\n\n\n.login-container {\n    max-width: 600px;\n}\n\n.card-deck-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1300px;\n    width: 100%;\n    margin: 0 auto;\n    margin-bottom: 40px;\n}\n\nh3 {\n    display: inline;\n}\n.card-deck-info-container {\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n.card-deck-info-container .see-all {\n    padding: 8px;\n    float: right;\n    margin-right: 10px\n}\n\n.map {\n    height: 100%;\n    \n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/loading.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/loading.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".loading-box {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    overflow: hidden;\n}\n\n.loading-box .lb {\n    border-radius: 50%;\n    border-left: 4px solid;\n    border-right: 4px solid;\n    border-bottom: 4px solid transparent !important;\n    border-top: 4px solid transparent !important;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    animation: ro 2s infinite;\n}\n\n.loading-box .lb1 {\n    border-color: #4a69bd;\n    width: 120px;\n    height:120px;\n}\n\n.loading-box .lb2 {\n    border-color: #f6b93b;\n    width: 100px;\n    height:100px;\n    animation-delay: 0.2s;\n}\n\n.loading-box .lb3 {\n    border-color: #2ecc71;\n    width: 80px;\n    height:80px;\n    animation-delay: 0.4s;\n}\n\n.loading-box .lb4 {\n    border-color: #d63031;\n    width: 60px;\n    height:60px;\n    animation-delay: 0.6s;\n}\n\n@keyframes ro {\n    0% {\n        transform: translate(-50%, -50%) rotate(0deg);\n    }\n    50% {\n        transform: translate(-50%, -50%) rotate(-180deg);\n    }\n    100% {\n        transform: translate(-50%, -50%) rotate(0deg);\n    }\n}", ""]);



/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LandingPage */ "./src/components/LandingPage.js");
/* harmony import */ var _containers_NearbyCardDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/NearbyCardDeck */ "./src/containers/NearbyCardDeck.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/locations */ "./src/actions/locations.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/Home.js";


 // urls

 // redux




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.success = position => {
      console.log('success');
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.props.setLocation(pos, {
        groups_count: 3,
        events_count: 3,
        group: true,
        event: true
      });
    };

    this.fail = err => {
      // handleLocationError(true, infoWindow, map.getCenter());
      console.log("error: ", err);
    };
  }

  // askLocation = () => {
  //   // debugger
  //   if (window.navigator.geolocation) {
  //     window.navigator.geolocation.getCurrentPosition(this.success, this.fail, {maximumAge:60000, enableHighAccuracy: false});
  //   } else {
  //     console.log("Browser doesn't support Geolocation")
  //     // this.handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }
  componentDidMount() {
    // if (!this.props.latLng) this.askLocation()
    this.props.setLocation(null, {
      events_count: 3,
      group: true,
      event: true
    });
  }

  render() {
    // console.log(this.props.latLng)
    if (!!this.props.nearByLocations) {
      console.log(this.props.nearByLocations.groups); // console.log(this.props.nearByLocations.tournaments)

      console.log(this.props.nearByLocations.games);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LandingPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NearbyCardDeck__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "games",
      title: "Pickup games",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NearbyCardDeck__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "groups",
      title: "Groups",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => ({
  latLng: state.latLng,
  nearByLocations: state.nearByLocations
}), {
  setLocation: _actions_locations__WEBPACK_IMPORTED_MODULE_5__["setLocation"]
})(Home));

/***/ }),

/***/ "./src/actions/locations.js":
/*!**********************************!*\
  !*** ./src/actions/locations.js ***!
  \**********************************/
/*! exports provided: setLocation, storeViewingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocation", function() { return setLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeViewingPage", function() { return storeViewingPage; });
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../urls */ "./src/urls.js");

function setLocation(latLng, option) {
  return dispatch => {
    dispatch({
      type: 'SET_LOCATION',
      latLng
    });
    return fetch(_urls__WEBPACK_IMPORTED_MODULE_0__["nearEventsURL"], {
      method: 'POST',
      body: JSON.stringify(option),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json()).then(data => dispatch({
      type: 'SET_NEARBY_LOCATIONS',
      nearByLocations: {
        groups: data.groups,
        games: data.games
      },
      types: data.types
    }));
  };
}
function storeViewingPage(url) {
  return {
    type: 'STORE_VIEWING_PAGE',
    url
  };
}

/***/ }),

/***/ "./src/actions/notification.js":
/*!*************************************!*\
  !*** ./src/actions/notification.js ***!
  \*************************************/
/*! exports provided: setNotifications, acceptNotification, setNotificationNumber, unreadNotification, readNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptNotification", function() { return acceptNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotificationNumber", function() { return setNotificationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unreadNotification", function() { return unreadNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readNotification", function() { return readNotification; });
function setNotifications(notifications) {
  return {
    type: 'SET_NOTIFICATIONS',
    notifications
  };
}
function acceptNotification(notifications, numberOfUnreadNotifications) {
  return {
    type: 'ACCEPT_NOTIFICATION',
    notifications,
    numberOfUnreadNotifications
  };
}
function setNotificationNumber(numberOfUnreadNotifications) {
  return {
    type: 'SET_UNREAD_NOTIFICATION_NUMBER',
    numberOfUnreadNotifications
  };
}
function unreadNotification(notifications) {
  return {
    type: 'UNREAD_NOTIFICATION',
    notifications
  };
}
function readNotification(notifications) {
  return {
    type: 'READ_NOTIFICATION',
    notifications
  };
}

/***/ }),

/***/ "./src/actions/users.js":
/*!******************************!*\
  !*** ./src/actions/users.js ***!
  \******************************/
/*! exports provided: login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
function login(username) {
  return {
    type: 'LOGIN',
    loggedIn: true,
    username
  };
}
function logout() {
  return {
    type: 'LOGOUT',
    loggedIn: false
  };
}

/***/ }),

/***/ "./src/components/Account.js":
/*!***********************************!*\
  !*** ./src/components/Account.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.css */ "./src/components/profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/users */ "./src/actions/users.js");
/* harmony import */ var _actions_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/notification */ "./src/actions/notification.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
/* harmony import */ var _Profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile/ProfileInfo */ "./src/components/Profile/ProfileInfo.js");
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _event_list_EventList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-list/EventList */ "./src/components/event-list/EventList.js");
/* harmony import */ var _Profile_Group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Profile/Group */ "./src/components/Profile/Group.js");
/* harmony import */ var _Profile_Notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Profile/Notifications */ "./src/components/Profile/Notifications.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Account.js";


 //action



 // urls

 // components 







class ProfilePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      selectedSmenu: 'info'
    };

    this.handleLogout = () => {
      fetch(_urls__WEBPACK_IMPORTED_MODULE_6__["logoutURL"], {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.props.logout();
      });
    };

    this.showData = () => {
      switch (this.state.selectedSmenu) {
        case 'info':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile_ProfileInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          });

        case 'past games':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_list_EventList__WEBPACK_IMPORTED_MODULE_9__["default"], {
            time: "past",
            eventtype: "games",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          });

        case 'upcomming games':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_event_list_EventList__WEBPACK_IMPORTED_MODULE_9__["default"], {
            time: "upcoming",
            eventtype: "games",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          });

        case 'groups':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile_Group__WEBPACK_IMPORTED_MODULE_10__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          });

        case 'notifications':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Profile_Notifications__WEBPACK_IMPORTED_MODULE_11__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "info");
      }
    };

    this.switchContent = e => {
      this.setState({
        selectedSmenu: e.target.name
      });
    };

    this.changePage = () => {
      this.props.history.push('/login');
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_6__["unreadNotifications"]).then(res => res.json()).then(data => {
      this.props.setNotificationNumber(data.count);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      setUser: this.setUser,
      changePage: this.changePage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu-item",
      id: "profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#profile",
      className: "menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-id-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), "Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "smenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      name: "info",
      href: "javascript:void(0);",
      onClick: this.switchContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      name: "past games",
      onClick: this.switchContent,
      href: "javascript:void(0);",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Past Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      name: "upcomming games",
      onClick: this.switchContent,
      href: "javascript:void(0);",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Upcomming Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      name: "groups",
      onClick: this.switchContent,
      href: "javascript:void(0);",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Groups"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu-item",
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      name: "notifications",
      href: "#",
      className: "menu-btn",
      onClick: this.switchContent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-bell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), "Notifications"), this.props.numberOfUnreadNotifications === 0 ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: '#d63031',
        marginRight: '10px',
        padding: '20px',
        fontSize: 18,
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, this.props.numberOfUnreadNotifications)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu-item",
      id: "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#settings",
      className: "menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-cogs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), "Settings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "smenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Change Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Change Email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "menu-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "javascript:void(0);",
      onClick: this.handleLogout,
      className: "menu-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-sign-out-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), "Log out"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, this.showData())) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  loggedIn: state.loggedIn,
  numberOfUnreadNotifications: state.numberOfUnreadNotifications
}), {
  logout: _actions_users__WEBPACK_IMPORTED_MODULE_3__["logout"],
  setNotificationNumber: _actions_notification__WEBPACK_IMPORTED_MODULE_4__["setNotificationNumber"]
})(ProfilePage));

/***/ }),

/***/ "./src/components/CardInfo.js":
/*!************************************!*\
  !*** ./src/components/CardInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/CardInfo.js";

 //urls


class CardInfo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      usersCount: 0
    };

    this.isGroupCard = () => {
      return this.props.isGroupCard === 'true' ? true : false;
    };

    this.formatTypeName = () => {
      this.props.type_name.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
    };

    this.typeURL = () => {
      // debugger
      return this.isGroupCard() ? _urls__WEBPACK_IMPORTED_MODULE_2__["fetchGroupUsers"] : _urls__WEBPACK_IMPORTED_MODULE_2__["fetchGameUsers"];
    };
  }

  componentDidMount() {
    fetch(this.typeURL()(this.props.id)).then(res => res.json()).then(data => {
      // debugger
      this.setState({
        usersCount: data.users.length
      });
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.props.showModal,
      className: "card",
      style: {
        marginLeft: '27px',
        marginRight: '27px',
        cursor: 'pointer'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
      variant: "top",
      src: this.props.img_url,
      style: {
        height: '305px'
      },
      alt: "Some img here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Subtitle, {
      className: "mb-2 text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.formatTypeName()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, this.isGroupCard() ? "".concat(this.state.usersCount, " people in this group.") : "".concat(this.state.usersCount, " people will come to this game."))), this.props.type === 'groups' || !this.props.type ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, this.props.date)));
  }

}

/***/ }),

/***/ "./src/components/CreateModal.js":
/*!***************************************!*\
  !*** ./src/components/CreateModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _create_forms_NewGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-forms/NewGame */ "./src/components/create-forms/NewGame.js");
/* harmony import */ var _create_forms_NewGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-forms/NewGroup */ "./src/components/create-forms/NewGroup.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/CreateModal.js";




 //urls



class CreateModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      type: 'game',
      types: []
    };

    this.handleSwitchType = e => {
      this.setState({
        type: e.target.name
      });
    };

    this.handleCreate = () => {};
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_5__["allTypeUrl"]).then(res => res.json()).then(data => {
      this.setState({
        types: data.types
      });
    });
  }

  render() {
    // debugger
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({
      size: "lg",
      centered: true
    }, this.props, {
      "aria-labelledby": "example-modal-sizes-title-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
      closeButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Create new ", this.state.type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: '14px',
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        marginRight: '14px'
      },
      variant: "primary",
      onClick: this.handleSwitchType,
      name: "game",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Create game"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "primary",
      onClick: this.handleSwitchType,
      name: "group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Create group")), this.state.type === 'game' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_create_forms_NewGame__WEBPACK_IMPORTED_MODULE_2__["default"], {
      types: this.state.types,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_create_forms_NewGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      types: this.state.types,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreateModal);

/***/ }),

/***/ "./src/components/ErrorBox.js":
/*!************************************!*\
  !*** ./src/components/ErrorBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/ErrorBox.js";


const ErrorBox = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.message));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorBox);

/***/ }),

/***/ "./src/components/GameModal.js":
/*!*************************************!*\
  !*** ./src/components/GameModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./src/components/Map.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GameModal.js";






class GameModal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.handleCancelJoin = () => {
      fetch(_urls__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + "/".concat(this.props.info.eventtype, "/cancel"), {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: this.props.info.id
        })
      }).then(res => res.json()).then(data => {
        if (data.error) {
          switch (data.error) {
            case 'You have not joined this event yet':
              console.log("You have not joined: ", data);
              break;

            case 'not loggin':
              window.location.assign('/login');
              break;

            case 'You are the founder of this event':
              console.log('You are the founder of this event');
              break;

            default:
              return;
          }
        } else {
          console.log('OK 200: ', data);
        }
      }).catch(err => {
        console.log('Error: ', err);
      });
    };

    this.handleJoin = () => {
      fetch(_urls__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + "/".concat(this.props.info.eventtype, "/join"), {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: this.props.info.id
        })
      }).then(res => res.json()).then(data => {
        if (data.error) {
          switch (data.error) {
            case 'You have joined this event':
              console.log("joined before: ", data);
              break;

            case 'not loggin':
              window.location.assign('/login');
              break;

            case 'You are the founder of this event':
              console.log('You are the founder of this event');
              break;

            default:
              return;
          }
        } else {
          console.log('OK 200: ', data);
        }
      }).catch(err => {
        console.log('Error: ', err);
      });
    };

    this.showDirection = () => {
      window.open("https://www.google.com/maps/dir/?api=1&destination=".concat(encodeURI(this.props.info.location)));
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, this.props, {
      size: "lg",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
      closeButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      id: "contained-modal-title-vcenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, this.props.info.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "map",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
      center: {
        lat: this.props.info.lat,
        lng: this.props.info.lng
      },
      isMarkerShown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.showDirection,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "show direction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Hosted by "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, this.props.info.description)), this.props.isInProfile ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Join?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.handleJoin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "YES"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.handleCancelJoin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "NO")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GameModal);

/***/ }),

/***/ "./src/components/GroupCard.js":
/*!*************************************!*\
  !*** ./src/components/GroupCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardInfo */ "./src/components/CardInfo.js");
/* harmony import */ var _GroupModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupModal */ "./src/components/GroupModal.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GroupCard.js";




class GroupCard extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      modalShow: false
    };

    this.modalClose = () => {
      this.setState({
        modalShow: false
      });
    };

    this.showModal = () => {
      this.setState({
        modalShow: true
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardInfo__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
      showModal: this.showModal,
      isGroupCard: "true"
    }, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), this.state.modalShow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupModal__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
      handleLeaveGroup: this.props.handleLeaveGroup,
      show: this.state.modalShow,
      onHide: this.modalClose
    }, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GroupCard);

/***/ }),

/***/ "./src/components/GroupModal.js":
/*!**************************************!*\
  !*** ./src/components/GroupModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GroupModal.js";




class GroupModal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.showDirection = () => {
      window.open("https://www.google.com/maps/dir/?api=1&destination=".concat(encodeURI(this.props.location)));
    };

    this.handleClickDetail = () => {
      window.location.assign("/groups/".concat(this.props.id));
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, this.props, {
      size: "lg",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Header, {
      closeButton: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      id: "contained-modal-title-vcenter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, this.props.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.img_url,
      alt: "group image",
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Hosted by "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.props.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: this.handleClickDetail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Detail"), this.props.handleLeaveGroup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: () => this.props.handleLeaveGroup(this.props.id),
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Leave Group") : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GroupModal);

/***/ }),

/***/ "./src/components/GroupShowSubPages/Description.js":
/*!*********************************************************!*\
  !*** ./src/components/GroupShowSubPages/Description.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GroupShowSubPages/Description.js";


const Description = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.description));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/GroupShowSubPages/SubPage.js":
/*!*****************************************************!*\
  !*** ./src/components/GroupShowSubPages/SubPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description */ "./src/components/GroupShowSubPages/Description.js");
/* harmony import */ var _UpcomingEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpcomingEvents */ "./src/components/GroupShowSubPages/UpcomingEvents.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GroupShowSubPages/SubPage.js";
 // sub page components 


 // bootstrap nav



class SubPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      currentSubPage: 'description'
    };

    this.subPageOnSelect = e => {
      this.setState({
        currentSubPage: e
      });
    };

    this.showSubPage = () => {
      switch (this.state.currentSubPage) {
        case 'description':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_1__["default"], {
            description: this.props.group.description,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          });

        case 'upcomingEvents':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UpcomingEvents__WEBPACK_IMPORTED_MODULE_2__["default"], {
            events: this.props.upcomingEvents,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          });

        case 'discussion':
          return null;

        default:
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Description__WEBPACK_IMPORTED_MODULE_1__["default"], {
            description: this.props.group.description,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          });
      }
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
      justify: true,
      variant: "tabs",
      defaultActiveKey: "/home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      eventKey: "description",
      onSelect: this.subPageOnSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Description")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      eventKey: "upcomingEvents",
      onSelect: this.subPageOnSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Upcomming Events")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
      eventKey: "discussion",
      onSelect: this.subPageOnSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Discussion"))), this.showSubPage());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubPage);

/***/ }),

/***/ "./src/components/GroupShowSubPages/UpcomingEvents.js":
/*!************************************************************!*\
  !*** ./src/components/GroupShowSubPages/UpcomingEvents.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/GroupShowSubPages/UpcomingEvents.js";


const UpcomingEvents = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Upcoming Events"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.events.map((event, key) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, event.name, ", ", event.location))));
};

/* harmony default export */ __webpack_exports__["default"] = (UpcomingEvents);

/***/ }),

/***/ "./src/components/ImageBox.js":
/*!************************************!*\
  !*** ./src/components/ImageBox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/ImageBox.js";


const ImageBox = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "img-box",
  style: {
    width: '40%'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: props.img,
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (ImageBox);

/***/ }),

/***/ "./src/components/LandingPage.js":
/*!***************************************!*\
  !*** ./src/components/LandingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/LandingPage.js";



const LandingPage = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "MeetBallers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Some info of the website blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/explore",
    className: "landingBtn btnMtoS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Explore"))));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./src/components/LoadingAnimation.js":
/*!********************************************!*\
  !*** ./src/components/LoadingAnimation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/LoadingAnimation.js";


const LoadingAnimation = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lb lb1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lb lb2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lb lb3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lb lb4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingAnimation);

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/es/Recompose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Map.js";


 // <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY&libraries=geometry"
// async defer></script> 

const mapEnvironment = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY&libraries=geometry,drawing,places',
  loadingElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "400px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_0__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_0__["withGoogleMap"]);

const mapLayout = props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMap"], {
  defaultZoom: 18,
  defaultCenter: props.center,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, props.isMarkerShown && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_0__["Marker"], {
  position: props.center,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}));

const Map = mapEnvironment(mapLayout);
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/NavbarContainer */ "./src/containers/NavbarContainer.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile.js";



class Setting extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),

/***/ "./src/components/Profile/Group.js":
/*!*****************************************!*\
  !*** ./src/components/Profile/Group.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _GroupDeck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupDeck */ "./src/components/Profile/GroupDeck.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/Group.js";



 // url



class Group extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      groups: null,
      loading: true
    };

    this.handleLeaveGroup = id => {
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_1__["leaveGroup"])(id), {
        method: 'DELETE',
        credentials: 'include'
      }).then(res => res.json()).then(data => {
        // debugger
        if (!!data.error) {
          switch (data.error) {
            case 'not logged in':
              this.props.history.push('/login');
              break;

            case "Cannot leave group that you created, you can delete the group in 'groups created by you' in menu on the left.":
              console.log(data.error);
              break;

            default:
              console.log(data.error);
              return;
          }
        } else if (!!data.no_group_error) {
          console.log(data.no_group_error);
        } else {
          this.setState({
            groups: this.state.groups.filter(group => group.id !== id)
          });
        }
      });
    };

    this.renderGroupDeck = () => {
      let decks = [];
      let currentGroups = [];
      this.state.groups.forEach(group => {
        currentGroups.push(group);

        if (currentGroups.length === 3) {
          decks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupDeck__WEBPACK_IMPORTED_MODULE_3__["default"], {
            handleLeaveGroup: this.handleLeaveGroup,
            groups: currentGroups,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }));
          currentGroups = [];
        }
      });

      if (currentGroups.length > 0) {
        decks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupDeck__WEBPACK_IMPORTED_MODULE_3__["default"], {
          handleLeaveGroup: this.handleLeaveGroup,
          groups: currentGroups,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }));
      }

      return decks;
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_1__["userGroups"]).then(res => res.json()).then(data => {
      // debugger
      this.setState({
        groups: data.groups,
        loading: false
      });
    });
  }

  render() {
    return this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }) : this.renderGroupDeck();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Group);

/***/ }),

/***/ "./src/components/Profile/GroupDeck.js":
/*!*********************************************!*\
  !*** ./src/components/Profile/GroupDeck.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap/CardDeck */ "./node_modules/react-bootstrap/CardDeck.js");
/* harmony import */ var react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GroupCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GroupCard */ "./src/components/GroupCard.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/GroupDeck.js";




const EmptyCard = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "card",
  style: {
    border: 'none'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

const renderCards = (groups, type, handleLeaveGroup) => {
  const groupsNeed = 3 - groups.length;
  const cards = [];
  groups.forEach(group => {
    cards.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GroupCard__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
      handleLeaveGroup: handleLeaveGroup,
      showfooter: 'groupdeck',
      key: group.id
    }, group, {
      type: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    })));
  });

  for (let i = 0; i < groupsNeed; i++) {
    cards.push(EmptyCard());
  }

  return cards;
};

const GroupDeck = props => {
  // debugger
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-deck-container",
    style: {
      padding: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, props.groups.length === 3 ? props.groups.map(group => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GroupCard__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    handleLeaveGroup: props.handleLeaveGroup,
    key: group.id
  }, group, {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))) : renderCards(props.groups, props.type, props.handleLeaveGroup)));
};

/* harmony default export */ __webpack_exports__["default"] = (GroupDeck);

/***/ }),

/***/ "./src/components/Profile/Notifications.js":
/*!*************************************************!*\
  !*** ./src/components/Profile/Notifications.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notification_list_NotificationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-list/NotificationList */ "./src/components/Profile/notification-list/NotificationList.js");
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _actions_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/notification */ "./src/actions/notification.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/Notifications.js";
 // components 


 // actions 





class Notifications extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true
    };

    this.handleDelete = id => {};
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_5__["userNotification"]).then(res => res.json()).then(data => {
      if (!!data.error) {
        window.location.assign('/login');
      } else {
        // debugger
        this.props.setNotifications(data.notifications);
        this.setState({
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Checkboxes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_notification_list_NotificationList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => ({
  notifications: state.notifications
}), {
  setNotifications: _actions_notification__WEBPACK_IMPORTED_MODULE_3__["setNotifications"]
})(Notifications));

/***/ }),

/***/ "./src/components/Profile/ProfileInfo.js":
/*!***********************************************!*\
  !*** ./src/components/Profile/ProfileInfo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/ProfileInfo.js";




class ProfileInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      loading: true,
      user: {}
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_2__["profile"]).then(res => res.json()).then(user => {
      // debugger
      this.setState({
        loading: false,
        user
      });
    });
  }

  render() {
    console.log(this.state);
    return this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, this.state.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "has been ", this.state.user.past_events, " game(s)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "belongs to ", this.state.user.groups_amount, " group(s)."));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProfileInfo);

/***/ }),

/***/ "./src/components/Profile/notification-list/NotificationList.js":
/*!**********************************************************************!*\
  !*** ./src/components/Profile/notification-list/NotificationList.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotificationListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationListItem */ "./src/components/Profile/notification-list/NotificationListItem.js");
/* harmony import */ var _actions_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/notification */ "./src/actions/notification.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../urls */ "./src/urls.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/notification-list/NotificationList.js";







class NotificationList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    this.renderList = () => {
      // debugger
      return this.props.notifications.map(notification => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationListItem__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, notification, {
        key: notification.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })));
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_4__["unreadNotifications"]).then(res => res.json()).then(data => {
      // debugger
      this.props.setNotificationNumber(data.count);
    });
  }

  render() {
    // debugger
    // console.log(this.state.events)
    // debugger
    return this.props.notifications.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "No notifications") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.renderList());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  notifications: state.notifications
}), {
  setNotificationNumber: _actions_notification__WEBPACK_IMPORTED_MODULE_3__["setNotificationNumber"]
})(NotificationList));

/***/ }),

/***/ "./src/components/Profile/notification-list/NotificationListItem.js":
/*!**************************************************************************!*\
  !*** ./src/components/Profile/notification-list/NotificationListItem.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/notification */ "./src/actions/notification.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/Profile/notification-list/NotificationListItem.js";


 // actions


 //urls



class NotificationListItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleDelete = notification_id => {
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["deleteNotificationURL"])(notification_id), {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        if (data.status) {
          this.props.acceptNotification(data.notifications, data.unread_notifications_count);
        } else {
          console.log(data);
        }
      });
    };

    this.handleAccept = notification_id => {
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["acceptToGroup"])(notification_id), {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        // debugger
        if (data.status) {
          this.props.acceptNotification(data.notifications, data.unread_notifications_count);
        } else {
          console.log(data);
        }
      });
    };

    this.handleRead = () => {
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["readNotificationURL"])(this.props.id), {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        this.props.readNotification(data.notifications);
      });
    };

    this.handleUnread = () => {
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["unreadNotificationURL"])(this.props.id), {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        this.props.unreadNotification(data.notifications);
      });
    };
  }

  render() {
    const _this$props = this.props,
          notification_type = _this$props.notification_type,
          has_read = _this$props.has_read,
          message = _this$props.message,
          created_at = _this$props.created_at,
          has_check = _this$props.has_check,
          id = _this$props.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      style: {
        fontSize: '25px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, has_read ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: 'red',
        marginRight: '10px'
      },
      className: "fas fa-circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: '18px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Date: ", created_at), has_read ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: '10px',
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        marginRight: '10px'
      },
      onClick: this.handleUnread,
      variant: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Unread"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        cursor: 'pointer',
        paddingTop: '5px'
      },
      onClick: () => this.handleDelete(id),
      className: "fas fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: '10px',
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        marginRight: '10px'
      },
      onClick: this.handleRead,
      variant: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Read"), notification_type === 'check' && !has_check ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: () => this.handleAccept(id),
      style: {
        marginRight: '10px'
      },
      variant: "success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        marginRight: '10px'
      },
      variant: "danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        cursor: 'pointer',
        paddingTop: '5px'
      },
      onClick: () => this.handleDelete(id),
      className: "fas fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  readNotification: _actions_notification__WEBPACK_IMPORTED_MODULE_4__["readNotification"],
  unreadNotification: _actions_notification__WEBPACK_IMPORTED_MODULE_4__["unreadNotification"],
  setNotifications: _actions_notification__WEBPACK_IMPORTED_MODULE_4__["setNotifications"],
  acceptNotification: _actions_notification__WEBPACK_IMPORTED_MODULE_4__["acceptNotification"]
})(NotificationListItem));

/***/ }),

/***/ "./src/components/ShowCard.js":
/*!************************************!*\
  !*** ./src/components/ShowCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CardInfo */ "./src/components/CardInfo.js");
/* harmony import */ var _GameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameModal */ "./src/components/GameModal.js");
/* harmony import */ var _GroupModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupModal */ "./src/components/GroupModal.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/ShowCard.js";





class ShowCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      modalShow: false
    };

    this.modalClose = () => {
      this.setState({
        modalShow: false
      });
    };

    this.isGroupCard = () => {
      return this.props.eventtype === 'groups' ? 'true' : 'false';
    };

    this.showModal = () => {
      this.setState({
        modalShow: true
      });
    };
  }

  render() {
    // debugger
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CardInfo__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
      isGroupCard: this.isGroupCard(),
      showModal: this.showModal
    }, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), this.state.modalShow ? this.props.eventtype === 'games' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: this.state.modalShow,
      onHide: this.modalClose,
      info: this.props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupModal__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
      show: this.state.modalShow,
      onHide: this.modalClose
    }, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowCard);

/***/ }),

/***/ "./src/components/create-forms/NewGame.js":
/*!************************************************!*\
  !*** ./src/components/create-forms/NewGame.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-time-picker */ "./node_modules/react-time-picker/dist/entry.js");
/* harmony import */ var react_time_picker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_time_picker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-date-picker */ "./node_modules/react-date-picker/dist/entry.js");
/* harmony import */ var react_date_picker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_date_picker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/create-forms/NewGame.js";







class NewGame extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.dateOnChange = date => {
      // debugger
      let year;
      let month;
      let day;

      if (date) {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate() + 1;
      }

      this.setState({
        date: date,
        year: year,
        month: month,
        day: day
      });
    };

    this.timeOnChange = time => this.setState({
      time
    });

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSelectType = e => {
      // debugger
      this.setState({
        type: parseInt(e.target.value)
      });
    };

    this.handleSubmit = e => {
      e.preventDefault(); // debugger

      console.log(this.state);
      fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.state.location, "&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY")).then(res => res.json()).then(data => {
        if (data.status !== 'OK') {
          // To do: show error text
          // show address is not correct error
          console.log('error');
        } else {
          fetch(_urls__WEBPACK_IMPORTED_MODULE_6__["createGame"], {
            method: 'POST',
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              time: this.state.time,
              date: this.state.date,
              year: this.state.year,
              month: this.state.month,
              day: this.state.day,
              name: this.state.name,
              type: this.state.type,
              location: data.results[0].formatted_address,
              city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
              state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
              lat: data.results[0].geometry.location.lat,
              lng: data.results[0].geometry.location.lng,
              zip_code: data.results[0].address_components.find(c => c.types.find(t => t === "postal_code")).short_name,
              desicription: this.state.desicription,
              img_url: this.state.img_url
            })
          });
        }
      });
    };

    const newDate = new Date();
    this.state = {
      time: '10:00',
      date: newDate,
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate(),
      type: 1,
      desicription: '',
      img_url: ''
    };
  }

  render() {
    // debugger
    console.log(this.state.time);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: '14px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_time_picker__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onChange: this.timeOnChange,
      value: this.state.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_date_picker__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onChange: this.dateOnChange,
      value: this.state.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      onChange: this.handleChange,
      name: "name",
      placeholder: "Enter name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Select a type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      onChange: this.handleSelectType,
      as: "select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, !!this.props.types ? this.props.types.map(t => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: t.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, t.name)) : null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      controlId: "formGridAddress1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      onChange: this.handleChange,
      name: "location",
      placeholder: "1234 Main St",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Image Url"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      onChange: this.handleChange,
      name: "img_url",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      controlId: "exampleForm.ControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a.Control, {
      name: "desicription",
      onChange: this.handleChange,
      as: "textarea",
      rows: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "primary",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/components/create-forms/NewGroup.js":
/*!*************************************************!*\
  !*** ./src/components/create-forms/NewGroup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var _Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _statesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../statesData */ "./src/statesData.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");

var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/create-forms/NewGroup.js";






class NewGame extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      group: {
        type_id: 1,
        description: '',
        img_url: '',
        name: '',
        city: '',
        state: ''
      }
    };

    this.handleSubmit = e => {
      e.preventDefault();
      fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.state.group.city, ",").concat(this.state.group.state, "&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY")).then(res => res.json()).then(data => {
        console.log(data); // debugger

        if (data.status !== 'OK' || this.state.group.city.length === 0 || this.state.group.state.length !== 2) {
          // To do: show error text
          // show address is not correct error
          console.log('City or state cannot be empty');
        } else if (!data.results[0].address_components.find(c => {
          if (c.types.includes('locality') && (c.long_name.toLowerCase().replace(/ /g, '') === this.state.group.city.toLowerCase().replace(/ /g, '') || c.short_name.toLowerCase().replace(/ /g, '') === this.state.group.city.toLowerCase().replace(/ /g, ''))) {
            return true;
          } else {
            return false;
          }
        })) {
          console.log('Please enter valid city or state');
        } else {
          fetch(_urls__WEBPACK_IMPORTED_MODULE_6__["groupsURL"], {
            method: 'POST',
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              group: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.group, {
                city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
                state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name
              })
            })
          });
        }
      });
    };

    this.handleChange = e => {
      this.setState({
        group: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.group, {
          [e.target.name]: e.target.value
        })
      });
    };

    this.renderStateOptions = () => {
      return Object.keys(_statesData__WEBPACK_IMPORTED_MODULE_5__["states"]).map(state => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, state));
    };

    this.handleStateChange = e => {
      this.setState({
        group: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.group, {
          state: e.target.value
        })
      });
    };

    this.handleSelectType = e => {
      this.setState({
        group: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.group, {
          type_id: parseInt(e.target.value)
        })
      });
    };
  }

  render() {
    // console.log(this.state)
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      onChange: this.handleChange,
      name: "name",
      placeholder: "Enter name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Select a type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      onChange: this.handleSelectType,
      as: "select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, !!this.props.types ? this.props.types.map(t => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: t.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, t.name)) : null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
      controlId: "formGridCity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      onChange: this.handleChange,
      name: "city",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      as: react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
      controlId: "formGridState",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "State"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      as: "select",
      onChange: this.handleStateChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Choose state"), this.renderStateOptions()))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Image Url"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      onChange: this.handleChange,
      name: "img_url",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
      controlId: "exampleForm.ControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2___default.a.Control, {
      name: "description",
      onChange: this.handleChange,
      as: "textarea",
      rows: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "primary",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Submit"));
  }

}

/***/ }),

/***/ "./src/components/event-list/EventList.js":
/*!************************************************!*\
  !*** ./src/components/event-list/EventList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventListItem */ "./src/components/event-list/EventListItem.js");
/* harmony import */ var _LoadingAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../urls */ "./src/urls.js");

var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/event-list/EventList.js";



 // url



class EventList extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.handleCancel = (eventtype, id) => {
      fetch(_urls__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + "/".concat(eventtype, "/cancel"), {
        method: 'DELETE',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
      }).then(res => res.json()).then(data => {
        if (data.error) {
          switch (data.error) {
            case 'You have not joined this event yet':
              console.log("You have not joined: ", data);
              break;

            case 'not loggin':
              window.location.assign('/login');
              break;

            case 'You are the founder of this event':
              console.log('You are the founder of this event');
              break;

            default:
              return;
          }
        } else {
          console.log('OK 200: ', data);
          this.setState({
            events: this.state.events.filter(e => e.id !== id)
          });
        }
      }).catch(err => {
        console.log('Error: ', err);
      });
    };

    this.renderLists = () => {
      // debugger
      if (this.props.time === 'upcoming') {
        return this.state.events.map(e => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventListItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
          isInProfile: "true"
        }, e, {
          handleCancel: this.handleCancel,
          eventtype: this.props.eventtype,
          key: e.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        })));
      } else if (this.props.time === 'past') {
        return this.state.events.map(e => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventListItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
          isInProfile: "true"
        }, e, {
          eventtype: this.props.eventtype,
          key: e.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        })));
      } else {
        return this.props.events.map(e => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventListItem__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, e, {
          eventtype: this.props.eventtype,
          key: e.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        })));
      }
    };

    this.state = {
      loading: true,
      time: props.time
    };
  }

  componentDidMount() {
    if (!!this.props.time) {
      // debugger
      fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["userTimeEvents"])(this.props.time)).then(res => res.json()).then(data => {
        // debugger
        this.setState({
          loading: false,
          events: data.events
        });
      });
    } else {
      this.setState({
        loading: false
      });
    }
  } // showCard = id => {


  componentDidUpdate(prevProps, prevState) {
    if (!!this.props.time) {
      if (prevProps.time !== this.props.time) {
        fetch(Object(_urls__WEBPACK_IMPORTED_MODULE_5__["userTimeEvents"])(this.props.time)).then(res => res.json()).then(data => {
          this.setState({
            loading: false,
            events: data.events,
            time: this.props.time
          });
        });
      }
    }
  }

  render() {
    // console.log(this.state.events)
    // debugger
    return this.state.loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoadingAnimation__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }) : this.state.events && this.state.events.length === 0 || !!this.props.events && this.props.events.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "No games yet") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.style),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, this.renderLists());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventList);

/***/ }),

/***/ "./src/components/event-list/EventListItem.js":
/*!****************************************************!*\
  !*** ./src/components/event-list/EventListItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/ListGroup.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GameModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameModal */ "./src/components/GameModal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/components/event-list/EventListItem.js";





class EventListItem extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    this.state = {
      modalShow: false
    };

    this.modalClose = () => {
      this.setState({
        modalShow: false
      });
    };

    this.showModal = () => {
      this.setState({
        modalShow: true
      });
    };
  }

  render() {
    console.log(this.props);
    const _this$props = this.props,
          eventtype = _this$props.eventtype,
          id = _this$props.id,
          handleCancel = _this$props.handleCancel;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      action: true,
      onClick: this.showModal,
      style: {
        fontSize: '25px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: '18px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: '18px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, this.props.date)), !!handleCancel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      variant: "danger",
      size: "lg",
      style: {
        width: '100%'
      },
      onClick: () => handleCancel(eventtype, id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Cancel") : null, this.state.modalShow ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      show: this.state.modalShow,
      isInProfile: this.props.isInProfile,
      onHide: this.modalClose,
      info: this.props,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EventListItem);

/***/ }),

/***/ "./src/components/profile.css":
/*!************************************!*\
  !*** ./src/components/profile.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/Explore.js":
/*!***********************************!*\
  !*** ./src/containers/Explore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoadingAnimation */ "./src/components/LoadingAnimation.js");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "./node_modules/react-google-maps/lib/components/places/StandaloneSearchBox.js");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_event_list_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/event-list/EventList */ "./src/components/event-list/EventList.js");
/* harmony import */ var _components_Profile_GroupDeck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile/GroupDeck */ "./src/components/Profile/GroupDeck.js");
/* harmony import */ var react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ToggleButtonGroup */ "./node_modules/react-bootstrap/ToggleButtonGroup.js");
/* harmony import */ var react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ToggleButton */ "./node_modules/react-bootstrap/ToggleButton.js");
/* harmony import */ var react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "./node_modules/react-bootstrap/DropdownButton.js");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/Dropdown.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _games_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./games.css */ "./src/containers/games.css");
/* harmony import */ var _games_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_games_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/Explore.js";
 // import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
// Components





 // import EventListItem from '../components/Profile/notification-list/NotificationListItem'
//bootstrap





 // urls



class Explore extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      type: 'games',
      eventType: 'All types',
      types: null,
      games: [],
      groups: [],
      city: 'Houston',
      state: 'TX',
      searchTerm: ''
    };

    this.renderGroupDeck = () => {
      let decks = [];
      let currentGroups = [];
      this.state.groups.forEach(group => {
        currentGroups.push(group);

        if (currentGroups.length === 3) {
          decks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_GroupDeck__WEBPACK_IMPORTED_MODULE_5__["default"], {
            groups: currentGroups,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }));
          currentGroups = [];
        }
      });

      if (currentGroups.length > 0) {
        decks.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile_GroupDeck__WEBPACK_IMPORTED_MODULE_5__["default"], {
          groups: currentGroups,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      }

      return decks.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "No groups yet") : decks;
    };

    this.SearchBoxWillMount = () => {
      const refs = {};
      return {
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          if (places[0].address_components.find(c => c.types.find(t => t === "locality")) && places[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1"))) {
            this.handleFetch(_urls__WEBPACK_IMPORTED_MODULE_11__["fetchEventsURL"], {
              events_count: 10,
              type: this.state.type,
              city: places[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
              state: places[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
              searchTerm: this.state.searchTerm,
              eventType: this.state.eventType
            });
          }
        }
      };
    };

    this.handleFetch = (url, option) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(option),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        if (data.games) {
          this.setState({
            games: data.games,
            types: data.types,
            city: data.city,
            state: data.state,
            type: data.type
          });
        } else {
          this.setState({
            groups: data.groups,
            types: data.types,
            city: data.city,
            state: data.state,
            type: data.type
          });
        }
      });
    };

    this.showPage = () => {
      switch (this.state.type) {
        case 'games':
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_event_list_EventList__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {
              padding: '100px'
            },
            events: this.state.games,
            eventtype: "games",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          });

        case 'groups':
          return this.renderGroupDeck();

        default:
          return null;
      }
    };

    this.handleOnSelect = e => {
      this.setState({
        eventType: e
      });
      this.handleFetch(_urls__WEBPACK_IMPORTED_MODULE_11__["fetchEventsURL"], {
        events_count: 10,
        type: this.state.type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: e,
        state: this.state.state
      });
    };

    this.renderAllTypes = () => {
      return this.state.types.map((t, id) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
          style: {
            fontSize: '20px',
            padding: '22px'
          },
          key: id,
          onSelect: this.handleOnSelect,
          eventKey: t,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, t.charAt(0).toUpperCase() + t.slice(1));
      });
    };

    this.handleSearch = e => {
      e.preventDefault();
      this.handleFetch(_urls__WEBPACK_IMPORTED_MODULE_11__["fetchEventsURL"], {
        events_count: 10,
        type: this.state.type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state
      });
    };

    this.handleOnChangeName = e => {
      this.setState({
        searchTerm: e.target.value
      });
    };

    this.handleSwitchType = type => {
      this.handleFetch(_urls__WEBPACK_IMPORTED_MODULE_11__["fetchEventsURL"], {
        events_count: 10,
        type: type,
        city: this.state.city,
        searchTerm: this.state.searchTerm,
        eventType: this.state.eventType,
        state: this.state.state
      });
    };
  }

  componentWillMount() {
    this.onSearchProps = this.SearchBoxWillMount();
  }

  componentDidMount() {
    this.handleFetch(_urls__WEBPACK_IMPORTED_MODULE_11__["initialDiscoverURL"], {
      events_count: 10,
      type: this.state.type,
      city: this.state.city,
      searchTerm: this.state.searchTerm,
      eventType: this.state.eventType,
      state: this.state.state
    });
  }

  render() {
    console.log(this.state.games);
    console.log(this.state.groups);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "header-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "index-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Find your next game")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "search-container",
      style: {
        display: 'flex'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "radio",
      name: "options",
      defaultValue: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      onChange: () => this.handleSwitchType('games'),
      variant: "dark",
      value: 1,
      style: {
        padding: '22px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_ToggleButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      onChange: () => this.handleSwitchType('groups'),
      variant: "dark",
      value: 2,
      style: {
        padding: '22px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Groups")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      size: "lg",
      title: this.state.eventType,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_9___default.a.Item, {
      style: {
        fontSize: '20px',
        padding: '22px'
      },
      onSelect: this.handleOnSelect,
      eventKey: "All types",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "All types"), !!this.state.types ? this.renderAllTypes() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LoadingAnimation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Search by name",
      onChange: this.handleOnChangeName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_3___default.a, {
      ref: this.onSearchProps.onSearchBoxMounted,
      onPlacesChanged: this.onSearchProps.onPlacesChanged,
      options: {
        types: ['(cities)'],
        componentRestrictions: {
          country: "us"
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "".concat(this.state.city, ", ").concat(this.state.state),
      style: {
        boxSizing: "border-box",
        border: "1px solid transparent",
        width: "240px",
        height: "32px",
        padding: "0 12px",
        borderRadius: "3px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
        fontSize: "14px",
        outline: "none",
        textOverflow: "ellipses"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    })))), this.showPage());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Explore);

/***/ }),

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

/***/ }),

/***/ "./src/containers/Groups.js":
/*!**********************************!*\
  !*** ./src/containers/Groups.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/Groups.js";

 // url

 // import {userGroups} from '../urls'

class Groups extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_2__["groupsURL"]).then(res => res.json()).then(data => {
      console.log(data);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Groups"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Groups);

/***/ }),

/***/ "./src/containers/LoginContainer.js":
/*!******************************************!*\
  !*** ./src/containers/LoginContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/users */ "./src/actions/users.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/LoginContainer.js";








class LoginContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    };

    this.handleChange = e => {
      // debugger
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleClick = () => {
      this.setState({
        isLoading: !this.state.isLoading
      });
      const info = {
        username: this.state.username,
        password: this.state.password // debugger

      };
      fetch(_urls__WEBPACK_IMPORTED_MODULE_1__["loginURL"], {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(obj => {
        if (obj.error) {
          this.setState({
            isLoading: !this.state.isLoading
          });
        } else {
          this.setState({
            isLoading: !this.state.isLoading
          });
          this.props.login();
        }
      }, this).catch(err => {
        console.log(err);
      });
    };
  }

  render() {
    const isLoading = this.state.isLoading;

    if (this.props.loggedIn) {
      if (!!this.props.viewedPageBeforeLogin) {
        this.props.history.push(this.props.viewedPageBeforeLogin);
      } else {
        this.props.history.push('/');
      }

      return null;
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
        controlId: "formBasicEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
        type: "username",
        name: "username",
        placeholder: "Enter username",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Text, {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Group, {
        controlId: "formBasicPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
        type: "password",
        name: "password",
        placeholder: "Password",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "primary",
        disabled: isLoading,
        onClick: !isLoading ? this.handleClick : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, isLoading ? 'Loading…' : 'Log in'))));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => ({
  loggedIn: state.loggedIn,
  viewedPageBeforeLogin: state.viewedPageBeforeLogin
}), {
  login: _actions_users__WEBPACK_IMPORTED_MODULE_6__["login"]
})(LoginContainer));

/***/ }),

/***/ "./src/containers/NavbarContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/NavbarContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CreateModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateModal */ "./src/components/CreateModal.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/users */ "./src/actions/users.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/NavbarContainer.js";



 // import Button from 'react-bootstrap/Button'


 //action

 //url



class NavbarContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      showModal: false
    };

    this.handleLogout = () => {
      fetch(_urls__WEBPACK_IMPORTED_MODULE_7__["logoutURL"], {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        this.props.logout();
      });
    };

    this.modalClose = () => {
      this.setState({
        showModal: false
      });
    };
  }

  componentDidMount() {
    fetch(_urls__WEBPACK_IMPORTED_MODULE_7__["checkLogin"], {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      // debugger
      if (!data.error) {
        this.props.login(data.username); // if (this.props.setUser) this.props.setUser(data.id)
      } else {
        if (this.props.changePage) this.props.changePage();
      }
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "nav-bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      collapseOnSelect: true,
      expand: "lg",
      style: {
        backgroundColor: '#101D2E'
      },
      variant: "dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/",
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "MeetBallers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Toggle, {
      "aria-controls": "responsive-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1___default.a.Collapse, {
      id: "responsive-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
      href: "#",
      onClick: () => this.setState({
        showModal: true
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Create"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/explore",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Explore"), this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      onClick: this.handleLogout,
      to: "",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Log out") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/login",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Log in"), this.props.loggedIn ? // <NavDropdown title="Account" id="collasible-nav-dropdown">
    //     <Link to={`/users/${this.props.username}`} className='dropdown-item'>Profile</Link>
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/account",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Account") // </NavDropdown>
    : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: "/signup",
      className: "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Sign up")))), this.state.showModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreateModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      show: this.state.showModal,
      onHide: this.modalClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(state => ({
  loggedIn: state.loggedIn,
  username: state.username
}), {
  login: _actions_users__WEBPACK_IMPORTED_MODULE_6__["login"],
  logout: _actions_users__WEBPACK_IMPORTED_MODULE_6__["logout"]
})(NavbarContainer));

/***/ }),

/***/ "./src/containers/NearbyCardDeck.js":
/*!******************************************!*\
  !*** ./src/containers/NearbyCardDeck.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap/CardDeck */ "./node_modules/react-bootstrap/CardDeck.js");
/* harmony import */ var react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_ShowCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ShowCard */ "./src/components/ShowCard.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/NearbyCardDeck.js";






const SeeAll = props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: props.url,
  className: "see-all",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "See all");

const NearbyCardDeck = props => {
  // debugger
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-deck-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap_CardDeck__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-deck-info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    style: {
      marginLeft: '15px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.title, " near you"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SeeAll, {
    url: "/explore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), !!props.nearByLocations ? props.nearByLocations[props.type].map(card => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ShowCard__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    eventtype: props.type,
    key: card.id
  }, card, {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => ({
  nearByLocations: state.nearByLocations
}))(NearbyCardDeck));

/***/ }),

/***/ "./src/containers/NewGame.js":
/*!***********************************!*\
  !*** ./src/containers/NewGame.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/NewGame.js";




class NewGame extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "outline-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Primary"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewGame);

/***/ }),

/***/ "./src/containers/NewGroup.js":
/*!************************************!*\
  !*** ./src/containers/NewGroup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var _components_ErrorBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorBox */ "./src/components/ErrorBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/NewGroup.js";


 // redux



class NewGroup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      group: {
        name: '',
        imgURL: '',
        location: '',
        type_id: ''
      },
      error: ''
    };

    this.handleChange = e => {
      this.setState({
        group: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.group, {
          [e.target.name]: e.target.value
        })
      });
    };

    this.handleCreate = e => {
      e.preventDefault(); // fetch google api to get getmetry location (lat & lng)

      fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.state.group.location, "&key=AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY")).then(res => res.json()).then(data => {
        if (data.status !== 'OK') {
          // To do: show error text
          // show address is not correct error
          console.log('error');
        } else {
          debugger;
          fetch('http://localhost:3001/groups', {
            method: 'POST',
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              group: {
                name: this.state.group.name,
                type_id: this.state.group.type_id,
                location: data.results[0].formatted_address,
                city: data.results[0].address_components.find(c => c.types.find(t => t === "locality")).long_name,
                state: data.results[0].address_components.find(c => c.types.find(t => t === "administrative_area_level_1")).short_name,
                lat: data.results[0].geometry.location.lat,
                lng: data.results[0].geometry.location.lng,
                zip_code: data.results[0].address_components.find(c => c.types.find(t => t === "postal_code")).short_name
              },
              imgURL: this.state.imgURL
            })
          }).then(res => res.json()).then(data => {
            if (!this.props.loggedIn) {
              this.props.history.push('/login');
            } else if (!!data.error) {
              this.setState({
                error: data.error
              });
            } else {
              console.log(data);
            }
          }).catch(err => {
            // show validation error from backend
            console.log('err: ', err);
          });
        }
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      onSubmit: this.handleCreate,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.handleChange,
      placeholder: "Enter group name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "imgURL",
      onChange: this.handleChange,
      placeholder: "Enter image url",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "location",
      onChange: this.handleChange,
      placeholder: "Enter location",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "type_id",
      onChange: this.handleChange,
      placeholder: "Enter type",
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      value: "Create group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), this.state.error.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: this.state.error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => ({
  loggedIn: state.loggedIn
}))(NewGroup));

/***/ }),

/***/ "./src/containers/NewTournament.js":
/*!*****************************************!*\
  !*** ./src/containers/NewTournament.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/NewTournament.js";




class NewTournament extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "outline-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Primary"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewTournament);

/***/ }),

/***/ "./src/containers/SignupContainer.js":
/*!*******************************************!*\
  !*** ./src/containers/SignupContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../urls */ "./src/urls.js");
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/SignupContainer.js";





class SignupContainer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      userInfo: {
        username: '',
        password: '',
        passwordConfirm: ''
      }
    };

    this.handleChange = e => {
      console.log(e.target.value);
      console.log(this.state.username);
      this.setState({
        userInfo: Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.userInfo, {
          [e.target.name]: e.target.value
        })
      });
    };

    this.handleCreate = () => {
      let info = this.state;
      fetch(_urls__WEBPACK_IMPORTED_MODULE_2__["users"], {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(res => res.json()).then(data => {
        debugger;
      }).catch(err => {
        console.log(err);
      });
    };
  }

  render() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
      return null;
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        name: "username",
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: this.handleChange,
        name: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: this.handleChange,
        name: "passwordConfirm",
        placeholder: "Confirm Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleCreate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Create Account"));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => ({
  loggedIn: state.loggedIn
}))(SignupContainer));

/***/ }),

/***/ "./src/containers/Tournaments.js":
/*!***************************************!*\
  !*** ./src/containers/Tournaments.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavbarContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarContainer */ "./src/containers/NavbarContainer.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/containers/Tournaments.js";



class Tournaments extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Tournaments"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tournaments);

/***/ }),

/***/ "./src/containers/games.css":
/*!**********************************!*\
  !*** ./src/containers/games.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./games.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/games.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./games.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/games.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./games.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/games.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.css */ "./src/loading.css");
/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/resources/themes/nova-light/theme.css */ "./node_modules/primereact/resources/themes/nova-light/theme.css");
/* harmony import */ var primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_nova_light_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _containers_LoginContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/LoginContainer */ "./src/containers/LoginContainer.js");
/* harmony import */ var _containers_SignupContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/SignupContainer */ "./src/containers/SignupContainer.js");
/* harmony import */ var _containers_Explore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/Explore */ "./src/containers/Explore.js");
/* harmony import */ var _containers_Tournaments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/Tournaments */ "./src/containers/Tournaments.js");
/* harmony import */ var _containers_Groups__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/Groups */ "./src/containers/Groups.js");
/* harmony import */ var _containers_GroupShowPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/GroupShowPage */ "./src/containers/GroupShowPage.js");
/* harmony import */ var _components_Account__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Account */ "./src/components/Account.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _containers_NewGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/NewGroup */ "./src/containers/NewGroup.js");
/* harmony import */ var _containers_NewTournament__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/NewTournament */ "./src/containers/NewTournament.js");
/* harmony import */ var _containers_NewGame__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/NewGame */ "./src/containers/NewGame.js");
var _jsxFileName = "/Users/yongnanpiao/final-project/frontend/src/index.js";

 // key: 'AIzaSyAi5sbutxQNY6KM3W7mez3opdp8VfeneMY'
// import 'semantic-ui-css/semantic.min.css'
// css





 // Redux



 // Components









 // Create New Component Containers



 // import CreateModal from './components/CreateModal'

const routing = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_9__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  exact: true,
  path: "/",
  component: _Home__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/explore",
  component: _containers_Explore__WEBPACK_IMPORTED_MODULE_13__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/new_group",
  component: _containers_NewGroup__WEBPACK_IMPORTED_MODULE_19__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/new_game",
  component: _containers_NewGame__WEBPACK_IMPORTED_MODULE_21__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/new_tournament",
  component: _containers_NewTournament__WEBPACK_IMPORTED_MODULE_20__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  exact: true,
  path: "/groups",
  component: _containers_Groups__WEBPACK_IMPORTED_MODULE_15__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/groups/:id",
  component: _containers_GroupShowPage__WEBPACK_IMPORTED_MODULE_16__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/tournaments",
  component: _containers_Tournaments__WEBPACK_IMPORTED_MODULE_14__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/login",
  component: _containers_LoginContainer__WEBPACK_IMPORTED_MODULE_11__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/signup",
  component: _containers_SignupContainer__WEBPACK_IMPORTED_MODULE_12__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/account",
  component: _components_Account__WEBPACK_IMPORTED_MODULE_17__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
  path: "/users/:username",
  component: _components_Profile__WEBPACK_IMPORTED_MODULE_18__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}))));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(routing, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/***/ }),

/***/ "./src/loading.css":
/*!*************************!*\
  !*** ./src/loading.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/loading.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/loading.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/loading.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/statesData.js":
/*!***************************!*\
  !*** ./src/statesData.js ***!
  \***************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
const states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");



const initialState = {
  types: null,
  username: null,
  loggedIn: false,
  latLng: null,
  nearByLocations: null,
  viewedPageBeforeLogin: null,
  numberOfUnreadNotifications: 0,
  notifications: []
};
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])((state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loggedIn: action.loggedIn,
        username: action.username
      });

    case 'LOGOUT':
      window.location.assign('/');
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loggedIn: action.loggedIn
      });

    case 'SET_LOCATION':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        latLng: action.latLng
      });

    case 'SET_NEARBY_LOCATIONS':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        nearByLocations: action.nearByLocations,
        types: action.types
      });

    case 'STORE_VIEWING_PAGE':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        viewedPageBeforeLogin: action.url
      });

    case 'SET_UNREAD_NOTIFICATION_NUMBER':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        numberOfUnreadNotifications: action.numberOfUnreadNotifications
      });

    case 'UNREAD_NOTIFICATION':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        numberOfUnreadNotifications: state.numberOfUnreadNotifications + 1,
        notifications: action.notifications
      });

    case 'READ_NOTIFICATION':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        numberOfUnreadNotifications: state.numberOfUnreadNotifications - 1,
        notifications: action.notifications
      });

    case 'ACCEPT_NOTIFICATION':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        numberOfUnreadNotifications: action.numberOfUnreadNotifications,
        notifications: action.notifications
      });

    case 'SET_NOTIFICATIONS':
      return Object(_Users_yongnanpiao_final_project_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        notifications: action.notifications
      });

    default:
      return state;
  }
}, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/urls.js":
/*!*********************!*\
  !*** ./src/urls.js ***!
  \*********************/
/*! exports provided: baseURL, users, loginURL, checkLogin, allTypeUrl, nearEventsURL, initialDiscoverURL, fetchEventsURL, joinGroup, joinGame, createGame, profile, userTimeEvents, userNotification, acceptToGroup, hasReadNotifications, unreadNotifications, readNotificationURL, unreadNotificationURL, deleteNotificationURL, gamesURL, fetchGameUsers, tournamentsURL, groupsURL, fetchGroupUsers, leaveGroup, userGroups, logoutURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginURL", function() { return loginURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLogin", function() { return checkLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTypeUrl", function() { return allTypeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nearEventsURL", function() { return nearEventsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDiscoverURL", function() { return initialDiscoverURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchEventsURL", function() { return fetchEventsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinGroup", function() { return joinGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinGame", function() { return joinGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGame", function() { return createGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userTimeEvents", function() { return userTimeEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userNotification", function() { return userNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptToGroup", function() { return acceptToGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasReadNotifications", function() { return hasReadNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unreadNotifications", function() { return unreadNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readNotificationURL", function() { return readNotificationURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unreadNotificationURL", function() { return unreadNotificationURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotificationURL", function() { return deleteNotificationURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamesURL", function() { return gamesURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGameUsers", function() { return fetchGameUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tournamentsURL", function() { return tournamentsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsURL", function() { return groupsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupUsers", function() { return fetchGroupUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveGroup", function() { return leaveGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userGroups", function() { return userGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutURL", function() { return logoutURL; });
const baseURL = 'http://localhost:3001/';
const users = 'http://localhost:3001/users';
const loginURL = 'http://localhost:3001/auth/login';
const checkLogin = 'http://localhost:3001/login_check'; // Types

const allTypeUrl = 'http://localhost:3001/types'; // Near events

const nearEventsURL = 'http://localhost:3001/near_events';
const initialDiscoverURL = 'http://localhost:3001/discover_games_or_groups';
const fetchEventsURL = 'http://localhost:3001/fetch_events_on_discover'; // Join group / games / tournaments

const joinGroup = 'http://localhost:3001/applies';
const joinGame = 'http://localhost:3001/events/join';
const createGame = 'http://localhost:3001/events'; // User Profile Page Routes

const profile = 'http://localhost:3001/user/profile'; // User past||upcomming events

const userTimeEvents = time => "http://localhost:3001/user/".concat(time, "_events"); // User notification

const userNotification = 'http://localhost:3001/user/notifications';
const acceptToGroup = id => "http://localhost:3001/notifications/".concat(id, "/accept_user");
const hasReadNotifications = 'http://localhost:3001/user/notifications_read';
const unreadNotifications = 'http://localhost:3001/user/notifications_unread';
const readNotificationURL = id => "http://localhost:3001/user/notifications/".concat(id, "/read");
const unreadNotificationURL = id => "http://localhost:3001/user/notifications/".concat(id, "/unread");
const deleteNotificationURL = id => "http://localhost:3001/notifications/".concat(id); // Games

const gamesURL = 'http://localhost:3001/games';
const fetchGameUsers = id => "http://localhost:3001/events/".concat(id, "/users"); // Tournaments

const tournamentsURL = 'http://localhost:3001/tournaments'; // Groups

const groupsURL = 'http://localhost:3001/groups';
const fetchGroupUsers = id => "http://localhost:3001/groups/".concat(id, "/users");
const leaveGroup = id => "http://localhost:3001/user/groups/".concat(id, "/leave"); // Groups for a user

const userGroups = 'http://localhost:3001/user/groups'; // Log out

const logoutURL = 'http://localhost:3001/logout';

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yongnanpiao/final-project/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/yongnanpiao/final-project/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map