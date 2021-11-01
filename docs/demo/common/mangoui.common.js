module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2ca0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var toLength = __webpack_require__("50c4");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");
var IS_PURE = __webpack_require__("c430");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9299":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "MgButton", function() { return /* reexport */ packages_button; });
__webpack_require__.d(__webpack_exports__, "MgCard", function() { return /* reexport */ packages_card; });
__webpack_require__.d(__webpack_exports__, "MgSkeleton", function() { return /* reexport */ packages_skeleton; });
__webpack_require__.d(__webpack_exports__, "MgMessage", function() { return /* reexport */ packages_message; });
__webpack_require__.d(__webpack_exports__, "MgSwitch", function() { return /* reexport */ packages_switch; });
__webpack_require__.d(__webpack_exports__, "MgModal", function() { return /* reexport */ packages_modal; });
__webpack_require__.d(__webpack_exports__, "MgBadge", function() { return /* reexport */ packages_badge; });
__webpack_require__.d(__webpack_exports__, "MgBacktop", function() { return /* reexport */ packages_backtop; });
__webpack_require__.d(__webpack_exports__, "MgCarousel", function() { return /* reexport */ packages_carousel; });
__webpack_require__.d(__webpack_exports__, "MgCarouselItem", function() { return /* reexport */ packages_carousel_item; });
__webpack_require__.d(__webpack_exports__, "MgCatalog", function() { return /* reexport */ packages_catalog; });
__webpack_require__.d(__webpack_exports__, "MgNofity", function() { return /* reexport */ packages_notify; });
__webpack_require__.d(__webpack_exports__, "MgDrawer", function() { return /* reexport */ packages_drawer; });
__webpack_require__.d(__webpack_exports__, "MgProgress", function() { return /* reexport */ packages_progress; });
__webpack_require__.d(__webpack_exports__, "MgImgPreview", function() { return /* reexport */ packages_img_preview; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/button.vue?vue&type=template&id=05f73d35

var _hoisted_1 = {
  key: 0,
  class: "mg-icon-btnloading"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("button", {
    disabled: _ctx.btnDisabled,
    class: ["mg-button", _ctx.classes]
  }, [_ctx.loading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", _hoisted_1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 10, ["disabled"]);
}
// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=template&id=05f73d35

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/button/button.vue?vue&type=script&lang=ts


/* harmony default export */ var buttonvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgButton',
  props: {
    size: {
      type: String,
      validator: function validator(val) {
        return ['medium', 'small', 'mini', ''].includes(val);
      }
    },
    type: {
      type: String,
      validator: function validator(val) {
        return ['primary', 'link', 'danger'].includes(val);
      }
    },
    loading: {
      default: false
    }
  },
  setup: function setup(props) {
    var classes = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return [props.size ? "mg-button--".concat(props.size) : '', props.type ? "mg-button--".concat(props.type) : ''];
    });
    var btnDisabled = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return !!(props.disabled || props.loading);
    });
    return {
      classes: classes,
      btnDisabled: btnDisabled
    };
  }
}));
// CONCATENATED MODULE: ./packages/button/button.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/button/button.vue



buttonvue_type_script_lang_ts.render = render

/* harmony default export */ var button_button = (buttonvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/button/index.js


/* harmony default export */ var packages_button = ({
  name: 'MgButton',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(button_button.name, button_button);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/card/card.vue?vue&type=template&id=0e3e5c6e

function cardvue_type_template_id_0e3e5c6e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", null, "this is MgCard components");
}
// CONCATENATED MODULE: ./packages/card/card.vue?vue&type=template&id=0e3e5c6e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/card/card.vue?vue&type=script&lang=js
/* harmony default export */ var cardvue_type_script_lang_js = ({
  name: 'MgCard'
});
// CONCATENATED MODULE: ./packages/card/card.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./packages/card/card.vue



cardvue_type_script_lang_js.render = cardvue_type_template_id_0e3e5c6e_render

/* harmony default export */ var card = (cardvue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/card/index.js


/* harmony default export */ var packages_card = ({
  name: 'MgCard',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(card.name, card);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/skeleton/skeleton.vue?vue&type=template&id=17fe9af8

var skeletonvue_type_template_id_17fe9af8_hoisted_1 = {
  key: 0,
  class: "mg-skeleton-header"
};
var _hoisted_2 = {
  class: "mg-skeleton-content"
};
var _hoisted_3 = {
  class: "mg-skeleton-paragraph"
};
function skeletonvue_type_template_id_17fe9af8_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["mg-skeleton", {
      'mg-skeleton-active': _ctx.active
    }]
  }, [!!_ctx.avatar || _ctx.avatar === '' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", skeletonvue_type_template_id_17fe9af8_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
    class: ["mg-skeleton-avatar", _ctx.avatarSize ? "mg-skeleton-avatar-" + _ctx.avatarSize : ''],
    style: _ctx.computBg('avatarColor')
  }, null, 6)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("h3", {
    class: "mg-skeleton-title",
    style: _ctx.computBg('titleColor')
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("ul", _hoisted_3, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.liCount, function (li) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
      style: _ctx.rowStyle(li),
      key: li
    }, null, 4);
  }), 128))])])], 2);
}
// CONCATENATED MODULE: ./packages/skeleton/skeleton.vue?vue&type=template&id=17fe9af8

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/skeleton/skeleton.vue?vue&type=script&lang=ts




/* harmony default export */ var skeletonvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgSkeleton',
  props: {
    avatar: {
      type: [String, Boolean]
    },
    avatarSize: {
      type: String,
      validator: function validator(val) {
        return ['lg', 'sm'].includes(val);
      }
    },
    active: {
      type: [Boolean]
    },
    rows: {
      default: 3,
      type: [String, Number]
    },
    rowHeight: {
      type: [String, Number, Array]
    },
    rowsColor: {
      type: [String, Array]
    },
    titleColor: [String],
    avatarColor: [String]
  },
  setup: function setup(props, ctx) {
    var liCount = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var n = parseInt(props.rows);
      return n || n == 0 ? n : 3;
    });

    var rowStyle = function rowStyle(li) {
      var h = Array.isArray(props.rowHeight) ? props.rowHeight[li - 1] : props.rowHeight;
      var c = props.rowsColor ? props.rowsColor : false;
      var style = {
        'height': parseInt(h) + 'px'
      };

      if (c) {
        var bgc = Array.isArray(c) ? c[li - 1] : c;
        style['background-color'] = bgc;
        props.active ? style['backgroundImage'] = "linear-gradient(90deg, ".concat(bgc, " 25%, #e6e6e6 37%, ").concat(bgc, " 63%)") : null;
      }

      return style;
    };

    var titleStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var c = props.titleColor ? props.titleColor : null;
      return {
        'backgroundColor': c,
        'backgroundImage': props.active ? "linear-gradient(90deg, ".concat(c, " 25%, #e6e6e6 37%, ").concat(c, " 63%)") : null
      };
    });

    var computBg = function computBg(prop) {
      var c = props[prop] ? props[prop] : null;
      return {
        'backgroundColor': c,
        'backgroundImage': props.active ? "linear-gradient(90deg, ".concat(c, " 25%, #e6e6e6 37%, ").concat(c, " 63%)") : null
      };
    };

    return {
      liCount: liCount,
      rowStyle: rowStyle,
      titleStyle: titleStyle,
      computBg: computBg
    };
  },
  methods: {}
}));
// CONCATENATED MODULE: ./packages/skeleton/skeleton.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/skeleton/skeleton.vue



skeletonvue_type_script_lang_ts.render = skeletonvue_type_template_id_17fe9af8_render

