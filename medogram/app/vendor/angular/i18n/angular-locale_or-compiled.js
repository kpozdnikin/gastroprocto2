'use strict';

angular.module("ngLocale", [], ["$provide", function ($provide) {
  var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
  $provide.value("$locale", {
    "DATETIME_FORMATS": {
      "AMPMS": ["am", "pm"],
      "DAY": ["\u0B30\u0B2C\u0B3F\u0B2C\u0B3E\u0B30", "\u0B38\u0B4B\u0B2E\u0B2C\u0B3E\u0B30", "\u0B2E\u0B19\u0B4D\u0B17\u0B33\u0B2C\u0B3E\u0B30", "\u0B2C\u0B41\u0B27\u0B2C\u0B3E\u0B30", "\u0B17\u0B41\u0B30\u0B41\u0B2C\u0B3E\u0B30", "\u0B36\u0B41\u0B15\u0B4D\u0B30\u0B2C\u0B3E\u0B30", "\u0B36\u0B28\u0B3F\u0B2C\u0B3E\u0B30"],
      "ERANAMES": ["BCE", "CE"],
      "ERAS": ["BCE", "CE"],
      "FIRSTDAYOFWEEK": 6,
      "MONTH": ["\u0B1C\u0B3E\u0B28\u0B41\u0B06\u0B30\u0B40", "\u0B2B\u0B47\u0B2C\u0B43\u0B06\u0B30\u0B40", "\u0B2E\u0B3E\u0B30\u0B4D\u0B1A\u0B4D\u0B1A", "\u0B05\u0B2A\u0B4D\u0B30\u0B47\u0B32", "\u0B2E\u0B07", "\u0B1C\u0B41\u0B28", "\u0B1C\u0B41\u0B32\u0B3E\u0B07", "\u0B05\u0B17\u0B37\u0B4D\u0B1F", "\u0B38\u0B47\u0B2A\u0B4D\u0B1F\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B05\u0B15\u0B4D\u0B1F\u0B4B\u0B2C\u0B30", "\u0B28\u0B2D\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B21\u0B3F\u0B38\u0B47\u0B2E\u0B4D\u0B2C\u0B30"],
      "SHORTDAY": ["\u0B30\u0B2C\u0B3F", "\u0B38\u0B4B\u0B2E", "\u0B2E\u0B19\u0B4D\u0B17\u0B33", "\u0B2C\u0B41\u0B27", "\u0B17\u0B41\u0B30\u0B41", "\u0B36\u0B41\u0B15\u0B4D\u0B30", "\u0B36\u0B28\u0B3F"],
      "SHORTMONTH": ["\u0B1C\u0B3E\u0B28\u0B41\u0B06\u0B30\u0B40", "\u0B2B\u0B47\u0B2C\u0B43\u0B06\u0B30\u0B40", "\u0B2E\u0B3E\u0B30\u0B4D\u0B1A\u0B4D\u0B1A", "\u0B05\u0B2A\u0B4D\u0B30\u0B47\u0B32", "\u0B2E\u0B07", "\u0B1C\u0B41\u0B28", "\u0B1C\u0B41\u0B32\u0B3E\u0B07", "\u0B05\u0B17\u0B37\u0B4D\u0B1F", "\u0B38\u0B47\u0B2A\u0B4D\u0B1F\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B05\u0B15\u0B4D\u0B1F\u0B4B\u0B2C\u0B30", "\u0B28\u0B2D\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B21\u0B3F\u0B38\u0B47\u0B2E\u0B4D\u0B2C\u0B30"],
      "STANDALONEMONTH": ["\u0B1C\u0B3E\u0B28\u0B41\u0B06\u0B30\u0B40", "\u0B2B\u0B47\u0B2C\u0B43\u0B06\u0B30\u0B40", "\u0B2E\u0B3E\u0B30\u0B4D\u0B1A\u0B4D\u0B1A", "\u0B05\u0B2A\u0B4D\u0B30\u0B47\u0B32", "\u0B2E\u0B07", "\u0B1C\u0B41\u0B28", "\u0B1C\u0B41\u0B32\u0B3E\u0B07", "\u0B05\u0B17\u0B37\u0B4D\u0B1F", "\u0B38\u0B47\u0B2A\u0B4D\u0B1F\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B05\u0B15\u0B4D\u0B1F\u0B4B\u0B2C\u0B30", "\u0B28\u0B2D\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B21\u0B3F\u0B38\u0B47\u0B2E\u0B4D\u0B2C\u0B30"],
      "WEEKENDRANGE": [6, 6],
      "fullDate": "EEEE, d MMMM y",
      "longDate": "d MMMM y",
      "medium": "d MMM y h:mm:ss a",
      "mediumDate": "d MMM y",
      "mediumTime": "h:mm:ss a",
      "short": "d-M-yy h:mm a",
      "shortDate": "d-M-yy",
      "shortTime": "h:mm a"
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
    "id": "or",
    "localeID": "or",
    "pluralCat": function pluralCat(n, opt_precision) {
      if (n == 1) {
        return PLURAL_CATEGORY.ONE;
      }return PLURAL_CATEGORY.OTHER;
    }
  });
}]);

//# sourceMappingURL=angular-locale_or-compiled.js.map