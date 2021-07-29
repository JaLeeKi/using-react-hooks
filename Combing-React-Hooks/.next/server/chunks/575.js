exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 7120:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InitialSpeakersDataContext": function() { return /* binding */ InitialSpeakersDataContext; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const InitialSpeakersDataContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createContext();
async function getStaticProps() {
  const {
    promisify
  } = __webpack_require__(1669);

  const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_3___default().readFile));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve('./', 'db.json');
  let initialSpeakersData;

  try {
    const readFileData = await readFile(jsonFile);
    initialSpeakersData = JSON.parse(readFileData).speakers;
  } catch (e) {
    console.log('/api/speakers error:', e);
  }

  return {
    revalidate: 1,
    props: {
      initialSpeakersData
    }
  };
}

function speakers({
  initialSpeakersData
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InitialSpeakersDataContext.Provider, {
    value: initialSpeakersData,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_App__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      pageName: "Speakers"
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (speakers);

/***/ }),

/***/ 9593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": function() { return /* binding */ ConfigContext; },
  "Z": function() { return /* binding */ src_App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/SignMeUp.js





const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)('');
  const context = (0,external_react_.useContext)(ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        })]
      })
    })
  });
};

/* harmony default export */ var src_SignMeUp = (SignMeUp);
;// CONCATENATED MODULE: ./src/Header.js



const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "text-uppercase",
          children: "October 19-20\xA0\xA02019"
        }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/static/SVCClogo.png"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Silicon Valley Code Camp 2019"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/jsx_runtime_.jsx(src_SignMeUp, {
            signupCallback: signupCallback
          })
        })]
      })]
    })
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/Menu.js




const Menu = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Home"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/speakers",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link",
              children: "Speakers"
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./src/Home.js





function index() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Menu, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Home"
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          })]
        })
      })
    })]
  });
}

/* harmony default export */ var Home = (index);
;// CONCATENATED MODULE: ./src/ImageToggleOnScroll.js



const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,external_react_.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  });
};

/* harmony default export */ var src_ImageToggleOnScroll = (ImageToggleOnScroll);
;// CONCATENATED MODULE: ./src/SpeakerDetail.js




const SpeakerDetail = /*#__PURE__*/external_react_default().memo(({
  speakerRec,
  onHeartFavoriteHandler
}) => {
  const {
    id,
    firstName,
    lastName,
    bio,
    favorite
  } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/jsx_runtime_.jsx(src_ImageToggleOnScroll, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: "{firstName} {lastName}"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec);
          }
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [firstName, " ", lastName]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: bio
      })]
    })]
  });
});
/* harmony default export */ var src_SpeakerDetail = (SpeakerDetail);
;// CONCATENATED MODULE: ./src/speakersReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item, index) => {
      if (item.id === action.id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false
        });
      }

    case 'favorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case 'unfavorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ var src_speakersReducer = (speakersReducer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./pages/speakers.js
var speakers = __webpack_require__(7120);
;// CONCATENATED MODULE: ./src/useSpeakerDataManager.js
function useSpeakerDataManager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useSpeakerDataManager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useSpeakerDataManager_ownKeys(Object(source), true).forEach(function (key) { useSpeakerDataManager_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useSpeakerDataManager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useSpeakerDataManager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function useSpeakerDataManager() {
  const initialSpeakersData = (0,external_react_.useContext)(speakers.InitialSpeakersDataContext);
  const {
    0: {
      isLoading,
      speakerList
    },
    1: dispatch
  } = (0,external_react_.useReducer)(src_speakersReducer, {
    isLoading: false,
    speakerList: initialSpeakersData
  });

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      external_axios_default().put(`/api/speakers/${speakerRec.id}`, useSpeakerDataManager_objectSpread(useSpeakerDataManager_objectSpread({}, speakerRec), {}, {
        favorite: !speakerRec.favorite
      }));
      speakerRec.favorite === true ? dispatch({
        type: 'unfavorite',
        id: speakerRec.id
      }) : dispatch({
        type: 'favorite',
        id: speakerRec.id
      });
    };

    updateData();
  }

  (0,external_react_.useEffect)(() => {
    const fetchData = async function () {
      let result = await external_axios_default().get('/api/speakers');
      dispatch({
        type: 'setSpeakerList',
        data: result.data
      });
    };

    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    toggleSpeakerFavorite
  };
}

/* harmony default export */ var src_useSpeakerDataManager = (useSpeakerDataManager);
;// CONCATENATED MODULE: ./src/Speakers.js









const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,external_react_.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,external_react_.useState)(true);
  const context = (0,external_react_.useContext)(ConfigContext);
  const {
    isLoading,
    speakerList,
    toggleSpeakerFavorite
  } = src_useSpeakerDataManager();

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (0,external_react_.useCallback)((e, speakerRec) => {
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec);
  }, []);
  const newSpeakerList = (0,external_react_.useMemo)(() => speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);
  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (isLoading) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Menu, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "btn-toolbar  margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "hide",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }), "Saturday Speakers"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }), "Sunday Speakers"]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "card-deck",
          children: speakerListFiltered.map(speakerRec => {
            return /*#__PURE__*/jsx_runtime_.jsx(src_SpeakerDetail, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id);
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var src_Speakers = (Speakers);
;// CONCATENATED MODULE: ./src/App.js




const ConfigContext = /*#__PURE__*/external_react_default().createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/jsx_runtime_.jsx(Home, {});
  if (pageName === 'Speakers') return /*#__PURE__*/jsx_runtime_.jsx(src_Speakers, {});
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Not Found"
  });
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: pageToShow(pageName)
    })
  });
};

/* harmony default export */ var src_App = (App);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;