/* harmony default export */ var skeleton = (skeletonvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/skeleton/index.js


/* harmony default export */ var packages_skeleton = ({
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(skeleton.name, skeleton);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/message/message.vue?vue&type=template&id=c5fa0b66

var messagevue_type_template_id_c5fa0b66_hoisted_1 = {
  class: "mg-message"
};
function messagevue_type_template_id_c5fa0b66_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", messagevue_type_template_id_c5fa0b66_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: 'mg-icon-' + _ctx.type
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.message), 1)]);
}
// CONCATENATED MODULE: ./packages/message/message.vue?vue&type=template&id=c5fa0b66

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/message/message.vue?vue&type=script&lang=ts



/* harmony default export */ var messagevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "MgMessage",
  props: {
    message: {
      type: [String, Number],
      default: 'info'
    },
    duration: {
      default: 3,
      type: Number
    },
    gap: {
      type: Number
    },
    type: {
      type: String,
      default: 'info',
      validator: function validator(val) {
        return ['info', 'warning', 'success', 'error'].includes(val);
      }
    }
  },
  emits: ['close'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var instance = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();
    var timer;

    if (props.duration > 0) {
      timer = setTimeout(function () {
        emit('close', instance);
      }, props.duration * 1000);
    }
  }
}));
// CONCATENATED MODULE: ./packages/message/message.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/message/message.vue



messagevue_type_script_lang_ts.render = messagevue_type_template_id_c5fa0b66_render

/* harmony default export */ var message = (messagevue_type_script_lang_ts);
// CONCATENATED MODULE: ./src/utils/dom.js
function appendToBody(el) {
  document.body.append(el);
}

function setStyle(el, attr, value) {
  if (value !== undefined) {
    el.style[attr] = value;
  } else {
    el.style = attr;
  }
}

function dom_transitionend(dom, fn) {
  dom.addEventListener('transitionend', fn, {
    once: true
  });
}


// CONCATENATED MODULE: ./src/utils/popup.js

var popupManager = {
  modalDom: null,
  initZIndex: null,
  zIndex: null,
  appended: false,
  nextzIndex: function nextzIndex() {
    return this.zIndex += 2;
  }
};
window.pop = popupManager;

function createModal(modalClose) {
  document.body.style.overflow = 'hidden';

  if (popupManager.modalDom === null) {
    var modal = document.createElement('div');
    modal.className = 'mg-modal';
    popupManager.modalDom = modal;
  }

  var modalDom = popupManager.modalDom;

  if (popupManager.appended) {
    setStyle(modalDom, 'z-index', popupManager.nextzIndex());
  } else {
    setStyle(modalDom, 'z-index', popupManager.zIndex);
    appendToBody(modalDom);
    popupManager.appended = true;
  }
}

function modalShowToggle(bol) {
  var opc = bol ? 0.5 : 0;
  var o = getComputedStyle(popupManager.modalDom).opacity;
  setStyle(popupManager.modalDom, 'opacity', opc);
}

function popup_modalClose() {
  var modal = popupManager.modalDom;

  if (!modal) {
    return false;
  }

  var lastZ = modal.style.zIndex - 4;

  if (lastZ >= popupManager.initZIndex) {
    setStyle(modal, 'z-index', lastZ);
    popupManager.zIndex = lastZ + 2;
  } else {
    popupManager.zIndex -= 2;
    dom_transitionend(modal, function () {
      var body = document.body;
      popupManager.appended = false;
      modal.parentElement === body ? document.body.removeChild(modal) : null;
    });
    document.body.style.overflow = '';
    modalShowToggle();
  }

  return true;
}


// CONCATENATED MODULE: ./packages/message/index.js







var msgControler = {
  nextTop: 0,
  gap: 20,
  allMsgVnode: []
};

function createMsgVnode(props) {
  var vnode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(message, props);
  var container = document.createElement('div');
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["render"])(vnode, container);
  msgControler.allMsgVnode.push(vnode);
  return vnode;
}

function openTransication(vnode) {
  var el = vnode.el;
  var startStyle = "top:".concat(msgControler.nextTop, "px;opacity:0;");
  setStyle(el, startStyle);
  vnode._offsetHeight = el.offsetHeight;
  vnode._topForBack = msgControler.nextTop;
  var gap = vnode.component.props.gap || msgControler.gap;
  vnode._top = msgControler.nextTop += gap + vnode._offsetHeight;
  var openedStyle = "top:".concat(vnode._top, "px;opacity:1;");
  setStyle(el, openedStyle);
  popupManager.appended ? setStyle(el, 'z-index', popupManager.zIndex + 1) : null;
}

function updateAfterEl(index, vnode) {
  msgControler.allMsgVnode.forEach(function (vn, i) {
    if (i > index) {
      var offset = vnode._offsetHeight + (vnode.component.props.gap || msgControler.gap);
      vn._topForBack -= offset;
      vn._top -= offset;
      vn.el.style.top = vn._top + 'px'; // vn.el.style.top = parseInt(vn.el.style.top) - vnode._offsetHeight - (vnode.component.props.gap || msgControler.gap) + 'px'
    }
  });
}

function removeAfterTrans(el) {
  el.addEventListener('transitionend', function () {
    document.body.removeChild(this);
  }, {
    once: true
  });
}

function closeMsgInstance(instance) {
  var vnode = instance.vnode;
  var index = msgControler.allMsgVnode.findIndex(function (vn) {
    return vn === vnode;
  });
  var ele = vnode.el;
  removeAfterTrans(ele);
  var fadeStyle = "top:".concat(vnode._topForBack, "px;opacity:0");
  setStyle(ele, fadeStyle);
  setStyle(ele, 'z-index', ele.style.zIndex);
  var g = vnode.component.props.gap || msgControler.gap;
  msgControler.nextTop -= vnode._offsetHeight + g;
  updateAfterEl(index, vnode);
  msgControler.allMsgVnode.splice(index, 1);
}

function mergeOptions(props) {
  if (props.onClose) {
    var userClose = props.onClose;

    props.onClose = function (instance) {
      userClose(instance);
      closeMsgInstance(instance);
    };
  } else {
    props.onClose = closeMsgInstance;
  }
}

function Message(props) {
  mergeOptions(props);
  var vn = createMsgVnode(props);
  appendToBody(vn.el);
  openTransication(vn);
}

/* harmony default export */ var packages_message = ({
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.config.globalProperties.$message = Message;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/switch/switch.vue?vue&type=template&id=63eb9e40

function switchvue_type_template_id_63eb9e40_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", {
    class: "mg-switch",
    style: {
      'backgroundColor': _ctx.bgColor
    },
    type: "checkbox",
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.checkChange($event);
    }),
    checked: _ctx.checked
  }, null, 44, ["checked"]);
}
// CONCATENATED MODULE: ./packages/switch/switch.vue?vue&type=template&id=63eb9e40

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/switch/switch.vue?vue&type=script&lang=ts


/* harmony default export */ var switchvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgSwitch',
  props: {
    modelValue: {},
    checkedValue: {
      type: [String, Number, Boolean],
      default: true
    },
    uncheckedValue: {
      type: [String, Number, Boolean],
      default: false
    },
    checkedColor: {
      default: ''
    },
    uncheckedColor: {
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup: function setup(props) {
    var checked = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return props.modelValue == props.checkedValue;
    });
    var bgColor = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return checked.value ? props.checkedColor : props.uncheckedColor;
    });
    return {
      checked: checked,
      bgColor: bgColor
    };
  },
  methods: {
    checkChange: function checkChange(event) {
      var v = event.target.checked ? this.checkedValue : this.uncheckedValue;
      this.$emit('update:modelValue', v);
    }
  }
}));
// CONCATENATED MODULE: ./packages/switch/switch.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/switch/switch.vue



switchvue_type_script_lang_ts.render = switchvue_type_template_id_63eb9e40_render

