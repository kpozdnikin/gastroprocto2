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
      "AMPMS": ["\u09AA\u09C2\u09F0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A3", "\u0985\u09AA\u09F0\u09BE\u09B9\u09CD\u09A3"],
      "DAY": ["\u09A6\u09C7\u0993\u09AC\u09BE\u09F0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09F0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09F0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09F0", "\u09AC\u09C3\u09B9\u09B7\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09F0", "\u09B6\u09C1\u0995\u09CD\u09F0\u09AC\u09BE\u09F0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09F0"],
      "ERANAMES": ["BCE", "CE"],
      "ERAS": ["BCE", "CE"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u099C\u09BE\u09A8\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AB\u09C7\u09AC\u09CD\u09F0\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AE\u09BE\u09F0\u09CD\u099A", "\u098F\u09AA\u09CD\u09F0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B7\u09CD\u099F", "\u099B\u09C7\u09AA\u09CD\u09A4\u09C7\u09AE\u09CD\u09AC\u09F0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09F0", "\u09A8\u09F1\u09C7\u09AE\u09CD\u09AC\u09F0", "\u09A1\u09BF\u099A\u09C7\u09AE\u09CD\u09AC\u09F0"],
      "SHORTDAY": ["\u09F0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9\u09B7\u09CD\u09AA\u09A4\u09BF", "\u09B6\u09C1\u0995\u09CD\u09F0", "\u09B6\u09A8\u09BF"],
      "SHORTMONTH": ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09F0\u09C1", "\u09AE\u09BE\u09F0\u09CD\u099A", "\u098F\u09AA\u09CD\u09F0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"],
      "STANDALONEMONTH": ["\u099C\u09BE\u09A8\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AB\u09C7\u09AC\u09CD\u09F0\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AE\u09BE\u09F0\u09CD\u099A", "\u098F\u09AA\u09CD\u09F0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B7\u09CD\u099F", "\u099B\u09C7\u09AA\u09CD\u09A4\u09C7\u09AE\u09CD\u09AC\u09F0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09F0", "\u09A8\u09F1\u09C7\u09AE\u09CD\u09AC\u09F0", "\u09A1\u09BF\u099A\u09C7\u09AE\u09CD\u09AC\u09F0"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, d MMMM, y",
      "longDate": "d MMMM, y",
      "medium": "dd-MM-y h.mm.ss a",
      "mediumDate": "dd-MM-y",
      "mediumTime": "h.mm.ss a",
      "short": "d-M-y h.mm. a",
      "shortDate": "d-M-y",
      "shortTime": "h.mm. a"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20B9",
      "DECIMAL_SEP": ".",
      "GROUP_SEP": ",",
      "PATTERNS": [{
        "gSize": 2,
        "lgSize": 3,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      }, {
        "gSize": 2,
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
    "id": "as",
    "localeID": "as",
    "pluralCat": function pluralCat(n, opt_precision) {
      var i = n | 0;var vf = getVF(n, opt_precision);if (i == 1 && vf.v == 0) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_as-compiled.js.map