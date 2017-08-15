'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\uC624\uC804", "\uC624\uD6C4"],
      "DAY": ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"],
      "ERANAMES": ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"],
      "ERAS": ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
      "SHORTDAY": ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
      "SHORTMONTH": ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
      "STANDALONEMONTH": ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "y\uB144 M\uC6D4 d\uC77C EEEE",
      "longDate": "y\uB144 M\uC6D4 d\uC77C",
      "medium": "y. M. d. a h:mm:ss",
      "mediumDate": "y. M. d.",
      "mediumTime": "a h:mm:ss",
      "short": "yy. M. d. a h:mm",
      "shortDate": "yy. M. d.",
      "shortTime": "a h:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "\u20A9",
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
        "negPre": "-\xA4",
        "negSuf": "",
        "posPre": "\xA4",
        "posSuf": ""
      }]
    },
    "id": "ko",
    "localeID": "ko",
    "pluralCat": function pluralCat(n, opt_precision) {
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_ko-compiled.js.map