/* harmony default export */ var switch_switch = (switchvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/switch/index.js


/* harmony default export */ var packages_switch = ({
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(switch_switch.name, switch_switch);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/modal/modal.vue?vue&type=template&id=640c6bf7

function modalvue_type_template_id_640c6bf7_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    onTransitionend: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.transitionend($event);
    }),
    onClick: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return _ctx.modalClick($event);
    }, ["self"])),
    class: ["mg-dialog-warp", {
      'mg-dialog-warp-active': _ctx.warpActive
    }],
    style: {
      'zIndex': _ctx.zIndex
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "mg-dialog-content",
    style: _ctx.styleObj
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 4)], 38)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.display]]);
}
// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=template&id=640c6bf7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/modal/modal.vue?vue&type=script&lang=ts


/* harmony default export */ var modalvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "MgModal",
  props: {
    width: {
      default: "40%"
    },
    height: {
      default: ''
    },
    modalClosable: {
      default: true
    },
    modal: {
      default: true
    },
    modelValue: {
      default: false
    }
  },
  data: function data() {
    return {};
  },
  emits: ['update:modelValue', 'open', 'opened', 'close', 'closed'],
  setup: function setup(props, ctx) {
    var zIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var warpActive = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var display = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(props.modelValue);

    function mountDialog() {
      modalShowToggle(true);
      warpActive.value = true;
    }

    function modalClick(e) {
      if (!warpActive.value) {
        return;
      }

      if (!e || e && props.modalClosable) {
        popup_modalClose();
        warpActive.value = false;
        ctx.emit('close');
      }
    }

    function transitionend(e) {
      if (e.propertyName !== 'top') {
        return;
      }

      if (!warpActive.value) {
        ctx.emit('closed');
        ctx.emit('update:modelValue', false);
        display.value = false;
      } else {
        ctx.emit('opened');
      }
    }

    if (props.modelValue) {
      createModal();
      zIndex.value = popupManager.nextzIndex();
      ctx.emit('open');
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
        mountDialog();
      });
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.modelValue;
    }, function (n, o) {
      if (n) {
        display.value = true;
        createModal();
        zIndex.value = popupManager.nextzIndex();
        ctx.emit('open');
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
          mountDialog();
        });
      } else {
        warpActive.value ? modalClick() : '';
      }
    });
    var styleObj = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        width: props.width,
        height: props.height
      };
    });
    return {
      display: display,
      styleObj: styleObj,
      zIndex: zIndex,
      warpActive: warpActive,
      modalClick: modalClick,
      transitionend: transitionend
    };
  }
}));
// CONCATENATED MODULE: ./packages/modal/modal.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/modal/modal.vue



modalvue_type_script_lang_ts.render = modalvue_type_template_id_640c6bf7_render

/* harmony default export */ var modal_modal = (modalvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/modal/index.js



/* harmony default export */ var packages_modal = ({
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    popupManager.zIndex = popupManager.initZIndex = opt.zIndex || 100;
    vue.component(modal_modal.name, modal_modal);
    vue.config.globalProperties.$confirm = popupManager;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/badge/badge.vue?vue&type=template&id=5581298c

var badgevue_type_template_id_5581298c_hoisted_1 = {
  class: "mg-badge"
};
function badgevue_type_template_id_5581298c_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", badgevue_type_template_id_5581298c_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), _ctx.value !== null ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("sup", {
    key: 0,
    class: ["mg-badge-content", _ctx.classList]
  }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.text), 3)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.hidden]]) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./packages/badge/badge.vue?vue&type=template&id=5581298c

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// CONCATENATED MODULE: ./src/utils/index.js




function isDef(v) {
  return v !== undefined && v !== null;
}

var isMeanful = function isMeanful(v) {
  return v !== undefined && v !== null && v !== '';
};

function isUndef(v) {
  return v === undefined || v === null;
}

function toUpcamel(str) {
  return str.replace(/-\w/, function ($0) {
    return $0[1].toUpperCase();
  });
}

function throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var s = 0;
  return function () {
    var now = Date.now();

    if (now - s > wait) {
      s = now;

      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      fn.apply(this, arg);
    }
  };
}

function isObj(v) {
  return Object.prototype.toString.call(v) === '[object Object]';
}

var getMgUid = function () {
  var uid = 0;
  return function () {
    return uid++;
  };
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/badge/badge.vue?vue&type=script&lang=ts



/* harmony default export */ var badgevue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgBadge',
  props: {
    type: {
      default: 'error'
    },
    value: {
      type: [Number, String],
      default: null
    },
    hidden: {
      default: false
    },
    max: {
      type: [Number]
    },
    isDot: {
      type: [Boolean],
      default: false
    }
  },
  setup: function setup(props) {
    var classList = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return ["mg-badge-".concat(props.type), "".concat(props.isDot ? 'is-dot' : '')];
    });
    var text = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      if (props.isDot) {
        return '';
      }

      if (isMeanful(props.max)) {
        return props.value > props.max ? props.max + '+' : props.value;
      } else {
        return props.value;
      }
    });
    return {
      classList: classList,
      text: text
    };
  }
}));
// CONCATENATED MODULE: ./packages/badge/badge.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/badge/badge.vue



badgevue_type_script_lang_ts.render = badgevue_type_template_id_5581298c_render

/* harmony default export */ var badge = (badgevue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/badge/index.js


/* harmony default export */ var packages_badge = ({
  name: 'MgBadge',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(badge.name, badge);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/backtop/backtop.vue?vue&type=template&id=69b384fa


var backtopvue_type_template_id_69b384fa_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
  class: "mg-icon-backtop"
}, null, -1);

function backtopvue_type_template_id_69b384fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    to: "body",
    disabled: !_ctx.appendBody
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["mg-backtop", {
      'mg-backtop-hidden': _ctx.hidden
    }],
    style: _ctx.style,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.toTop($event);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, function () {
    return [backtopvue_type_template_id_69b384fa_hoisted_1];
  })], 6)], 8, ["disabled"]);
}
// CONCATENATED MODULE: ./packages/backtop/backtop.vue?vue&type=template&id=69b384fa

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/backtop/backtop.vue?vue&type=script&lang=ts



/* harmony default export */ var backtopvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgBacktop',
  props: {
    right: {
      default: 30
    },
    bottom: {
      default: 30
    },
    appendBody: {
      default: false
    },
    target: {
      type: String
    },
    visibleTop: {
      default: 0
    }
  },
  emits: ['click'],
  setup: function setup(props, ctx) {
    var hidden = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var scrollEl;

    function judgeHidden() {
      var scrollTop;
      var el = scrollEl === document ? document.documentElement || document.body : scrollEl;
      scrollTop = el.scrollTop;
      hidden.value = scrollTop < props.visibleTop;
    }

    function scrollEvent(e) {
      judgeHidden();
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      scrollEl = props.target ? document.querySelector(props.target) || document : document;

      if (props.visibleTop > 0) {
        hidden.value = true;
        scrollEl.addEventListener('scroll', scrollEvent);
      }
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return props.target;
    }, function (n) {
      scrollEl.removeEventListener('scroll', scrollEvent);
      scrollEl = props.target ? document.querySelector(props.target) || document : document;
      scrollEl.addEventListener('scroll', scrollEvent);
      judgeHidden();
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (scrollEl && props.visibleTop > 0) {
        judgeHidden();
      }
    });
    var style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        right: "".concat(props.right, "px"),
        bottom: "".concat(props.bottom, "px")
      };
    });

    function _toTop() {
      ctx.emit('click');
      var el = props.target ? document.querySelector(props.target) : null;

      if (el) {
        if (el.scrollTop == 0) {
          return;
        }

        setStyle(el, 'scrollBehavior', 'smooth');
        el.scrollTop = 0;
        setStyle(el, 'scrollBehavior', '');
      } else {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }

    var toTop = throttle(_toTop);
    return {
      style: style,
      toTop: toTop,
      hidden: hidden
    };
  }
}));
// CONCATENATED MODULE: ./packages/backtop/backtop.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/backtop/backtop.vue



