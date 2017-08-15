'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["\u1014\u1036\u1014\u1000\u103A", "\u100A\u1014\u1031"],
      "DAY": ["\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C", "\u1021\u1004\u103A\u1039\u1002\u102B", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038", "\u101E\u1031\u102C\u1000\u103C\u102C", "\u1005\u1014\u1031"],
      "ERANAMES": ["\u1001\u101B\u1005\u103A\u1010\u1031\u102C\u103A \u1019\u1015\u1031\u102B\u103A\u1019\u102E\u1000\u102C\u101C", "\u1001\u101B\u1005\u103A\u1010\u1031\u102C\u103A \u1015\u1031\u102B\u103A\u1011\u103D\u1014\u103A\u1038\u1015\u103C\u102E\u1038\u1000\u102C\u101C"],
      "ERAS": ["\u1018\u102E\u1005\u102E", "\u1021\u1031\u1012\u102E"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E", "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E", "\u1019\u1010\u103A", "\u1027\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030\u101C\u102D\u102F\u1004\u103A", "\u1029\u1002\u102F\u1010\u103A", "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C", "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C", "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C", "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"],
      "SHORTDAY": ["\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031", "\u1010\u1014\u1004\u103A\u1039\u101C\u102C", "\u1021\u1004\u103A\u1039\u1002\u102B", "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038", "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038", "\u101E\u1031\u102C\u1000\u103C\u102C", "\u1005\u1014\u1031"],
      "SHORTMONTH": ["\u1007\u1014\u103A", "\u1016\u1031", "\u1019\u1010\u103A", "\u1027\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030", "\u1029", "\u1005\u1000\u103A", "\u1021\u1031\u102C\u1000\u103A", "\u1014\u102D\u102F", "\u1012\u102E"],
      "STANDALONEMONTH": ["\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E", "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E", "\u1019\u1010\u103A", "\u1027\u1015\u103C\u102E", "\u1019\u1031", "\u1007\u103D\u1014\u103A", "\u1007\u1030\u101C\u102D\u102F\u1004\u103A", "\u1029\u1002\u102F\u1010\u103A", "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C", "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C", "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C", "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"],
      "WEEKENDRANGE": [5, 6],
      "fullDate": "EEEE\u104A dd MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y HH:mm:ss",
      "mediumDate": "d MMM y",
      "mediumTime": "HH:mm:ss",
      "short": "dd-MM-yy HH:mm",
      "shortDate": "dd-MM-yy",
      "shortTime": "HH:mm"
    },
    "NUMBER_FORMATS": {
      "CURRENCY_SYM": "K",
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
    "id": "my",
    "localeID": "my",
    "pluralCat": function pluralCat(n, opt_precision) {
      return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_my-compiled.js.map