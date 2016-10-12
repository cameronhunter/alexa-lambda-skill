'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Promise$1 = _interopDefault(require('bluebird'));
var $inject_Object_values = _interopDefault(require('object-values'));

var Unauthorized = { code: 401, message: 'Unauthorized application ID' };
var NotFound = { code: 404, message: 'Route not found' };
var InternalServer = { code: 500, message: 'Internal skill error' };

var errorCodes = Object.freeze({
	Unauthorized: Unauthorized,
	NotFound: NotFound,
	InternalServer: InternalServer
});

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _class;
var _temp;

var Request = (_temp = _class = function () {
  function Request() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Request);

    this.state = state;
  }

  createClass(Request, [{
    key: 'session',
    value: function session(_session) {
      return new Request(_extends({}, this.state, {
        session: _extends({}, this.state.session, _session)
      }));
    }
  }, {
    key: 'intent',
    value: function intent(name) {
      var slots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var slotData = Object.entries(slots).reduce(function (state, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var name = _ref2[0];
        var value = _ref2[1];
        return _extends({}, state, defineProperty({}, name, { name: name, value: value }));
      }, {});
      return new Request(_extends({}, this.state, {
        request: {
          type: 'IntentRequest',
          intent: _extends({
            name: name
          }, Object.keys(slotData).length ? { slots: slotData } : null)
        }
      }));
    }
  }, {
    key: 'audioPlayerEvent',
    value: function audioPlayerEvent(name, token) {
      return new Request(_extends({}, this.state, {
        request: {
          type: name,
          token: token
        }
      }));
    }
  }, {
    key: 'launchRequest',
    value: function launchRequest() {
      return new Request(_extends({}, this.state, {
        request: {
          type: 'LaunchRequest'
        }
      }));
    }
  }, {
    key: 'sessionEndedRequest',
    value: function sessionEndedRequest() {
      return new Request(_extends({}, this.state, {
        request: {
          type: 'SessionEndedRequest'
        }
      }));
    }
  }, {
    key: 'build',
    value: function build() {
      return _extends({}, this.state);
    }
  }]);
  return Request;
}(), _class.session = function () {
  var _ref3;

  return (_ref3 = new Request()).session.apply(_ref3, arguments);
}, _class.intent = function () {
  var _ref4;

  return (_ref4 = new Request()).intent.apply(_ref4, arguments);
}, _class.audioPlayerEvent = function () {
  var _ref5;

  return (_ref5 = new Request()).audioPlayerEvent.apply(_ref5, arguments);
}, _class.launchRequest = function () {
  var _ref6;

  return (_ref6 = new Request()).launchRequest.apply(_ref6, arguments);
}, _class.sessionEndedRequest = function () {
  var _ref7;

  return (_ref7 = new Request()).sessionEndedRequest.apply(_ref7, arguments);
}, _temp);

var isAuthorized = function isAuthorized() {
  var expected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise$1(function (resolve, reject) {
    var isOK = !expected.applicationId || expected.applicationId === actual.applicationId;
    return isOK ? resolve() : reject(Unauthorized);
  });
};

var SkillAnnotation = function SkillAnnotation(options) {
  return function (Skill) {
    return function (event, context, callback) {
      var _ref = event || {};

      var request = _ref.request;
      var session = _ref.session;

      var _ref2 = session || {};

      var application = _ref2.application;
      var attributes = _ref2.attributes;


      return isAuthorized(options, application).then(function () {
        return new Skill(session).route(request) || Promise$1.reject(NotFound);
      }).then(function (response) {
        return typeof response.build === 'function' ? response.build(attributes) : response;
      }).then(function (response) {
        callback && callback(null, response);
        return response;
      }).catch(function () {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InternalServer;

        callback && callback(error);
        return error;
      }).then(function (response) {
        if (options.logging !== false) {
          var name = typeof options.logging === 'string' ? options.logging : 'Skill';
          console.log('[' + name + ']', JSON.stringify({ request: request, response: response }));
        }

        return response;
      });
    };
  };
};

/*******************************************************************************
 * This provides multiple ways of using the @Skill annotation:
 *
 * 1. @Skill
 * 2. @Skill()
 * 3. @Skill({ applicationId: 'my-authorized-application-id' })
 ******************************************************************************/

var skill = (function () {
  var optionsOrSkill = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var isSkill = typeof optionsOrSkill === 'function';
  var options = isSkill ? {} : optionsOrSkill;
  var skill = isSkill && optionsOrSkill;

  return isSkill ? SkillAnnotation(options)(skill) : SkillAnnotation(options);
});

var annotation = function annotation(predicate, transform) {
  return function (skill, name) {
    var route = skill.route || function () {
      return false;
    };

    skill.route = function (request) {
      var args = transform ? [transform(request), request] : [request];
      return route.call(this, request) || predicate(request) && skill[name].apply(this, args);
    };

    return skill;
  };
};

var Launch = annotation(function (_ref) {
  var type = _ref.type;
  return type === 'LaunchRequest';
});

var SessionEnded = annotation(function (_ref2) {
  var type = _ref2.type;
  return type === 'SessionEndedRequest';
});

var Intent = function Intent() {
  for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
    names[_key] = arguments[_key];
  }

  return annotation(function (_ref3) {
    var type = _ref3.type;
    var _ref3$intent = _ref3.intent;
    var intent = _ref3$intent === undefined ? {} : _ref3$intent;
    return type === 'IntentRequest' && names.indexOf(intent.name) >= 0;
  }, function (_ref4) {
    var _ref4$intent = _ref4.intent;
    var intent = _ref4$intent === undefined ? {} : _ref4$intent;
    return $inject_Object_values(intent.slots || {}).reduce(function (state, _ref5) {
      var name = _ref5.name;
      var value = _ref5.value;
      return name && value != null ? _extends({}, state, defineProperty({}, name, value)) : state;
    }, {});
  });
};

var AudioPlayerEvent = function AudioPlayerEvent() {
  for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    names[_key2] = arguments[_key2];
  }

  return annotation(function (_ref6) {
    var _ref6$type = _ref6.type;
    var type = _ref6$type === undefined ? {} : _ref6$type;
    return names.indexOf(type) >= 0;
  });
};

exports.ErrorCode = errorCodes;
exports.Request = Request;
exports.Skill = skill;
exports.Launch = Launch;
exports.Intent = Intent;
exports.SessionEnded = SessionEnded;
exports.AudioPlayerEvent = AudioPlayerEvent;