backtopvue_type_script_lang_ts.render = backtopvue_type_template_id_69b384fa_render

/* harmony default export */ var backtop = (backtopvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/backtop/index.js


/* harmony default export */ var packages_backtop = ({
  name: 'MgBacktop',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(backtop.name, backtop);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/carousel/carousel.vue?vue&type=template&id=c17f9eec&scoped=true


var _withId = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withScopeId"])("data-v-c17f9eec");

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-c17f9eec");

var carouselvue_type_template_id_c17f9eec_scoped_true_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
  class: "mg-icon-last"
}, null, -1);

var carouselvue_type_template_id_c17f9eec_scoped_true_hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
  class: "mg-icon-next"
}, null, -1);

Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])();

var carouselvue_type_template_id_c17f9eec_scoped_true_render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["mg-carousel", _ctx.type === 'card' ? 'mg-carousel-card' : ''],
    style: _ctx.style,
    onMouseenter: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.arrowShowTrigger(true);
    }),
    onMouseleave: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.arrowShowTrigger(false);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"), _ctx.dot ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("ul", {
    key: 0,
    class: ["mg-carousel-dots", _ctx.dotClass]
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.warpData.items, function (dot, i) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
      key: i,
      onClick: function onClick($event) {
        return _ctx.setActive(i, $event);
      },
      onMouseenter: function onMouseenter($event) {
        return _ctx.setActive(i, $event);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
      class: {
        'active': i == _ctx.warpData.activeIndex
      }
    }, null, 2)], 40, ["onClick", "onMouseenter"]);
  }), 128))], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "arrows-left"
  }, {
    default: _withId(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        onClick: _cache[1] || (_cache[1] = function () {
          return _ctx.prev && _ctx.prev.apply(_ctx, arguments);
        }),
        class: "arrows-left-btn"
      }, [carouselvue_type_template_id_c17f9eec_scoped_true_hoisted_1], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.arrow === 'always' || _ctx.arrowShow]])];
    }),
    _: 1
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: "arrows-right"
  }, {
    default: _withId(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("button", {
        onClick: _cache[2] || (_cache[2] = function () {
          return _ctx.next && _ctx.next.apply(_ctx, arguments);
        }),
        class: "arrows-right-btn"
      }, [carouselvue_type_template_id_c17f9eec_scoped_true_hoisted_2], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.arrow === 'always' || _ctx.arrowShow]])];
    }),
    _: 1
  })], 38);
});
// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=template&id=c17f9eec&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/carousel/carousel.vue?vue&type=script&lang=ts








var carouselvue_type_script_lang_ts_isChildrenRight = function isChildrenRight(slots) {
  if (!slots) {
    throw new Error('children of MgCarousel is empty!');
  }

  if (!Array.isArray(slots)) {
    return;
  }

  slots.forEach(function (slot) {
    if (_typeof(slot.type) === 'symbol') {
      isChildrenRight(slot.children);
      return;
    }

    if (slot.type.name !== 'MgCarouselItem') {
      throw new Error('MgCarousel needs MgCarouselItem as children');
    }
  });
};

/* harmony default export */ var carouselvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "MgCarousel",
  props: {
    height: {
      default: '100%',
      type: [Number, String]
    },
    initActiveIndex: {
      default: 0,
      type: [Number, String]
    },
    autoplay: {
      default: true,
      type: [Boolean]
    },
    interval: {
      default: 3000,
      type: [Number]
    },
    duration: {
      default: null,
      type: [Number]
    },
    direction: {
      default: 'horizontal',
      type: [String],
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },
    dot: {
      default: false,
      type: [Boolean]
    },
    dotTrigger: {
      default: 'click',
      type: [String],
      validator: function validator(val) {
        return ['hover', 'click'].indexOf(val) !== -1;
      }
    },
    dotPosition: {
      default: 'bottom',
      type: [String],
      validator: function validator(val) {
        return ['bottom', 'top', 'left', 'right'].indexOf(val) !== -1;
      }
    },
    infinity: {
      default: false
    },
    type: {
      type: [String]
    },
    arrow: {
      default: 'never',
      type: [String],
      validator: function validator(val) {
        return ['hover', 'never', 'always'].indexOf(val) !== -1;
      }
    },
    animate: {
      default: 'scroll',
      type: [String],
      validator: function validator(val) {
        return ['scroll', 'fade'].indexOf(val) !== -1;
      }
    }
  },
  emits: ['next', 'prev'],
  data: function data() {
    return {
      show: true
    };
  },
  setup: function setup(props, ctx) {
    var warpMounted = false;
    var slots = ctx.slots.default && ctx.slots.default();
    carouselvue_type_script_lang_ts_isChildrenRight(slots);
    var data = {
      items: [],
      activeIndex: parseInt(props.initActiveIndex)
    };
    var warpData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])(data);

    var paintChildren = function paintChildren(lastIndex) {
      var len = warpData.items.length;

      if (warpData.activeIndex < 0 || warpData.activeIndex > len - 1) {
        return;
      }

      warpData.items.forEach(function (inst, index) {
        inst.proxy.computeTransform(index, warpData.activeIndex, len - 1, lastIndex, props);
      });
    };

    var timer;
    var next = throttle(function () {
      clearInterval(timer); // eslint-disable-next-line

      setNextInterval();
      warpData.activeIndex >= warpData.items.length - 1 ? warpData.activeIndex = 0 : warpData.activeIndex++;
      ctx.emit('next', warpData.activeIndex);
    }, props.duration);
    var prev = throttle(function () {
      clearInterval(timer); // eslint-disable-next-line

      setNextInterval();
      warpData.activeIndex === 0 ? warpData.activeIndex = warpData.items.length - 1 : warpData.activeIndex--;
      ctx.emit('prev', warpData.activeIndex);
    }, props.duration);

    var setActive = function setActive(i, e) {
      if (!e && i >= 0 && i <= warpData.items.length) {
        warpData.activeIndex = i;
        return;
      }

      if (e.type === props.dotTrigger || e.type === 'mouseenter' && props.dotTrigger === 'hover') {
        warpData.activeIndex = i;
      }
    };

    var updateItems = function updateItems(itemInstance) {
      var isUnmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (isUnmount) {
        warpData.items = warpData.items.filter(function (e) {
          return e.uid !== itemInstance.uid;
        });
        prev();
      } else {
        warpData.items.push(itemInstance);

        if (warpMounted) {
          paintChildren();
        }
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])('updateItems', updateItems);
    var style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        height: props.height
      };
    });
    var dotClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var ob = {};
      ob[props.dotPosition] = true;
      return ob;
    });
    var arrowShow = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);

    var arrowShowTrigger = function arrowShowTrigger(bol) {
      if (props.arrow === 'hover') {
        arrowShow.value = bol;
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      paintChildren();
      warpMounted = true;
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () {
      return warpData.activeIndex;
    }, function (n, o) {
      paintChildren(o);
    });

    function setNextInterval() {
      clearInterval(timer);

      if (props.autoplay) {
        timer = setInterval(function () {
          next();
        }, props.interval);
      }
    }

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      setNextInterval();
    });
    return {
      next: next,
      prev: prev,
      setActive: setActive,
      warpData: warpData,
      style: style,
      dotClass: dotClass,
      arrowShow: arrowShow,
      arrowShowTrigger: arrowShowTrigger
    };
  }
}));
// CONCATENATED MODULE: ./packages/carousel/carousel.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/carousel/carousel.vue



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_c17f9eec_scoped_true_render
carouselvue_type_script_lang_ts.__scopeId = "data-v-c17f9eec"

