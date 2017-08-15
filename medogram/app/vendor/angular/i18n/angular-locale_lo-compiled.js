'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u0E81\u0EC8\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87", "\u0EAB\u0EBC\u0EB1\u0E87\u0E97\u0EC8\u0EBD\u0E87"],
      "DAY": ["\u0EA7\u0EB1\u0E99\u0EAD\u0EB2\u0E97\u0EB4\u0E94", "\u0EA7\u0EB1\u0E99\u0E88\u0EB1\u0E99", "\u0EA7\u0EB1\u0E99\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB8\u0E94", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB0\u0EAB\u0EB1\u0E94", "\u0EA7\u0EB1\u0E99\u0EAA\u0EB8\u0E81", "\u0EA7\u0EB1\u0E99\u0EC0\u0EAA\u0EBB\u0EB2"],
      "ERANAMES": ["\u0E81\u0EC8\u0EAD\u0E99\u0E84\u0EA3\u0EB4\u0E94\u0EAA\u0EB1\u0E81\u0E81\u0EB0\u0EA5\u0EB2\u0E94", "\u0E84\u0EA3\u0EB4\u0E94\u0EAA\u0EB1\u0E81\u0E81\u0EB0\u0EA5\u0EB2\u0E94"],
      "ERAS": ["\u0E81\u0EC8\u0EAD\u0E99 \u0E84.\u0EAA.", "\u0E84.\u0EAA."],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99", "\u0E81\u0EB8\u0EA1\u0E9E\u0EB2", "\u0EA1\u0EB5\u0E99\u0EB2", "\u0EC0\u0EA1\u0EAA\u0EB2", "\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2", "\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2", "\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94", "\u0EAA\u0EB4\u0E87\u0EAB\u0EB2", "\u0E81\u0EB1\u0E99\u0E8D\u0EB2", "\u0E95\u0EB8\u0EA5\u0EB2", "\u0E9E\u0EB0\u0E88\u0EB4\u0E81", "\u0E97\u0EB1\u0E99\u0EA7\u0EB2"],
      "SHORTDAY": ["\u0EA7\u0EB1\u0E99\u0EAD\u0EB2\u0E97\u0EB4\u0E94", "\u0EA7\u0EB1\u0E99\u0E88\u0EB1\u0E99", "\u0EA7\u0EB1\u0E99\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB8\u0E94", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB0\u0EAB\u0EB1\u0E94", "\u0EA7\u0EB1\u0E99\u0EAA\u0EB8\u0E81", "\u0EA7\u0EB1\u0E99\u0EC0\u0EAA\u0EBB\u0EB2"],
      "SHORTMONTH": ["\u0EA1.\u0E81.", "\u0E81.\u0E9E.", "\u0EA1.\u0E99.", "\u0EA1.\u0EAA.", "\u0E9E.\u0E9E.", "\u0EA1\u0EB4.\u0E96.", "\u0E81.\u0EA5.", "\u0EAA.\u0EAB.", "\u0E81.\u0E8D.", "\u0E95.\u0EA5.", "\u0E9E.\u0E88.", "\u0E97.\u0EA7."],
      "STANDALONEMONTH": ["\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99", "\u0E81\u0EB8\u0EA1\u0E9E\u0EB2", "\u0EA1\u0EB5\u0E99\u0EB2", "\u0EC0\u0EA1\u0EAA\u0EB2", "\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2", "\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2", "\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94", "\u0EAA\u0EB4\u0E87\u0EAB\u0EB2", "\u0E81\u0EB1\u0E99\u0E8D\u0EB2", "\u0E95\u0EB8\u0EA5\u0EB2", "\u0E9E\u0EB0\u0E88\u0EB4\u0E81", "\u0E97\u0EB1\u0E99\u0EA7\u0EB2"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE \u0E97\u0EB5 d MMMM G y",
      "longDate": "d MMMM y",
      "medium": "d MMM y H:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "H:mm:ss",
      "short": "d/M/y H:mm",
      "shortDate": "d/M/y",
      "shortTime": "H:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20AD",
      "DECIMAL_SEP": ",",
      "GROUP_SEP": ".",
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
        "negPre": "\xA4-",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "lo",
    "localeID": "lo",
    "pluralCat": function pluralCat(n, opt_precision) {
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_lo-compiled.js.map