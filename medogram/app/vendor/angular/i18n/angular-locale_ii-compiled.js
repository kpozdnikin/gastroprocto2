'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  function getDecimals(n) {
    n = n + '';
    var i = n.indexOf('.');
    return i == -1 ? 0 : n.length - i - 1;
  }

  function getVF(n, opt_precision) {
    var v = opt_precision;

    if (undefined === v) {
      v = Math.min(getDecimals(n), 3);
    }

    var base = Math.pow(10, v);
    var f = (n * base | 0) % base;
    return { v: v, f: f };
  }

  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\uA3B8\uA111", "\uA06F\uA2D2"],
      "DAY": ["\uA46D\uA18F\uA44D", "\uA18F\uA282\uA2CD", "\uA18F\uA282\uA44D", "\uA18F\uA282\uA315", "\uA18F\uA282\uA1D6", "\uA18F\uA282\uA26C", "\uA18F\uA282\uA0D8"],
      "ERANAMES": ["\uA0C5\uA2CA\uA0BF", "\uA0C5\uA2CA\uA282"],
      "ERAS": ["\uA0C5\uA2CA\uA0BF", "\uA0C5\uA2CA\uA282"],
      "FIRSTDAYOFWEEK": 0,
      "MONTH": ["\uA2CD\uA1AA", "\uA44D\uA1AA", "\uA315\uA1AA", "\uA1D6\uA1AA", "\uA26C\uA1AA", "\uA0D8\uA1AA", "\uA3C3\uA1AA", "\uA246\uA1AA", "\uA22C\uA1AA", "\uA2B0\uA1AA", "\uA2B0\uA2AA\uA1AA", "\uA2B0\uA44B\uA1AA"],
      "SHORTDAY": ["\uA46D\uA18F", "\uA18F\uA2CD", "\uA18F\uA44D", "\uA18F\uA315", "\uA18F\uA1D6", "\uA18F\uA26C", "\uA18F\uA0D8"],
      "SHORTMONTH": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      "STANDALONEMONTH": ["\uA2CD\uA1AA", "\uA44D\uA1AA", "\uA315\uA1AA", "\uA1D6\uA1AA", "\uA26C\uA1AA", "\uA0D8\uA1AA", "\uA3C3\uA1AA", "\uA246\uA1AA", "\uA22C\uA1AA", "\uA2B0\uA1AA", "\uA2B0\uA2AA\uA1AA", "\uA2B0\uA44B\uA1AA"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "y MMMM d, EEEE",
      "longDate": "y MMMM d",
      "medium": "y MMM d HH:mm:ss",
      "mediumDate": "y MMM d",
      "mediumTime": "HH:mm:ss",
      "short": "y-MM-dd HH:mm",
      "shortDate": "y-MM-dd",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\xA5",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
      "PATTERNS": [{
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 3,
        "lgSize": 3,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-\xA4\xA0",
        "negSuf": "",
        "posPre": "\xA4\xA0",
        "posSuf": ""
      }]
    },
    "id": "ii",
    "localeID": "ii",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ii-compiled.js.map