/* harmony default export */ var carousel = (carouselvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/carousel/index.js


/* harmony default export */ var packages_carousel = ({
  name: 'MgCarousel',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(carousel.name, carousel);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/carousel-item/carousel-item.vue?vue&type=template&id=321a4b78

function carousel_itemvue_type_template_id_321a4b78_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["mg-carousel-item", _ctx.itemClass],
    style: _ctx.style,
    onTransitionend: _cache[1] || (_cache[1] = function () {
      return _ctx.transcationend && _ctx.transcationend.apply(_ctx, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 38);
}
// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue?vue&type=template&id=321a4b78

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/carousel-item/carousel-item.vue?vue&type=script&lang=ts



/* harmony default export */ var carousel_itemvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgCarouselItem',
  setup: function setup() {
    var inst = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();
    var parentUpdateItems = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])('updateItems');

    if (parentUpdateItems === undefined) {
      throw new Error('MgCarouselItem must be used in MgCarousel!');
    }

    var itemClass = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      fade: false,
      active: false
    });
    var style = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      transform: '',
      transitionProperty: '',
      transitionDuration: '',
      zIndex: ''
    });

    var computeCardTransform = function computeCardTransform(index, activeIndex, maxIndex, lastactiveIndex, infinity) {
      style.transform = "translateX(".concat(index - activeIndex, "00%)");

      if (index === activeIndex) {
        style.zIndex = '10';
      } else {
        style.zIndex = '-5';
      }

      if (!infinity) {
        if (index !== activeIndex) {
          style.transform += ' scaleY(0.9)';
        }

        return;
      }

      if (activeIndex === maxIndex && index === 0) {
        style.transform = "translateX(".concat(index + 1, "00%)");

        if (lastactiveIndex === 0) {
          style.zIndex = '9';
        }
      }

      if (activeIndex === 0 && index === maxIndex) {
        style.transform = "translateX(-100%)";

        if (lastactiveIndex === 1) {
          style.zIndex = '-10';
        }
      }

      if (activeIndex === 1 && index === maxIndex) {
        style.zIndex = '-10';
      }

      var nibers = [];

      if (activeIndex === maxIndex) {
        nibers.push(0);
        nibers.push(activeIndex - 1);
      } else if (activeIndex === 0) {
        nibers.push(maxIndex);
        nibers.push(activeIndex + 1);
      } else {
        nibers.push(activeIndex + 1);
        nibers.push(activeIndex - 1);
      }

      nibers.push(activeIndex);

      if (nibers.findIndex(function (e) {
        return e === index;
      }) !== -1) {
        style.transitionProperty = '';
      } else {// style.transitionProperty = 'none'
      }

      if (index !== activeIndex) {
        style.transform += ' scaleY(0.9)';
      }
    };

    var computeTransform = function computeTransform(index, activeIndex, maxIndex, lastactiveIndex, _ref) {
      var duration = _ref.duration,
          direction = _ref.direction,
          infinity = _ref.infinity,
          type = _ref.type,
          animate = _ref.animate;
      itemClass.active = index === activeIndex;
      typeof duration === 'number' ? style.transitionDuration = duration + 'ms' : null;

      if (type === 'card') {
        computeCardTransform(index, activeIndex, maxIndex, lastactiveIndex, infinity);
        return;
      }

      if (animate === 'fade') {
        itemClass.fade = true; // itemClass.active = index===activeIndex

        return;
      }

      var direct = direction === 'vertical' ? 'Y' : 'X';
      style.transform = "translate".concat(direct, "(").concat(index - activeIndex, "00%)");

      if (!infinity) {
        return;
      }

      if (activeIndex === maxIndex && index === 0) {
        style.transform = "translate".concat(direct, "(").concat(index + 1, "00%)");
        style.transitionProperty = 'none';
      }

      if (activeIndex === 0 && index === maxIndex) {
        style.transform = "translate".concat(direct, "(-100%)");
      }

      if (index === lastactiveIndex || index === activeIndex) {
        style.transitionProperty = '';
      } else {
        style.transitionProperty = 'none';
      }
    };

    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onMounted"])(function () {
      parentUpdateItems(inst);
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["onBeforeUnmount"])(function () {
      parentUpdateItems(inst, true);
    });

    var transcationend = function transcationend() {// console.log('child transcationend')
    };

    return {
      transcationend: transcationend,
      computeTransform: computeTransform,
      style: style,
      itemClass: itemClass
    };
  }
}));
// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/carousel-item/carousel-item.vue



carousel_itemvue_type_script_lang_ts.render = carousel_itemvue_type_template_id_321a4b78_render

/* harmony default export */ var carousel_item = (carousel_itemvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/carousel-item/index.js


/* harmony default export */ var packages_carousel_item = ({
  name: 'MgCarouselItem',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(carousel_item.name, carousel_item);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/catalog/catalog.vue?vue&type=template&id=619ab641


var catalogvue_type_template_id_619ab641_hoisted_1 = {
  class: "mg-catalog"
};
var catalogvue_type_template_id_619ab641_hoisted_2 = {
  key: 0,
  class: "mg-catalog-title"
};
function catalogvue_type_template_id_619ab641_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", catalogvue_type_template_id_619ab641_hoisted_1, [typeof _ctx.title === 'string' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", catalogvue_type_template_id_619ab641_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("ul", {
    class: ['cata-' + _ctx.position, _ctx.title === true ? 'mg-catatitle-line' : '']
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.Data.catalogs, function (h, i) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
      class: "log_for_".concat(h.tagName).concat(_ctx.Data.activeIndex == i ? ' active' : ''),
      key: i
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("a", {
      onClick: function onClick($event) {
        return _ctx.goTop(h);
      },
      href: _ctx.widthHash ? "#".concat(h.innerText) : null
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(h.innerText), 9, ["onClick", "href"])], 2);
  }), 128))], 2)]);
}
// CONCATENATED MODULE: ./packages/catalog/catalog.vue?vue&type=template&id=619ab641

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/catalog/catalog.vue?vue&type=script&lang=ts





var catalogvue_type_script_lang_ts_initCatalogData = function initCatalogData(targetId) {
  var dom = document.getElementById(targetId) || document.documentElement;
  var eleArr = dom.querySelectorAll('h1,h2,h3');
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    parentDom: dom,
    parentIsRoot: dom === document.documentElement,
    catalogs: Array.from(eleArr),
    activeIndex: 0
  });
};

var initScrollEvent = function initScrollEvent(targetId, func) {
  var dom = document.getElementById(targetId) || document;
  dom.addEventListener('scroll', func);
};

/* harmony default export */ var catalogvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgCatalog',
  props: {
    targetId: {
      type: [String]
    },
    widthHash: {
      default: false,
      type: Boolean
    },
    title: {
      type: [Boolean, String]
    },
    position: {
      default: 'right',
      type: String,
      validator: function validator(val) {
        return ['left', 'right'].indexOf(val) !== -1;
      }
    }
  },
  setup: function setup(props) {
    var Data = catalogvue_type_script_lang_ts_initCatalogData(props.targetId);

    function getActIndexByTop() {
      var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var actIndex = Data.catalogs.findIndex(function (htag) {
        var t = htag.getBoundingClientRect().top;
        return t >= top + 12;
      });
      return actIndex <= 0 ? 0 : actIndex - 1;
    }

    var scrollEvent = function scrollEvent() {
      Data.activeIndex = getActIndexByTop();
    };

    if (!Data.parentIsRoot) {
      var timer;
      var cacheParentTop;

      scrollEvent = function scrollEvent() {
        if (cacheParentTop === undefined) {
          cacheParentTop = Data.parentDom.getBoundingClientRect().top;
        }

        Data.activeIndex = getActIndexByTop(cacheParentTop);
        clearTimeout(timer);
        timer = setTimeout(function () {
          cacheParentTop = undefined;
        }, 800);
      };
    }

    scrollEvent();
    initScrollEvent(props.targetId, scrollEvent);

    var goTop = function goTop(h) {
      Data.parentDom.scrollTo({
        top: h.offsetTop - 6,
        behavior: 'smooth'
      });
    };

    var noposition = Data.parentDom !== document.documentElement && getComputedStyle(Data.parentDom).position === 'static';

    if (noposition) {
      goTop = function goTop(h) {
        var pd = Data.parentDom;
        pd.scrollTo({
          top: h.offsetTop - pd.offsetTop - 6,
          behavior: 'smooth'
        });
      };
    }

    return {
      Data: Data,
      goTop: goTop
    };
  }
}));
// CONCATENATED MODULE: ./packages/catalog/catalog.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/catalog/catalog.vue



catalogvue_type_script_lang_ts.render = catalogvue_type_template_id_619ab641_render

/* harmony default export */ var catalog = (catalogvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/catalog/index.js


/* harmony default export */ var packages_catalog = ({
  name: 'MgCatalog',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(catalog.name, catalog);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/notify/notify.vue?vue&type=template&id=222d8602


var notifyvue_type_template_id_222d8602_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
  class: "mg-icon-close"
}, null, -1);

var notifyvue_type_template_id_222d8602_hoisted_2 = {
  class: "mg-notify-container"
};
var notifyvue_type_template_id_222d8602_hoisted_3 = {
  class: "mg-notify-title"
};
var _hoisted_4 = {
  class: "mg-notify-content"
};
function notifyvue_type_template_id_222d8602_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["mg-notify", [_ctx.position]],
    style: _ctx.userStyles
  }, [_ctx.closable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "mg-notify-close",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.closeByicon();
    })
  }, [notifyvue_type_template_id_222d8602_hoisted_1])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.type || _ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 1,
    class: ["mg-notify-icon", _ctx.type ? 'mg-notify--' + _ctx.type : 'mg-notify--primary']
  }, [_ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    innerHTML: _ctx.icon
  }, null, 8, ["innerHTML"])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 1,
    class: 'mg-icon-' + _ctx.type
  }, null, 2))], 2)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", notifyvue_type_template_id_222d8602_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", notifyvue_type_template_id_222d8602_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.content), 1)])], 6);
}
// CONCATENATED MODULE: ./packages/notify/notify.vue?vue&type=template&id=222d8602

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__("2ca0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/notify/notify.vue?vue&type=script&lang=ts





/* harmony default export */ var notifyvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgNofity',
  props: {
    content: String,
    title: String,
    position: {
      default: 'topRight',
      type: String,
      validator: function validator(val) {
        return ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(val);
      }
    },
    type: {
      type: String,
      validator: function validator(val) {
        return ['success', 'warning', 'error', 'info'].includes(val);
      }
    },
    icon: {
      type: String
    },
    duration: {
      default: 3500,
      type: Number
    },
    closable: {
      default: false
    },
    gap: {
      type: Number
    }
  },
  emits: ['close'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var instance = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();
    var timer;

    if (props.duration && props.duration > 0) {
      timer = setTimeout(function () {
        emit('close', props.position, instance === null || instance === void 0 ? void 0 : instance.vnode.el);
      }, props.duration);
    }

    var closeByicon = throttle(function () {
      timer && clearTimeout(timer);
      emit('close', props.position, instance === null || instance === void 0 ? void 0 : instance.vnode.el);
    });
    var userStyles = {};

    if (props.gap) {
      var _props$position;

      (_props$position = props.position) !== null && _props$position !== void 0 && _props$position.startsWith('top') ? userStyles['margin-top'] = props.gap + 'px' : userStyles['margin-bottom'] = props.gap + 'px';
    }

    return {
      userStyles: userStyles,
      closeByicon: closeByicon
    };
  }
}));
// CONCATENATED MODULE: ./packages/notify/notify.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/notify/notify.vue



notifyvue_type_script_lang_ts.render = notifyvue_type_template_id_222d8602_render

/* harmony default export */ var notify = (notifyvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/notify/index.js



// import { $notify } from '../../src/utils/notify'




function calcHeight(el) {
  var rect = el.getBoundingClientRect();

  if (el.positionBy === 'top') {
    return rect.bottom - el.positionValue;
  } else {
    return window.innerHeight - el.positionValue - rect.top;
  }
}

var notifyQueues = {
  topLeft: [],
  topRight: [],
  bottomLeft: [],
  bottomRight: []
};

function setComputedPosition(p, el, queue) {
  var prop = p.indexOf('top') > -1 ? 'top' : 'bottom';
  var lastEle = queue[queue.length - 1];
  var v = 0;

  if (lastEle) {
    v = lastEle.positionValue + lastEle._offsetHeight;
  }

  v = parseInt(v);
  el.queueIndex = queue.length;
  el.positionBy = prop;
  el.positionValue = v;
  el.style[prop] = v + 'px';
}

function setInQueue(config, el) {
  var p = config.position || 'topRight';
  var queue = notifyQueues[p];
  setComputedPosition(p, el, queue);
  queue.push(el);
  return queue;
}

function fadeNotify(queue, el) {
  el.classList.add('notifyFade');
  dom_transitionend(el, function (e) {
    el.parentElement.removeChild(el);
  });

  if (el.queueIndex !== queue.length - 1) {
    var positionBy = el.positionBy;
    var dis = el._offsetHeight;
    queue.slice(el.queueIndex + 1).forEach(function (notify) {
      notify.positionValue -= dis;
      notify.style[positionBy] = notify.positionValue + 'px';
    });
  }

  queue.splice(el.queueIndex, 1);
  queue.forEach(function (el, i) {
    return el.queueIndex = i;
  });
}

function calcOffsetHeight(el) {
  el._offsetHeight = calcHeight(el);
}

function notify_mergeOptions(prop) {
  var userClose = prop.onClose;

  prop.onClose = function (position, el) {
    fadeNotify(notifyQueues[position], el);
    userClose && userClose();
  };
}

function $notify(config) {
  notify_mergeOptions(config);
  var vnode = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])(notify, config);
  var d = document.createElement('div');
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["render"])(vnode, d);
  var realEl = vnode.el;

  var _queue = setInQueue(config, realEl);

  document.body.appendChild(realEl);
  calcOffsetHeight(realEl);
}

/* harmony default export */ var packages_notify = ({
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.config.globalProperties.$notify = $notify;
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/drawer/drawer.vue?vue&type=template&id=2e3806fd

var drawervue_type_template_id_2e3806fd_hoisted_1 = {
  key: 0,
  class: "mg-drawer-title"
};
function drawervue_type_template_id_2e3806fd_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], {
    name: 'mg-drawer-' + _ctx.position
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [_ctx.modelValue ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        ref: "warpRef",
        class: "mg-drawer-warp",
        tabindex: "-1",
        onKeydown: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(function () {
          return _ctx.escClose && _ctx.escClose.apply(_ctx, arguments);
        }, ["esc"])),
        onClick: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
          return _ctx.modalClick && _ctx.modalClick.apply(_ctx, arguments);
        }, ["self"])),
        style: {
          'zIndex': _ctx.zIndex
        }
      }, [_ctx.modelValue ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: 0,
        class: ["mg-drawer-content", 'mg-drawer-content-' + _ctx.position],
        onTransitionend: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.transitionend($event);
        }),
        style: _ctx.contentStyles
      }, [_ctx.title ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", drawervue_type_template_id_2e3806fd_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.title), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.title ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "title", {
        key: 1
      }) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")], 38)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 36)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)];
    }),
    _: 1
  }, 8, ["name"]);
}
// CONCATENATED MODULE: ./packages/drawer/drawer.vue?vue&type=template&id=2e3806fd

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
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
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js








function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/drawer/drawer.vue?vue&type=script&lang=ts




/* harmony default export */ var drawervue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "MgDrawer",
  props: {
    title: {
      default: null
    },
    width: {
      default: ''
    },
    height: {
      default: ''
    },
    drawerStyleObj: {
      default: {}
    },
    modelValue: {
      default: false
    },
    mask: {
      default: true
    },
    modalClosable: {
      default: true
    },
    escClosable: {
      default: false
    },
    position: {
      default: 'left',
      type: String,
      validator: function validator(val) {
        return ['right', 'left', 'top', 'bottom'].includes(val);
      }
    }
  },
  emits: ['update:modelValue', 'open', 'opened', 'close', 'closed'],
  setup: function setup(props, ctx) {
    var contentStyles = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return _objectSpread2({
        width: props.width,
        height: props.height
      }, props.drawerStyleObj);
    });
    var zIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var warpRef = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
    var inited = false;
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watchEffect"])(function () {
      if (props.modelValue) {
        ctx.emit('open');

        if (props.mask) {
          createModal();
          modalShowToggle(true);
        }

        zIndex.value = popupManager.nextzIndex();
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
          return warpRef.value.focus();
        });
      } else {
        inited && ctx.emit('close');
        props.mask ? popup_modalClose() : null;
      }
    });
    inited = true;

    var transitionend = function transitionend(e) {
      if (e.propertyName === 'transform') {
        props.modelValue ? ctx.emit('opened') : ctx.emit('closed');
      }
    };

    var close = function close() {
      ctx.emit('update:modelValue', false);
    };

    var modalClick = function modalClick() {
      props.modalClosable ? close() : null;
    };

    var escClose = function escClose() {
      props.escClosable ? close() : null;
    };

    return {
      zIndex: zIndex,
      contentStyles: contentStyles,
      warpRef: warpRef,
      modalClick: modalClick,
      escClose: escClose,
      transitionend: transitionend
    };
  }
}));
// CONCATENATED MODULE: ./packages/drawer/drawer.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/drawer/drawer.vue



drawervue_type_script_lang_ts.render = drawervue_type_template_id_2e3806fd_render

/* harmony default export */ var drawer = (drawervue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/drawer/index.js


/* harmony default export */ var packages_drawer = ({
  name: 'MgDrawer',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(drawer.name, drawer);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/progress/progress.vue?vue&type=template&id=7673bd56

var progressvue_type_template_id_7673bd56_hoisted_1 = {
  key: 0,
  class: "mg-progress-insidetext"
};
var progressvue_type_template_id_7673bd56_hoisted_2 = {
  key: 0
};
var progressvue_type_template_id_7673bd56_hoisted_3 = {
  key: 0
};
function progressvue_type_template_id_7673bd56_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["mg-progress", _ctx.progressClassName],
    style: _ctx.progressStyle
  }, [_ctx.type === 'line' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "mg-progress-bg",
    style: {
      backgroundColor: _ctx.bgColor
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: ["mg-progress-inner", _ctx.active === void 0 ? '' : 'active'],
    style: _ctx.strokeStyle
  }, [_ctx.textInside ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", progressvue_type_template_id_7673bd56_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.percentage + '%'), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6)], 4), _ctx.statusFormat || _ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "mg-progress-status",
    style: _ctx.statusStyle
  }, [_ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 0,
    style: {
      fontSize: _ctx.strokeWidth || null
    },
    class: 'mg-icon-' + _ctx.status
  }, null, 6)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.statusFormat(_ctx.percentage)), 1)], 64))], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.type === 'circle' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    width: _ctx.width || 100,
    height: _ctx.width || 100,
    viewBox: "0 0 100 100"
  }, [_ctx.strokeColor && _ctx.strokeColor.from && _ctx.strokeColor.to ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("defs", progressvue_type_template_id_7673bd56_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("linearGradient", {
    id: 'mg-gradient-' + _ctx.uid,
    x1: "0%",
    x2: "0%",
    y1: "100%",
    y2: "0%"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("stop", {
    offset: "0%",
    "stop-color": _ctx.strokeColor.from
  }, null, 8, ["stop-color"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("stop", {
    offset: "100%",
    "stop-color": _ctx.strokeColor.to
  }, null, 8, ["stop-color"])], 8, ["id"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("circle", {
    class: "mg-progress-circlebg",
    cx: "50",
    cy: "50",
    r: "46",
    style: _ctx.circlebgStyle
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("circle", {
    class: "mg-progress-circlestroke",
    r: "46",
    cy: "50",
    cx: "50",
    style: _ctx.circleStrokeStyle,
    transform: "translate(0,100) rotate(-90)"
  }, null, 4)], 8, ["width", "height"])), _ctx.statusFormat || _ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "mg-progress-circle-status",
    style: _ctx.statusStyle
  }, [_ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 0,
    class: 'mg-icon-' + _ctx.status
  }, null, 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.statusFormat(_ctx.percentage)), 1)], 64))], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.type === 'dashboard' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 2
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("svg", {
    width: _ctx.width || 100,
    height: _ctx.width || 100,
    viewBox: "0 0 100 100"
  }, [_ctx.strokeColor && _ctx.strokeColor.from && _ctx.strokeColor.to ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("defs", progressvue_type_template_id_7673bd56_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("linearGradient", {
    id: 'mg-gradient-' + _ctx.uid,
    x1: "0%",
    x2: "100%",
    y1: "0%",
    y2: "0%"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("stop", {
    offset: "0%",
    "stop-color": _ctx.strokeColor.from
  }, null, 8, ["stop-color"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("stop", {
    offset: "100%",
    "stop-color": _ctx.strokeColor.to
  }, null, 8, ["stop-color"])], 8, ["id"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
    class: "mg-progress-circlebg",
    d: "M 17 82 A 46 46 0 1 1 83 82",
    style: _ctx.circlebgStyle
  }, null, 4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("path", {
    class: "mg-progress-circlestroke",
    d: "M 17 82 A 46 46 0 1 1 83 82",
    style: _ctx.dbStrokeStyle
  }, null, 4)], 8, ["width", "height"])), _ctx.statusFormat || _ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    key: 0,
    class: "mg-progress-circle-status",
    style: _ctx.statusStyle
  }, [_ctx.status ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("i", {
    key: 0,
    class: 'mg-icon-' + _ctx.status
  }, null, 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.statusFormat(_ctx.percentage)), 1)], 64))], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 6);
}
// CONCATENATED MODULE: ./packages/progress/progress.vue?vue&type=template&id=7673bd56

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/progress/progress.vue?vue&type=script&lang=ts





/* harmony default export */ var progressvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "MgProgress",
  props: {
    type: {
      default: 'line',
      validator: function validator(val) {
        return ['line', 'circle', 'dashboard'].includes(val);
      }
    },
    active: {},
    textInside: {},
    percentage: {
      default: 0,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      }
    },
    width: {},
    statusFormat: {
      type: Function
    },
    status: {
      validator: function validator(val) {
        return ['success', 'warning', 'error'].includes(val);
      }
    },
    statusStyle: {},
    bgColor: {},
    strokeWidth: {},
    strokeColor: {
      type: [String, Object]
    }
  },
  setup: function setup(props) {
    var uid = getMgUid();
    var strokeStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      var s = {
        width: props.percentage + '%',
        height: props.strokeWidth
      };

      if (isObj(props.strokeColor)) {
        var strokeColor = props.strokeColor;
        s.backgroundImage = "linear-gradient(to right, ".concat(strokeColor.from, " 0%, ").concat(strokeColor.to, " 100%)");
      } else {
        s.backgroundColor = props.strokeColor || (props.status ? "var(--mg-".concat(props.status, ")") : null);
      }

      return s;
    });
    var progressStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return {
        width: props.width
      };
    });
    var progressClassName = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
      return "mg-progress-".concat(props.type, " ").concat(props.statusFormat || props.status ? 'withstatus' : '');
    });
    var circleData = {
      circlebgStyle: useCirclebgStyle(props),
      circleStrokeStyle: useCircleStrokeStyle('circle', props, uid)
    };
    var dashboardData = {
      dbStrokeStyle: useCircleStrokeStyle('dashboard', props, uid)
    };
    return _objectSpread2(_objectSpread2({
      uid: uid,
      strokeStyle: strokeStyle,
      progressStyle: progressStyle,
      progressClassName: progressClassName
    }, circleData), dashboardData);
  }
}));

function useCirclebgStyle(props) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    return {
      strokeWidth: props.strokeWidth,
      stroke: props.bgColor
    };
  });
} // for Circle or dashboard strokr


function useCircleStrokeStyle(type, props, uid) {
  var m = {
    circle: 2.89,
    dashboard: 2.17
  };
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function () {
    var piece = m[type];
    var p = props.percentage;
    var sl = Math.floor(piece * p);
    var stroke;

    if (isObj(props.strokeColor)) {
      stroke = "url(#mg-gradient-".concat(uid, ")");
    } else {
      stroke = props.strokeColor || (props.status ? "var(--mg-".concat(props.status, ")") : null);
    }

    return {
      strokeWidth: props.strokeWidth,
      strokeDasharray: "".concat(sl, " 300"),
      stroke: stroke
    };
  });
}
// CONCATENATED MODULE: ./packages/progress/progress.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/progress/progress.vue



progressvue_type_script_lang_ts.render = progressvue_type_template_id_7673bd56_render

/* harmony default export */ var progress = (progressvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/progress/index.js


/* harmony default export */ var packages_progress = ({
  name: 'MgProgress',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(progress.name, progress);
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/img-preview/img-preview.vue?vue&type=template&id=83af7f32

var img_previewvue_type_template_id_83af7f32_hoisted_1 = {
  key: 0,
  class: "mg-prev-ops"
};
function img_previewvue_type_template_id_83af7f32_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    class: ['mg-prev-img', _ctx.disabled === void 0 ? null : 'prev-disable'],
    src: _ctx.src,
    onClick: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function ($event) {
      return _ctx.startPreview($event);
    }, ["self"]))
  }, _ctx.$attrs), null, 16, ["src"]), _ctx.previewing ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    key: 0,
    to: "body"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    class: "mg-imgpreview-warp",
    style: {
      zIndex: _ctx.zIndex
    },
    onClick: _cache[8] || (_cache[8] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
      return _ctx.stopPrev && _ctx.stopPrev.apply(_ctx, arguments);
    }, ["self"]))
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("img", Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    ref: "viewingImg",
    onLoad: _cache[2] || (_cache[2] = function () {
      return _ctx.calcedPosi && _ctx.calcedPosi.apply(_ctx, arguments);
    }),
    src: _ctx.src
  }, _ctx.imgAttr, {
    style: _ctx.imgStyle
  }), null, 16, ["src"]), _ctx.ops ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", img_previewvue_type_template_id_83af7f32_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: "mg-icon-zoom-out",
    title: "放大",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.zoom(0.1);
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: "mg-icon-zoom-in",
    title: "缩小",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.zoom(-0.1);
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: "mg-icon-orgsize",
    title: "原始比例",
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.orgsize && _ctx.orgsize.apply(_ctx, arguments);
    })
  }, "1:1"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: "mg-icon-refresh-left",
    title: "左旋转",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return _ctx.rotate(-90);
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
    class: "mg-icon-refresh-right",
    title: "右旋转",
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return _ctx.rotate(90);
    })
  })])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./packages/img-preview/img-preview.vue?vue&type=template&id=83af7f32

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./packages/img-preview/img-preview.vue?vue&type=script&lang=ts





var viewingImg = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(null);
/* harmony default export */ var img_previewvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: 'MgImgPreview',
  props: {
    ops: {
      default: false
    },
    src: {
      default: '',
      type: String
    },
    disabled: {}
  },
  emits: ['close', 'closed'],
  setup: function setup(props, ctx) {
    var zIndex = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(0);
    var previewing = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])(false);
    var imgAttr = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({});
    var imgStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])({});
    var l, t, w, h, originW, originH;

    var startPreview = function startPreview(event) {
      if (props.disabled !== void 0) {
        return;
      }

      var target = event.target;
      var rect = target.getBoundingClientRect();
      l = rect.x;
      t = rect.y;
      w = rect.width;
      h = rect.height;
      originW = target.naturalWidth;
      originH = target.naturalHeight;
      bornPosi();
      createModal();
      zIndex.value = popupManager.nextzIndex();
      previewing.value = true;
      modalShowToggle(true);
      window.addEventListener('resize', calcedPosi);
    };

    var stopPrev = function stopPrev() {
      ctx.emit('close');
      dom_transitionend(viewingImg.value, function () {
        previewing.value = false;
        imgAttr.value = {};
        imgStyle.value = {
          transform: imgStyle.value.transform
        };
        transformInfo.scale = 1;
        transformInfo.rotate = 0;
        ctx.emit('closed');
      });
      window.removeEventListener('resize', calcedPosi);
      bornPosi();
      popup_modalClose();
    };

    var transformInfo = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      translate3d: '',
      scale: 1,
      rotate: 0
    });
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(transformInfo, function () {
      var r = _objectSpread2({}, imgStyle.value);

      r.transform = "translate3d(".concat(transformInfo.translate3d, ") scale(").concat(transformInfo.scale, ") rotate(").concat(transformInfo.rotate, "deg)");
      imgStyle.value = r;
    }, {
      deep: true
    });

    var bornPosi = function bornPosi() {
      imgAttr.value = {
        width: w,
        height: h
      };
      transformInfo.translate3d = "".concat(l, "px,").concat(t, "px,0");
    };

    var calcedPosi = function calcedPosi() {
      var innerH = window.innerHeight;
      var innerW = window.innerWidth;
      imgAttr.value = {
        width: originW,
        height: originH
      };
      var disH = innerH - originH;
      var disW = innerW * 0.9 - originW;
      transformInfo.translate3d = "".concat(disW > 0 ? (innerW - originW) / 2 : innerW * 0.05, "px,").concat(disH > 0 ? disH / 2 + 'px' : props.ops ? 0 : '1.5rem', ",0");
    };

    var zoom = function zoom(dis) {
      transformInfo.scale += dis;
    };

    var rotate = function rotate(dis) {
      transformInfo.rotate += dis;
    };

    var orgsize = function orgsize() {
      transformInfo.scale = 1;
      imgStyle.value = _objectSpread2(_objectSpread2({}, imgStyle.value), {}, {
        'max-height': 'none',
        'max-width': 'none'
      });
    };

    return {
      previewing: previewing,
      zIndex: zIndex,
      imgStyle: imgStyle,
      imgAttr: imgAttr,
      viewingImg: viewingImg,
      startPreview: startPreview,
      calcedPosi: calcedPosi,
      stopPrev: stopPrev,
      orgsize: orgsize,
      zoom: zoom,
      rotate: rotate
    };
  }
}));
// CONCATENATED MODULE: ./packages/img-preview/img-preview.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./packages/img-preview/img-preview.vue



img_previewvue_type_script_lang_ts.render = img_previewvue_type_template_id_83af7f32_render

/* harmony default export */ var img_preview = (img_previewvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/img-preview/index.js


/* harmony default export */ var packages_img_preview = ({
  name: 'MgImgPreview',
  install: function install(vue) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    vue.component(img_preview.name, img_preview);
  }
});
// EXTERNAL MODULE: ./src/assets/sass/main.scss
var main = __webpack_require__("9299");

// CONCATENATED MODULE: ./src/lib.js

















var components = [packages_button, packages_card, packages_skeleton, packages_message, packages_switch, packages_modal, packages_badge, packages_backtop, packages_carousel, packages_carousel_item, packages_catalog, packages_notify, packages_drawer, packages_progress, packages_img_preview];

var lib_install = function install(vue) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  components.forEach(function (comp) {
    vue.use(comp);
  });
};

var mgui = {
  install: lib_install
};

/* harmony default export */ var lib = (mgui);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });